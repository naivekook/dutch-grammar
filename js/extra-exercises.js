/* Extra exercises injected at runtime — brings every lesson to 10 */
(function(){
const x = (id, exs) => { const l = LESSONS.find(l=>l.id===id); if(l) l.exercises.push(...exs); };

/* ── LES 1 · Onderwerpen & Tegenwoordige Tijd ── */
x(1,[
{id:"1-6",type:"fill",question:"Vul in: Hij ___ elke dag naar het werk. (fietsen)",
 ans:enc("fietst"),exp:"fietsen → fiets (stem) → fiets + t = fietst."},
{id:"1-7",type:"mc",question:"Kies de juiste vorm: Ik ___ graag koffie.",
 opts:["drinkt","drinken","drink","gedronken"],ans:enc("drink"),
 exp:"Ik + stem: drinken → drink. No -t after ik."},
{id:"1-8",type:"fill",question:"Vul in: Jullie ___ erg goed Nederlands. (spreken)",
 ans:enc("spreken"),exp:"Jullie (plural) uses the infinitive: spreken."},
{id:"1-9",type:"mc",question:"Welke vraagzin is correct? (jij + werken)",
 opts:["Werkt jij hier?","Werk jij hier?","Werken jij hier?","Jij werkt hier?"],ans:enc("Werk jij hier?"),
 exp:"In a question with jij/je the -t is dropped: werkT → Werk jij?"},
{id:"1-10",type:"fill",question:"Vul in: U ___ hier al tien jaar. (wonen, formeel)",
 ans:enc("woont"),exp:"U (singular, formal) = stem + t: wonen → woon → woont."},
]);

/* ── LES 2 · Getallen & Nuttige Zinnen ── */
x(2,[
{id:"2-6",type:"mc",question:"Hoe zeg je 70 in het Nederlands?",
 opts:["zeven tien","zeventig","zevenzestig","seventy"],ans:enc("zeventig"),
 exp:"70 = zeventig. Compare: dertig (30), veertig (40), vijftig (50)…"},
{id:"2-7",type:"fill",question:"Hoe zeg je 56 in het Nederlands?",
 ans:enc("zesenvijftig"),exp:"Units + en + tens: zes + en + vijftig = zesenvijftig."},
{id:"2-8",type:"mc",question:"Wanneer zeg je 'Goedemiddag'?",
 opts:["'s ochtends","'s middags","'s avonds","Bij het afscheid"],ans:enc("'s middags"),
 exp:"Goedemorgen = morning · Goedemiddag = afternoon · Goedenavond = evening."},
{id:"2-9",type:"fill",question:"Hoe vraag je iemands adres? 'Wat is je ___?'",
 ans:enc("adres"),exp:"Wat is je adres? = What is your address?"},
{id:"2-10",type:"mc",question:"Welk getal is 'negentig'?",
 opts:["19","90","99","9"],ans:enc("90"),
 exp:"Negentig = 90. Negen (9) + -tig (suffix for tens)."},
]);

/* ── LES 3 · Zinsbouw & Vragen ── */
x(3,[
{id:"3-6",type:"fill",question:"Vul het vraagwoord in: ___ kom je vandaan?",
 ans:enc("Waar"),exp:"Waar = where. Asking about origin: Waar kom je vandaan?"},
{id:"3-7",type:"mc",question:"Kies: ___ dagen heb je vakantie?",
 opts:["Wie","Wat","Hoeveel","Wanneer"],ans:enc("Hoeveel"),
 exp:"Hoeveel = how many. Asking about a quantity."},
{id:"3-8",type:"fill",question:"Kies welk of welke: ___ dag vind jij het fijnst? (de dag)",
 ans:enc("Welke"),exp:"de dag = de-word → welke. Use welk before het-words."},
{id:"3-9",type:"mc",question:"Welke zinsvolgorde is juist voor een ja/nee vraag?",
 opts:["Jij woont in Amsterdam?","Woon jij in Amsterdam?","In Amsterdam jij woont?","Jij in Amsterdam woont?"],
 ans:enc("Woon jij in Amsterdam?"),
 exp:"Yes/no question: Verb + Subject + rest. When jij/je follows the verb, drop the -t: woonT → Woon jij in Amsterdam?"},
{id:"3-10",type:"fill",question:"Vul het vraagwoord in: ___ kost dit?",
 ans:enc("Hoeveel"),exp:"Hoeveel = how much/many. Asking about a price or quantity."},
]);

/* ── LES 4 · Bezittelijke Voornaamwoorden ── */
x(4,[
{id:"4-6",type:"fill",question:"Vul in: Hij heeft ___ broer uitgenodigd.",
 ans:enc("zijn"),exp:"Hij → zijn (his)."},
{id:"4-7",type:"mc",question:"Kies het juiste bezittelijk voornaamwoord: 'Ik heb ___ tas verloren.'",
 opts:["mijn","zijn","haar","ons"],ans:enc("mijn"),
 exp:"Ik → mijn. The speaker has lost their own bag."},
{id:"4-8",type:"fill",question:"Vul in: Wat is ___ telefoonnummer? (formeel, u)",
 ans:enc("uw"),exp:"U (formal) → uw (formal possessive pronoun)."},
{id:"4-9",type:"mc",question:"Wij wonen hier. ___ huis is groot. (het huis)",
 opts:["Onze","Ons","Hun","Zijn"],ans:enc("Ons"),
 exp:"Wij → onze/ons. 'huis' = het huis (het-word) → ons huis."},
{id:"4-10",type:"fill",question:"Vul in: Jullie hebben ___ huiswerk niet gemaakt.",
 ans:enc("jullie"),exp:"Jullie → jullie (possessive pronoun stays the same)."},
]);

/* ── LES 5 · Tijdvoorzetsels & De Klok ── */
x(5,[
{id:"5-7",type:"fill",question:"Vul in: Wij zijn geboren ___ 1990. (jaar)",
 ans:enc("in"),exp:"Use in for years and seasons: in 1990, in de zomer."},
{id:"5-8",type:"mc",question:"Kies het juiste voorzetsel: 'Bart en Marit zijn ___ 8 april 2018 getrouwd.'",
 opts:["in","om","op","aan"],ans:enc("op"),
 exp:"Use op for specific dates: op 8 april 2018."},
{id:"5-9",type:"fill",question:"Hoe zeg je 11:20 in het Nederlands?",
 ans:enc("tien voor half twaalf"),exp:"11:20 = 10 minutes before the half hour to 12 = tien voor half twaalf."},
{id:"5-10",type:"mc",question:"Hoe zeg je 11:05 in het Nederlands?",
 opts:["vijf voor elf","kwart over elf","vijf over elf","vijf voor half elf"],
 ans:enc("vijf over elf"),exp:"11:05 = 5 minutes past eleven = vijf over elf."},
]);

/* ── LES 6 · Inversiezinnen ── */
x(6,[
{id:"6-5",type:"mc",question:"'Ik neem nu een glas bier.' Begin met 'Nu':",
 opts:["Nu neem ik een glas bier.","Nu ik neem een glas bier.","Nu een glas bier neem ik.","Nu neem een glas bier ik."],
 ans:enc("Nu neem ik een glas bier."),
 exp:"Time word (Nu) + Verb (neem) + Subject (ik) + rest."},
{id:"6-6",type:"fill",question:"'Ik werk elke dag in Amsterdam.' Begin met 'In Amsterdam': In Amsterdam ___ ik elke dag.",
 ans:enc("werk"),exp:"Inversion: Place (In Amsterdam) + Verb (werk) + Subject (ik) + rest."},
{id:"6-7",type:"mc",question:"Welke inversiezin is correct?",
 opts:["Morgen gaan wij naar Rotterdam.","Morgen wij gaan naar Rotterdam.","Morgen naar Rotterdam gaan wij.","Morgen wij naar Rotterdam gaan."],
 ans:enc("Morgen gaan wij naar Rotterdam."),
 exp:"Time word + Verb + Subject + rest. The verb is always at position 2."},
{id:"6-8",type:"fill",question:"'Peter fietst elke ochtend naar het station.' Begin met 'Elke ochtend': Elke ochtend ___ Peter naar het station.",
 ans:enc("fietst"),exp:"Time word + Verb (fietst) + Subject (Peter) + rest."},
{id:"6-9",type:"mc",question:"Wat staat altijd op positie 2 in een inversiezin?",
 opts:["Het onderwerp","Het werkwoord","Het tijdswoord","Het lijdend voorwerp"],
 ans:enc("Het werkwoord"),exp:"The basic rule: the verb is ALWAYS at position 2, whatever comes at position 1."},
{id:"6-10",type:"fill",question:"\"'s Avonds ___ wij thee.\" ('s Avonds + drinken, wij)",
 ans:enc("drinken"),exp:"Inversion: Time word ('s Avonds) + Verb (drinken) + Subject (wij)."},
]);

/* ── LES 7 · De- en Het-woorden ── */
x(7,[
{id:"7-6",type:"mc",question:"Welk lidwoord hoort bij 'nummer'?",
 opts:["de","het","geen lidwoord","beide"],ans:enc("het"),
 exp:"nummer = het nummer. Numbers are het-words."},
{id:"7-7",type:"fill",question:"Vul in: ___ politie rijdt snel. (de/het?)",
 ans:enc("De"),exp:"politie = de politie. Suffix -ie → always de."},
{id:"7-8",type:"mc",question:"Welk lidwoord hoort bij 'cultuur'?",
 opts:["het","de","geen","beide"],ans:enc("de"),
 exp:"Suffix -uur → always de: de cultuur, de natuur."},
{id:"7-9",type:"mc",question:"Welk lidwoord hoort bij 'gebit' (teeth)?",
 opts:["de","het","geen","beide"],ans:enc("het"),
 exp:"Prefix ge- with 2 syllables → het-word: het gebit, het gebruik."},
{id:"7-10",type:"fill",question:"Vul in: ___ baby huilt heel hard. (baby = naam voor persoon)",
 ans:enc("De"),exp:"Names for persons → de-word: de baby, de agent, de dokter."},
]);

/* ── LES 8 · Dagen van de Week & Meervoud ── */
x(8,[
{id:"8-6",type:"fill",question:"Wat is het meervoud van 'tomaat'?",
 ans:enc("tomaten"),exp:"tomaat → remove one -a to preserve the long vowel sound → tomaten."},
{id:"8-7",type:"mc",question:"Wat is het meervoud van 'pauze'?",
 opts:["pauzeen","pauzes","pauze's","pauzens"],ans:enc("pauzes"),
 exp:"pauze ends in -e → add -s → pauzes."},
{id:"8-8",type:"fill",question:"Welke dag komt na woensdag?",
 ans:enc("donderdag"),exp:"Order: maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag."},
{id:"8-9",type:"mc",question:"Wat is het meervoud van 'aardappel'?",
 opts:["aardappels","aardappelen","aardappel's","aardappeles"],
 ans:enc("aardappelen"),exp:"aardappel ends in -el → add -en → aardappelen."},
{id:"8-10",type:"fill",question:"Wat is het meervoud van 'biertje'?",
 ans:enc("biertjes"),exp:"biertje is a diminutive (-je) → add -s → biertjes."},
]);

/* ── LES 9 · Bijvoeglijke Naamwoorden ── */
x(9,[
{id:"9-6",type:"mc",question:"'De ___ fiets staat buiten.' (oud, de fiets)",
 opts:["oud","oude","ouds","oudst"],ans:enc("oude"),
 exp:"de-word + adjective → add -e: de oude fiets."},
{id:"9-7",type:"fill",question:"Vul in: 'Het is een ___ dag.' (mooi, de dag)",
 ans:enc("mooie"),exp:"een + de-word (dag) → add -e: een mooie dag."},
{id:"9-8",type:"mc",question:"'___ koffie is heerlijk.' (lekker, geen lidwoord, de koffie)",
 opts:["Lekker","Lekkere","Lekkers","Lekkerste"],ans:enc("Lekkere"),
 exp:"No article + de-word → add -e: lekkere koffie."},
{id:"9-9",type:"fill",question:"Vul in: 'Ik heb een ___ idee.' (gek, het idee)",
 ans:enc("gek"),exp:"een + het-word (idee) → NO -e: een gek idee."},
{id:"9-10",type:"mc",question:"'Die ___ tas is van mij.' (rood, de tas, ver weg)",
 opts:["rood","rode","rooie","rods"],ans:enc("rode"),
 exp:"die (far) + de-word → add -e: die rode tas."},
]);

/* ── LES 10 · Modale Werkwoorden ── */
x(10,[
{id:"10-6",type:"mc",question:"'Nederlanders ___ twee paspoorten hebben.' (mogelijkheid)",
 opts:["mogen","willen","kunnen","zullen"],ans:enc("kunnen"),
 exp:"Kunnen = to have the ability. Nederlanders kunnen (are able to) have two passports."},
{id:"10-7",type:"fill",question:"Vul in: '___ ik u iets vragen?' (toestemming vragen)",
 ans:enc("Mag"),exp:"Mogen = permission. Mag ik …? = Am I allowed to …?"},
{id:"10-8",type:"mc",question:"'Ricardo is 17 jaar. ___ hij al alcohol drinken?' (toestemming)",
 opts:["Moet","Kan","Mag","Wil"],ans:enc("Mag"),
 exp:"Mogen = permission. Mag hij = is he allowed to?"},
{id:"10-9",type:"fill",question:"Vul in: 'Mijn achternaam is Versluijs, ___ ik dat even spellen?' (mogelijkheid/toestemming)",
 ans:enc("kan|mag"),exp:"Kan (ability) or mag (permission) are both correct here."},
{id:"10-10",type:"mc",question:"'Ik ___ de borden schoonmaken.' (verplichting)",
 opts:["mag","kan","moet","wil"],ans:enc("moet"),
 exp:"Moeten = obligation. Ik moet = I am required to."},
]);

/* ── LES 11 · Vergrotende & Overtreffende Trap ── */
x(11,[
{id:"11-6",type:"fill",question:"Vul in: weinig → ___ dan. (vergrotende trap)",
 ans:enc("minder"),exp:"weinig is irregular: weinig → minder → het minst."},
{id:"11-7",type:"mc",question:"'Ik spreek ___ Nederlands dan mijn broer.' (veel, vergrotende trap)",
 opts:["veel","meer","meest","het meest"],ans:enc("meer"),
 exp:"veel is irregular: veel → meer → het meest."},
{id:"11-8",type:"fill",question:"'Dit is het ___ restaurant van de stad.' (goed, overtreffende trap)",
 ans:enc("beste"),exp:"goed is irregular: goed → beter → het best(e). Before a noun: het beste."},
{id:"11-9",type:"mc",question:"Vergrotende trap van 'klein': 'De baby is ___ dan de hond.'",
 opts:["kleiner","kleinder","minder klein","minst klein"],ans:enc("kleiner"),
 exp:"klein + -er = kleiner. Standard comparative rule."},
{id:"11-10",type:"fill",question:"Vul in: 'Ze heeft ___ vrienden dan haar zus.' (weinig, vergrotende trap)",
 ans:enc("minder"),exp:"weinig → minder (irregular, just like little → less in English)."},
]);

/* ── LES 12 · Aanwijzende Voornaamwoorden ── */
x(12,[
{id:"12-5",type:"fill",question:"Vul in: 'Wil je ___ blauwe trui of ___ zwarte?' (de trui, eerste dichtbij, tweede ver)",
 ans:enc("deze / die"),exp:"de trui near → deze; de trui far → die."},
{id:"12-6",type:"mc",question:"'___ huis is mooi.' (het huis, dichtbij)",
 opts:["Deze","Die","Dit","Dat"],ans:enc("Dit"),
 exp:"het huis is near → dit. het-word + near = dit."},
{id:"12-7",type:"fill",question:"Vul in: '___ schoenen zijn comfortabeler.' (de schoenen, ver weg)",
 ans:enc("Die"),exp:"de schoenen, far away → die."},
{id:"12-8",type:"mc",question:"'Meneer, hebt u ___ model in meer kleuren?' (het model, dichtbij)",
 opts:["deze","die","dit","dat"],ans:enc("dit"),
 exp:"het model is near → dit."},
{id:"12-9",type:"fill",question:"Vul in: '___ tas is van mij.' (de tas, dichtbij)",
 ans:enc("Deze"),exp:"de tas, near → deze."},
{id:"12-10",type:"mc",question:"'Ober, ___ vis is niet vers.' (de vis, dichtbij aan tafel)",
 opts:["dit","dat","deze","die"],ans:enc("deze"),
 exp:"de vis, near → deze."},
]);

/* ── LES 13 · Persoonlijke Voornaamwoorden ── */
x(13,[
{id:"13-6",type:"fill",question:"Vul in: 'Ik heb een nieuwe fiets. Wil je ___ zien?' (de fiets)",
 ans:enc("hem"),exp:"de fiets = de-word → object form: hem."},
{id:"13-7",type:"mc",question:"Kies de objectvorm: 'Ik stuur ___ een e-mail.' (u, formeel)",
 opts:["uw","u","hun","hen"],ans:enc("u"),
 exp:"U (formal) → object form stays u."},
{id:"13-8",type:"fill",question:"Vul in: 'Hij belt ___ elke dag.' (mij/me = ik)",
 ans:enc("mij|me"),exp:"Ik → object form: mij (emphatic) or me (general use)."},
{id:"13-9",type:"mc",question:"Subject 'zij' (she) → objectvorm:",
 opts:["ze","zijn","haar","hun"],ans:enc("haar"),
 exp:"zij (she, singular) → object form: haar."},
{id:"13-10",type:"fill",question:"Vul in: 'Kun jij ___ helpen?' (= mij, ik)",
 ans:enc("mij|me"),exp:"Ik → object form: mij or me."},
]);

/* ── LES 14 · Perfectum — Vorming ── */
x(14,[
{id:"14-6",type:"fill",question:"Vorm het perfectum van 'spelen': ge___",
 ans:enc("gespeeld"),exp:"spelen → speel (stem) → ge+speel → L not in SK → +d → gespeeld."},
{id:"14-7",type:"mc",question:"Perfectum van 'maken':",
 opts:["gemaakt","gemaakd","gemakkt","gegemaakt"],ans:enc("gemaakt"),
 exp:"maken → maak (stem) → ge+maak → K is in SOFT KETCHUP → +t → gemaakt."},
{id:"14-8",type:"fill",question:"Vorm het perfectum van 'reizen' (Z→S uitzondering): ge___",
 ans:enc("gereisd"),exp:"reizen → reis (Z→S) → ge+reis → S in SK but Z→S-exception applies → still +d → gereisd."},
{id:"14-9",type:"mc",question:"Perfectum van 'vertellen' (begint met ver-):",
 opts:["geverteld","verteld","vergeteld","verteeld"],ans:enc("verteld"),
 exp:"vertellen starts with ver- → no ge-. vertel → L not in SK → +d → verteld."},
{id:"14-10",type:"fill",question:"Vorm het perfectum van 'gebruiken': ge___",
 ans:enc("gebruikt"),exp:"gebruiken → gebruik (stem) → ge+gebruik → K in SK → +t → gebruikt."},
]);

/* ── LES 15 · Perfectum — hebben of zijn ── */
x(15,[
{id:"15-6",type:"fill",question:"Vul in: 'De film ___ al begonnen.' (beginnen = zijn-werkwoord)",
 ans:enc("is"),exp:"beginnen is on the zijn-list → de film is begonnen."},
{id:"15-7",type:"mc",question:"'Mijn ouders ___ een nieuw appartement gekocht.' (kopen)",
 opts:["zijn","is","heb","hebben"],ans:enc("hebben"),
 exp:"kopen = no movement, no state change → hebben. mijn ouders (zij) → hebben."},
{id:"15-8",type:"fill",question:"Vul in: 'Waar ___ je het boek gekocht?' (kopen = hebben, jij)",
 ans:enc("heb"),exp:"kopen uses hebben. jij/je → heb (in question form: heb jij/je)."},
{id:"15-9",type:"mc",question:"'De buurt ___ helemaal veranderd.' (veranderen = zijn)",
 opts:["heeft","heb","is","zijn"],ans:enc("is"),
 exp:"veranderen is on the zijn-list → de buurt is veranderd."},
{id:"15-10",type:"fill",question:"Vul in: '___ jullie met de cursus gestopt?' (stoppen = zijn)",
 ans:enc("Zijn"),exp:"stoppen is on the zijn-list → Zijn jullie gestopt?"},
]);

/* ── LES 16 · Bedoelen of Betekenen ── */
x(16,[
{id:"16-5",type:"mc",question:"'Ik neem een bakje tomaten. Wat ___ 'bakje' eigenlijk?' (definitie van een woord)",
 opts:["bedoel","bedoelt","betekent","bedoelden"],ans:enc("betekent"),
 exp:"You are asking for the literal definition of the word 'bakje' → betekenen."},
{id:"16-6",type:"fill",question:"Vul in: 'Wat ___ a.u.b.?' (definitie van een afkorting)",
 ans:enc("betekent"),exp:"You are asking for the literal meaning of the abbreviation a.u.b. → betekenen."},
{id:"16-7",type:"mc",question:"Wanneer gebruik je 'bedoelen'?",
 opts:["Als je de letterlijke betekenis van een woord wilt weten","Als je iemands intentie wilt begrijpen of uitleggen","Als je een afkorting verklaart","Als je een definitie geeft"],
 ans:enc("Als je iemands intentie wilt begrijpen of uitleggen"),
 exp:"Bedoelen is about intention. Betekenen is about the literal meaning of a word."},
{id:"16-8",type:"fill",question:"Vul in: 'Mijn moeder heeft een allergie. Dat ___ dat zij geen noten mag eten.'",
 ans:enc("betekent"),exp:"Dat betekent dat … = expressing a consequence/definition → betekenen."},
{id:"16-9",type:"mc",question:"Wanneer gebruik je 'betekenen'?",
 opts:["Als iemand zijn bedoeling uitlegt","Als je vraagt naar de definitie van een woord of afkorting","Als je iemand niet begrijpt","Als je een voorstel doet"],
 ans:enc("Als je vraagt naar de definitie van een woord of afkorting"),
 exp:"Betekenen = the literal meaning of a word or abbreviation."},
{id:"16-10",type:"fill",question:"Vul in: 'NAVO ___ Noord-Atlantische Verdragsorganisatie.' (definitie afkorting)",
 ans:enc("betekent"),exp:"You are giving the meaning of the abbreviation NAVO → betekenen."},
]);

/* ── LES 17 · Imperfectum ── */
x(17,[
{id:"17-6",type:"fill",question:"Vul in: 'John ___ (vertellen) mij over zijn vakantie.' (enkelvoud)",
 ans:enc("vertelde"),exp:"vertellen → vertel (stem) → L not in SK → singular -de → vertelde."},
{id:"17-7",type:"mc",question:"Imperfectum van 'leven' (V→F, enkelvoud):",
 opts:["lefte","leefde","leefden","leeftes"],ans:enc("leefde"),
 exp:"leven → leef (V→F) → F is in SK but V→F-exception applies: still -de → leefde."},
{id:"17-8",type:"fill",question:"Vul in: 'Marloes ___ (bedanken) ons voor de geweldige dag.' (enkelvoud)",
 ans:enc("bedankte"),exp:"bedanken → bedank (stem) → K in SK → singular -te → bedankte."},
{id:"17-9",type:"mc",question:"Imperfectum van 'reizen' (Z→S uitzondering, enkelvoud):",
 opts:["reisde","reiside","reiste","reiseden"],ans:enc("reisde"),
 exp:"reizen → reis (Z→S) → S in SK but Z→S-exception applies: still -de → reisde."},
{id:"17-10",type:"fill",question:"Vul in: 'Wij ___ (fietsen) door de straten.' (meervoud)",
 ans:enc("fietsten"),exp:"fietsen → fiets → S in SK → plural -ten → fietsten."},
]);

/* ── LES 18 · Modale Werkwoorden Verleden Tijd ── */
x(18,[
{id:"18-6",type:"fill",question:"Vul in: 'Vroeger ___ (mogen, meervoud) wij langer opblijven.'",
 ans:enc("mochten"),exp:"mogen → plural past tense: mochten."},
{id:"18-7",type:"mc",question:"Welke vorm is correct? 'Ik ___ gisteren niet komen.' (kunnen, enkelvoud)",
 opts:["kan","kon","konden","kunnen"],ans:enc("kon"),
 exp:"kunnen → singular past tense: kon."},
{id:"18-8",type:"fill",question:"Vul in: 'Als kind ___ (willen, enkelvoud) zij dierenarts worden.'",
 ans:enc("wilde"),exp:"willen → singular past tense: wilde."},
{id:"18-9",type:"mc",question:"Verleden tijd van 'zullen' (enkelvoud):",
 opts:["zou","zouden","zal","zullen"],ans:enc("zou"),
 exp:"zullen → singular past tense: zou. Also used as conditional (would)."},
{id:"18-10",type:"fill",question:"Vul in: 'Ze ___ (moeten, meervoud) elke dag vroeg opstaan.'",
 ans:enc("moesten"),exp:"moeten → plural past tense: moesten."},
]);

/* ── LES 19 · Scheidbare Werkwoorden ── */
x(19,[
{id:"19-5",type:"fill",question:"Modaal werkwoord: 'Je moet je voor 1 december ___ .' (aanmelden, infinitief)",
 ans:enc("aanmelden"),exp:"With a modal verb, the separable verb goes to the end as a complete infinitive."},
{id:"19-6",type:"mc",question:"Perfectum van 'opbellen': Ik heb ___.",
 opts:["opgebebeld","opgebeld","gebeld op","opbellen"],ans:enc("opgebeld"),
 exp:"opbellen: bellen → bel → ge: op+ge+beld → L not in SK → +d → opgebeld."},
{id:"19-7",type:"fill",question:"Tegenwoordige tijd: 'Wij ___ om 8 uur op Schiphol ___ .' (aankomen)",
 ans:enc("komen / aan"),exp:"Present tense: split the verb. 'komen' at position 2, 'aan' to the end."},
{id:"19-8",type:"mc",question:"Perfectum van 'meenemen': Ik heb ___.",
 opts:["meegenomen","genomen mee","meegeno","nemen mee"],ans:enc("meegenomen"),
 exp:"meenemen: nemen → genomen (irregular). Prefix mee + genomen = meegenomen."},
{id:"19-9",type:"fill",question:"Vul in: 'Wil je de boodschappen ___?' (meenemen, modaal werkwoord → infinitief)",
 ans:enc("meenemen"),exp:"With a modal verb, the infinitive of the separable verb goes to the end."},
{id:"19-10",type:"mc",question:"Om + te met 'uitkiezen': 'Ik vind het moeilijk om gezonde producten ___'",
 opts:["uit te kiezen","te uitkiezen","uit kiezen","uitkiezen te"],
 ans:enc("uit te kiezen"),exp:"Om+te splits the prefix from the verb: uit te kiezen (not: te uitkiezen)."},
]);

/* ── LES 20 · Toekomstige Tijd ── */
x(20,[
{id:"20-5",type:"mc",question:"Welke zin drukt de toekomst uit met structuur #2 (gaan + infinitief)?",
 opts:["Ik ga morgen naar de markt.","Ik ben morgen op kantoor.","Ik zal morgen bellen.","Morgen werkte ik thuis."],
 ans:enc("Ik ga morgen naar de markt."),
 exp:"Structure #2: gaan + infinitive → Ik ga … (going to the market is implicit but clear)."},
{id:"20-6",type:"fill",question:"Vul in: 'Ze ___ volgend jaar trouwen.' (gaan, zij meervoud)",
 ans:enc("gaan"),exp:"gaan + infinitive for the future. zij (plural) → gaan."},
{id:"20-7",type:"mc",question:"'Er ___ veel mensen op het concert komen.' (zullen, onzeker)",
 opts:["gaan","zullen","komen","zijn"],ans:enc("zullen"),
 exp:"Use zullen for uncertain or unconfirmed future actions."},
{id:"20-8",type:"fill",question:"Vul in: 'Wij ___ volgend jaar in Australië studeren.' (gaan, wij)",
 ans:enc("gaan"),exp:"gaan + infinitive. wij → gaan."},
{id:"20-9",type:"mc",question:"'De directeur ___ het hotel inspecteren.' (zullen, hij, onzeker)",
 opts:["gaat","is","zal","wil"],ans:enc("zal"),
 exp:"Zullen (uncertain/likely) → singular: zal."},
{id:"20-10",type:"fill",question:"Vul in: 'De cursus ___ volgende week beginnen.' (gaan, de cursus)",
 ans:enc("gaat"),exp:"gaan + infinitive. de cursus (singular, hij/zij) → gaat."},
]);

/* ── LES 21 · Die & Dat als Verwijzing ── */
x(21,[
{id:"21-6",type:"fill",question:"Vul in: 'Heb je mijn pen gezien? Ja, ___ ligt onder je boek.' (de pen)",
 ans:enc("die"),exp:"de pen = de-word → reference with die."},
{id:"21-7",type:"mc",question:"Kies die of dat: 'Was de trein op tijd? Nee, ___ was weer te laat.'",
 opts:["die","dat","dit","deze"],ans:enc("die"),
 exp:"Reference to de trein (de-word) → die."},
{id:"21-8",type:"fill",question:"Vul in: 'Mag ik je nieuwe fiets proberen? Ja, ___ mag.' (verwijzing naar de handeling)",
 ans:enc("dat"),exp:"Reference to the whole action (trying the bike) → dat."},
{id:"21-9",type:"mc",question:"Kies die of dat: 'Heb je de film gezien? Ja, ___ was geweldig!'",
 opts:["die","dat","dit","deze"],ans:enc("die"),
 exp:"de film = de-word → reference with die."},
{id:"21-10",type:"fill",question:"Vul in: 'Waar zijn je koffers? O, ___ staan nog buiten.' (de koffers)",
 ans:enc("die"),exp:"de koffers = de-word (plural) → reference with die."},
]);

/* ── LES 22 · Voegwoorden ── */
x(22,[
{id:"22-6",type:"mc",question:"Kies het juiste voegwoord: 'Ik ga niet mee ___ ik moe ben.' (normale woordvolgorde bewaard)",
 opts:["omdat","want","zodat","als"],ans:enc("want"),
 exp:"Want keeps normal word order. Omdat sends the verb to the end: '…omdat ik moe ben.'"},
{id:"22-7",type:"fill",question:"Vul in: 'Hij belt zijn moeder ___ hij naar huis gaat.' (voordat = before)",
 ans:enc("voordat"),exp:"voordat = before. It is a hard conjunction: verb goes to the end."},
{id:"22-8",type:"mc",question:"'___ mijn moeder ernstig ziek was, heeft hij voor mij gezorgd.' (kies het juiste voegwoord)",
 opts:["Als","Toen","Voordat","Zodat"],ans:enc("Toen"),
 exp:"Toen = when (past). Toen ALWAYS + past tense. Als = when (present/future or repeated)."},
{id:"22-9",type:"fill",question:"Vul in: 'Ik wacht hier ___ jij klaar bent.' (until)",
 ans:enc("totdat"),exp:"totdat = until. Hard conjunction: verb goes to the end of the clause."},
{id:"22-10",type:"mc",question:"Kies de correcte woordvolgorde met 'omdat':",
 opts:["...omdat ik ben moe.","...omdat ik moe ben.","...omdat moe ik ben.","...omdat ben ik moe."],
 ans:enc("...omdat ik moe ben."),
 exp:"After 'omdat': subject + other elements + ALL verbs last. '…omdat ik moe ben.'"},
]);

})();
