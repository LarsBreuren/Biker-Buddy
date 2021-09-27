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
        title: "Remmen is een kunst",
        category: "rijvaardigheidArtikelen",
        icon: 'road-variant',
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
        title: "AVB pro tips",
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
        title: "Theorie tricks",
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
