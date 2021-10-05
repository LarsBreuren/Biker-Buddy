import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    currentArticle : "",
    currentCategory : "",
    driverInfo: {
      Voornaam: "",
      Leeftijd: 0,
      Rijbewijs: "",
      Ervaring: 0,
      Info: []
  },
  driverScore: {
    Onderhoud: 0,
    Rijvaardigheid: 0,
    Advies: 0,
    Coaching: 0,
  },
  prio: {
    prio1: "",
    prio2: "",
    prio3: "",
  },
  driverPrefs: {
      picks : [],
      sporty : 50,
      price : 3500, 
      height: "",
      commute : [],
      comfort : "",
      fun : 50, 
      offroad: "",
  },
  perfectBike: {
    Sportbike : 0,
    Tourbike : 0,
    Scrambler : 0,
    Naked : 0,
    Supermoto : 0,
    Adventure : 0,
  },
  pickedBikes: {
    bike1: "",
    bike2: "",
    bike3: "",
  },

  bikeCats: [
    {
        id: 0,
        name: "Sportbike",
        imgLink: require('./assets/images/bikes/sportbike.jpg'),
        description: "License loser",
    },
    {
        id: 1,
        name: "Tourbike",
        imgLink: require('./assets/images/bikes/touring.jpg'),
        description: "Rustig rijden & genieten",
    },
    {
        id: 2,
        name: "Scrambler",
        imgLink: require('./assets/images/bikes/scrambler.jpg'),
        description: "Off and on road fun",
    },
    {
        id: 3,
        name: "Naked",
        imgLink: require('./assets/images/bikes/naked.jpg'),
        description: "Één met de elementen",
    },
    {
        id: 4,
        name: "Supermoto",
        imgLink: require('./assets/images/bikes/supermoto.jpg'),
        description: "BRAAAAAP",
    },
    {
        id: 5,
        name: "Adventure",
        imgLink: require('./assets/images/bikes/adventure.jpg'),
        description: "Op avontuur met de motor!",
    },
],
  articles: [
    {
      title: "Olie verversen",
      category: "onderhoudArtikelen",
      icon: 'hammer-screwdriver',
      text1: 'Motorolie behoort tot de "slijtonderdelen" van een benzinemotor. Het aantal gereden kilometers, de thermische belasting en het rijgedrag zorgen dat de smerende eigenschappen van de olie en de additieven langzaamaan afnemen. Wie lang plezier wil beleven van zijn motor, zal de olie dus graag verversen volgens de intervallen die de fabrikant opgeeft in het onderhoudshandleiding.',
      text2: 'Niets werkt zonder olie: de wrijving van de zuigers, de loopvlakken en de tandwielen zou iedere motor binnen de kortste keren vernielen. \n\n Regelmatige controle van het oliepeil is dus van levensbelang voor je tweewieler, net als regelmatig olie verversen. Want olie veroudert, raakt vervuild door metaaldeeltjes en verbrandingsresten en verliest gaandeweg zijn smerende vermogen. ',
      imgText: 'Niet je olie verwisselen direct na het rijden!',
      banner:  require('./assets/images//articles/olie.jpg'),
      img1:  require('./assets/images//articles/olie.jpg'),
      img2:  require('./assets/images//articles/olie2.jpg'),
      source: 'Louis.nl',
      sourceLink: "https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/oelwechsel"
    },
    {
      title: "ketting smeren als een baas",
      category: "onderhoudArtikelen",
      icon: 'motorbike',
      text1: 'Het onderhoud van de aandrijfketting wordt veelal beschouwd als een vervelende klus. Maar de ketting verdient juist een liefdevolle verzorging. \n\n Zij moet elke dag de enorme koppels aankunnen waarmee de motor aan haar trekt en zij wordt voortdurend blootgesteld aan vocht en vuil. Zij wrijft zich letterlijk stuk voor ons. Bovendien is de kettingaandrijving nog steeds de meest eenvoudige manier om een motor aan te drijven.',
      text2: 'De kettingaandrijving is lichter en biedt een effectievere krachtoverbrenging dan de cardanaandrijving, is ongevoeliger dan de tandriem en dus technisch nog altijd bij de tijd. Daar moeten we dan maar wat onderhoudswerk voor over hebben. Goed onderhouden gaat een ketting dubbel zo lang mee dan een verwaarloosd exemplaar en zal ook meer motorvermogen op het achterwiel overbrengen.',
      imgText: 'Je ketting heeft wat te voorduren!',
      banner:  require('./assets/images//articles/ketting.jpg'),
      img1:  require('./assets/images/articles/ketting-gif.gif'),
      img2:  require('./assets/images/articles/ketting2.jpg'),
      source: 'Louis.nl',
      sourceLink: "https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/kettenpflege"
    },
      {
        title: "Bobbins voor je motor",
        category: "onderhoudArtikelen",
        icon: 'screw-machine-round-top',
        text1: 'Bobbins zorgen ervoor dat jij het achterwiel van jouw motor gemakkelijk met een paddockstand omhoog kunt liften. De voordelen hiervan spreken voor zich: je kunt snel je ketting reinigen en smeren, je velg schoonmaken en de achterrem reinigen. \nOok op het circuit worden bobbins en paddockstands vaak gebruikt om bandenwarmers op de wielen te bevestigen. Het is heel erg belangrijk dat bobbins van stevig materiaal gemaakt zijn, ze moeten er namelijk toe een staat zijn om een motor van ruim 200 kg te kunnen dragen! ',
        text2: 'Wat zijn bobbins eigenlijk? \n\n Het omschrijven van bobbins is best lastig. Het zijn een soort ronde houdertjes waar een schroefdraadbout doorheen loopt. Op de houdertjes zit een uitsparing waar de haken van een paddockstand in passen. Op de afbeelding hiernaast zie je hoe bobbins eruitzien. Een foto zegt natuurlijk meer dan duizend woorden! De schroefdraadbout die door de bobbins heen loopt kan verschillende afmetingen hebben, dit ligt aan het merk of type motor. De vier maten zijn M6, M8, M10 en M12. Als je bobbins voor jouw motor wilt aanschaffen, zorg er dan voor dat je weet welke maat je nodig hebt. Dit kun je meestal opzoeken of anders kun je het vragen aan de verkoper. \n\n Omdat bobbins een motor moeten dragen, zijn ze gemaakt van aluminium. Aluminium staat erom bekend zowel licht als zeer sterk te zijn. Een strakke afwerking van de bobbins zorgt ervoor dat ze je motor niet kunnen beschadigen. Bobbins bevestig je aan beide kanten van je motor, ze worden dus altijd in een set van 2 geleverd.',
        imgText: '',
        banner:  require('./assets/images//articles/bobbins.jpg'),
        img1:  require('./assets/images//articles/bobbins2.jpg'),
        img2:  require('./assets/images//articles/bobbins.jpg'),
        source: 'rijdmotor.nl',
        sourceLink: "https://rijdmotor.nl/bobbins-voor-je-motor/"
      },
      {
        title: "Bochten rijden tips",
        category: "rijvaardigheidArtikelen",
        icon: 'road-variant',
        text1: 'Bij het motorrijden door bochten komt meer kijken dan je wellicht in eerst instantie zou denken. Wil je ontspannen en op een gecontroleerde manier door bochten motorrijden, dan zul je aan je bochtentechniek moeten werken. In deze blog vertel ik meer over de vaardigheden die je nodig hebt om met nóg meer controle en vertrouwen door bochten te rijden op je motor.',
        text2: 'Kijktechniek voor bochten \n\n Om de juiste bochttechniek goed te begrijpen, deel ik deze blog op in vier stukken. Ik begin bij de kijktechniek voor een bocht.  Het is belangrijk om een bocht en het verloop ervan, op tijd te herkennen. Want, hoe eerder je een bocht doorziet, hoe meer tijd je hebt om je er goed op aan te passen. Borden langs de weg helpen je daarbij, maar ook de lijnen op de weg of herkenningspunten zoals bomen of lantaarnpalen kunnen je veel vertellen over een bocht.\n\n Om goed te bepalen met welke snelheid je door een bocht kunt rijden, zul je vóór de bocht dóór de bocht moeten kijken. Hiermee zet je je brein al aan het werk met het berekenen van de bocht. Ook kun je je alvast proberen in te stellen op de wegsituatie als je de bocht uitkomt. Na de bocht kun je bijvoorbeeld een stilstaand voertuig of ander obstakel tegenkomen, of misschien wel een volgende bocht. Houd hier rekening mee vóór je bocht.',
        imgText: 'Klaar zijn voor een bocht',
        banner:  require('./assets/images/articles/corner1.jpg'),
        img1:  require('./assets/images//articles/corner2.jpg'),
        img2:  require('./assets/images//articles/corner3.jpg'),
        source: 'derijder',
        sourceLink: "https://derijder.nl/door-bochten-rijden-met-motor/"
      },
      {
        title: "Motorvakantie voorbereiding",
        category: "rijvaardigheidArtikelen",
        icon: 'palm-tree',
        text1: 'ZORG VOOR EEN GESCHIKTE MOTOR VOOR EEN LANGE TOCHT \n\n Om te beginnen kijken we naar de motor, aangezien je er lange afstanden mee gaat afleggen, is een goede motor van belang. Het maakt hierbij niet uit of je een toermotor of een gewone motor hebt. Elke motor is een lange afstand motor, als er maar een stevig zadel op zit. Het ligt namelijk meer aan de weg die gereden wordt. Er kan via de snelweg gereden worden om zo snel mogelijk van A naar B te gaan (hiervoor zou dan wel een toermotor het meest geschikt zijn), maar meestal wil iemand die met de motor op vakantie gaat juist de binnenwegen zien. Bij een motorvakantie is de reis tenslotte belangrijker dan het eindpunt. Dus neem de tijd en geniet van de binnenwegen, waarbij het dan wel belangrijk is te weten welke route je gaat rijden. \n\n EEN GOEDE PLANNING VAN DE ROUTE IS BELANGRIJK \n\n Bij het uitstippelen van de route kun je denken aan twee dingen: navigatie en de kaart. Een navigatie zal het zo makkelijk mogelijk maken om de snelste route uit te kiezen, terwijl bij een kaart ook wat andere dingen komen kijken. Bij een kaart is het, vaak bij kleine wegen, bij ieder kruispunt controleren welke kant de groep op moet. Het is daarom slim om, voordat er ’s ochtends weggereden wordt, een lijn te trekken die aangeeft welke route er wordt gevolgd. Een duidelijke lijn heeft natuurlijk ook een duidelijke kaart nodig.',
        text2Head: 'Bepakking',
        text2: 'NEEM ETEN MEE OF EET ONDERWEG \n\n Het eten en drinken is een essentieel onderdeel van de motorvakantie. Dit zal je voor een deel weerhouden om moe te worden onderweg. Koop genoeg makkelijke snacks en pakjes drinken. Als deze langzaam leeg raakt, vul de tas dan opnieuw bij het eerstvolgende tankstation. Probeer ook te rusten voordat je moe wordt en te eten voordat je honger krijgt. Maak er dus gebruik van wanneer je een mooie rustplaats tegenkomt. \n\n VERPAKKING VAN DE BESTUURDER EN DE BAGAGE \n\n Tot slot de kleding en andere bagage. Zorg ervoor dat je gekleed bent voor de juiste weersomstandigheden. Controleer de weersvoorspellingen en pas hier de kleding op aan. Dit zal voorkomen dat er iemand gaat zweten of rillen. De bagage moet ook ingepakt zijn voor het weer, het moet in ieder geval goed vastgebonden zitten aan de motor of in een goede rugtas zitten. Als het gaat regenen, is het ook handig om een regen verpakking om de tas te doen. Dit zal voorkomen dat de zowel de bagage als de tas nat worden. Een goede helm is hierbij ook belangrijk.',
        imgText: '',
        banner:  require('./assets/images/articles/trip.jpg'),
        img1:  require('./assets/images//articles/trip3.jpg'),
        img2:  require('./assets/images//articles/trip2.jpg'),
        source: 'helmonline.nl',
        sourceLink: "https://www.helmonline.nl/hoe-bereid-je-je-voor-op-motorvakantie"
      },
      {
        title: "Ongeval preventie",
        category: "rijvaardigheidArtikelen",
        icon: 'alert',
        text1: 'Als je het hebt over veiligheid op de motor, denken de meeste motorrijders aan helmen, protectoren of leren pakken. \n\n En inderdaad, al die dingen hebben met veiligheid te maken. Maar vergeet niet dat er een directere manier is om aan je veiligheid te denken. \n\n Je veiligheid vergroten kun je doen door alles in het werk te stellen om een ongeluk te voorkomen (de primaire veiligheid), en door ervoor te zorgen dat de schade, wanneer het te laat is, zoveel mogelijk beperkt blijft (secundaire veiligheid). \n In feite is het grote verschil tussen autorijden en motorrijden dat je in een auto een enorme hoeveelheid secundaire veiligheid hebt (de hele auto is een soort van veiligheidscocon om je heen), terwijl je op de motor je veiligheid toch vooral in je eigen hand hebt (primaire veiligheid dus). \n\n  In 37% van de gevallen was de hoofdoorzaak van het ongeluk een menselijke fout bij de motorrijder. Zo een menselijke fout kon bestaan uit gebrekkige aandacht of gebrekkige vaardigheden.De onderzoekers merken op dat er soms vaardigheden nodig zijn die uitstijgen boven wat er voor examens nodig is. \n Als bijkomende oorzaken kwamen vaak voor: motorrijders die het andere voertuig over het hoofd zagen en het nemen van verkeerde beslissingen (ze kozen een niet-adequate strategie om het ongeluk te voorkomen).In 13% van alle gevallen was er zo een beslissingsfout bij de motorrijder.',
        text2Head: 'Voorkomen',
        text2: 'Als motorrijder moet je het toch vooral van je primaire veiligheid hebben, want motoren zullen bij een ongeluk nooit net zo "veilig" zijn als een auto. Voor die primaire veiligheid zul je moeten werken! \n\n MOTOR CONDITIE \n Uiteraard zorg je ervoor dat je motor je niet onderweg met vervelende kuren kan verrassen, dat je banden op spanning zijn, dat je lichten het doen, en dat je remblokjes niet versleten zijn en dergelijke. \n Maar ongelukken die gebeuren doordat er iets mis is met de motor komen nauwelijks voor. \n\n Aandacht erbij houden is een belangrijk ingrediënt van ongelukken. Dit betekend dat je jezelf in goede conditie houdt en dus optijd eet en drinkt en niet te moe op pad gaat. \n Het lijkt overdreven om dit soort dingen op te sommen, maar veel mensen vergeten hoe belangrijk het is. Vooral het laatste item wordt vaak vergeten. Bedenk ook wat een beloning je krijgt wanneer je er in slaagt je problemen van je af te zetten: op een Zen-achtige manier ben je dan aan het motorrijden, en ben je niks anders aan het doen. ',
        imgText: 'Houd marge',
        banner:  require('./assets/images/articles/preventie3.jpg'),
        img1:  require('./assets/images/articles/preventie.jpg'),
        img2:  require('./assets/images/articles/preventie2.jpg'),
        source: 'luiemotorfiets.nl',
        sourceLink: "https://www.luiemotorfiets.nl/tips/safety/"
      },
      {
        title: "Remmen is een kunst",
        category: "rijvaardigheidArtikelen",
        icon: 'car-brake-abs',
        text1: 'Voor je de veiligheid is een goede remtechniek op de motor onmisbaar. Als je vooruit wil komen, zul je ook moeten weten hoe je moet remmen. Vanwege de balans op de motor, komt hierbij meer kijken dan bij het remmen in een auto. In deze blog lees je alles over een goede remtechniek op de motor.',
        text2: 'De rem is verbonden aan het wiel van de motor. Door de rem te gebruiken vertraag je het wiel. Die vertraging brengt de band van het wiel over op de weg waar de motor op rijdt. \n\nDe weg biedt weerstand (grip) aan de band. Hierdoor neemt de snelheid af van de motor. En zolang er meer grip is dan de hoeveelheid vertraging van het wiel, remt de motor dus af.',
        imgText: 'Pas je rijstijl aan',
        banner:  require('./assets/images/articles/remmen.jpg'),
        img1:  require('./assets/images//articles/remmen2.jpg'),
        img2:  require('./assets/images//articles/remmen.jpg'),
        source: 'derijder',
        sourceLink: "https://derijder.nl/goede-remtechniek-op-de-motor/"
      },
      {
        title: "Circuit ballerina",
        category: "rijvaardigheidArtikelen",
        icon: 'flag-checkered',
        text1: 'Weken lang kijk je er naar uit. De eerste keer dat je eindelijk mag gaan knallen of dat felbegeerde asfalt van het circuit. Maar hoe kan je je nou het beste voorbereiden op zo’n dag? Ik ga je hiermee proberen te helpen, zodat jij lekker relaxed je dag kan beginnen!',
        text2: 'Voordat we de stappen door gaan nemen is het belangrijk om een paar dingen vooraf te weten. Op ieder circuit is het mogelijk om vrij te rijden. Sommige rijders kunnen ermee wegkomen om meteen het diepe in te duiken en een eigen ritme te vinden. Heb je dit vertrouwen niet en wil jij liever eerst onder begeleiding de baan op? Boek dan gewoon een cursus waarbij ervaren instructeurs jou tips kunnen geven over jouw rijstijl, houding en andere verbeterpunten.',
        banner:  require('./assets/images/articles/circuit.jpg'),
        imgText: 'Hoe bereid ik me voor op mijn eerste circuit dag?',
        img1:  require('./assets/images//articles/circuit2.jpg'),
        img2:  require('./assets/images//articles/circuit.jpg'),
        source: 'MKC-Moto',
        sourceLink: "https://blog.motorkledingcenter.nl/hoe-bereid-me-op-eerste-circuit-dag/"
      },
      {
        title: "Helm kiezen",
        category: "adviesArtikelen",
        icon: 'racing-helmet',
        text1: 'Als je van plan bent te gaan motorrijden, of je hebt zelfs al je motorrijbewijs gehaald, dan resteren een aantal belangrijke vragen. Niet alleen moet je gaan bedenken welke motor je wilt gaan rijden, ook het vraagstuk ‘welke motorhelm kiezen?’ is een belangrijke. Wij hebben een aantal belangrijke tips voor je op een rij gezet.',
        text2: 'Een helm dragen tijdens het motorrijden is natuurlijk verplicht door de wet, maar is simpelweg ook van levensbelang. Geen enkele motorrijder kan zonder en zou het ook niet moeten willen. Een motorhelm kiezen is zodoende iets persoonlijks. Niet alleen door de maat en looks, maar ook door de doeleinden die hij dient. Wat voor soort motorrijder ben je immers? Het is jouw veiligheidsbril op de motor en daarom dient hij comfortabel én geschikt te zijn.',
        imgText: 'Welke type helm wil je?',
        banner:  require('./assets/images/articles/helm.jpg'),
        img1:  require('./assets/images//articles/helm2.jpg'),
        img2:  require('./assets/images//articles/helm.jpg'),
        source: 'mannenstyle.nl',
        sourceLink: "https://mannenstyle.nl/362594/tips-welk-type-motorhelm-kiezen/"
      },
      {
        title: "Communicatie op de motor",
        category: "adviesArtikelen",
        icon: 'account-voice',
        text1: 'Ben je het beu om steeds ergens te moeten stoppen om iets tegen je mede motorrijder te zeggen? Of om bij het stoplicht snel je zegje te moeten doen? Om die reden is communicatie voor op de motor uitgevonden! Met motor communicatiesystemen kun je heel gemakkelijk met 1 of meerdere andere motorrijders praten tijdens het motorrijden. Er zijn zeer veel verschillende mogelijkheden voor communicatie op de motor, waardoor je al snel door de bomen het bos niet meer ziet. Wij helpen je graag op weg! \n\n WELKE SOORTEN MOTORCOMMUNICATIE ZIJN ER? \n\n Er zijn verschillende soorten motor communicatiesystemen, verschillende motorrijders gebruiken ze namelijk voor verschillende doeleinden. Zo heb je ook motor communicatie voor solo motorrijders. Oké, dit is dan niet echt een motor communicatiesysteem te noemen maar eerder een headset waarmee diegene naar muziek of zijn navigatiesysteem kan luisteren. Je kunt gebruikers van motor communicatie in 4 groepen onderscheiden: \n\n Solo motorrijder \n\n Motorrijder met passagier \n\n Motorrijder die met een andere motorrijder rijdt \n\nMotorrijder die met een groep rijdt \n\n',
        text2: 'De meesten motorrijders zullen het liefste willen communiceren met een andere motorrijder, dit wordt ook wel bike2bike communicatie genoemd. Overigens kun je met zo’n communicatiesysteem natuurlijk ook met een passagier praten. Bij deze systemen is kwaliteit wat meer van belang, je wilt namelijk niet dat de verbinding opeens verbroken wordt omdat je maatje net te laat was voor het groene verkeerslicht en jij wel bent doorgereden. En mocht het gebeuren dat de verbinding verbroken wordt, dan is het natuurlijk fijn wanneer deze automatisch hersteld wordt wanneer je weer dichter bij elkaar rijdt. \n\n De betere motor communicatiesystemen, zoals die van Cardosystems of Sena, zijn perfect voor bike2bike communicatie. Ze hebben zuiver geluid, een goede range en niet onbelangrijk: ze zijn gebruiksvriendelijk. Een aanrader als je met een andere motorrijder wilt communiceren is onderstaande duo set, de Cardo Freecom 2. Deel je gewoon de kosten met je maatje en dan heb je er allebei een. Zo’n duo set is ook nog eens goedkoper in aanschaf dan een los systeem!',
        imgText: 'Welke type helm wil je?',
        banner:  require('./assets/images/articles/communicatie.jpg'),
        img1:  require('./assets/images//articles/communicatie2.jpg'),
        img2:  require('./assets/images//articles/communicatie.jpg'),
        source: 'rijdmotor',
        sourceLink: "https://rijdmotor.nl/communicatie-op-de-motor/"
      },
      {
        title: "ATGAT??",
        category: "adviesArtikelen",
        icon: 'racing-helmet',
        text1: 'Wanneer je voor de eerste keer motorkleding wilt gaan kopen zal je versteld staan van de variatie in prijzen en al snel merken dat je het zo gek kan maken als je zelf wilt. Als motorrijder kan je bijvoorbeeld kiezen voor hightech motorpak met airbag bescherming die je ook terug ziet in de MotoGP. Of een textiel motorpak waarmee je comfortabel een rondje rond de wereld kan rijden. Nu zijn dit twee uitersten en is dit niet aan elke motorrijder besteed. Voor de beginnende of incidentele rijder zijn er “eenvoudige” motoroutfits die voor de meesten de lading wel zullen dekken. Zo kan je voor een schappelijke prijs motorkleding kopen als starterspakket waarmee je prima uit de voeten kunt als beginnende rijder of sporadische rijder.',
        text2: 'Wanneer je een motorjas voor een Naked Bike wilt kopen is het handig om letten op de pasvorm. Een korte voorzijde en iets langere achterkant zorgen ervoor dat je comfortabel zit in een licht voorovergebogen houden. Ook de helm vergt wat extra aandacht voor optimaal comfort. Dat pasvorm zeer belangrijk is zal voor de meeste niet onbekend zijn. Een helm is aerodynamisch voorgevormd waarbij er van een bepaald zithouding wordt uitgegaan. Zo zijn de helmen voor Naked Bikes ontworpen voor een rechte tot licht voorovergebogen houding en een Race helm voor een extreem voorovergebogen houding. Een motorjeans kies je wanneer je gaat voor een casual look en deze mag bij voorkeur een slagje langer zijn op een Naked Bike vanwege doorgebogen knieën. De combinatie van deze Gotham 2 en een Brutale jeans zorgt ervoor dat je sportief en casual op de motor zit.',
        imgText: 'Waar je op moet letten',
        banner:  require('./assets/images/articles/atgat.jpg'),
        img1:  require('./assets/images//articles/atgat2.jpg'),
        img2:  require('./assets/images//articles/atgat.jpg'),
        source: 'MKC-Moto',
        sourceLink: "https://blog.motorkledingcenter.nl/drie-betaalbare-motoroutfits-voor-de-beginnende-motorrijder/"
      },
      {
        title: "AVB tips",
        category: "coachingArtikelen",
        icon: 'alpha-l-box',
        text1: 'Het avb examen kan best spannend zijn. Eerder beschreef ik al hoe je de oefeningen moet uitvoeren, nu is het tijd om je voor te bereiden op het daadwerkelijke examen. \n\nOm voor je avb motor examen te slagen krijg je 4 verplichte oefeningen en 3 keuze oefeningen. Voor de 7 oefeningen krijg je twee kansen per oefening. In totaal moeten 5 oefeningen voldoende worden afgerond.\n\nEr zijn flink wat zaken waar je per oefening op moet letten. In dit artikel leren we je wat algemene dingen die jouw motorrijschool je misschien niet zal leren. Alles om er voor te zorgen dat jij je motor en je zenuwen zo goed mogelijk onder controle te houden. ',
        text2: 'Met teveel spanning op de motor zitten. Wanneer je gespannen op de motor zit heb je geen controle over de motor. Bij de langzame oefeningen ziet de examinator dit direct. Het is namelijk bijna niet mogelijk om met spanning in je lijf door de langzame slalom te komen.\n\nNiet kijken waar je heen wil. Als je naar de paaltjes kijkt zul je daar naartoe gaan. Dit geld eigenlijk voor alle oefeningen. Bijvoorbeeld: Als je bij de halve draai niet naar je eindpunt kijkt dan zul je nooit strak genoeg kunnen draaien. Hetzelfde geld voor de langzame slalom. Kijk je naar de pylonnen dan zul je deze omver rijden. ',
        imgText: 'AVB Examen tips om te slagen',
        banner:  require('./assets/images/articles/avb.jpg'),
        img1:  require('./assets/images//articles/avb2.jpg'),
        img2:  require('./assets/images//articles/avb.jpg'),
        source: 'klus-motor.nl',
        sourceLink: "https://klus-motor.nl/rijbewijs/avb-examen-tips-om-te-slagen/"
      },
      {
        title: "Kosten motorrijbewijs",
        category: "coachingArtikelen",
        icon: 'cash',
        text1: 'Om maar meteen met de deur in huis te vallen, de kosten voor een motorrijbewijs kunnen per persoon behoorlijk verschillen. De totale kosten zijn voornamelijk afhankelijk van hoeveel lessen je nodig hebt. En natuurlijk of je de examens in één keer haalt of een (paar) keer over moet doen. Gemiddeld gezien kost het halen van je motorrijbewijs tussen de €1000,- en €1500,-. We zullen alle kosten doornemen zodat je weet wat je kunt verwachten en begrijpt waarop dit gemiddelde gebaseerd is. \n\n WAT KOST MOTORRIJLES? \n\n Motorrijles kost ongeveer €35,- tot €50,- per uur. Dit uurtarief kan een beetje verschillen per rijschool maar als je hiervan uitgaat zit je goed. De meeste rijscholen laten je 2 uur per keer lessen, je bent dus zo’n €70,- tot €100,- kwijt per motorrijles. De gemiddelde persoon heeft in totaal zo’n 20 uur motorrijles nodig om beide examens te kunnen halen. Dit zou dan uitkomen op ongeveer €700,- tot €1000,- voor alle motorrijlessen. ',
        text2: 'Wat zijn de totale kosten voor het halen van het motorrijbewijs? Alle kosten die je moet maken voor het halen van je motorrijbewijs zijn nu duidelijk. Laten we alles bij elkaar optellen om te zien hoeveel je gemiddeld kwijt bent voordat je op de motor mag stappen. Als we ervan uitgaan dat je 20 uur motorrijles nodig hebt, alle examens in één keer haalt, geen extra tijd nodig hebt en een uur rijles €40,- kost, kom je op het volgende uit: \n\n Motorrijles: €800,- bij 20 uur les van €40,- per uur \n\nTheorie examen: €37,- wanneer je deze zelf aanvraagt via het CBR \n\nTheorieboek en online examens: €30,49 (boek €25,- en 5 examens €5,49) \n\nAVB: €150,- gemiddeld \n\nAVD: €255,- gemiddeld \n\nGezondheidsverklaring: €39,30 \n\nAanvraag nieuw rijbewijs: €40,- \n\n In totaal kost het halen van je motorrijbewijs in dit voorbeeld €1351,79. Het kan dus zo zijn dat jij meer of juist minder kwijt bent maar als je rekening houdt met dit bedrag zit je waarschijnlijk wel goed. Waar we wel 100% zeker van kunnen zijn is dat het hebben van een motorrijbewijs veel meer waard is dan dit bedrag. Succes!' ,
        imgText: '',
        banner:  require('./assets/images/articles/money.jpg'),
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/rijbewijs.jpg'),
        source: 'rijdmotor',
        sourceLink: "https://rijdmotor.nl/kosten-motorrijbewijs/"
      },
      {
        title: "Theorie tips",
        category: "coachingArtikelen",
        icon: 'alpha-l-box',
        text1: 'Heb je een stok achter de deur nodig om te beginnen met leren? Vraag het theorie examen dan alvast aan. Op deze manier heb je een datum om naar toe te werken wat over het algemeen erg prettig leert. Maak dus een inschatting voor jezelf op basis van je huidige kennis en je leervermogen. Om te kijken hoeveel kennis je al hebt opgedaan kun je bijvoorbeeld een motor theorie-examen afleggen, zo zie je direct waar je aandachtspunten liggen. Voor het leren zul je over het algemeen rekening moeten houden met minimaal 4-8 weken.',
        text2: 'Leren vanuit je theorieboek is natuurlijk prima, maar het oefenen van motor theorie examens bereid je voor op het echte werk. Tevens zorgt het er voor dat je met een stuk meer vertrouwen aan je theorie-examen begint. Motor theorie examens oefenen kan eenvoudig online, bijvoorbeeld via Theorie.nl. Via Theorie.nl kun je voor een bepaalde tijd onbeperkt theorie examens oefenen, zo kun je de dagen voor je theorie-examen nog flink wat proefexamens maken.\n\nJa, dit klinkt inderdaad een beetje vreemd, maar scroll nog niet verder. Misschien bevind je je al dagelijks in het verkeer, probeer op zulke momenten te bedenken hoe je je op de motor zou gedragen. Kijk bijvoorbeeld even op dat verkeersbord wanneer je de straat in fietst, mag je daar ook met een motor in? Door bewust met je omgeving om te gaan en de verkeersregels te oefenen dwing je jezelf om de motor theorie naar boven te halen. Zo leer je niet alleen sneller, maar wordt ook je AVD-examen een stuk eenvoudiger.\n\nMisschien ben je al in het bezit van je autorijbewijs en ken je dus heel veel van je motor theorie al. Hoewel de twee theorie-examens veel overeenkomen, zijn er wel degelijk verschillen en is het verstandig hiervan bewust te zijn. Deze vragen tellen namelijk net zo zwaar mee en kunnen je dus het examen kosten. Geef deze verschillen dus wat extra aandacht als je reeds in het bezit bent van je autorijbewijs.        ',
        imgText: '',
        banner:  require('./assets/images/articles/rijbewijs.jpg'),
        img1:  require('./assets/images//articles/theorie.jpg'),
        img2:  require('./assets/images//articles/rijbewijs.jpg'),
        source: 'motorstof.nl',
        sourceLink: "https://motorstof.nl/motor-theorie-tips/"
      },
      // {
      //   title: "KTM Korte Termijn Motor?",
      //   banner:  require('./assets/images//articles/ktm.jpg'),
      //   category: "weekly",
      //   icon: 'hammer-screwdriver',
      //   link: '/articles/onderhoud/'
      // }
      {
        title: "Motor keuze hulp",
        banner:  require('./assets/images//articles/keuze.jpg'),
        category: "weekly",
        icon: 'motorbike',
        link: '/bikepicker'
      }
    ],

  },
  getters: {

  },
  mutations: {
    updatedriverInfo (state, driverInfo) {
      state.driverInfo = driverInfo
    },
    updatedriverBikePref (state, bikePrefs) {
      state.driverPrefs = bikePrefs
    },
    updatePerfectBike (state, bikeScores) {
      state.perfectBike = bikeScores
    },
    updatePickedBike (state, pickedBikes) {
      state.pickedBikes = pickedBikes
    },
    updatedriverScore (state, driverScore) {
      state.driverScore = driverScore
    },
    updatePrios (state, prio) {
      state.prio = prio
    },
    updateCurrentArticle (state, article) {
      state.currentArticle = article
    },
    updatecurrentCategory(state, category) {
      state.currentCategory= category
    },
  },
  actions: {
 
  },
  modules: {}
});
