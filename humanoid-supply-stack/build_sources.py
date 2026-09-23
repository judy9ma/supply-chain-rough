"""Builds site/sources-data.js from sources.json (the 34-source research file).
Run: python3 build_sources.py
"""
import json, re, collections

SRC = json.load(open('sources.json'))
OUT = 'sources-data.js'

SEGMENTS = [
    ("motors", "Motors", False, ["coreless-motors", "frameless-torque-motors"]),
    ("actuators", "Actuators", False, ["actuators"]),
    ("precision_reducers", "Precision Reducers", False, ["harmonic-reducers", "rv-reducers"]),
    ("bearings", "Bearings", False, ["bearings"]),
    ("ball_and_roller_screws", "Ball and Roller Screws", False, ["screws"]),
    ("encoders", "Encoders", False, ["encoders"]),
    ("sensors", "Sensors", False, ["force-torque", "tactile", "sensing-control"]),
    ("dexterous_hands", "Dexterous Hands", False, ["dexterous-hands"]),
    ("batteries_and_power", "Batteries and Power", False, ["batteries"]),
    ("semiconductors_and_compute", "Semiconductors and Compute", False, ["semis-compute"]),
    ("controllers_and_electronics", "Controllers and Electronics", False, ["sensing-control"]),
    ("full_robot_integration", "Full Robot Integration", False, ["humanoid-oems"]),
    ("software_and_ai", "Software and AI", True, ["physical-ai-software"]),
    ("testing_simulation_and_data", "Testing, Simulation and Data", True, ["robotics-data"]),
    ("machine_tools", "Machine Tools", True, ["machine-tools"]),
    ("manufacturing_and_assembly", "Manufacturing and Assembly", True, ["manufacturing"]),
    ("other", "Other (Materials and Structure)", True, ["materials"]),
]
SEG_COMPS = {k: c for k, _, _, c in SEGMENTS}

# Narrower component assignment where a player's role makes it obvious.
OVERRIDE = {
    ("maxon", "motors"): ["coreless-motors"],
    ("MOONS' Electric", "motors"): ["coreless-motors"],
    ("Kollmorgen", "motors"): ["frameless-torque-motors"],
    ("Leaderdrive", "precision_reducers"): ["harmonic-reducers"],
    ("Nabtesco", "precision_reducers"): ["rv-reducers"],
    ("Keli Sensing", "sensors"): ["force-torque", "tactile"],
    ("Shadow Robot", "sensors"): ["tactile"],
    ("Orbbec", "sensors"): ["sensing-control"],
}

# Aliases so the page can match these players to names already in data.js.
ALIASES = {
    "maxon": ["Maxon"], "MOONS' Electric": ["MOONS’", "MOONS'"], "NVIDIA": ["Nvidia"],
    "AgiBot": ["AgiBot / Zhiyuan", "Zhiyuan"], "Keli Sensing": ["Keli Sensing (柯力传感)", "柯力传感"],
    "Google DeepMind": ["Google DeepMind"], "Leaderdrive": ["Leaderdrive"], "Nabtesco": ["Nabtesco"],
    "Kollmorgen": ["Kollmorgen"], "Orbbec": ["Orbbec"], "Unitree": ["Unitree"],
}

def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def kinds(m):
    """Tags required by interpretation_rules: company-reported, forecast, target, sample, capacity, estimate, orders, shipments."""
    t = (m.get('value', '') + ' ' + m.get('metric', '') + ' ' + m.get('market_definition', '')).lower()
    out = []
    if 'company report' in t or 'company-report' in t: out.append('company-reported')
    if 'forecast' in t: out.append('forecast')
    if 'target' in t: out.append('target')
    if 'sample' in t: out.append('sample')
    if 'capacity' in t: out.append('capacity')
    if 'estimate' in t: out.append('estimate')
    if 'order' in t: out.append('orders')
    if m.get('metric') == 'shipments' or 'deliver' in t: out.append('shipments')
    return sorted(set(out))

sources = {}
for s in SRC:
    q = s['quality_assessment']
    sources[s['article_id']] = {
        'id': s['article_id'], 'title': s['title_english'], 'titleOriginal': s['title_original'],
        'publisher': s['publisher'], 'date': s['publication_date'], 'url': s['url'], 'language': s['language'],
        'type': s.get('source_type'), 'scores': {'depth': q['depth_score'], 'data': q['data_quality_score'], 'primary': q['primary_source_score']},
        'reason': q.get('reason_selected'), 'summary': s.get('article_summary'),
    }

players = collections.OrderedDict()
for s in SRC:
    sid = s['article_id']
    for seg, lst in s['supply_chain_components'].items():
        for p in lst:
            name = p['player']
            pl = players.setdefault(name, {
                'id': slug(name), 'name': name, 'aliases': ALIASES.get(name, []),
                'origin': {'classification': p['player_origin']['classification'], 'country': p['player_origin'].get('country')},
                'type': p.get('player_type'), 'segments': [], 'entries': [], 'events': [], 'shares': [], 'rels': [],
            })
            if seg not in pl['segments']: pl['segments'].append(seg)
            comps = OVERRIDE.get((name, seg), SEG_COMPS[seg])
            pl['entries'].append({
                'seg': seg, 'source': sid, 'components': comps, 'role': p['role_in_supply_chain'],
                'position': p['competitive_position'], 'confidence': p['confidence'], 'evidence': p.get('evidence_location'),
                'tech': p.get('technical_or_strategic_information') or [],
            })
            for e in p.get('significant_events') or []:
                pl['events'].append({'date': e.get('date'), 'event': e['event'], 'significance': e.get('significance'), 'seg': seg, 'source': sid, 'components': comps})
            for m in p.get('market_share_or_scale') or []:
                pl['shares'].append(dict(m, seg=seg, source=sid, components=comps, kinds=kinds(m)))
            for r in p.get('customers_or_supplier_relationships') or []:
                pl['rels'].append({'text': r, 'seg': seg, 'source': sid, 'components': comps})

meta = SRC[0]['research_metadata']
data = {
    'meta': {k: meta[k] for k in ['research_cutoff', 'source_count', 'language_counts', 'coverage_status', 'search_method',
                                    'quality_scale', 'interpretation_rules', 'classification_rule', 'taxonomy_note', 'limitations', 'verification_method']},
    'segments': [{'key': k, 'name': n, 'offBody': o, 'components': c} for k, n, o, c in SEGMENTS],
    'sources': sources,
    'players': list(players.values()),
}
n_ev = sum(len(p['events']) for p in data['players']); n_sh = sum(len(p['shares']) for p in data['players']); n_rel = sum(len(p['rels']) for p in data['players'])
hdr = ("/* Generated from humanoid_robotics_supply_chain_sources.json by build_sources.py.\n"
       "   %d sources, %d players, %d events, %d market-share/scale figures, %d relationships.\n"
       "   Do not edit by hand; re-run the build script instead. */\n") % (len(sources), len(data['players']), n_ev, n_sh, n_rel)
open(OUT, 'w').write(hdr + 'window.SOURCE_DATA = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')
print(hdr)
