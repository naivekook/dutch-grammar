/* ══════════════════════════════════════════════════
   LESSONS  (22 lessons)
══════════════════════════════════════════════════ */
const LESSONS = [

/* ─── LESSON 1 ─────────────────────────────────── */
{id:1, title:"Onderwerpen & Tegenwoordige Tijd", icon:"📘",
expl:`<h3>Onderwerpen (Subjects)</h3>
<table class="gt"><thead><tr><th>Dutch</th><th>English</th><th>Note</th></tr></thead><tbody>
<tr><td class="hl">Ik</td><td>I</td><td></td></tr>
<tr><td class="hl">Jij / je</td><td>You (informal)</td><td>jij = stressed form</td></tr>
<tr><td class="hl">U</td><td>You (formal)</td><td>use with strangers/elderly</td></tr>
<tr><td class="hl">Hij / Zij / ze / Het</td><td>He / She / It</td><td></td></tr>
<tr><td class="hl">Wij / we</td><td>We</td><td>wij = stressed</td></tr>
<tr><td class="hl">Jullie</td><td>You (plural)</td><td></td></tr>
<tr><td class="hl">Zij / ze</td><td>They</td><td></td></tr>
</tbody></table>
<h3 style="margin-top:14px">Werkwoorden — Regular Verbs</h3>
<p>All regular verbs end in <strong>-en</strong>. To conjugate, follow 3 steps:</p>
<div class="rule">
<strong>Step 1:</strong> Remove <em>-en</em> → ik-vorm (stem). e.g. luister<strong>en</strong> → <strong>luister</strong><br>
<strong>Step 2:</strong> ik = stem alone → <em>ik luister</em><br>
<strong>Step 3:</strong> jij/u/hij/zij/het = stem + <strong>t</strong> → <em>luistert</em><br>
<strong>Plural</strong> (wij/jullie/zij) = infinitive → <em>luisteren</em>
</div>
<div class="tip"><strong>⚠ Question rule:</strong> When <strong>jij/je</strong> comes AFTER the verb (question), drop the <strong>-t</strong>: <em>Jij woont</em> → <em>Woon je?</em></div>
<div class="exbox"><div class="exlbl">Examples — luisteren</div>
<div class="exrow">
<span class="exnl">Ik luister naar muziek.</span><span class="exen">I listen to music.</span>
<span class="exnl">Hij luistert naar de radio.</span><span class="exen">He listens to the radio.</span>
<span class="exnl">Luister jij ook?</span><span class="exen">Do you listen too? (no -t!)</span>
<span class="exnl">Wij luisteren samen.</span><span class="exen">We listen together.</span>
</div></div>
<h3 style="margin-top:14px">Irregular: zijn, hebben, gaan</h3>
<table class="gt"><thead><tr><th>Subject</th><th>zijn (to be)</th><th>hebben (to have)</th><th>gaan (to go)</th></tr></thead><tbody>
<tr><td>ik</td><td>ben</td><td>heb</td><td>ga</td></tr>
<tr><td>jij/u/hij/zij/het</td><td>is / bent(u)</td><td>hebt / heeft</td><td>gaat</td></tr>
<tr><td>wij/jullie/zij</td><td>zijn</td><td>hebben</td><td>gaan</td></tr>
</tbody></table>`,
exercises:[
{id:"1-1",type:"mc",question:"Kies de juiste vorm: Johan ___ samen met zijn vriend Bas.",
opts:["speel","speelt","spelen","speelden"],ans:enc("speelt"),
exp:"For hij/zij/het: stem + t. spelen → stem 'speel' → speelt."},
{id:"1-2",type:"mc",question:"Kies de juiste vorm: Jullie ___ uit Argentinië.",
opts:["komen","komt","kom","komst"],ans:enc("komen"),
exp:"Jullie (plural) uses the infinitive: komen."},
{id:"1-3",type:"fill",question:"Vul de juiste vorm van 'wonen' in: Wij ___ in Utrecht.",
ans:enc("wonen"),exp:"Wij (plural) = infinitive: wonen."},
{id:"1-4",type:"mc",question:"Jij woont in Amsterdam. Maak er een vraag van:",
opts:["Woont jij in Amsterdam?","Woon jij in Amsterdam?","Wonen jij in Amsterdam?","Woont je in Amsterdam?"],
ans:enc("Woon jij in Amsterdam?"),exp:"When jij/je comes after the verb in a question, drop the -t: woonT → Woon jij?"},
{id:"1-5",type:"fill",question:"Vul in: De voetbalclub ___ de beker gewonnen. (hebben)",
ans:enc("heeft"),exp:"De voetbalclub = singular third person → heeft (irregular: hebben → heeft)."},
]},

/* ─── LESSON 2 ─────────────────────────────────── */
{id:2, title:"Getallen & Nuttige Zinnen", icon:"🔢",
expl:`<h3>Telwoorden — Numbers</h3>
<div class="wlist">
<div class="wi"><span class="wnl">0 – 10</span><span class="wen">nul, één, twee, drie, vier, vijf, zes, zeven, acht, negen, tien</span></div>
<div class="wi"><span class="wnl">11 – 20</span><span class="wen">elf, twaalf, dertien, veertien, vijftien, zestien, zeventien, achttien, negentien, twintig</span></div>
<div class="wi"><span class="wnl">21</span><span class="wen">eenentwintig</span></div>
<div class="wi"><span class="wnl">22 – 99</span><span class="wen">[units]en[tens]: tweeëntwintig, drieëntwintig…</span></div>
<div class="wi"><span class="wnl">30 / 40 / 50</span><span class="wen">dertig / veertig / vijftig</span></div>
<div class="wi"><span class="wnl">60 / 70 / 80 / 90</span><span class="wen">zestig / zeventig / tachtig / negentig</span></div>
<div class="wi"><span class="wnl">100 / 101</span><span class="wen">honderd / honderdenéén</span></div>
</div>
<div class="rule"><strong>Pattern 21–99:</strong> units + <em>en</em> + tens → drieënveertig (43), vijfenvijftig (55)</div>
<h3 style="margin-top:14px">Nuttige Zinnen — Useful Phrases</h3>
<table class="gt"><thead><tr><th>Dutch</th><th>English</th></tr></thead><tbody>
<tr><td>Wie ben jij?</td><td>Who are you?</td></tr>
<tr><td>Wat is je voornaam / achternaam?</td><td>What is your first / last name?</td></tr>
<tr><td>Waar woon je? / Waar kom je vandaan?</td><td>Where do you live? / Where do you come from?</td></tr>
<tr><td>Wat is je nationaliteit?</td><td>What is your nationality?</td></tr>
<tr><td>Goedemorgen / Goedemiddag / Goedenavond</td><td>Good morning / afternoon / evening</td></tr>
<tr><td>Tot ziens / Tot straks / Tot morgen</td><td>Goodbye / See you soon / See you tomorrow</td></tr>
</tbody></table>`,
exercises:[
{id:"2-1",type:"mc",question:"Hoe zeg je 45 in het Nederlands?",
opts:["vijfveertig","vijfenveertig","veertigvijf","veertigenvijf"],ans:enc("vijfenveertig"),
exp:"Units + en + tens: vijf + en + veertig = vijfenveertig (45)."},
{id:"2-2",type:"fill",question:"Hoe zeg je 188 in het Nederlands?",
ans:enc("honderdachtentachtig"),exp:"100 = honderd, 88 = achtenachtig → honderdachtentachtig (188)."},
{id:"2-3",type:"mc",question:"Wat betekent 'Waar kom je vandaan?':",
opts:["Where do you live?","What is your name?","Where do you come from?","How old are you?"],
ans:enc("Where do you come from?"),exp:"'Vandaan' relates to origin. 'Waar kom je vandaan?' = Where do you come from?"},
{id:"2-4",type:"mc",question:"Welke begroeting gebruik je 's ochtends?",
opts:["Goedenavond","Goedemiddag","Goedemorgen","Tot ziens"],ans:enc("Goedemorgen"),
exp:"Goedemorgen = morning. Goedemiddag = afternoon. Goedenavond = evening."},
{id:"2-5",type:"fill",question:"Je familienaam is je '___ naam'. (vul in: voor of achter)",
ans:enc("achter"),exp:"Achternaam = family/last name. Voornaam = first name."},
]},

/* ─── LESSON 3 ─────────────────────────────────── */
{id:3, title:"Zinsbouw & Vragen", icon:"🗂",
expl:`<h3>Zinstructuur — Sentence Structure</h3>
<div class="exbox"><div class="exlbl">Main sentence (Hoofdzin)</div>
<p style="font-size:.85rem"><strong>Subject + Verb + Time + Place + Object</strong></p>
<div class="exrow">
<span class="exnl">Ik woon nu 3 jaar in Amsterdam.</span><span class="exen">I have lived in Amsterdam for 3 years.</span>
</div></div>
<div class="exbox"><div class="exlbl">Yes/No question (Ja/nee vraag)</div>
<p style="font-size:.85rem"><strong>Verb + Subject + Time + Place + Object?</strong></p>
<div class="exrow">
<span class="exnl">Woon je nu in Amsterdam?</span><span class="exen">Do you live in Amsterdam now?</span>
</div></div>
<div class="exbox"><div class="exlbl">W/H question (Vraagwoord zin)</div>
<p style="font-size:.85rem"><strong>W/H word + Verb + Subject + …</strong></p>
<div class="exrow">
<span class="exnl">Wat heb jij vorige week gedaan?</span><span class="exen">What did you do last week?</span>
</div></div>
<h3 style="margin-top:14px">Vraagwoorden — Question Words</h3>
<div class="wlist">
<div class="wi"><span class="wnl">Wie</span><span class="wen">who</span></div>
<div class="wi"><span class="wnl">Wat</span><span class="wen">what</span></div>
<div class="wi"><span class="wnl">Waar</span><span class="wen">where</span></div>
<div class="wi"><span class="wnl">Wanneer</span><span class="wen">when</span></div>
<div class="wi"><span class="wnl">Waarom</span><span class="wen">why</span></div>
<div class="wi"><span class="wnl">Hoe</span><span class="wen">how</span></div>
<div class="wi"><span class="wnl">Hoeveel</span><span class="wen">how many/much</span></div>
<div class="wi"><span class="wnl">Welk / Welke</span><span class="wen">which (het / de word)</span></div>
</div>
<div class="tip"><strong>Welk vs Welke:</strong> Use <strong>welk</strong> before het-words, <strong>welke</strong> before de-words.<br>
e.g. <em>Welk nummer?</em> (het nummer) vs <em>Welke taart?</em> (de taart)</div>`,
exercises:[
{id:"3-1",type:"fill",question:"Vul het juiste vraagwoord in: ___ heet jouw broer?",
ans:enc("Hoe"),exp:"Hoe heet = What is … called? (asking for a name). Answer: mijn broer heet Ricardo."},
{id:"3-2",type:"mc",question:"Vul in: ___ woont jouw moeder?",
opts:["Wie","Wat","Waar","Wanneer"],ans:enc("Waar"),
exp:"Waar = question about a place. We are asking where mother lives."},
{id:"3-3",type:"mc",question:"Vul in: ___ broers heb je?",
opts:["Hoe","Hoeveel","Wie","Welke"],ans:enc("Hoeveel"),
exp:"Hoeveel = question about a quantity. Answer: 'Ik heb 4 broers.'"},
{id:"3-4",type:"mc",question:"Welke is correct? ___ nummer vind jij mooi? (het nummer)",
opts:["Welke nummer","Welk nummer","Wat nummer","Wie nummer"],ans:enc("Welk nummer"),
exp:"Use welk before het-words. 'nummer' = het nummer → welk nummer."},
{id:"3-5",type:"fill",question:"Vul het juiste vraagwoord in: ___ is je adres?",
ans:enc("Wat"),exp:"Wat = question about a thing/piece of information. Asking what the address is."},
]},

/* ─── LESSON 4 ─────────────────────────────────── */
{id:4, title:"Bezittelijke Voornaamwoorden", icon:"👤",
expl:`<h3>Bezittelijk voornaamwoord — Possessive Pronouns</h3>
<table class="gt"><thead><tr><th>Subject</th><th>Possessive</th><th>Example</th></tr></thead><tbody>
<tr><td>Ik</td><td class="hl">mijn</td><td>mijn broer (my brother)</td></tr>
<tr><td>Jij / je</td><td class="hl">jouw / je</td><td>jouw zus (your sister)</td></tr>
<tr><td>U</td><td class="hl">uw</td><td>uw moeder (your mother – formal)</td></tr>
<tr><td>Hij</td><td class="hl">zijn</td><td>zijn vader (his father)</td></tr>
<tr><td>Zij / ze</td><td class="hl">haar</td><td>haar oom (her uncle)</td></tr>
<tr><td>Wij / we</td><td class="hl">onze / ons</td><td>onze tante / ons kind</td></tr>
<tr><td>Jullie</td><td class="hl">jullie</td><td>jullie neef (your nephew)</td></tr>
<tr><td>Zij / ze (they)</td><td class="hl">hun</td><td>hun familie (their family)</td></tr>
</tbody></table>
<div class="tip"><strong>Onze vs Ons:</strong> Use <strong>onze</strong> before de-words, <strong>ons</strong> before het-words.<br>
e.g. <em>onze tante</em> (de tante) — <em>ons huis</em> (het huis)</div>
<div class="exbox"><div class="exlbl">More examples</div>
<div class="exrow">
<span class="exnl">Mijn adres is Laan 5.</span><span class="exen">My address is Laan 5.</span>
<span class="exnl">Haar achternaam is Jansen.</span><span class="exen">Her surname is Jansen.</span>
<span class="exnl">Onze cursus begint morgen.</span><span class="exen">Our course starts tomorrow.</span>
<span class="exnl">Hun vakantie was geweldig.</span><span class="exen">Their holiday was great.</span>
</div></div>`,
exercises:[
{id:"4-1",type:"fill",question:"Ik woon in Rotterdam. ___ adres is Feyenoordlaan 74.",
ans:enc("Mijn"),exp:"Ik → mijn (my)."},
{id:"4-2",type:"mc",question:"Dat is Mariska en ___ achternaam is van den Berg.",
opts:["zijn","haar","hun","jouw"],ans:enc("haar"),
exp:"Mariska is feminine (zij/ze) → haar (her)."},
{id:"4-3",type:"fill",question:"Wij komen uit Oostenrijk en ___ Nederlandse cursus begint morgen. ('cursus' = de cursus)",
ans:enc("onze"),exp:"Wij → onze/ons. 'cursus' = de cursus (de-word) → onze."},
{id:"4-4",type:"mc",question:"Yolanda en Marloes vertellen over ___ vakantie.",
opts:["zijn","haar","hun","onze"],ans:enc("hun"),
exp:"Yolanda en Marloes = zij (plural) → hun (used for people)."},
{id:"4-5",type:"mc",question:"Meneer de Vries, gaat u met ___ buurman naar de supermarkt?",
opts:["jouw","zijn","uw","hun"],ans:enc("uw"),
exp:"U (formal) → uw (formal possessive pronoun)."},
]},

/* ─── LESSON 5 ─────────────────────────────────── */
{id:5, title:"Tijdvoorzetsels & De Klok", icon:"🕐",
expl:`<h3>Voorzetsels van tijd — in / om / op</h3>
<table class="gt"><thead><tr><th>Preposition</th><th>Used before</th><th>Examples</th></tr></thead><tbody>
<tr><td class="hl">in</td><td>months, seasons, years</td><td>in oktober, in de zomer, in 2012</td></tr>
<tr><td class="hl">om</td><td>clock times</td><td>om 9 uur, om half tien</td></tr>
<tr><td class="hl">op</td><td>specific dates & days</td><td>op donderdag, op 4 april 2022</td></tr>
</tbody></table>
<h3 style="margin-top:14px">De Klok — Telling Time</h3>
<div class="rule">Dutch splits the hour around <strong>half</strong> (the halfway point). Key vocabulary: <strong>over</strong> (past) · <strong>voor</strong> (before) · <strong>kwart</strong> (quarter) · <strong>half</strong> (half, but refers to the NEXT hour!)</div>
<table class="gt"><thead><tr><th>Time</th><th>Dutch</th></tr></thead><tbody>
<tr><td>11:00</td><td>het is elf uur</td></tr>
<tr><td>11:05</td><td>het is vijf over elf</td></tr>
<tr><td>11:15</td><td>het is kwart over elf</td></tr>
<tr><td>11:25</td><td>het is vijf voor half twaalf</td></tr>
<tr><td>11:30</td><td>het is half twaalf</td></tr>
<tr><td>11:35</td><td>het is vijf over half twaalf</td></tr>
<tr><td>11:45</td><td>het is kwart voor twaalf</td></tr>
<tr><td>11:50</td><td>het is tien voor twaalf</td></tr>
</tbody></table>
<div class="tip"><strong>⚠ Half twaalf = 11:30!</strong> "Half" refers to halfway to the NEXT hour. So half twaalf = half way to twelve = 11:30.</div>`,
exercises:[
{id:"5-1",type:"fill",question:"De cursus begint ___ dinsdag 8 april. (specific day/date)",
ans:enc("op"),exp:"Use op for specific days and dates: op dinsdag, op 8 april."},
{id:"5-2",type:"fill",question:"De cursus begint ___ 10 uur. (a clock time)",
ans:enc("om"),exp:"Use om for clock times: om 10 uur, om half elf."},
{id:"5-3",type:"fill",question:"De tweede cursus begint ___ februari. (a month)",
ans:enc("in"),exp:"Use in for months and seasons: in februari, in de winter."},
{id:"5-4",type:"mc",question:"Hoe zeg je 11:15 in het Nederlands?",
opts:["kwart voor elf","kwart over elf","vijf over half elf","tien over elf"],
ans:enc("kwart over elf"),exp:"11:15 = 15 minutes past 11 = kwart over elf."},
{id:"5-5",type:"mc",question:"Hoe zeg je 11:30 in het Nederlands?",
opts:["half elf","half twaalf","kwart voor twaalf","dertig over elf"],
ans:enc("half twaalf"),exp:"Half + the NEXT hour. 11:30 is halfway to 12 → half twaalf."},
{id:"5-6",type:"mc",question:"Hoe zeg je 11:45 in het Nederlands?",
opts:["kwart over elf","kwart voor elf","kwart voor twaalf","drie kwart twaalf"],
ans:enc("kwart voor twaalf"),exp:"11:45 = 15 minutes before 12 = kwart voor twaalf."},
]},

/* ─── LESSON 6 ─────────────────────────────────── */
{id:6, title:"Inversiezinnen", icon:"🔄",
expl:`<h3>Inversie — Inversion</h3>
<p>In a normal sentence the order is <strong>Subject → Verb → rest</strong>. But when you start a sentence with a time or place expression, the verb and subject <strong>swap</strong> (invert).</p>
<div class="exbox"><div class="exlbl">Normal sentence</div>
<div class="exrow">
<span class="exnl">Ik ga maandag naar Amsterdam.</span><span class="exen">I go to Amsterdam on Monday.</span>
</div></div>
<div class="exbox"><div class="exlbl">Inversion – start with TIME</div>
<p style="font-size:.82rem"><strong>Time + Verb + Subject + rest</strong></p>
<div class="exrow">
<span class="exnl">Maandag ga ik naar Amsterdam.</span><span class="exen">On Monday I go to Amsterdam.</span>
</div></div>
<div class="exbox"><div class="exlbl">Inversion – start with PLACE</div>
<p style="font-size:.82rem"><strong>Place + Verb + Subject + rest</strong></p>
<div class="exrow">
<span class="exnl">In Amsterdam ga ik winkelen.</span><span class="exen">In Amsterdam I go shopping.</span>
</div></div>
<div class="tip"><strong>Key rule:</strong> Whatever comes first in the sentence, the <strong>verb must stay in position 2</strong>. The subject moves to position 3.</div>`,
exercises:[
{id:"6-1",type:"mc",question:"'We drinken koffie in het café.' Begin met 'In het café':",
opts:["In het café wij drinken koffie.","In het café drinken wij koffie.","In het café koffie drinken wij.","In het café drinken koffie wij."],
ans:enc("In het café drinken wij koffie."),exp:"Place + Verb + Subject + Object. The verb (drinken) is at position 2."},
{id:"6-2",type:"mc",question:"'Ze zijn op dit moment in Spanje op vakantie.' Begin met 'Op dit moment':",
opts:["Op dit moment zijn ze in Spanje op vakantie.","Op dit moment ze zijn in Spanje op vakantie.","Op dit moment in Spanje zijn ze op vakantie.","Op dit moment op vakantie zijn ze in Spanje."],
ans:enc("Op dit moment zijn ze in Spanje op vakantie."),exp:"Time + Verb + Subject + rest. zijn comes directly after the time element."},
{id:"6-3",type:"fill",question:"'Marloes is zaterdag jarig.' Rewrite starting with 'Zaterdag': Zaterdag ___ Marloes jarig.",
ans:enc("is"),exp:"Inversion: Time (Zaterdag) + Verb (is) + Subject (Marloes) + rest."},
{id:"6-4",type:"mc",question:"Welke zin heeft de juiste inversie?",
opts:["Gisteren ik werkte thuis.","Gisteren werkte ik thuis.","Gisteren thuis werkte ik.","Gisteren ik thuis werkte."],
ans:enc("Gisteren werkte ik thuis."),exp:"Time + Verb + Subject + place. The verb always comes directly after the first element."},
]},

/* ─── LESSON 7 ─────────────────────────────────── */
{id:7, title:"De- en Het-woorden", icon:"📖",
expl:`<h3>De-woorden en Het-woorden</h3>
<p>Every Dutch noun has an article: <strong>de</strong> (common gender) or <strong>het</strong> (neuter). Learning the rules helps, but many words must be memorised.</p>
<table class="gt"><thead><tr><th>DE words (common patterns)</th><th>HET words (common patterns)</th></tr></thead><tbody>
<tr><td>Names of people/roles: <em>de man, de agent</em></td><td>Diminutives (-je): <em>het meisje, het boompje</em></td></tr>
<tr><td>Suffix -heid: <em>de overheid</em></td><td>Languages: <em>het Nederlands</em></td></tr>
<tr><td>Suffix -ing: <em>de verzekering</em></td><td>Metals: <em>het goud, het zilver</em></td></tr>
<tr><td>Suffix -ie: <em>de politie</em></td><td>Sports: <em>het voetbal, het tennis</em></td></tr>
<tr><td>Suffix -ij: <em>de partij</em></td><td>Compass directions: <em>het noorden</em></td></tr>
<tr><td>Suffix -teit: <em>de universiteit</em></td><td>Prefix ge-/be-/ver-/ont- (2 syll.): <em>het gebit</em></td></tr>
<tr><td>Suffix -uur: <em>de cultuur</em></td><td>Suffix -isme/-ment/-sel/-um: <em>het abonnement</em></td></tr>
<tr><td>Trees, plants: <em>de roos, de eik</em></td><td></td></tr>
</tbody></table>
<div class="tip"><strong>Tip:</strong> When in doubt: most words are <strong>de</strong>-words. About 75% of Dutch nouns use <em>de</em>.</div>`,
exercises:[
{id:"7-1",type:"mc",question:"Welk lidwoord hoort bij 'meisje' (verkleinwoord)?",
opts:["de meisje","het meisje","een meisje or het meisje","both de and het"],
ans:enc("het meisje"),exp:"All diminutives (-je) are het-words: het meisje, het boompje, het kindje."},
{id:"7-2",type:"mc",question:"Welk lidwoord hoort bij 'universiteit'?",
opts:["het universiteit","de universiteit","both are possible","no article needed"],
ans:enc("de universiteit"),exp:"Suffix -teit → always de: de universiteit, de kwaliteit."},
{id:"7-3",type:"mc",question:"Welk lidwoord hoort bij 'abonnement'?",
opts:["de abonnement","het abonnement","een abonnement (no rule)","both de and het"],
ans:enc("het abonnement"),exp:"Suffix -ment → het-word: het abonnement, het appartement."},
{id:"7-4",type:"mc",question:"Welk lidwoord hoort bij 'voetbal'?",
opts:["de voetbal","het voetbal","both are used","neither"],
ans:enc("het voetbal"),exp:"Sports are het-words: het voetbal, het tennis, het zwemmen."},
{id:"7-5",type:"mc",question:"Welk lidwoord hoort bij 'verzekering'?",
opts:["het verzekering","de verzekering","both","no article"],
ans:enc("de verzekering"),exp:"Suffix -ing → always de: de verzekering, de vergadering."},
]},

/* ─── LESSON 8 ─────────────────────────────────── */
{id:8, title:"Dagen van de Week & Meervoud", icon:"📅",
expl:`<h3>Dagen van de week</h3>
<div class="wlist">
<div class="wi"><span class="wnl">maandag</span><span class="wen">Monday</span></div>
<div class="wi"><span class="wnl">dinsdag</span><span class="wen">Tuesday</span></div>
<div class="wi"><span class="wnl">woensdag</span><span class="wen">Wednesday</span></div>
<div class="wi"><span class="wnl">donderdag</span><span class="wen">Thursday</span></div>
<div class="wi"><span class="wnl">vrijdag</span><span class="wen">Friday</span></div>
<div class="wi"><span class="wnl">zaterdag</span><span class="wen">Saturday</span></div>
<div class="wi"><span class="wnl">zondag</span><span class="wen">Sunday</span></div>
<div class="wi"><span class="wnl">gisteren / vandaag / morgen</span><span class="wen">yesterday / today / tomorrow</span></div>
<div class="wi"><span class="wnl">eergisteren / overmorgen</span><span class="wen">day before yesterday / day after tomorrow</span></div>
</div>
<h3 style="margin-top:14px">Meervoud — Plural Forms</h3>
<table class="gt"><thead><tr><th>Singular ends in…</th><th>Plural rule</th><th>Example</th></tr></thead><tbody>
<tr><td>-e, -er, -em, -ie, -eau</td><td>add <strong>-s</strong></td><td>vakantie → vakanties; niveau → niveaus</td></tr>
<tr><td>-a, -o, -u, -i, -y</td><td>add <strong>-'s</strong></td><td>taxi → taxi's; baby → baby's</td></tr>
<tr><td>most other endings</td><td>add <strong>-en</strong></td><td>schoen → schoenen; film → films? No: filmen? → Actually: film → films (ends in consonant cluster)</td></tr>
</tbody></table>
<div class="tip"><strong>Note:</strong> Most words take <strong>-en</strong>. The -s rule applies to words ending in unstressed -e, -er, -el, -em, -en, -ie, -eau.</div>`,
exercises:[
{id:"8-1",type:"mc",question:"Wat is het meervoud van 'vakantie'?",
opts:["vakantieen","vakanties","vakantiens","vakantie's"],ans:enc("vakanties"),
exp:"vakantie ends in -ie → add -s → vakanties."},
{id:"8-2",type:"mc",question:"Wat is het meervoud van 'taxi'?",
opts:["taxien","taxis","taxi's","taxees"],ans:enc("taxi's"),
exp:"taxi ends in -i → add -'s → taxi's."},
{id:"8-3",type:"mc",question:"Wat is het meervoud van 'schoen'?",
opts:["schoens","schoenen","schoe's","schoen's"],ans:enc("schoenen"),
exp:"schoen ends in a consonant → add -en → schoenen."},
{id:"8-4",type:"fill",question:"Welke dag komt na dinsdag?",
ans:enc("woensdag"),exp:"The order: maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag."},
{id:"8-5",type:"mc",question:"Wat is het meervoud van 'broer'?",
opts:["broers","broederen","broeren","broer's"],ans:enc("broers"),
exp:"broer ends in -er → add -s → broers."},
]},

/* ─── LESSON 9 ─────────────────────────────────── */
{id:9, title:"Bijvoeglijke Naamwoorden", icon:"🎨",
expl:`<h3>Bijvoeglijk naamwoord — Adjective Rules</h3>
<p>An adjective describing a noun <strong>before</strong> it usually gets an extra <strong>-e</strong>. But there is one important exception.</p>
<table class="gt"><thead><tr><th>Situation</th><th>Add -e?</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>de</strong> + adj + noun</td><td class="hl">YES</td><td>de mooie jongen</td></tr>
<tr><td><strong>het</strong> + adj + noun</td><td class="hl">YES</td><td>het mooie meisje</td></tr>
<tr><td><strong>een</strong> + adj + <strong>de</strong>-noun</td><td class="hl">YES</td><td>een mooie jongen</td></tr>
<tr><td><strong>een</strong> + adj + <strong>het</strong>-noun</td><td class="hl">NO</td><td>een mooi meisje ✗ not mooie</td></tr>
<tr><td>no article + <strong>de</strong>-noun</td><td class="hl">YES</td><td>mooie jongens</td></tr>
<tr><td>no article + <strong>het</strong>-noun</td><td class="hl">NO</td><td>mooi water</td></tr>
</tbody></table>
<div class="rule"><strong>The ONE exception to memorise:</strong> <em>een</em> + het-word → NO -e on the adjective. All other combinations: add -e.</div>
<div class="exbox"><div class="exlbl">Examples</div>
<div class="exrow">
<span class="exnl">een goed idee (het idee)</span><span class="exen">a good idea — no -e!</span>
<span class="exnl">een goede student (de student)</span><span class="exen">a good student — add -e</span>
<span class="exnl">het lekkere eten</span><span class="exen">the tasty food — add -e</span>
<span class="exnl">lekker eten (no article, het-word)</span><span class="exen">tasty food — no -e</span>
</div></div>`,
exercises:[
{id:"9-1",type:"mc",question:"'Ik vind dat een heel goed/___ idee.' (het idee)",
opts:["goed","goede","goeds","goedie"],ans:enc("goed"),
exp:"een + het-word → NO -e. 'idee' is het idee, so: een goed idee."},
{id:"9-2",type:"mc",question:"'Wat heb je een knap/___ vrouw!' (de vrouw, with 'een')",
opts:["knap","knappe","knaps","knapte"],ans:enc("knappe"),
exp:"een + de-word → add -e. 'vrouw' is de vrouw: een knappe vrouw."},
{id:"9-3",type:"mc",question:"'Ik wil graag een vers/___ sinaasappelsap.' (het sap)",
opts:["verse","vers","verste","versen"],ans:enc("vers"),
exp:"een + het-word → NO -e. 'sinaasappelsap' is het sap: een vers sinaasappelsap."},
{id:"9-4",type:"mc",question:"'Je hebt een leuk/___ bril.' (de bril)",
opts:["leuk","leuke","leuks","leukte"],ans:enc("leuke"),
exp:"een + de-word → add -e. 'bril' is de bril: een leuke bril."},
{id:"9-5",type:"mc",question:"'Marloes heeft een Amerikaans/___ achternaam.' (de achternaam)",
opts:["Amerikaans","Amerikaanse","Amerikaansen","Amerikaanste"],
ans:enc("Amerikaanse"),exp:"een + de-word → add -e: een Amerikaanse achternaam."},
]},

/* ─── LESSON 10 ─────────────────────────────────── */
{id:10, title:"Modale Werkwoorden (Tegenwoordige Tijd)", icon:"⚡",
expl:`<h3>Modale werkwoorden</h3>
<p>Modal verbs have <strong>one form for all singular subjects</strong> and another for all plural subjects.</p>
<table class="gt"><thead><tr><th>Infinitive</th><th>Meaning</th><th>Singular</th><th>Plural</th><th>Use</th></tr></thead><tbody>
<tr><td class="hl">mogen</td><td>may / allowed to</td><td>mag</td><td>mogen</td><td>asking permission</td></tr>
<tr><td class="hl">willen</td><td>want to</td><td>wil</td><td>willen</td><td>expressing desire</td></tr>
<tr><td class="hl">moeten</td><td>must / have to</td><td>moet</td><td>moeten</td><td>obligation</td></tr>
<tr><td class="hl">kunnen</td><td>can / be able to</td><td>kan</td><td>kunnen</td><td>ability/possibility</td></tr>
<tr><td class="hl">zullen</td><td>shall / will</td><td>zal</td><td>zullen</td><td>proposals / uncertainty</td></tr>
</tbody></table>
<div class="exbox"><div class="exlbl">Examples</div>
<div class="exrow">
<span class="exnl">Mag ik een biertje?</span><span class="exen">May I have a beer? (permission)</span>
<span class="exnl">Ik wil naar Parijs gaan.</span><span class="exen">I want to go to Paris. (desire)</span>
<span class="exnl">Ik moet naar school.</span><span class="exen">I have to go to school. (obligation)</span>
<span class="exnl">Ik kan mijn zus ophalen.</span><span class="exen">I can pick up my sister. (ability)</span>
<span class="exnl">Zullen we naar de dierentuin gaan?</span><span class="exen">Shall we go to the zoo? (proposal)</span>
</div></div>
<div class="tip"><strong>Word order:</strong> The modal verb stays at position 2; the main infinitive goes to the <strong>end</strong> of the sentence.<br>
<em>Ik wil graag twee koffie <strong>bestellen</strong>.</em></div>`,
exercises:[
{id:"10-1",type:"mc",question:"'Beste studenten, jullie ___ samenwerken.' (are allowed to)",
opts:["moeten","willen","mogen","kunnen"],ans:enc("mogen"),
exp:"Mogen = to have permission. Jullie mogen = you are allowed to."},
{id:"10-2",type:"mc",question:"'Ik ben jarig. Ik ___ jullie een drankje aanbieden.' (want to)",
opts:["mag","moet","kan","wil"],ans:enc("wil"),
exp:"Willen = to want something. Ik wil = I want to do this."},
{id:"10-3",type:"fill",question:"___ we naar de dierentuin gaan? (maak een voorstel)",
ans:enc("Zullen"),exp:"Use zullen for proposals: Zullen we …? = Shall we …?"},
{id:"10-4",type:"mc",question:"'Ricardo ___ op vakantie naar Griekenland.' (wants to go)",
opts:["mag","moet","wil","zal"],ans:enc("wil"),
exp:"Willen = to want. Ricardo wil = Ricardo wants to do this."},
{id:"10-5",type:"mc",question:"'Ik ___ mijn zusje van school halen.' (have the option/ability)",
opts:["moet","wil","mag","kan"],ans:enc("kan"),
exp:"Kunnen = to have the ability. Ik kan = I am able to."},
]},

/* ─── LESSON 11 ─────────────────────────────────── */
{id:11, title:"Vergrotende & Overtreffende Trap", icon:"📊",
expl:`<h3>Vergrotende en overtreffende trap</h3>
<table class="gt"><thead><tr><th>Form</th><th>Rule</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>Comparative</strong></td><td>adjective + <strong>-er</strong> (+ dan)</td><td>mooi → mooier dan</td></tr>
<tr><td><strong>Superlative</strong></td><td><strong>het</strong> + adjective + <strong>-st</strong></td><td>mooi → het mooist</td></tr>
</tbody></table>
<div class="tip"><strong>Special rule:</strong> If the adjective ends in <strong>-r</strong>, add <strong>-der</strong> (not -er) for comparative: duur → <strong>duurder</strong></div>
<div class="exbox"><div class="exlbl">Regular examples</div>
<div class="exrow">
<span class="exnl">Deze jas is mooier dan die jas.</span><span class="exen">This jacket is prettier than that jacket.</span>
<span class="exnl">Deze jas is het mooist.</span><span class="exen">This jacket is the prettiest.</span>
<span class="exnl">Deze jas is duurder dan die jas.</span><span class="exen">This jacket is more expensive.</span>
</div></div>
<h3 style="margin-top:14px">Irregular forms</h3>
<table class="gt"><thead><tr><th>Base</th><th>Comparative</th><th>Superlative</th></tr></thead><tbody>
<tr><td>goed (good)</td><td>beter</td><td>het best</td></tr>
<tr><td>veel (many/much)</td><td>meer</td><td>het meest</td></tr>
<tr><td>weinig (little/few)</td><td>minder</td><td>het minst</td></tr>
</tbody></table>`,
exercises:[
{id:"11-1",type:"fill",question:"'Deze jas is ___ dan die jas.' (mooi → vergrotende trap)",
ans:enc("mooier"),exp:"mooi + -er = mooier. Standard comparative rule."},
{id:"11-2",type:"fill",question:"'Dit is ___ jas in de winkel.' (mooi → overtreffende trap, met 'de')",
ans:enc("de mooiste"),exp:"'jas' is a de-word → de + mooi + -ste = de mooiste jas. Attributive superlative before a de-word uses 'de', not 'het'."},
{id:"11-3",type:"mc",question:"'Deze jas is ___ dan die jas.' (duur, eindigt op -r)",
opts:["duurer","duurster","duurder","meer duur"],ans:enc("duurder"),
exp:"When the adjective ends in -r, add -der instead of -er: duur → duurder."},
{id:"11-4",type:"mc",question:"'Welk land is ___? Nederland of Duitsland?' (groot, vergrotende trap)",
opts:["grooter","groter","het grootst","meer groot"],ans:enc("groter"),
exp:"groot + -er = groter. (One -t because of the short vowel in a closed syllable.)"},
{id:"11-5",type:"mc",question:"'Ik vind dit ___ dan dat.' (goed — onregelmatige vorm!)",
opts:["goeder","goeder dan","beter","beeter"],ans:enc("beter"),
exp:"Goed is irregular: goed → beter → het best."},
]},

/* ─── LESSON 12 ─────────────────────────────────── */
{id:12, title:"Aanwijzende Voornaamwoorden (deze/die/dit/dat)", icon:"👆",
expl:`<h3>Aanwijzende voornaamwoorden</h3>
<p>These words point to whether something is near (<em>here</em>) or far (<em>there</em>).</p>
<table class="gt"><thead><tr><th></th><th>Near (hier)</th><th>Far (daar)</th></tr></thead><tbody>
<tr><td><strong>de</strong>-words</td><td class="hl">deze jongen</td><td class="hl">die jongen</td></tr>
<tr><td><strong>het</strong>-words</td><td class="hl">dit meisje</td><td class="hl">dat meisje</td></tr>
</tbody></table>
<div class="rule">Simple pattern:<br>
• de-word near → <strong>deze</strong> | de-word far → <strong>die</strong><br>
• het-word near → <strong>dit</strong> | het-word far → <strong>dat</strong>
</div>
<div class="exbox"><div class="exlbl">Examples</div>
<div class="exrow">
<span class="exnl">Neem je deze rode schoenen?</span><span class="exen">Are you taking these red shoes? (de schoenen, near)</span>
<span class="exnl">Wie is die man, daar?</span><span class="exen">Who is that man, over there? (de man, far)</span>
<span class="exnl">Dit T-shirt is goedkoper.</span><span class="exen">This T-shirt is cheaper. (het T-shirt, near)</span>
<span class="exnl">Dat meisje zingt mooi.</span><span class="exen">That girl sings beautifully. (het meisje, far)</span>
</div></div>`,
exercises:[
{id:"12-1",type:"mc",question:"'Neem je ___ rode schoenen of ___ zwarte?' (de schoenen — eerste dichtbij, tweede ver)",
opts:["deze / die","dit / dat","die / deze","dat / dit"],ans:enc("deze / die"),
exp:"de schoenen → near = deze, far = die."},
{id:"12-2",type:"mc",question:"'___ T-shirt is goedkoper.' (het T-shirt, vlakbij jou)",
opts:["Deze","Die","Dit","Dat"],ans:enc("Dit"),
exp:"het T-shirt is near → dit."},
{id:"12-3",type:"fill",question:"'Wie is ___ man, daar in de gang?' (de man, far away)",
ans:enc("die"),exp:"de man, far away → die."},
{id:"12-4",type:"mc",question:"'Ik koop ___ jurk en ___ rokje.' (de jurk near, het rokje near)",
opts:["deze / dit","dit / deze","die / dat","dat / dit"],ans:enc("deze / dit"),
exp:"de jurk near → deze; het rokje near → dit."},
]},

/* ─── LESSON 13 ─────────────────────────────────── */
{id:13, title:"Persoonlijke Voornaamwoorden (Voorwerpsvormen)", icon:"🔤",
expl:`<h3>Persoonlijke voornaamwoorden — object vormen</h3>
<p>When a person or object is not the subject but the object (receives the action), we use a different form.</p>
<table class="gt"><thead><tr><th>Subject</th><th>Object form</th><th>Example</th></tr></thead><tbody>
<tr><td>ik</td><td class="hl">mij / me</td><td>Ga je met <strong>mij</strong> mee?</td></tr>
<tr><td>jij / je</td><td class="hl">jou / je</td><td>Ik zie <strong>jou</strong>.</td></tr>
<tr><td>u</td><td class="hl">u</td><td>Ik help <strong>u</strong>.</td></tr>
<tr><td>hij + de-object</td><td class="hl">hem</td><td>Ik bel <strong>hem</strong>. / Ik koop <strong>hem</strong>. (de jas)</td></tr>
<tr><td>zij / ze</td><td class="hl">haar</td><td>Ik ken <strong>haar</strong>.</td></tr>
<tr><td>het + het-object</td><td class="hl">het</td><td>Ik lees <strong>het</strong>. (het boek)</td></tr>
<tr><td>wij / we</td><td class="hl">ons</td><td>Wie helpt <strong>ons</strong>?</td></tr>
<tr><td>jullie</td><td class="hl">jullie</td><td>Ik zie <strong>jullie</strong> morgen.</td></tr>
<tr><td>zij / ze (they)</td><td class="hl">hen / hun / ze</td><td>Ik ken <strong>hen</strong>. / Ik geef <strong>hun</strong> een boek.</td></tr>
</tbody></table>
<div class="tip"><strong>hen / hun:</strong> hun = with preposition or indirect object (Ik geef <em>hun</em> boeken). hen = direct object without preposition (Ik zie <em>hen</em>). In practice, <strong>ze</strong> is often used for both.</div>`,
exercises:[
{id:"13-1",type:"mc",question:"'Meneer de Vries, kunt u ___ helpen?' (= mij, formele context)",
opts:["mij","hem","haar","ons"],ans:enc("mij"),
exp:"The speaker uses 'mij' (object form of ik). Meneer de Vries helps mij."},
{id:"13-2",type:"fill",question:"'Marloes woont hier ook. Ik kom ___ vaak tegen.' (her)",
ans:enc("haar"),exp:"Marloes = zij → object form: haar."},
{id:"13-3",type:"mc",question:"'Wat een leuk boek! Waar heb je ___ gekocht?' (het boek)",
opts:["hem","haar","het","ze"],ans:enc("het"),
exp:"het boek = het-word → object form: het."},
{id:"13-4",type:"mc",question:"'Wij spreken nog geen Nederlands. Wie kan ___ helpen?' (= ons)",
opts:["wij","ons","hun","hen"],ans:enc("ons"),
exp:"Wij → object form: ons."},
{id:"13-5",type:"mc",question:"'Waar zijn Jenny en Johan? Ik zal ___ even ophalen.' (hen/ze)",
opts:["ze","hun","hen","ons"],ans:enc("ze"),
exp:"Jenny en Johan = zij (plural). In modern Dutch 'ze' is used most often."},
]},

/* ─── LESSON 14 ─────────────────────────────────── */
{id:14, title:"Perfectum — Vorming", icon:"✅",
expl:`<h3>Voltooid tegenwoordige tijd (VTT) — Perfectum</h3>
<p>The perfectum describes <strong>past actions whose result still matters now</strong>. It uses two parts: <strong>hebben/zijn + perfectum verb</strong> (at the end).</p>
<div class="rule"><strong>Regular verb — 3 steps (example: luisteren)</strong><br>
<strong>Step 1:</strong> Make ik-vorm: luisteren − en = <em>luister</em><br>
<strong>Step 2:</strong> Add ge- prefix: ge + luister = <em>geluister</em><br>
<strong>Step 3:</strong> Last letter of ik-vorm in <strong>SOFT KETCHUP</strong>? → add <strong>-t</strong>. Not in it? → add <strong>-d</strong>.<br>
SOFT KETCHUP = <strong>s, o, f, t, k, e, t, c, h, u, p</strong><br>
luister → R not in SOFT KETCHUP → add -d → <strong>geluisterd</strong> ✓
</div>
<div class="exbox"><div class="exlbl">More examples</div>
<div class="exrow">
<span class="exnl">werken → werk → gewerk → K in SOFT KETCHUP → gewerkt</span><span class="exen">(worked)</span>
<span class="exnl">spelen → speel → gespeel → L not in SK → gespeeld</span><span class="exen">(played)</span>
<span class="exnl">stoppen → stop → gestop → P in SK → gestopt</span><span class="exen">(stopped)</span>
</div></div>
<div class="tip"><strong>Exception 1 — No ge-:</strong> Verbs starting with be-, ge-, her-, ver-, ont- do NOT add ge-.<br>
betalen → betaald (not gebetaald). gebeuren → gebeurd.</div>
<div class="tip"><strong>Exception 2 — Z→S / V→F:</strong> When removing -en creates V or Z in the stem, they change to F/S, BUT you still add -d (not -t).<br>
leven → leef → geleef → still add -d → <strong>geleefd</strong><br>
reizen → reis → gereis → still add -d → <strong>gereisd</strong>
</div>`,
exercises:[
{id:"14-1",type:"fill",question:"Vorm het perfectum van 'werken': ge___",
ans:enc("gewerkt"),exp:"werken → werk (stem) → ge+werk → K is in SOFT KETCHUP → add -t → gewerkt."},
{id:"14-2",type:"fill",question:"Vorm het perfectum van 'stoppen': ge___",
ans:enc("gestopt"),exp:"stoppen → stop → ge+stop → P is in SOFT KETCHUP → add -t → gestopt."},
{id:"14-3",type:"fill",question:"Vorm het perfectum van 'luisteren': ge___",
ans:enc("geluisterd"),exp:"luisteren → luister → ge+luister → R is NOT in SOFT KETCHUP → add -d → geluisterd."},
{id:"14-4",type:"fill",question:"Vorm het perfectum van 'betalen' (begint met be-): ___",
ans:enc("betaald"),exp:"betalen starts with be- → NO ge-. betalen → betaal → L not in SK → add -d → betaald."},
{id:"14-5",type:"fill",question:"Vorm het perfectum van 'leven' (V→F regel): ge___",
ans:enc("geleefd"),exp:"leven → leef (V→F exception) → ge+leef → F is in SK but the V→F-exception applies → still add -d → geleefd."},
]},

/* ─── LESSON 15 ─────────────────────────────────── */
{id:15, title:"Perfectum — hebben of zijn", icon:"🔀",
expl:`<h3>Hebben of zijn als hulpwerkwoord?</h3>
<p>In the perfectum, the auxiliary verb is <strong>hebben</strong> in ~90% of cases. But some verbs use <strong>zijn</strong>.</p>
<div class="rule"><strong>Use zijn with:</strong><br>
• Verbs of <strong>movement from A to B</strong>: gaan, komen, rijden (direction), lopen (to a place)<br>
• Verbs describing a <strong>change of state</strong>: worden, trouwen, sterven, slagen, zakken<br>
• A fixed list you need to memorise
</div>
<div class="wlist">
<div class="wi"><span class="wnl">zijn</span><span class="wen">to be → geweest</span></div>
<div class="wi"><span class="wnl">gaan</span><span class="wen">to go → gegaan</span></div>
<div class="wi"><span class="wnl">komen</span><span class="wen">to come → gekomen</span></div>
<div class="wi"><span class="wnl">blijven</span><span class="wen">to stay → gebleven</span></div>
<div class="wi"><span class="wnl">worden</span><span class="wen">to become → geworden</span></div>
<div class="wi"><span class="wnl">beginnen</span><span class="wen">to begin → begonnen</span></div>
<div class="wi"><span class="wnl">stoppen</span><span class="wen">to stop → gestopt</span></div>
<div class="wi"><span class="wnl">trouwen</span><span class="wen">to marry → getrouwd</span></div>
<div class="wi"><span class="wnl">slagen</span><span class="wen">to pass (exam) → geslaagd</span></div>
<div class="wi"><span class="wnl">zakken</span><span class="wen">to fail (exam) → gezakt</span></div>
<div class="wi"><span class="wnl">sterven</span><span class="wen">to die → gestorven</span></div>
<div class="wi"><span class="wnl">veranderen</span><span class="wen">to change → veranderd</span></div>
</div>
<div class="exbox"><div class="exlbl">Examples</div>
<div class="exrow">
<span class="exnl">Ik heb gegeten.</span><span class="exen">I have eaten. (hebben – no movement)</span>
<span class="exnl">Ik ben naar school gegaan.</span><span class="exen">I went to school. (zijn – movement)</span>
<span class="exnl">Laura is 35 jaar geworden.</span><span class="exen">Laura has turned 35. (zijn – change of state)</span>
<span class="exnl">Hoe laat zijn jullie thuisgekomen?</span><span class="exen">What time did you get home? (zijn – komen)</span>
</div></div>`,
exercises:[
{id:"15-1",type:"mc",question:"'Ik ___ samen met mijn vrienden gedanst.' (dansen = geen beweging)",
opts:["ben","heb","zijn","heeft"],ans:enc("heb"),
exp:"Dansen has no movement from A to B → hebben. Ik heb gedanst."},
{id:"15-2",type:"fill",question:"'Hoe laat ___ jullie thuis gekomen?' (komen = zijn-verb)",
ans:enc("zijn"),exp:"komen always goes with zijn: jullie zijn gekomen."},
{id:"15-3",type:"fill",question:"'Laura ___ 35 jaar geworden.' (worden = change of state)",
ans:enc("is"),exp:"worden = change of state → zijn. Laura is geworden."},
{id:"15-4",type:"mc",question:"'Gisteren ___ mijn vriend tot 20:00 uur gewerkt.' (werken)",
opts:["is","zijn","heeft","heb"],ans:enc("heeft"),
exp:"werken = no movement, no state change → hebben. mijn vriend (hij) → heeft."},
{id:"15-5",type:"fill",question:"'Hassan ___ voor zijn rijexamen geslaagd.' (slagen = zijn-verb)",
ans:enc("is"),exp:"slagen is on the zijn-list → Hassan is geslaagd."},
]},

/* ─── LESSON 16 ─────────────────────────────────── */
{id:16, title:"Bedoelen of Betekenen", icon:"💬",
expl:`<h3>Bedoelen of betekenen?</h3>
<p>Both translate as "to mean" in English, but they are used in different situations.</p>
<table class="gt"><thead><tr><th>Word</th><th>Use it when…</th><th>Example</th></tr></thead><tbody>
<tr><td class="hl">betekenen</td><td>Referring to the literal meaning of a <strong>word or abbreviation</strong></td><td>Wat betekent p.p.? → Dat betekent 'per persoon'.</td></tr>
<tr><td class="hl">bedoelen</td><td>Referring to someone's <strong>intention</strong> — what they are trying to say</td><td>Oh, u bedoelt de peterselie! (you figured out what they meant)</td></tr>
</tbody></table>
<div class="exbox"><div class="exlbl">More examples</div>
<div class="exrow">
<span class="exnl">Wat betekent 'gezellig'?</span><span class="exen">What does 'gezellig' mean? (asking for definition)</span>
<span class="exnl">Wat bedoel je?</span><span class="exen">What do you mean? (asking for intention/clarification)</span>
<span class="exnl">Ik begrijp niet wat zij bedoelt.</span><span class="exen">I don't understand what she means (intention).</span>
<span class="exnl">Dat betekent dat je moet stoppen.</span><span class="exen">That means you must stop. (consequence/definition)</span>
</div></div>`,
exercises:[
{id:"16-1",type:"mc",question:"'Wat ___ p.p.?' (je vraagt naar de letterlijke betekenis van de afkorting)",
opts:["bedoel","bedoelt","betekent","betekenen"],ans:enc("betekent"),
exp:"You are asking for the literal meaning of the abbreviation p.p. → betekenen."},
{id:"16-2",type:"mc",question:"'Ik begrijp niet wat zij ___.' (je begrijpt haar bedoeling niet)",
opts:["betekent","betekenen","bedoelt","bedoel"],ans:enc("bedoelt"),
exp:"Zij (singular) → bedoelt. She is trying to say something but we don't understand her intention."},
{id:"16-3",type:"fill",question:"'Mijn moeder heeft een allergie. Dat ___ dat zij geen noten mag eten.'",
ans:enc("betekent"),exp:"Expressing a consequence/definition: dat betekent dat … ."},
{id:"16-4",type:"mc",question:"'Mag ik dat groene… uh… Oh, u ___ de peterselie!' (je raadt wat ze bedoelen)",
opts:["betekent","bedoelt","wilt","zegt"],ans:enc("bedoelt"),
exp:"The employee guesses what the customer is trying to say → u bedoelt."},
]},

/* ─── LESSON 17 ─────────────────────────────────── */
{id:17, title:"Imperfectum (Verleden Tijd)", icon:"⏪",
expl:`<h3>Onvoltooid verleden tijd (OVT) — Imperfectum</h3>
<p>The imperfectum is used when telling stories or describing a situation in the past (often with more context following). Uses the same <strong>SOFT KETCHUP</strong> trick.</p>
<div class="rule"><strong>Regular verb — 3 steps (example: luisteren)</strong><br>
<strong>Step 1:</strong> ik-vorm: luisteren − en = <em>luister</em><br>
<strong>Step 2:</strong> Singular or plural?<br>
<strong>Step 3:</strong> Last letter in SOFT KETCHUP?<br>
• In SK: singular → <strong>+te</strong>, plural → <strong>+ten</strong><br>
• NOT in SK: singular → <strong>+de</strong>, plural → <strong>+den</strong>
</div>
<div class="exbox"><div class="exlbl">Examples</div>
<div class="exrow">
<span class="exnl">luisteren: ik luisterde / wij luisterden</span><span class="exen">(R not in SK → -de/-den)</span>
<span class="exnl">werken: ik werkte / wij werkten</span><span class="exen">(K in SK → -te/-ten)</span>
<span class="exnl">leven: ik leefde / wij leefden</span><span class="exen">(V→F, still -de: not in SK)</span>
<span class="exnl">reizen: ik reisde / wij reisden</span><span class="exen">(Z→S, still -de: not in SK)</span>
</div></div>
<div class="tip"><strong>Perfectum vs Imperfectum:</strong><br>
• Perfectum: single completed action with a present result → <em>Ik heb een kaartje gekocht.</em><br>
• Imperfectum: describes a past situation / sets the scene → <em>Ik kocht gisteren een kaartje voor het concert.</em></div>`,
exercises:[
{id:"17-1",type:"fill",question:"'Hij ___ (voelen) zich niet zo goed.' (enkelvoud)",
ans:enc("voelde"),exp:"voelen → voel (stem) → L not in SK → singular -de → voelde."},
{id:"17-2",type:"fill",question:"'Ik ___ (vieren) mijn verjaardag.' (enkelvoud)",
ans:enc("vierde"),exp:"vieren → vier (stem) → R not in SK → singular -de → vierde."},
{id:"17-3",type:"fill",question:"'Ricardo en Peter ___ (stoppen) met voetballen.' (meervoud)",
ans:enc("stopten"),exp:"stoppen → stop → P is in SK → plural -ten → stopten."},
{id:"17-4",type:"fill",question:"'Het ___ (regenen) de hele zomervakantie.' (enkelvoud)",
ans:enc("regende"),exp:"regenen → regen → N not in SK → singular -de → regende."},
{id:"17-5",type:"fill",question:"'In Amsterdam ___ (werken) Peter in een groot hotel.' (enkelvoud)",
ans:enc("werkte"),exp:"werken → werk → K is in SK → singular -te → werkte."},
]},

/* ─── LESSON 18 ─────────────────────────────────── */
{id:18, title:"Modale Werkwoorden — Verleden Tijd", icon:"🔙",
expl:`<h3>Modale werkwoorden in de imperfectum</h3>
<p>These are all irregular past forms — they must be memorised.</p>
<table class="gt"><thead><tr><th>Infinitive</th><th>Singular past</th><th>Plural past</th></tr></thead><tbody>
<tr><td class="hl">mogen</td><td>mocht</td><td>mochten</td></tr>
<tr><td class="hl">willen</td><td>wilde</td><td>wilden</td></tr>
<tr><td class="hl">moeten</td><td>moest</td><td>moesten</td></tr>
<tr><td class="hl">kunnen</td><td>kon</td><td>konden</td></tr>
<tr><td class="hl">zullen</td><td>zou</td><td>zouden</td></tr>
</tbody></table>
<div class="exbox"><div class="exlbl">Examples</div>
<div class="exrow">
<span class="exnl">Vroeger mocht ik niet naar buiten.</span><span class="exen">In the past I wasn't allowed outside.</span>
<span class="exnl">Als kind wilde ik piloot worden.</span><span class="exen">As a child I wanted to become a pilot.</span>
<span class="exnl">We konden niet op tijd komen.</span><span class="exen">We couldn't arrive on time.</span>
<span class="exnl">Hij zou me helpen maar deed het niet.</span><span class="exen">He was supposed to help me but didn't.</span>
</div></div>
<div class="tip"><strong>zou / zouden</strong> is also used as a conditional (like "would" in English): <em>Ik zou graag naar Parijs gaan.</em> (I would like to go to Paris.)</div>`,
exercises:[
{id:"18-1",type:"fill",question:"'Vroeger ___ (mogen) ik niet naar buiten.' (enkelvoud verleden tijd)",
ans:enc("mocht"),exp:"mogen → singular past tense: mocht."},
{id:"18-2",type:"fill",question:"'We ___ (kunnen) niet op tijd komen.' (meervoud verleden tijd)",
ans:enc("konden"),exp:"kunnen → plural past tense: konden."},
{id:"18-3",type:"mc",question:"'Als kind ___ ik piloot worden.' (willen, enkelvoud verleden tijd)",
opts:["wil","wilde","wilden","wou"],ans:enc("wilde"),
exp:"willen → singular past tense: wilde."},
{id:"18-4",type:"fill",question:"'Hij ___ (moeten) vroeger altijd vroeg opstaan.' (enkelvoud verleden tijd)",
ans:enc("moest"),exp:"moeten → singular past tense: moest."},
{id:"18-5",type:"mc",question:"'Wij ___ (zullen) de volgende dag vroeg vertrekken.' (meervoud verleden tijd)",
opts:["zou","zouden","zullen","zal"],ans:enc("zouden"),
exp:"zullen → plural past tense: zouden."},
]},

/* ─── LESSON 19 ─────────────────────────────────── */
{id:19, title:"Scheidbare Werkwoorden", icon:"🔗",
expl:`<h3>Scheidbare werkwoorden — Separable Verbs</h3>
<p>Separable verbs = prefix + verb. The prefix changes the meaning. In different tenses they behave differently.</p>
<table class="gt"><thead><tr><th>Tense</th><th>Behaviour</th><th>Example: aankomen</th></tr></thead><tbody>
<tr><td><strong>Present</strong></td><td>Verb stays at position 2; prefix goes to END</td><td>Ik kom iedere maandag aan.</td></tr>
<tr><td><strong>Imperfectum</strong></td><td>Same as present: verb at 2, prefix at end</td><td>Ik kwam vorige week aan.</td></tr>
<tr><td><strong>Perfectum</strong></td><td>Prefix + ge + verb form goes to end (stays together)</td><td>Ik ben aangekomen.</td></tr>
<tr><td><strong>Modal verb</strong></td><td>Infinitive (whole verb) goes to end</td><td>Ik wil op Schiphol aankomen.</td></tr>
<tr><td><strong>om+te / te</strong></td><td>te goes between prefix and verb</td><td>om aan te komen</td></tr>
</tbody></table>
<div class="exbox"><div class="exlbl">Common separable verbs</div>
<div class="exrow">
<span class="exnl">aankomen</span><span class="exen">to arrive</span>
<span class="exnl">aanmelden</span><span class="exen">to register/sign up</span>
<span class="exnl">tegenkomen</span><span class="exen">to run into (someone)</span>
<span class="exnl">opbellen</span><span class="exen">to call (phone)</span>
<span class="exnl">meenemen</span><span class="exen">to take along</span>
<span class="exnl">uitkiezen</span><span class="exen">to pick/choose</span>
</div></div>`,
exercises:[
{id:"19-1",type:"mc",question:"Tegenwoordige tijd: 'Ik ___ iedere maandag op Schiphol ___ .' (aankomen)",
opts:["kom / aan","aankomen / —","aankom / —","kom / aankomen"],ans:enc("kom / aan"),
exp:"Present tense: split the verb. 'kom' stays at position 2, 'aan' goes to the end."},
{id:"19-2",type:"fill",question:"Perfectum van 'aankomen': Ik ben ___ .",
ans:enc("aangekomen"),exp:"Perfectum of a separable verb: prefix + ge + verb form joined: aan + ge + komen = aangekomen."},
{id:"19-3",type:"mc",question:"Modaal werkwoord: 'Ik wil liever op Schiphol ___ .' (aankomen)",
opts:["aankomen","aan komen","kom aan","aangekomend"],ans:enc("aankomen"),
exp:"With a modal verb, the separable verb goes to the end as an infinitive: aankomen."},
{id:"19-4",type:"mc",question:"Imperfectum: 'Gisteren ___ ik Peter in de supermarkt ___ .' (tegenkomen)",
opts:["tegenkwam / —","kwamen / tegen","kwam / tegen","kw / tegenkwam"],ans:enc("kwam / tegen"),
exp:"Imperfectum: split just like present tense. komen → kwamen → ik kwam. Prefix 'tegen' goes to the end."},
]},

/* ─── LESSON 20 ─────────────────────────────────── */
{id:20, title:"Toekomstige Tijd (Futurum)", icon:"🔮",
expl:`<h3>Toekomstige tijd — Future Tense</h3>
<p>There are <strong>3 ways</strong> to express the future in Dutch:</p>
<table class="gt"><thead><tr><th>#</th><th>Structure</th><th>Example</th><th>When to use</th></tr></thead><tbody>
<tr><td>1</td><td>Present verb + time word</td><td>Ik ben volgend weekend in Londen.</td><td>planned / certain future</td></tr>
<tr><td>2</td><td>gaan + infinitive</td><td>Eva gaat in Engeland studeren.</td><td>planned / intended future</td></tr>
<tr><td>3</td><td>zullen + infinitive</td><td>Er zullen veel mensen komen.</td><td>uncertain / unconfirmed future</td></tr>
</tbody></table>
<div class="tip"><strong>Most natural in speech:</strong> Combine options 1 + 2: use <em>gaan</em> with a time word.<br>
<em>Vanavond ga ik koken.</em> (Tonight I'm going to cook.)</div>
<div class="exbox"><div class="exlbl">Examples</div>
<div class="exrow">
<span class="exnl">Ik ben morgen op kantoor. (#1)</span><span class="exen">I'll be in the office tomorrow.</span>
<span class="exnl">We gaan even koffiedrinken. (#2)</span><span class="exen">We're going to get some coffee.</span>
<span class="exnl">De directeur zal het hotel inspecteren. (#3)</span><span class="exen">The director will inspect the hotel.</span>
</div></div>`,
exercises:[
{id:"20-1",type:"mc",question:"Welke structuur wordt hier gebruikt? 'Hans komt volgende week niet.'",
opts:["gaan + infinitief","tegenwoordige tijd + tijdwoord","zullen + infinitief","imperfectum"],
ans:enc("tegenwoordige tijd + tijdwoord"),exp:"'Komt' is present tense, 'volgende week' is the time word. This is structure #1."},
{id:"20-2",type:"fill",question:"Maak de zin af: 'Eva ___ een jaar in Engeland studeren.' (gaan, zij)",
ans:enc("gaat"),exp:"gaan + infinitive for the future. Eva (zij/ze) → gaat."},
{id:"20-3",type:"mc",question:"Wanneer gebruiken we bij voorkeur 'zullen' voor de toekomst?",
opts:["Voor zekere geplande gebeurtenissen","Als de handeling onzeker of niet bevestigd is","Voor verhalende verleden tijd","Alleen voor beleefde verzoeken"],
ans:enc("Als de handeling onzeker of niet bevestigd is"),
exp:"Use zullen when the future action is likely but not yet confirmed."},
{id:"20-4",type:"fill",question:"'Ik ___ volgend weekend in Londen.' (tegenwoordige tijd + tijdswoord voor toekomst)",
ans:enc("ben"),exp:"Present tense with a time word pointing to the future: ik ben volgend weekend in Londen."},
]},

/* ─── LESSON 21 ─────────────────────────────────── */
{id:21, title:"Aanwijzende Voornaamwoorden — die & dat als Verwijzing", icon:"↩",
expl:`<h3>Aanwijzend voornaamwoord als verwijzing</h3>
<p>When you want to refer back to something already mentioned (to avoid repeating it), use <strong>die</strong> or <strong>dat</strong>.</p>
<table class="gt"><thead><tr><th>Use DIE when referring to…</th><th>Use DAT when referring to…</th></tr></thead><tbody>
<tr><td><strong>People</strong> (any gender)</td><td>A <strong>whole action</strong> or situation</td></tr>
<tr><td><strong>de-words</strong></td><td></td></tr>
</tbody></table>
<div class="exbox"><div class="exlbl">Examples</div>
<div class="exrow">
<span class="exnl">Waar is tante Marloes? Die wacht in de auto.</span><span class="exen">DIE = person</span>
<span class="exnl">Wat een leuke schoenen! Waar heb je die gekocht?</span><span class="exen">DIE = de schoenen (de-word)</span>
<span class="exnl">Zullen we naar de bioscoop gaan? Ja, dat is een goed idee!</span><span class="exen">DAT = the whole action/idea</span>
<span class="exnl">Je hebt aardbeien meegenomen. Ja, dat heb ik gedaan.</span><span class="exen">DAT = the action of taking strawberries</span>
</div></div>`,
exercises:[
{id:"21-1",type:"fill",question:"'Leuke schoenen! Waar heb je ___ gekocht?' (de schoenen)",
ans:enc("die"),exp:"Reference to de schoenen (de-word) → die."},
{id:"21-2",type:"fill",question:"'Zullen we naar de bioscoop gaan? Ja, ___ is een goed idee!'",
ans:enc("dat"),exp:"Reference to the whole action/idea of going to the cinema → dat."},
{id:"21-3",type:"fill",question:"'Waar is Ricardo? ___ haalt koffie.' (person)",
ans:enc("die"),exp:"Reference to a person → die. 'Ricardo? Die haalt koffie.'"},
{id:"21-4",type:"mc",question:"'Mag ik naar de WC? Ja, ___ mag.'",
opts:["die","dat","het","dit"],ans:enc("dat"),
exp:"Reference to the action of going to the bathroom → dat."},
{id:"21-5",type:"fill",question:"'Ken je de cd van Adele? Ja, ___ heb ik voor mijn verjaardag gekregen.' (de cd)",
ans:enc("die"),exp:"de cd = de-word → die."},
]},

/* ─── LESSON 22 ─────────────────────────────────── */
{id:22, title:"Voegwoorden — Makkelijk & Moeilijk", icon:"🔗",
expl:`<h3>Voegwoorden — Conjunctions</h3>
<h3 style="margin-top:8px;color:#15803d;font-size:.9rem">Easy conjunctions (no word-order change)</h3>
<div class="wlist">
<div class="wi"><span class="wnl">en</span><span class="wen">and</span></div>
<div class="wi"><span class="wnl">of</span><span class="wen">or</span></div>
<div class="wi"><span class="wnl">maar</span><span class="wen">but</span></div>
<div class="wi"><span class="wnl">want</span><span class="wen">because (reason from speaker)</span></div>
<div class="wi"><span class="wnl">dus</span><span class="wen">so / therefore</span></div>
</div>
<h3 style="margin-top:12px;color:#b91c1c;font-size:.9rem">Hard conjunctions (verb goes to END of clause)</h3>
<div class="wlist">
<div class="wi"><span class="wnl">omdat</span><span class="wen">because</span></div>
<div class="wi"><span class="wnl">als</span><span class="wen">when / if</span></div>
<div class="wi"><span class="wnl">toen</span><span class="wen">when (past only)</span></div>
<div class="wi"><span class="wnl">voordat</span><span class="wen">before</span></div>
<div class="wi"><span class="wnl">nadat</span><span class="wen">after</span></div>
<div class="wi"><span class="wnl">totdat</span><span class="wen">until</span></div>
<div class="wi"><span class="wnl">zodat</span><span class="wen">so that (result)</span></div>
<div class="wi"><span class="wnl">zodra</span><span class="wen">as soon as</span></div>
<div class="wi"><span class="wnl">hoewel</span><span class="wen">although</span></div>
</div>
<div class="rule"><strong>Hard conjunction word order:</strong><br>
Subclause: conjunction + subject + (objects/time/place) + <strong>ALL VERBS LAST</strong><br>
<em>Ik vind vlinders mooi <strong>omdat ze prachtige kleuren hebben</strong>.</em></div>
<div class="tip"><strong>⚠ Important rules:</strong><br>
• <strong>Zodat</strong> can NEVER start a sentence (it expresses a result, not a cause).<br>
• <strong>Toen</strong> is ALWAYS used with a past tense.<br>
• After <strong>nadat</strong>, use plusquamperfectum (had/hadden + perfectum verb).</div>`,
exercises:[
{id:"22-1",type:"mc",question:"Welk voegwoord stuurt het werkwoord naar het EINDE van de bijzin?",
opts:["en","maar","want","omdat"],ans:enc("omdat"),
exp:"Omdat is a 'hard' conjunction: the verb goes to the end of the clause. En/maar/want are 'easy' and keep normal word order."},
{id:"22-2",type:"fill",question:"'Ik vind vlinders mooi ___ ze prachtige kleuren hebben.'",
ans:enc("omdat"),exp:"'Omdat ze prachtige kleuren hebben.' Omdat sends verbs to the end."},
{id:"22-3",type:"mc",question:"Welke regel geldt voor 'toen'?",
opts:["Altijd gebruikt met tegenwoordige tijd","Altijd gebruikt met verleden tijd","Kan een zin beginnen met een resultaat","Alleen gebruikt in vragen"],
ans:enc("Altijd gebruikt met verleden tijd"),exp:"Toen = when (in the past). It is ALWAYS followed by a past tense (imperfectum or perfectum)."},
{id:"22-4",type:"fill",question:"'Ik ga de krant vaker lezen ___ ik nieuwe woorden leer.'",
ans:enc("zodat"),exp:"'Zodat ik nieuwe woorden leer.' Zodat = so that (expresses a result/purpose)."},
{id:"22-5",type:"mc",question:"Welk voegwoord kan NOOIT een zin beginnen?",
opts:["omdat","hoewel","als","zodat"],ans:enc("zodat"),
exp:"Zodat expresses a result — it can never start a sentence because you cannot begin with the consequence."},
]},

]; // END OF LESSONS
