/* ══════════════════════════════════════════════════
   PDF EXERCISES  (extracted from Yulia-2026 Miro boards)
   Answers stripped — for practice only, no progress tracking.
══════════════════════════════════════════════════ */
const PDF_EXERCISES = {

/* ═══════════════════════════════════════════════════════════════
   GRAMMATICA
═══════════════════════════════════════════════════════════════ */
grammatica: [

  /* ── Werkwoorden ──────────────────────────────── */
  { theme:"Werkwoorden", exercises:[

    {id:"pg-1",type:"mc",question:"Kies de juiste vorm: Anne ___ (wonen) in Nijmegen.",
     opts:["woon","woont","wonen","gewoont"],ans:enc("woont"),
     exp:"Anne = zij/ze (3e persoon enkelvoud) → stam + t: woon + t = woont."},

    {id:"pg-2",type:"fill",question:"Vul in: Ik ___ (wonen) hier al vijf jaar.",
     ans:enc("woon"),exp:"Ik + stam: wonen → woon (geen -t na ik)."},

    {id:"pg-3",type:"fill",question:"Vul in: Jij ___ (studeren) psychologie in Groningen.",
     ans:enc("studeert"),exp:"Jij in een gewone zin (niet na het werkwoord) → stam + t: studeer + t = studeert."},

    {id:"pg-4",type:"mc",question:"Kies de juiste vorm: Wij ___ (gaan) met de trein naar het werk.",
     opts:["ga","gaat","gaan","gegaan"],ans:enc("gaan"),
     exp:"Wij = meervoud → infinitief: gaan."},

    {id:"pg-5",type:"fill",question:"Vul in: U ___ (spreken) goed Spaans. (formeel)",
     ans:enc("spreekt"),exp:"U (formeel, enkelvoud) → stam + t: spreek + t = spreekt."},

    {id:"pg-6",type:"mc",question:"Kies de juiste vorm: Peter ___ (reizen) met de bus naar zijn werk.",
     opts:["reis","reist","reizen","reisde"],ans:enc("reist"),
     exp:"Peter = hij → stam + t. reizen → reis → reis + t = reist."},

    {id:"pg-7",type:"fill",question:"Vul in: Wij ___ (beginnen) de cursus op 3 september.",
     ans:enc("beginnen"),exp:"Wij = meervoud → infinitief: beginnen."},

    {id:"pg-8",type:"mc",question:"Welke zin is correct?",
     opts:["Studeert jij Nederlands?","Studeer jij Nederlands?","Jij studeert Nederlands?","Jij studeer Nederlands?"],
     ans:enc("Studeer jij Nederlands?"),
     exp:"Bij een vraag met jij/je na het werkwoord valt de -t weg: studeert → Studeer jij?"},

    {id:"pg-9",type:"fill",question:"Vul in: Anne ___ (studeren) psychologie in Nijmegen.",
     ans:enc("studeert"),exp:"Anne = 3e persoon enkelvoud → stam + t: studeer + t = studeert."},

    {id:"pg-10",type:"mc",question:"Kies de juiste vorm van 'komen': Waar ___ jij vandaan?",
     opts:["kom","komt","komen","kwamen"],ans:enc("kom"),
     exp:"Jij na het werkwoord in een vraagzin: -t valt weg: komt → kom jij?"},

    {id:"pg-11",type:"fill",question:"Vul in: Marjan ___ (luisteren) naar muziek op de radio.",
     ans:enc("luistert"),exp:"Marjan = zij → stam + t: luister + t = luistert."},

    {id:"pg-12",type:"mc",question:"Schrijf de goede vorm. Ik ___ (helpen) mijn moeder.",
     opts:["help","helpt","helpen","geholpen"],ans:enc("help"),
     exp:"Ik + stam: helpen → help (geen -t)."},

    {id:"pg-13",type:"fill",question:"Vul in: Jullie ___ (kennen) elkaar al lang.",
     ans:enc("kennen"),exp:"Jullie = meervoud → infinitief: kennen."},

    {id:"pg-14",type:"fill",question:"Schrijf de goede vorm van 'schrijven': Hij ___ een brief.",
     ans:enc("schrijft"),exp:"schrijven → schrijf (stam) → schrijf + t = schrijft."},
  ]},

  /* ── Zijn & Hebben ────────────────────────────── */
  { theme:"Zijn en Hebben", exercises:[

    {id:"pg-15",type:"fill",question:"Vul in: Ik ___ student.",
     ans:enc("ben"),exp:"zijn (to be) — ik: ben."},

    {id:"pg-16",type:"mc",question:"Kies de juiste vorm: Jij ___ een boek.",
     opts:["heb","hebt","hebben","heeft"],ans:enc("hebt"),
     exp:"hebben — jij: hebt (ook 'heb' in omgangstaal)."},

    {id:"pg-17",type:"fill",question:"Vul in: Wij ___ studenten.",
     ans:enc("zijn"),exp:"zijn — wij/jullie/zij: zijn."},

    {id:"pg-18",type:"fill",question:"Vul in: Hij ___ twee kinderen.",
     ans:enc("heeft"),exp:"hebben — hij/zij/het: heeft."},

    {id:"pg-19",type:"mc",question:"Kies: Peter en Lena ___ getrouwd.",
     opts:["ben","is","zijn","bent"],ans:enc("zijn"),
     exp:"Peter en Lena = zij (meervoud) → zijn."},
  ]},

  /* ── Vraagwoorden ────────────────────────────── */
  { theme:"Vraagwoorden", exercises:[

    {id:"pg-20",type:"fill",question:"Vul het vraagwoord in: ___ heet jij?",
     ans:enc("Hoe"),exp:"Hoe heet = asking for a name."},

    {id:"pg-21",type:"fill",question:"Vul het vraagwoord in: ___ is je achternaam?",
     ans:enc("Wat"),exp:"Wat = vragen naar iets. Wat is je achternaam?"},

    {id:"pg-22",type:"fill",question:"Vul het vraagwoord in: ___ woon je? In Rotterdam.",
     ans:enc("Waar"),exp:"Waar = vragen naar een plaats."},

    {id:"pg-23",type:"fill",question:"Vul het vraagwoord in: ___ kom je vandaan? Uit Duitsland.",
     ans:enc("Waar"),exp:"Waar = herkomst/place. Waar kom je vandaan?"},

    {id:"pg-24",type:"fill",question:"Vul het vraagwoord in: ___ bent u? Ik ben Peter Jansen.",
     ans:enc("Wie"),exp:"Wie = vragen naar een persoon."},

    {id:"pg-25",type:"fill",question:"Vul het vraagwoord in: ___ heb je tijd? Zaterdagmiddag om 14 uur.",
     ans:enc("Wanneer"),exp:"Wanneer = vragen naar een tijdstip."},

    {id:"pg-26",type:"fill",question:"Vul het vraagwoord in: In ___ straat woon je? In de Nobelstraat.",
     ans:enc("welke"),exp:"Welke + de-woord: de straat → welke straat."},

    {id:"pg-27",type:"fill",question:"Vul het vraagwoord in: ___ gaat het met je? Goed, en met jou?",
     ans:enc("Hoe"),exp:"Hoe gaat het? = How are you?"},

    {id:"pg-28",type:"fill",question:"Vul het vraagwoord in: ___ is je telefoonnummer? 030-2538991.",
     ans:enc("Wat"),exp:"Wat = vragen naar iets/information."},

    {id:"pg-29",type:"mc",question:"Opdracht: ___ heet jouw zus? — Mijn zus heet Sandra.",
     opts:["Wat","Hoe","Wie","Wanneer"],ans:enc("Hoe"),
     exp:"Hoe heet = asking for someone's name."},

    {id:"pg-30",type:"mc",question:"___ woont Astrid? — Astrid woont in de Brugstraat.",
     opts:["Wie","Wat","Hoe","Waar"],ans:enc("Waar"),
     exp:"Waar = vragen naar een plaats."},

    {id:"pg-31",type:"mc",question:"___ dag is het? — Het is vandaag maandag.",
     opts:["Hoeveel","Welke","Wanneer","Wie"],ans:enc("Welke"),
     exp:"Welke + de-woord (de dag) → Welke dag."},

    {id:"pg-32",type:"mc",question:"___ komen uit Australië? — Peter en Alice komen uit Australië.",
     opts:["Wat","Hoe","Wie","Waar"],ans:enc("Wie"),
     exp:"Wie = vragen naar personen."},

    {id:"pg-33",type:"fill",question:"___ zussen heb je? — Ik heb twee zussen.",
     ans:enc("Hoeveel"),exp:"Hoeveel = vragen naar een hoeveelheid/getal."},
  ]},

  /* ── Zinsbouw & Inversie ─────────────────────── */
  { theme:"Zinsbouw en Inversie", exercises:[

    {id:"pg-34",type:"fill",question:"Zet de woorden in de juiste volgorde. Begin met 'Morgen':\nmijn ouders – Morgen – ik – ga",
     ans:enc("Morgen ga ik naar mijn ouders."),
     exp:"Inversie: Morgen (tijdsbepaling) + werkwoord (ga) + onderwerp (ik) + rest."},

    {id:"pg-35",type:"fill",question:"Volgorde: In Den Haag – mijn broer – woont – met zijn gezin\nBegin met 'In Den Haag':",
     ans:enc("In Den Haag woont mijn broer met zijn gezin."),
     exp:"Inversie: plaatsbepaling (In Den Haag) + werkwoord (woont) + onderwerp (mijn broer) + rest."},

    {id:"pg-36",type:"fill",question:"Volgorde: Dinsdag – wij – naar een museum – gaan\nBegin met 'Dinsdag':",
     ans:enc("Dinsdag gaan wij naar een museum."),
     exp:"Inversie: Dinsdag + gaan + wij + naar een museum."},

    {id:"pg-37",type:"mc",question:"Maak de zin af. Lees de vraag en geef antwoord met inversie:\n'Wat eet je vanavond?' → Vanavond ___ ik vis en groente.",
     opts:["eet","eten","gegeten","at"],ans:enc("eet"),
     exp:"Inversie na 'Vanavond': Vanavond + eet (werkwoord) + ik (onderwerp)."},

    {id:"pg-38",type:"fill",question:"Lees de vraag en geef antwoord met inversie:\n'Wanneer begint de cursus?' → Op 3 september ___ ik de cursus.",
     ans:enc("begin"),exp:"Inversie: Op 3 september + begin + ik + de cursus."},

    {id:"pg-39",type:"fill",question:"Maak een vraagzin met inversie:\n'Jij werkt morgen.' → ___ jij morgen?",
     ans:enc("Werk"),exp:"Vraagzin: werkwoord eerst. Werk jij morgen? (-t valt weg omdat jij na het werkwoord staat)."},

    {id:"pg-40",type:"mc",question:"Welke zin heeft de juiste woordvolgorde?",
     opts:["In augustus ik ga op vakantie naar Frankrijk.","In augustus ga ik op vakantie naar Frankrijk.","Ga ik in augustus op vakantie naar Frankrijk.","Ik ga in augustus vakantie op naar Frankrijk."],
     ans:enc("In augustus ga ik op vakantie naar Frankrijk."),
     exp:"Inversie: In augustus (tijdsbepaling) + ga (pos. 2) + ik (onderwerp) + rest."},
  ]},

  /* ── Voornaamwoorden ─────────────────────────── */
  { theme:"Voornaamwoorden", exercises:[

    {id:"pg-41",type:"fill",question:"Bezittelijk vnw: Wij wonen nu in Zwolle. ___ adres is Rozenstraat 8. (wij)",
     ans:enc("Ons"),exp:"Wij → onze/ons. 'adres' = het adres (het-woord) → Ons."},

    {id:"pg-42",type:"fill",question:"Bezittelijk vnw: Ik woon in Amersfoort en ___ zus woont in Rotterdam. (ik)",
     ans:enc("mijn"),exp:"Ik → mijn."},

    {id:"pg-43",type:"mc",question:"Bezittelijk vnw: Vera en Hilda, vertellen jullie eens over ___ vakantie.",
     opts:["hun","jullie","jouw","uw"],ans:enc("jullie"),
     exp:"Jullie → jullie (possessief blijft hetzelfde)."},

    {id:"pg-44",type:"fill",question:"Bezittelijk vnw: Mevrouw Jansen, gaat u met ___ broer op vakantie? (formeel)",
     ans:enc("uw"),exp:"U (formeel) → uw."},

    {id:"pg-45",type:"fill",question:"Bezittelijk vnw: Peter moet voor ___ werk naar Indonesië. (hij)",
     ans:enc("zijn"),exp:"Hij → zijn."},

    {id:"pg-46",type:"mc",question:"Persoonlijk vnw (voorwerpsvorm): Ik ga met Willem naar de film. → Ik ga met ___ naar de film.",
     opts:["hij","hem","zijn","ze"],ans:enc("hem"),
     exp:"Willem = hij → voorwerpsvorm = hem."},

    {id:"pg-47",type:"fill",question:"Persoonlijk vnw (voorwerpsvorm): De studenten drinken koffie. → ___ drinken koffie.",
     ans:enc("Zij|Ze"),exp:"De studenten = zij/ze (meervoud) → Zij/Ze."},

    {id:"pg-48",type:"fill",question:"Verwijzend vnw: (de tas) Wat een mooie tas! Ik geef ___ aan mijn zus.",
     ans:enc("hem"),exp:"de tas = de-woord → voorwerpsvorm = hem."},

    {id:"pg-49",type:"mc",question:"Verwijzend vnw: (het boek) Ik lees ___ elke dag.",
     opts:["hem","haar","het","ze"],ans:enc("het"),
     exp:"het boek = het-woord → verwijzing = het."},

    {id:"pg-50",type:"fill",question:"Kies het juiste voornaamwoord: Karim en Astrid gaan trouwen. Ik koop een mooi cadeau voor ___.",
     ans:enc("haar|hem"),exp:"Verwijzing naar een vrouw (Astrid) → haar, naar een man (Karim) → hem. Beide zijn mogelijk afhankelijk van voor wie het cadeau is."},
  ]},

  /* ── Modale Werkwoorden ──────────────────────── */
  { theme:"Modale Werkwoorden", exercises:[

    {id:"pg-51",type:"mc",question:"Kies het goede woord: Wij ___ naar Parijs gaan.",
     opts:["wil","wilt","willen","wollen"],ans:enc("willen"),
     exp:"Wij = meervoud → willen."},

    {id:"pg-52",type:"mc",question:"Kies het goede woord: Jij ___ hier niet roken.",
     opts:["mogen","mag","moet","kan"],ans:enc("mag"),
     exp:"Jij = enkelvoud → mag (mogen)."},

    {id:"pg-53",type:"mc",question:"Kies het goede woord: ___ we naar een café gaan?",
     opts:["Zal","Zullen","Kunnen","Willen"],ans:enc("Zullen"),
     exp:"Zullen we…? = Shall we…? Voorstel met wij → Zullen."},

    {id:"pg-54",type:"fill",question:"Vul de juiste vorm in: Ze ___ (kunnen) drie talen spreken.",
     ans:enc("kan"),exp:"Ze (enkelvoud = zij/ze) → kan (kunnen, enkelvoud)."},

    {id:"pg-55",type:"fill",question:"Vul de juiste vorm in: ___ (zullen) ik je helpen?",
     ans:enc("Zal"),exp:"Ik → zal (zullen, enkelvoud)."},

    {id:"pg-56",type:"fill",question:"Vul de juiste vorm in: Jullie ___ (mogen) met pen schrijven.",
     ans:enc("mogen"),exp:"Jullie = meervoud → mogen."},

    {id:"pg-57",type:"fill",question:"Vul de juiste vorm in: U ___ (kunnen) goed dansen.",
     ans:enc("kunt|kan"),exp:"U (formeel) → kunt (meer formeel) of kan."},

    {id:"pg-58",type:"mc",question:"Verander de zin met een modaal werkwoord:\n'Ik ga naar het zwembad.' →",
     opts:["Ik moet naar het zwembad.","Ik moet naar het zwembad gaan.","Ik moet gaan naar het zwembad.","Naar het zwembad moet ik gaan."],
     ans:enc("Ik moet naar het zwembad gaan."),
     exp:"Modaal werkwoord op positie 2, infinitief (gaan) naar het einde: Ik moet naar het zwembad gaan."},

    {id:"pg-59",type:"mc",question:"Kies het juiste woord: Je ___ stelen. (verbod)",
     opts:["hoeft","hoeft niet","moet","moet niet"],ans:enc("moet niet"),
     exp:"Moet niet = prohibition/must not. Hoeft niet = don't have to (not required)."},

    {id:"pg-60",type:"mc",question:"Kies het juiste woord: Je ___ te betalen. Het is gratis. (niet verplicht)",
     opts:["moet niet","hoeft niet","kan niet","wil niet"],ans:enc("hoeft niet"),
     exp:"Hoeft niet = not necessary/not required. Moet niet = prohibition."},
  ]},

  /* ── Negatie ─────────────────────────────────── */
  { theme:"Negatie — Geen en Niet", exercises:[

    {id:"pg-61",type:"mc",question:"Ik heb ___ auto. (negeer het naamwoord 'auto')",
     opts:["niet","geen","nee","niets"],ans:enc("geen"),
     exp:"Geen negeer een naamwoord met 'een' of zonder lidwoord: Ik heb geen auto."},

    {id:"pg-62",type:"mc",question:"Zij werkt vandaag ___. (negeer het werkwoord)",
     opts:["geen","nee","niet","niets"],ans:enc("niet"),
     exp:"Niet staat aan het einde bij negatie van het werkwoord."},

    {id:"pg-63",type:"fill",question:"Ik drink ___ koffie. (koffie = naamwoord zonder lidwoord)",
     ans:enc("geen"),exp:"Geen bij naamwoorden zonder artikel of met 'een': Ik drink geen koffie."},

    {id:"pg-64",type:"fill",question:"Hij is ___ ziek. (negeer een bijvoeglijk naamwoord)",
     ans:enc("niet"),exp:"Niet staat voor een bijvoeglijk naamwoord: niet ziek."},

    {id:"pg-65",type:"mc",question:"Wij wonen ___ in Amsterdam. (negeer een plaatsbepaling)",
     opts:["geen","niets","niet","nee"],ans:enc("niet"),
     exp:"Niet staat voor een voorzetselgroep (in Amsterdam)."},

    {id:"pg-66",type:"fill",question:"Spreek jij Nederlands? — Nee, ik spreek ___ Nederlands.",
     ans:enc("geen"),exp:"Geen bij een taal als naamwoord: ik spreek geen Nederlands."},
  ]},

  /* ── Bijvoeglijke Naamwoorden ────────────────── */
  { theme:"Bijvoeglijke Naamwoorden", exercises:[

    {id:"pg-67",type:"fill",question:"Vul het bijvoeglijk naamwoord in: Zij koopt ___ (groen) druiven.",
     ans:enc("groene"),exp:"de druiven (de-woord, meervoud) → bijvoeglijk naamwoord + -e: groene."},

    {id:"pg-68",type:"fill",question:"Vul het bijvoeglijk naamwoord in: Ik kom uit een ___ (groot) gezin.",
     ans:enc("groot"),exp:"een + het-woord (het gezin) → GEEN -e: groot."},

    {id:"pg-69",type:"fill",question:"Vul het bijvoeglijk naamwoord in: Ik heb een ___ (interessant) boek gelezen. (het boek)",
     ans:enc("interessant"),exp:"een + het-woord → geen -e: interessant."},

    {id:"pg-70",type:"fill",question:"Vul het bijvoeglijk naamwoord in: De leraar geeft de test met een ___ (rood) pen.",
     ans:enc("rode"),exp:"een + de-woord (de pen) → -e: rode."},

    {id:"pg-71",type:"fill",question:"Vul het bijvoeglijk naamwoord in: Ik zou graag een ___ (vers) sinaasappelsap. (het sap)",
     ans:enc("vers"),exp:"een + het-woord → geen -e: vers."},

    {id:"pg-72",type:"mc",question:"'Éen kilo ___ (zoet) mandarijnen, alstublieft.'",
     opts:["zoet","zoete","zoets","zoetig"],ans:enc("zoete"),
     exp:"de mandarijnen (de-woord, meervoud) → -e: zoete."},
  ]},

  /* ── Meervoud ────────────────────────────────── */
  { theme:"Meervoud", exercises:[

    {id:"pg-73",type:"fill",question:"Schrijf het meervoud: Hij heeft twee ___ (probleem) met zijn computer.",
     ans:enc("problemen"),exp:"probleem → problemen (lange ee wordt e in open lettergreep)."},

    {id:"pg-74",type:"fill",question:"Schrijf het meervoud: Ze hebben twee ___ (dokter) bij hen thuis.",
     ans:enc("dokters"),exp:"dokter eindigt op -er → meervoud op -s: dokters."},

    {id:"pg-75",type:"fill",question:"Schrijf het meervoud: Ze heeft al een paar ___ (vriend) in Nederland.",
     ans:enc("vrienden"),exp:"vriend eindigt op medeklinker → meervoud op -en: vrienden."},

    {id:"pg-76",type:"fill",question:"Schrijf het meervoud: Zij heeft twee ___ (tas).",
     ans:enc("tassen"),exp:"tas (korte klinker) → verdubbel medeklinker + -en: tassen."},

    {id:"pg-77",type:"fill",question:"Schrijf het meervoud: In Amsterdam zijn veel ___ (toerist).",
     ans:enc("toeristen"),exp:"toerist eindigt op -t → meervoud op -en: toeristen."},
  ]},

],

/* ═══════════════════════════════════════════════════════════════
   LEZEN
═══════════════════════════════════════════════════════════════ */
lezen: [

  { theme:"Kennismaken — Mila en Willem", exercises:[

    {id:"pl-1",type:"display",
     passage:`<strong>Tekst A — Mila</strong><br>
Hallo, ik ben Mila. Ik ben 26 jaar. Ik kom uit Peru. Ik ben nu twee jaar in Nederland. Ik werk en ik werk bij een bank in Utrecht. Ik ga elke dag met de trein naar Utrecht. Mijn vriend is arts en hij heeft Willem. Hij was voor zijn stage, vier jaar geleden, in Peru. Daar heeft hij haar ontmoet. Ik spreek nu redelijk Nederlands. Met Willem spreek ik soms Spaans of Engels, maar nu spreken we meestal Nederlands.<br><br>
<strong>Tekst B — Willem</strong><br>
Hoi, ik ben Willem. Ik ben 29 jaar. Ik woon in Amsterdam en werk daar als arts in mijn ziekenhuis. Mijn vriendin heet Mila. Ze komt uit Peru en ik ken haar van mijn stage. Ik was daar een half jaar voor mijn studie geneeskunde. Mila is nu twee jaar hier. Ik spreek een beetje Spaans, maar niet zo goed. Met Mila spreek ik een beetje Spaans of Engels en nu ook goed Nederlands. Ze spreekt al goed Nederlands, vind ik!`,
     questions:[
       {q:"1. Willem werkt als arts in Utrecht.",type:"tf",ans:enc("niet waar"),exp:"Willem werkt in Amsterdam, niet Utrecht."},
       {q:"2. Mila spreekt redelijk Nederlands.",type:"tf",ans:enc("waar"),exp:"Mila zegt zelf: 'Ik spreek nu redelijk Nederlands.'"},
       {q:"3. Willem spreekt goed Spaans.",type:"tf",ans:enc("niet waar"),exp:"Willem zegt: 'Ik spreek een beetje Spaans, maar niet zo goed.'"},
       {q:"4. Mila heeft Willem ontmoet in Peru.",type:"tf",ans:enc("waar"),exp:"Ze ontmoetten elkaar tijdens Willems stage in Peru."},
       {q:"5. Willem en Mila wonen in Amsterdam.",type:"tf",ans:enc("niet waar"),exp:"Willem woont in Amsterdam, Mila woont in Utrecht."},
       {q:"6. Willem was voor zijn stage een half jaar in Peru.",type:"tf",ans:enc("waar"),exp:"'Ik was daar een half jaar voor mijn studie geneeskunde.'"},
     ]},
  ]},

  { theme:"Cursusinstituut Utrecht", exercises:[

    {id:"pl-2",type:"display",
     passage:`<strong>Cursusinstituut Utrecht</strong><br>
Cursusinstituut Utrecht is gevestigd in het centrum van Utrecht, aan de Oudegracht 11, 3511 LV Utrecht.<br><br>
De open dag voor het nieuwe cursusjaar is op zaterdag 30 augustus van 10.30 tot 16.00 uur. De administratie is geopend van maandag t/m vrijdag van 9.00 tot 16.00 uur en tijdens het cursusjaar ook 's avonds tussen 19.00 en 21.00 uur. Op zaterdag is de administratie open tussen 10 en 13 uur.<br><br>
Telefoon: 030-2382851, e-mail: cursusinstituut@utrecht.nl`,
     questions:[
       {q:"1. Wanneer is de open dag?",type:"open",ans:enc("zaterdag 30 augustus van 10.30 tot 16.00 uur"),exp:"De open dag is op zaterdag 30 augustus van 10.30 tot 16.00 uur."},
       {q:"2. Wat is het adres van Cursusinstituut Utrecht?",type:"open",ans:enc("Oudegracht 11, 3511 LV Utrecht"),exp:"Cursusinstituut Utrecht is aan de Oudegracht 11, 3511 LV Utrecht."},
       {q:"3. Tot hoe laat is de administratie open op woensdag?",type:"open",ans:enc("21.00 uur|21:00"),exp:"'s Avonds tot 21.00 uur (op weekdagen tijdens het cursusjaar)."},
       {q:"4. Is de administratie ook open op zaterdag?",type:"open",ans:enc("ja, tussen 10 en 13 uur|ja"),exp:"Ja, op zaterdag is de administratie open tussen 10 en 13 uur."},
       {q:"5. Wat is het e-mailadres?",type:"open",ans:enc("cursusinstituut@utrecht.nl"),exp:"Het emailadres is cursusinstituut@utrecht.nl."},
     ]},
  ]},

  { theme:"Een Nederlandse verjaardag", exercises:[

    {id:"pl-3",type:"display",
     passage:`<strong>Een Nederlandse verjaardag</strong><br>
Nederlanders vieren hun verjaardag meest thuis, of soms in een café. Ze sturen een uitnodiging voor een verjaardagsfeest. De gasten zeggen "Gefeliciteerd!" of "Van harte!". Ze feliciteren ook de vader en moeder van de jarige: "Gefeliciteerd met de verjaardag van je zoon." Of zeggen zijn/haar vriendin: "Feliciteer ik met uw verjaardag." En de jarige zelf staat op om iedereen te bedanken. Het is een goede gewoonte van de Nederlanders, maar wel leuk.`,
     questions:[
       {q:"1. Waar vieren Nederlanders hun verjaardag meestal?",type:"open",ans:enc("thuis|thuis of in een café"),exp:"Nederlanders vieren hun verjaardag meest thuis, of soms in een café."},
       {q:"2. Wat zeggen de gasten bij een verjaardag?",type:"open",ans:enc("Gefeliciteerd!|Van harte!"),exp:"Ze zeggen 'Gefeliciteerd!' of 'Van harte!'."},
       {q:"3. Wie feliciteren de gasten ook?",type:"open",ans:enc("de vader en moeder van de jarige|de ouders"),exp:"Ze feliciteren ook de vader en moeder van de jarige."},
     ]},
  ]},

  { theme:"Kennismaken — dialogues", exercises:[

    {id:"pl-4",type:"display",
     passage:`<strong>Dialoog — Op straat</strong><br>
Mark: Hoi, Anne!<br>
Anne: Ha, Mark! Hoe gaat het?<br>
Mark: Goed, en met jou?<br>
Anne: Prima. Ik ben vandaag vrij.<br>
Mark: O, wauw! En met mij ook. Dag!<br>
Anne: Jij ook een fijne dag. Dag!<br><br>
<strong>Dialoog — Kennismaken</strong><br>
Docent: Hallo allemaal. Ik ben Peter Jansen. Ik kom uit Nederland. Ik spreek Nederlands. Wie ben jij?<br>
Carlos: Hallo, ik ben Carlos Arroyo.<br>
Docent: En jij?<br>
Maria: Ik ben Maria Sanchez.<br>
Docent: Carlos komt uit Spanje. Maria, kom jij ook uit Spanje?<br>
Maria: Nee, ik kom uit Mexico.<br>
Docent: En jij, Fatima?<br>
Fatima: Ik ben Fatima. Fatima, welkom. Wat is je achternaam?<br>
Fatima: Mijn achternaam is Achaoudi. Kom je uit Marokko?<br>
Fatima: Ja.`,
     questions:[
       {q:"1. Hoe gaat het met Mark?",type:"open",ans:enc("goed"),exp:"Mark zegt: 'Goed, en met jou?'"},
       {q:"2. Waar komt Maria vandaan?",type:"open",ans:enc("Mexico"),exp:"Maria zegt: 'Nee, ik kom uit Mexico.'"},
       {q:"3. Wat is de achternaam van Fatima?",type:"open",ans:enc("Achaoudi"),exp:"Fatima zegt: 'Mijn achternaam is Achaoudi.'"},
     ]},
  ]},

],

/* ═══════════════════════════════════════════════════════════════
   SCHRIJVEN
═══════════════════════════════════════════════════════════════ */
schrijven: [

  { theme:"Over jezelf schrijven", exercises:[

    {id:"ps-1",type:"prompt",
     instruction:"<strong>Opdracht 5 — Schrijf een tekst over jezelf (50-70 woorden).</strong><br>Schrijf over:",
     bullets:["je naam, land, woonplaats en taal","wat doe je nu?","hoe gaat het met je?"],
     example:"Ik ben Julia. Ik kom uit Belarus. Ik woon in Amsterdam. Ik spreek Russisch, Belarussisch en Engels. Ik studeer de Nederlandse taal. Mijn beroep is personeelszaken. Ik werk vijf dagen per week, van 9 tot 5 uur, van maandag tot vrijdag. Het gaat goed. De weekenden waren leuk. Maar werken is niet leuk nu. Ik ben veel druk."},
  ]},

  { theme:"Informatie omzetten naar zinnen", exercises:[

    {id:"ps-2",type:"fill",question:"Kijk naar de informatie over Maria en schrijf complete zinnen.\n(naam: Maria Greco) → Zij heet ___.",
     ans:enc("Maria Greco"),exp:"Zij heet Maria Greco."},

    {id:"ps-3",type:"fill",question:"(land: Italië) → Zij komt ___ Italië.",
     ans:enc("uit"),exp:"Zij komt uit Italië."},

    {id:"ps-4",type:"fill",question:"(woonplaats: Utrecht) → Zij woont ___ Utrecht.",
     ans:enc("in"),exp:"Zij woont in Utrecht."},

    {id:"ps-5",type:"fill",question:"(taal: Italiaans) → Zij spreekt ___.",
     ans:enc("Italiaans"),exp:"Zij spreekt Italiaans."},

    {id:"ps-6",type:"fill",question:"(verkouden) → Zij ___ verkouden.",
     ans:enc("is"),exp:"Zij is verkouden. (zijn = to be)"},
  ]},

  { theme:"Familie tabel — man en vrouw vormen", exercises:[

    {id:"ps-7",type:"fill",question:"Schrijf het vrouwelijk equivalent: de broer → de ___",
     ans:enc("zus"),exp:"De broer (man) — de zus (vrouw)."},

    {id:"ps-8",type:"fill",question:"Schrijf het mannelijk equivalent: de oma → de ___",
     ans:enc("opa|grootvader"),exp:"De oma (vrouw) — de opa / grootvader (man)."},

    {id:"ps-9",type:"fill",question:"Schrijf het vrouwelijk equivalent: de oom → de ___",
     ans:enc("tante"),exp:"De oom (man) — de tante (vrouw)."},

    {id:"ps-10",type:"fill",question:"Schrijf het vrouwelijk equivalent: de schoonvader → de ___",
     ans:enc("schoonmoeder"),exp:"De schoonvader (man) — de schoonmoeder (vrouw)."},

    {id:"ps-11",type:"fill",question:"Schrijf het mannelijk equivalent: de schoondochter → de ___",
     ans:enc("schoonzoon"),exp:"De schoondochter (vrouw) — de schoonzoon (man)."},
  ]},

  { theme:"Tekst aanvullen", exercises:[

    {id:"ps-12",type:"fill",question:"Lees de tekst en vul in:\nAli: Hallo, ik ben Ali. Mijn ___ is Alchaoui. (familienaam)",
     ans:enc("achternaam"),exp:"Familienaam = achternaam."},

    {id:"ps-13",type:"fill",question:"Ik kom ___ Syrië. Nu woon ik in Amsterdam.",
     ans:enc("uit"),exp:"Komen uit = herkomst aangeven."},

    {id:"ps-14",type:"fill",question:"Ik spreek Arabisch en Engels en ik doe een ___ Nederlands.",
     ans:enc("cursus"),exp:"Een cursus doen = to take a course."},
  ]},

],

/* ═══════════════════════════════════════════════════════════════
   LUISTEREN
═══════════════════════════════════════════════════════════════ */
luisteren: [

  { theme:"Getal herkennen", exercises:[

    {id:"plu-1",type:"display",
     instruction:"<strong>Luisteroefening — Welk getal hoor je?</strong><br>Luister en kruis het juiste getal aan.",
     note:"[REVIEW NEEDED — audio vereist. Oefenen met een partner: één persoon noemt een getal, de ander schrijft het op.]",
     pairs:[
       {a:15,b:5,ans:15},{a:6,b:7,ans:6},{a:13,b:14,ans:14},
       {a:7,b:9,ans:7},{a:8,b:18,ans:8},{a:21,b:41,ans:21},
       {a:167,b:176,ans:167},{a:18,b:80,ans:18},
     ]},
  ]},

  { theme:"Prijzen herkennen", exercises:[

    {id:"plu-2",type:"display",
     instruction:"<strong>Luisteroefening — Omcirkel de juiste prijs</strong><br>Luister naar de dialoog en kies de prijs die je hoort.",
     note:"[REVIEW NEEDED — audio vereist]",
     pairs:[
       {a:"€ 6,75",b:"€ 7,65",ans:"€ 6,75",label:"De tomaten kosten ... per kilo."},
       {a:"€ 0,20",b:"€ 0,25",ans:"€ 0,20",label:"De citroenen kosten ... per stuk."},
       {a:"€ 2,99",b:"€ 3,99",ans:"€ 2,99",label:"Een bos tulpen voor ..."},
       {a:"€ 2,15",b:"€ 2,89",ans:"€ 2,15",label:"Een lekkere tros druiven voor ..."},
       {a:"€ 1,89",b:"€ 1,99",ans:"€ 1,89",label:"Een kilootje bananen voor ..."},
     ]},
  ]},

  { theme:"Waar of Niet waar", exercises:[

    {id:"plu-3",type:"tf",question:"Na het winkelen gaan Mila en Simone naar een café.\n\n1. Mila bestelt chocoladetaart met slagroom.",
     ans:enc("niet waar"),exp:"Mila bestelt chocoladetaart zónder slagroom."},

    {id:"plu-4",type:"tf",question:"2. Simone bestelt appeltaart met slagroom en cappuccino.",
     ans:enc("waar"),exp:"Simone bestelt appeltaart met slagroom en cappuccino."},

    {id:"plu-5",type:"tf",question:"3. De ober lijkt op de verkoper in de schoenenzaak.",
     ans:enc("waar"),exp:"Mila en Simone zeggen dat de ober lijkt op de schoenenzaken verkoper."},
  ]},

  { theme:"Dialogues — begrijpen en reageren", exercises:[

    {id:"plu-6",type:"display",
     instruction:"<strong>Luister naar de dialoog en beantwoord de vragen.</strong><br>Dialoog 1 — Kennismaken:",
     passage:`Ha, (Mark)! / Hoe gaat het? / Met mij goed. / En met jou? / Prima! / Ik ben vandaag vrij. / O, leuk! / Een fijne dag! / Dank je. / Jij ook. / Doei!`,
     questions:[
       {q:"Hoe gaat het met de persoon?",type:"open",ans:enc("goed|prima"),exp:"De persoon zegt: 'Met mij goed' / 'Prima!'"},
       {q:"Wat doet hij/zij vandaag?",type:"open",ans:enc("vrij|hij is vrij"),exp:"'Ik ben vandaag vrij.'"},
     ]},
  ]},

],

/* ═══════════════════════════════════════════════════════════════
   SPREKEN
═══════════════════════════════════════════════════════════════ */
spreken: [

  { theme:"Kennismaken — dialogues oefenen", exercises:[

    {id:"psp-1",type:"prompt",
     instruction:"<strong>Oefen de dialogue: Kennismaken</strong><br>Werk in tweetallen. Persoon A begint.",
     dialogue:[
       {role:"A",line:"Hoi! / Hallo!"},
       {role:"B",line:"Hoi! Wie ben jij?"},
       {role:"A",line:"Ik ben [naam]. En jij?"},
       {role:"B",line:"Ik ben [naam]. Waar kom jij vandaan?"},
       {role:"A",line:"Ik kom uit [land]. En jij?"},
       {role:"B",line:"Ik kom uit [land]. Wat doe je?"},
       {role:"A",line:"Ik ben [beroep/student]. En jij?"},
       {role:"B",line:"Ik [werk/studeer] ook. Leuk je te ontmoeten!"},
       {role:"A",line:"Jij ook! Tot ziens!"},
     ]},
  ]},

  { theme:"Hoe gaat het? — reageren", exercises:[

    {id:"psp-2",type:"prompt",
     instruction:"<strong>Oefen deze reacties</strong><br>Hoe reageer jij als iemand vraagt: 'Hoe gaat het met je?'<br>Gebruik de volgende uitdrukkingen:",
     items:[
       "Prima! / Heel goed!",
       "Goed, dank je.",
       "Het gaat wel.",
       "Niet zo goed. / Slecht.",
       "Ik ben verkouden.",
       "Ik ben moe.",
     ],
     followup:"Reageer ook op het antwoord van de ander: 'Dat is vervelend.' / 'Nou, sterkte!' / 'O, leuk!' / 'Gelukkig!'"},
  ]},

  { theme:"Op straat — dialoog", exercises:[

    {id:"psp-3",type:"prompt",
     instruction:"<strong>Oefen de dialogue: Op straat</strong><br>Werk in tweetallen.",
     dialogue:[
       {role:"Mark",line:"Hoi, Anne!"},
       {role:"Anne",line:"Ha, Mark! Hoe gaat het?"},
       {role:"Mark",line:"Goed, en met jou?"},
       {role:"Anne",line:"Prima. Ik ben vandaag vrij."},
       {role:"Mark",line:"O, wauw! En met mij ook. Dag!"},
       {role:"Anne",line:"Jij ook een fijne dag. Dag!"},
     ],
     followup:"Maak nu je eigen versie: verander de namen en details."},
  ]},

  { theme:"Spreken over jezelf", exercises:[

    {id:"psp-4",type:"prompt",
     instruction:"<strong>Spreek 1 minuut over jezelf.</strong><br>Gebruik deze vragen als leidraad:",
     questions:[
       "Wie ben jij? (naam, nationaliteit)",
       "Waar kom jij vandaan?",
       "Waar woon je nu?",
       "Welke talen spreek je?",
       "Wat doe je? (werk / studie)",
       "Hoe gaat het met je?",
     ]},
  ]},

  { theme:"Begroetingen en afscheid", exercises:[

    {id:"psp-5",type:"prompt",
     instruction:"<strong>Oefen begroetingen en afscheid in verschillende situaties.</strong>",
     scenarios:[
       {situation:"Je ontmoet een collega 's ochtends op kantoor.",hints:["Goedemorgen!","Hoe gaat het?","Prima, dank je. En met jou?"]},
       {situation:"Je ontmoet een vriend op straat in de middag.",hints:["Hoi! / Hey!","Goed, en jij?","Dag! / Tot ziens!"]},
       {situation:"Je verlaat een zakelijke vergadering.",hints:["Goedemiddag / Goedenavond.","Tot ziens.","Prettige dag nog."]},
     ]},
  ]},

  { theme:"Bij een restaurant — bestellen", exercises:[

    {id:"psp-6",type:"prompt",
     instruction:"<strong>Dialoog: Bij een café of restaurant</strong><br>Oefen met een partner. Één persoon speelt de ober, de ander is de klant.",
     dialogue:[
       {role:"Ober",line:"Goedemiddag. Kan ik u helpen?"},
       {role:"Klant",line:"Ja, graag. Ik wil [gerecht/drank] bestellen."},
       {role:"Ober",line:"En wat wilt u drinken?"},
       {role:"Klant",line:"Ik neem [drank], alstublieft."},
       {role:"Ober",line:"Heeft u nog een keuze kunnen maken?"},
       {role:"Klant",line:"Ja, ik neem [voorgerecht/nagerecht]."},
       {role:"Ober",line:"Uitstekend. Dat is dan € [bedrag]."},
       {role:"Klant",line:"Alstublieft. / Kan ik met pin betalen?"},
       {role:"Ober",line:"Natuurlijk. Dank u. Tot ziens!"},
     ],
     usefulPhrases:[
       "Ik neem / Ik wil graag ...",
       "Heeft u ook ...?",
       "Wat is de specialiteit?",
       "De rekening, alstublieft.",
       "Kan ik met pin / contant betalen?",
     ]},
  ]},

],

}; // END PDF_EXERCISES
