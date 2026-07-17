/* Content for the generated SEO pages. Edit copy here; run build-pages.mjs to
   regenerate. Every service and every area gets genuinely unique body copy —
   thin, near-duplicate location pages read as doorway spam to Google, so each
   area speaks to that suburb's real housing stock and tree cover. */

export const ICONS = {
  concrete: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  house: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  roof: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 12l9-8 9 8M5 11v9h14v-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  window: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="1" stroke="currentColor" stroke-width="2"/><path d="M12 3v18M4 12h16" stroke="currentColor" stroke-width="2"/></svg>',
  deck: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 9h18M3 15h18M6 4v16M18 4v16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  commercial: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V7h6v14M11 21V3h8v18M7 11h2M7 15h2M15 7h2M15 11h2M15 15h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

export const SERVICES = [
  {
    slug: 'concrete-driveways',
    nav: 'Concrete &amp; Driveways',
    icon: 'concrete',
    serviceType: 'Concrete and driveway cleaning',
    title: 'Concrete &amp; Driveway Cleaning in St. Louis | Prime Power Wash',
    desc: 'Professional concrete, driveway and patio pressure washing across St. Louis. We lift out oil, dirt and organic buildup so flatwork looks like new. Free estimates: (314) 229-6210.',
    h1: 'Concrete &amp; Driveway Cleaning',
    lede: 'Driveways, walkways and patios stripped of dirt, oil and organic buildup — back to their original color.',
    body: [
      'Concrete is the first thing people see when they pull up to your home, and it is also the surface that shows wear the fastest. Between road salt, tire drips, barbecue grease and the green film of algae that settles into shaded sections, a driveway can drift two or three shades darker without anyone noticing the change happen. Set against a freshly cleaned strip, the difference is obvious.',
      'We clean flatwork with a surface cleaner rather than a bare wand. The spinning bar holds an even distance off the concrete and pulls water across the whole slab at one consistent pressure, so you get a uniform finish instead of the zebra striping and wand marks that come from cleaning a driveway by hand. For oil spots and rust, we pre-treat before the surface cleaner ever touches them.',
      'The same approach carries to walkways, front steps, pool decks and paver patios. On pavers we ease off the pressure and clean with more solution so we lift the grime without blowing out the joint sand, then talk you through whether re-sanding makes sense.',
    ],
    included: [
      { t: 'Driveways', d: 'Even, edge-to-edge cleaning with a surface cleaner — no wand stripes, no missed lanes.' },
      { t: 'Walkways &amp; steps', d: 'Front walks, side paths and porch steps brought back to their original tone.' },
      { t: 'Patios &amp; pool decks', d: 'Stamped, broom-finish or exposed-aggregate concrete cleaned to match.' },
      { t: 'Pavers &amp; brick', d: 'Lower-pressure cleaning that lifts grime without stripping the joint sand.' },
      { t: 'Oil &amp; rust spots', d: 'Pre-treated and worked before the surface cleaner passes over them.' },
      { t: 'Curbs &amp; aprons', d: 'The street-facing concrete that makes the whole approach look sharp.' },
    ],
    faq: [
      { q: 'Will pressure washing damage my concrete?', a: 'No. Concrete is a durable surface and handles pressure well. The bigger risk is uneven cleaning from a bare wand, which is why we use a surface cleaner for a consistent finish.' },
      { q: 'Can you get oil stains out of my driveway?', a: 'Most of them, yes. We pre-treat oil and rust before cleaning. Old, deep stains may lighten rather than vanish completely — we will tell you honestly what to expect before we start.' },
      { q: 'How long does a driveway take?', a: 'A typical residential driveway takes an hour or two depending on size and buildup. We give you a firm time and price at the free estimate.' },
    ],
  },
  {
    slug: 'house-washing',
    nav: 'House Washing',
    icon: 'house',
    serviceType: 'House soft washing',
    title: 'House Washing &amp; Soft Wash in St. Louis | Prime Power Wash',
    desc: 'Gentle soft washing for brick, vinyl and stucco homes across St. Louis. We lift algae, dirt and mildew without damaging your siding. Free estimates: (314) 229-6210.',
    h1: 'House Washing',
    lede: 'A gentle soft-wash that lifts grime from brick, vinyl and stucco without damaging your siding or finish.',
    body: [
      'The green and gray film that creeps up the north and shaded sides of a house is not just dirt — it is living algae and mildew, and blasting it with high pressure only drives water behind the siding and leaves streaks. House washing is done with soft washing: low pressure plus a cleaning solution that kills the growth at the root so it rinses away and stays gone longer.',
      'We match the solution and pressure to your siding. Vinyl, brick, stucco, fiber cement and painted wood each behave differently, and the mistake most homeowners make renting a machine for the weekend is using one aggressive setting on all of them. Done right, a house wash brightens the whole exterior in an afternoon and buys years before the growth returns.',
      'A wash also protects what is underneath. Left alone, algae and mildew hold moisture against your siding and trim, and that is what shortens their life. Clearing it is as much maintenance as it is curb appeal.',
    ],
    included: [
      { t: 'Vinyl &amp; siding', d: 'Low-pressure soft wash that clears algae and chalking without cracking or streaking.' },
      { t: 'Brick &amp; stone', d: 'Solution-forward cleaning that lifts grime out of masonry and mortar joints.' },
      { t: 'Stucco &amp; EIFS', d: 'Careful, no-pressure treatment for surfaces that high pressure would gouge.' },
      { t: 'Soffits &amp; gutters', d: 'The undersides and gutter faces that collect the heaviest black streaking.' },
      { t: 'Trim &amp; shutters', d: 'Painted trim, shutters and downspouts brought back to a clean, even color.' },
      { t: 'Eaves &amp; cobwebs', d: 'Spiders, wasp starts and dirt daubers cleared from around the whole exterior.' },
    ],
    faq: [
      { q: 'What is the difference between pressure washing and soft washing?', a: 'Pressure washing uses higher water pressure for durable surfaces like concrete. Soft washing uses low pressure plus a cleaning solution for siding, roofs and other surfaces that high pressure can damage. Houses get soft washed.' },
      { q: 'Will it hurt my plants?', a: 'We pre-wet landscaping before we start and rinse it afterward, which keeps the solution off your plants. Our technicians work around beds carefully.' },
      { q: 'How long does a house wash last?', a: 'Because soft washing kills the algae rather than just rinsing it, most homes stay clean for a year or two — longer than a plain pressure rinse, which the growth returns to quickly.' },
    ],
  },
  {
    slug: 'roof-soft-washing',
    nav: 'Roof Soft Washing',
    icon: 'roof',
    serviceType: 'Roof soft washing',
    title: 'Roof Soft Washing &amp; Algae Removal in St. Louis | Prime Power Wash',
    desc: 'No-pressure roof soft washing to remove black algae streaks, moss and mold in St. Louis. Restore curb appeal and extend roof life. Free estimates: (314) 229-6210.',
    h1: 'Roof Soft Washing',
    lede: 'Removes black algae streaks, moss and mold to restore curb appeal and extend the life of your roof.',
    body: [
      'Those black streaks running down a roof are a blue-green algae that feeds on the limestone filler in asphalt shingles. It is not just cosmetic — as it spreads it holds moisture against the shingles and works under them, and left for years it shortens the life of the roof. In St. Louis, shaded and heavily treed lots grow it fastest.',
      'A roof is the last surface that should ever see high pressure. We soft wash it: no pressure at all, just a cleaning solution applied low and rinsed gently, which kills the algae and moss at the root. The streaks lift, the color evens out, and because the growth is killed rather than knocked loose it stays clear far longer than a pressure rinse would.',
      'This is also the safest way to protect a roof you are not ready to replace. Clearing the algae removes what holds moisture against the shingles, and a soft wash costs a fraction of a new roof.',
    ],
    included: [
      { t: 'Black algae streaks', d: 'The dark vertical staining on asphalt shingles killed at the root, not just rinsed.' },
      { t: 'Moss &amp; lichen', d: 'Growth in shaded valleys and north slopes cleared without lifting shingles.' },
      { t: 'No high pressure', d: 'A true soft wash — zero pressure on the roof surface, so nothing gets damaged.' },
      { t: 'Gutters &amp; fascia', d: 'The black tiger-striping on gutter faces cleaned while we are up there.' },
      { t: 'Plant protection', d: 'Landscaping below the roofline pre-wet and rinsed so runoff does no harm.' },
      { t: 'Roof life extended', d: 'Removing the algae removes what holds moisture against your shingles.' },
    ],
    faq: [
      { q: 'Is soft washing safe for my shingles?', a: 'Yes — it is the method roofing manufacturers recommend. There is no pressure on the roof at all. The cleaning solution does the work, not force.' },
      { q: 'Why do the streaks come back so fast after a pressure rinse?', a: 'A pressure rinse only knocks the surface growth loose. Soft washing kills the algae at the root, so it takes far longer to return.' },
      { q: 'Do you have to walk on my roof?', a: 'We minimize roof contact and work from ladders and the ground wherever possible, applying and rinsing the solution without pounding the shingles.' },
    ],
  },
  {
    slug: 'window-cleaning',
    nav: 'Window Cleaning',
    icon: 'window',
    serviceType: 'Window cleaning',
    title: 'Window Cleaning in St. Louis | Prime Power Wash',
    desc: 'Streak-free interior and exterior window cleaning in St. Louis, including sills, tracks and screens. Free estimates: (314) 229-6210.',
    h1: 'Window Cleaning',
    lede: 'Crystal-clear glass plus the sills and trim that collect a year&rsquo;s worth of dust, pollen and cobwebs.',
    body: [
      'Clean windows change how a whole house feels from the inside — more light, sharper views, and none of the film that builds up so gradually you stop noticing it. St. Louis pollen season alone coats exterior glass in a yellow haze that a garden hose just smears around.',
      'We clean the glass streak-free and take care of the parts that get skipped: the sills where dust and dead bugs collect, the tracks, and the frames and trim around each window. It is the detail work that makes the difference between glass that is wet and glass that is genuinely clean.',
      'Window cleaning also pairs naturally with a house wash. When we are already cleaning the exterior, doing the windows in the same visit means the whole facade — siding, trim and glass — comes together at once.',
    ],
    included: [
      { t: 'Exterior glass', d: 'Streak-free cleaning that clears pollen, hard-water spots and road film.' },
      { t: 'Interior glass', d: 'Inside panes done on request for a clear view in both directions.' },
      { t: 'Sills &amp; tracks', d: 'The ledges and channels that collect a year of dust, pollen and insects.' },
      { t: 'Frames &amp; trim', d: 'The surround wiped down so the whole window reads clean, not just the glass.' },
      { t: 'Screens', d: 'Screens rinsed of the dust that dims your view and your light.' },
      { t: 'Storefront glass', d: 'Commercial windows and entry doors kept clear on a schedule.' },
    ],
    faq: [
      { q: 'Do you clean inside windows too?', a: 'Yes, interior glass is available on request. Many homeowners have us do both sides in one visit for a complete, clear result.' },
      { q: 'Can you reach second-story windows?', a: 'Yes. We have the equipment to safely reach upper-floor glass on most homes. We will confirm access at the free estimate.' },
      { q: 'Should I do windows with a house wash?', a: 'It is the most efficient way to do it. When we are already on site cleaning the exterior, adding the windows means the whole facade finishes together.' },
    ],
  },
  {
    slug: 'deck-fence',
    nav: 'Deck &amp; Fence',
    icon: 'deck',
    serviceType: 'Deck and fence cleaning',
    title: 'Deck &amp; Fence Cleaning in St. Louis | Prime Power Wash',
    desc: 'Wood-safe deck and fence cleaning across St. Louis. We lift gray weathering, algae and mildew to reveal the wood beneath. Free estimates: (314) 229-6210.',
    h1: 'Deck &amp; Fence Cleaning',
    lede: 'Careful cleaning for all deck and fence types, lifting away gray weathering to reveal the wood beneath.',
    body: [
      'Wood is the surface where technique matters most. A deck cleaned with too much pressure comes out furry and gouged, with the soft grain torn out between the harder lines — damage that no stain will hide. We clean decks and fences with a wood-safe approach: the right solution to lift the gray, algae and mildew, and only as much pressure as the wood will take.',
      'Under that weathered gray layer is wood that usually looks years younger. Clearing it brings back the grain and the color, and it is the necessary first step before any stain or seal — a coating over a dirty, mildewed board just seals the problem in.',
      'The same care carries to fences, pergolas and gazebos, and to composite decking, which cleans up well with low pressure and the right solution. If you are planning to re-stain, cleaning first is what makes the finish take evenly and last.',
    ],
    included: [
      { t: 'Wood decks', d: 'Gray weathering and mildew lifted with wood-safe pressure that spares the grain.' },
      { t: 'Fences', d: 'Wood and vinyl fencing cleaned panel to panel, both sides where accessible.' },
      { t: 'Composite decking', d: 'Low-pressure cleaning that clears the film composite boards collect in shade.' },
      { t: 'Pergolas &amp; gazebos', d: 'Overhead structures and railings cleaned along with the deck surface.' },
      { t: 'Pre-stain prep', d: 'The clean, dry starting point a stain or seal needs to take evenly and last.' },
      { t: 'Railings &amp; steps', d: 'The high-touch parts of a deck brought back with the rest of it.' },
    ],
    faq: [
      { q: 'Can you clean my deck without damaging the wood?', a: 'Yes — that is the whole point of doing it right. We use a wood-safe solution and controlled pressure that lifts the gray without tearing the grain the way a bare high-pressure wand does.' },
      { q: 'Do I need to clean before staining?', a: 'Yes. Stain over a dirty or mildewed deck just seals the problem in and peels early. A proper cleaning is the first step to a finish that lasts.' },
      { q: 'Can you clean composite decking?', a: 'Yes. Composite cleans up well with low pressure and the right solution, which clears the algae film it collects in shaded, damp spots.' },
    ],
  },
  {
    slug: 'commercial',
    nav: 'Commercial',
    icon: 'commercial',
    serviceType: 'Commercial pressure washing',
    title: 'Commercial Pressure Washing in St. Louis | Prime Power Wash',
    desc: 'Commercial pressure washing for storefronts, HOAs and properties across St. Louis — sidewalks, entrances, dumpster pads and building exteriors on your schedule. (314) 229-6210.',
    h1: 'Commercial Pressure Washing',
    lede: 'Storefronts, HOAs and commercial properties across St. Louis kept clean and presentable on your schedule.',
    body: [
      'For a business, the exterior is the first impression before a customer ever reaches the door. Gum-spotted sidewalks, a grimy entrance and stained dumpster pads quietly tell people how a place is run. Commercial pressure washing keeps the storefront, walkways and building faces looking cared-for — and it is the kind of maintenance customers notice only when it is missing.',
      'We work around your hours. Entrances and walkways can be cleaned early, after close or overnight so there is no disruption to customers or staff, and we can set a recurring schedule — monthly, quarterly or seasonal — so it is handled without you having to think about it.',
      'For HOAs and property managers, we handle the shared surfaces that reflect on the whole community: entry monuments, clubhouse walks, mailbox kiosks, pool decks and common-area concrete. One point of contact, one predictable schedule, one consistent result across the property.',
    ],
    included: [
      { t: 'Storefronts &amp; entrances', d: 'Sidewalks, entryways and facades kept presentable for every customer.' },
      { t: 'Sidewalks &amp; flatwork', d: 'Gum, grease and grime removed from high-traffic concrete.' },
      { t: 'Dumpster pads', d: 'The stained, odor-prone corners kept clean and code-friendly.' },
      { t: 'HOA common areas', d: 'Entry monuments, clubhouse walks and shared concrete across the community.' },
      { t: 'Building exteriors', d: 'Soft washing for the facades and awnings that collect grime and algae.' },
      { t: 'Scheduled service', d: 'Monthly, quarterly or seasonal cleaning handled without you chasing it.' },
    ],
    faq: [
      { q: 'Can you work outside our business hours?', a: 'Yes. We clean entrances and walkways early, after close or overnight so there is no disruption to your customers or staff.' },
      { q: 'Do you offer recurring service?', a: 'Yes — many commercial clients set a monthly, quarterly or seasonal schedule so the property stays consistently clean without having to be asked each time.' },
      { q: 'Do you work with HOAs and property managers?', a: 'Yes. We handle shared and common-area surfaces across a community with one point of contact and one predictable schedule.' },
    ],
  },
];

export const AREAS = [
  { slug: 'st-louis-county', name: 'St. Louis County', body: [
    'St. Louis County is home base for most of our residential work, and its neighborhoods run the full range — mid-century ranches, brick two-stories, newer subdivisions and everything between. What they share is mature landscaping and the shade that comes with it, which is exactly the condition algae and mildew like best on siding, roofs and north-facing concrete.',
    'Because the housing stock is so varied, matching the method to the surface matters here more than anywhere. Vinyl and fiber cement get a gentle soft wash, brick gets a solution-forward clean, concrete flatwork gets a surface cleaner for an even finish, and roofs are soft washed with no pressure at all.',
  ] },
  { slug: 'st-louis-city', name: 'St. Louis City', body: [
    'The city is defined by its brick — century-old two-family flats, rehabbed row houses and masonry that has stood through generations of St. Louis weather. That old brick and mortar collects grime and organic growth, and it is exactly the surface high pressure can damage, blowing out soft joints and driving water into the wall.',
    'We soft wash historic brick and masonry, using a cleaning solution and low pressure to lift decades of buildup without harming the mortar. On the tighter city lots we also handle the walkways, steps and small patios that make the approach to an older home look cared for.',
  ] },
  { slug: 'clayton', name: 'Clayton', body: [
    'Clayton pairs a walkable downtown with some of the region&rsquo;s most established residential streets — stately older homes under a heavy tree canopy, alongside modern condos and a busy commercial core. That mature shade means the north and back faces of brick and stone homes develop algae and streaking that stands out against the rest of the facade.',
    'We soft wash the homes so masonry and siding clean up without damage, bring driveways and walkways back to an even color, and handle storefront and office-building exteriors on a schedule for Clayton&rsquo;s commercial properties. Careful work for an address where appearances are noticed.',
  ] },
  { slug: 'brentwood', name: 'Brentwood', body: [
    'Brentwood mixes tight-knit residential streets with the busy retail corridor along Brentwood Boulevard. The homes tend to be well-kept mid-century houses on modest lots, where a clean driveway, patio and front walk make an outsized difference to the whole property.',
    'For homeowners we clean concrete flatwork, soft wash siding and brick, and freshen decks and fences. For the businesses along the corridor we keep storefronts, sidewalks and entrances presentable, on a recurring schedule if that suits.',
  ] },
  { slug: 'kirkwood', name: 'Kirkwood', body: [
    'Kirkwood is one of the region&rsquo;s most characterful suburbs — a historic downtown, older homes in a mix of brick and clapboard, and the big established trees that give the streets their shade. That heavy canopy is beautiful and it is also why Kirkwood roofs and north walls grow algae and moss faster than sunnier lots.',
    'Roof soft washing is a common request here for exactly that reason, clearing the black streaks and moss without any pressure on the shingles. We also soft wash the homes, restore weathered wood decks and clean the driveways and walkways that older properties are built around.',
  ] },
  { slug: 'webster-groves', name: 'Webster Groves', body: [
    'Webster Groves is one of the oldest suburbs in the area, full of century homes with wraparound porches and deep lots shaded by mature oaks. Those grand old trees are the trade-off: constant shade and leaf litter keep siding, roofs and decks damp, and that is the environment algae and mildew thrive in.',
    'We soft wash the homes and roofs so delicate older surfaces come clean without damage, and we put real care into the wood — the porches, decks and fences that define these houses respond best to a wood-safe clean rather than brute pressure.',
  ] },
  { slug: 'frontenac', name: 'Frontenac', body: [
    'Frontenac is estate country — large wooded lots, brick and stone homes set back behind long driveways, and a canopy of old trees that keeps much of each property in shade. The result is extensive hardscape to keep clean and plenty of north-facing masonry where algae and streaking take hold.',
    'These are properties where the finish has to be right. We soft wash brick, stone and stucco without touching the mortar, clean long driveways and walkways to an even tone with a surface cleaner, and soft wash roofs to clear the algae the tree cover encourages.',
  ] },
  { slug: 'ladue', name: 'Ladue', body: [
    'Ladue is home to some of the St. Louis area&rsquo;s premier properties — large estates in brick, stone and stucco, expansive driveways and patios, and mature trees shading much of the grounds. That combination means significant hardscape to maintain and a lot of shaded masonry where algae streaks quietly form on the surfaces guests see first.',
    'We approach these homes with the care the finishes demand: soft washing for brick, stone and stucco that lifts the growth without harming the material, even surface-cleaner work across large flatwork, and no-pressure roof soft washing. The standard here is exacting, and so is the work.',
  ] },
  { slug: 'creve-coeur', name: 'Creve Coeur', body: [
    'Creve Coeur blends established West County neighborhoods with office parks and larger residential lots. The homes range from brick mid-century to newer builds, and the generous lot sizes usually mean a good amount of driveway, patio and walkway to keep looking sharp.',
    'We soft wash siding and brick, bring concrete flatwork back to an even color, and refresh decks and fences for homeowners — and for the area&rsquo;s commercial and office properties we keep entrances, sidewalks and building faces presentable on a schedule.',
  ] },
  { slug: 'town-and-country', name: 'Town &amp; Country', body: [
    'Town &amp; Country is known for large wooded lots and upscale homes set among the trees. All that canopy is the draw and the challenge: heavy shade and leaf litter keep roofs, siding and hardscape damp, and long driveways and extensive patios add up to a lot of surface to maintain.',
    'We soft wash homes and roofs to clear the algae the tree cover feeds, and use surface cleaners to bring long driveways and large patios back to an even tone without the striping a bare wand leaves behind. Careful, thorough work for properties that expect it.',
  ] },
  { slug: 'des-peres', name: 'Des Peres', body: [
    'Des Peres is a well-kept West County community of established subdivisions, anchored near the West County Center retail district. The homes are tidy and cared-for, and the shaded driveways, patios and siding are where the slow creep of algae and grime shows up first.',
    'For homeowners we clean concrete, soft wash siding and brick, and restore decks and fences. For the commercial properties nearby we keep storefronts, sidewalks and entrances clean and presentable, on a recurring schedule when that fits.',
  ] },
  { slug: 'chesterfield', name: 'Chesterfield', body: [
    'Chesterfield sprawls across West County, from the commercial expanse of Chesterfield Valley to established hillside subdivisions and newer developments. It is a mix of larger homes with substantial driveways and hardscape and a deep base of retail and commercial property.',
    'On the residential side we soft wash siding, brick and roofs and clean the large driveways and patios these homes are built around. On the commercial side we keep storefronts, walkways and building exteriors presentable across the Valley and beyond, on whatever schedule keeps them looking their best.',
  ] },
  { slug: 'ballwin', name: 'Ballwin', body: [
    'Ballwin is a classic family suburb — subdivision after subdivision of well-kept two-story homes, many in vinyl and fiber-cement siding with decks out back. On shaded lots that siding picks up the green film of algae, and the decks gray out under the same tree cover.',
    'House washing is a frequent request here, soft washing the siding to clear algae and chalking without cracking or streaking it. We also restore weathered decks and fences with a wood-safe clean and bring driveways and walkways back to their original color.',
  ] },
  { slug: 'university-city', name: 'University City', body: [
    'University City runs from the lively Loop to blocks of historic homes — century brick, Tudor and gingerbread houses under a dense tree canopy. That old masonry and heavy shade are a combination that grows algae and streaking on the surfaces you notice first, and old brick is exactly what high pressure can damage.',
    'We soft wash historic brick and siding to lift decades of buildup without harming the mortar, restore the wood porches and decks these homes are known for, and clean the walkways and steps that front them. For the Loop&rsquo;s storefronts we keep entrances and sidewalks presentable too.',
  ] },
  { slug: 'maryland-heights', name: 'Maryland Heights', body: [
    'Maryland Heights mixes established residential neighborhoods with a substantial base of commercial, office and retail property near Westport and the airport corridor. It is a community where both a tidy home exterior and a presentable storefront matter.',
    'For homeowners we soft wash siding and brick, clean driveways and patios, and refresh decks and fences. For the area&rsquo;s many commercial properties we handle sidewalks, entrances, dumpster pads and building exteriors, on a recurring schedule that keeps everything consistent.',
  ] },
  { slug: 'maplewood', name: 'Maplewood', body: [
    'Maplewood is a revitalized inner-ring suburb — brick bungalows and older homes on walkable streets, anchored by the busy Manchester Road business district. The older brick and the storefronts along Manchester share the same need: cleaning that lifts years of grime without harming aging masonry.',
    'We soft wash brick homes and clean the walkways and small patios that front them, and for the business district we keep storefronts, sidewalks and entrances presentable. Careful work for a neighborhood that has put real effort into how it looks.',
  ] },
  { slug: 'richmond-heights', name: 'Richmond Heights', body: [
    'Richmond Heights pairs established residential streets of brick homes under mature trees with the major commercial district around The Boulevard and Galleria. It is a community of both careful homeowners and busy commercial property, and both benefit from a clean, well-kept exterior.',
    'For homes we soft wash brick and siding, clean driveways and walkways, and restore decks and fences shaded by the neighborhood&rsquo;s old trees. For the commercial corridor we keep storefronts, sidewalks and entrances looking sharp on a schedule.',
  ] },
];
