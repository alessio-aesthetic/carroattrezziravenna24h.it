export const site = {
  domain: 'carroattrezziravenna24h.it',
  template: 'ravenna-signature',
  description: 'Carroattrezzi a Ravenna e soccorso stradale 24 ore: recupero auto, traino, assistenza moto e trasporto veicoli in città e provincia.',
  tel: 'mailto:assistenza@carroattrezziravenna24h.it',
  city: 'Ravenna',
  name: 'Carroattrezzi Ravenna 24H',
  address: 'Ravenna e provincia',
  title: 'Carroattrezzi Ravenna 24H | Soccorso stradale',
  phone: 'Richiedi assistenza',
  email: 'assistenza@carroattrezziravenna24h.it',
} as const

const serviceText = (service: string) => ({
  detail: `Quando un veicolo si ferma, ogni minuto può diventare più difficile. Per ${service.toLowerCase()} a Ravenna raccogliamo prima posizione, condizioni del mezzo e destinazione desiderata, così da organizzare il recupero con indicazioni chiare e senza passaggi inutili.`,
  text: `Il servizio di ${service.toLowerCase()} a Ravenna viene organizzato partendo dalla situazione reale: mezzo, posizione, accessi e punto di consegna. Le informazioni essenziali aiutano a preparare un intervento adatto.`,
})

export const services = [
  { title: 'Soccorso stradale 24 ore', slug: 'soccorso-stradale-24-ore', ...serviceText('soccorso stradale 24 ore'), text: "Un guasto non sceglie il momento. Comunica dove sei e cosa è successo per verificare la disponibilità di intervento." },
  { title: 'Traino auto', slug: 'traino-auto', ...serviceText('traino auto'), text: "Trasporto del veicolo non marciante verso l’officina o la destinazione concordata, con modalità di carico adeguate." },
  { title: 'Recupero auto incidentata', slug: 'recupero-auto-incidentata', ...serviceText('recupero auto incidentata'), text: "Valutazione di danni, ruote e accessi per organizzare con attenzione il recupero dopo un sinistro." },
  { title: 'Carroattrezzi moto', slug: 'carroattrezzi-moto', ...serviceText('carroattrezzi per moto'), text: "Recupero e trasporto di moto e scooter con fissaggi adatti alle due ruote e alle condizioni del mezzo." },
  { title: 'Assistenza batteria scarica', slug: 'assistenza-batteria-scarica', ...serviceText('assistenza per batteria scarica'), text: "Problemi di avviamento? Descrivi i segnali del veicolo per valutare l’assistenza o il trasferimento in officina." },
  { title: 'Recupero auto in panne', slug: 'recupero-auto-in-panne', ...serviceText('recupero auto in panne'), text: "Avarie, spie o un motore che non parte: organizziamo il recupero senza forzare il veicolo a proseguire." },
  { title: 'Soccorso in autostrada', slug: 'soccorso-in-autostrada', ...serviceText('soccorso in autostrada'), text: "Comunica tratta, direzione e riferimento chilometrico. Il soccorso sulla tratta è subordinato alle autorizzazioni necessarie." },
] as const

export const zones = [
  {
    "title": "Carroattrezzi a Ravenna",
    "name": "Ravenna",
    "slug": "ravenna"
  },
  {
    "title": "Carroattrezzi a Marina di Ravenna",
    "name": "Marina di Ravenna",
    "slug": "marina-di-ravenna"
  },
  {
    "title": "Carroattrezzi a Punta Marina",
    "name": "Punta Marina",
    "slug": "punta-marina"
  },
  {
    "title": "Carroattrezzi a Lido Adriano",
    "name": "Lido Adriano",
    "slug": "lido-adriano"
  },
  {
    "title": "Carroattrezzi a Lido di Dante",
    "name": "Lido di Dante",
    "slug": "lido-di-dante"
  },
  {
    "title": "Carroattrezzi a Porto Corsini",
    "name": "Porto Corsini",
    "slug": "porto-corsini"
  },
  {
    "title": "Carroattrezzi a Classe",
    "name": "Classe",
    "slug": "classe"
  },
  {
    "title": "Carroattrezzi a Cervia",
    "name": "Cervia",
    "slug": "cervia"
  },
  {
    "title": "Carroattrezzi a Lugo",
    "name": "Lugo",
    "slug": "lugo"
  },
  {
    "title": "Carroattrezzi a Bagnacavallo",
    "name": "Bagnacavallo",
    "slug": "bagnacavallo"
  },
  {
    "title": "Carroattrezzi a Russi",
    "name": "Russi",
    "slug": "russi"
  },
  {
    "title": "Carroattrezzi a Alfonsine",
    "name": "Alfonsine",
    "slug": "alfonsine"
  }
] as const

export const networkSites = [
  { name: 'Carroattrezzi Reggio Emilia Pro', city: 'Reggio Emilia', url: 'https://carroattrezzireggioemiliapro.it/', description: 'Soccorso stradale e recupero veicoli a Reggio Emilia.' },
  { name: 'Carroattrezzi Ravenna 24H', city: 'Ravenna', url: 'https://carroattrezziravenna24h.it/', description: 'Assistenza stradale e traino attivo a Ravenna.' },
  { name: 'Carroattrezzi Bari', city: 'Bari', url: 'https://carroattrezzibari.it/', description: 'Recupero auto e soccorso stradale a Bari.' },
  { name: 'Carroattrezzi Pavia', city: 'Pavia', url: 'https://carroattrezziapavia.it/', description: 'Traino e assistenza veicoli a Pavia.' },
] as const

export const faqs = [
  { question: 'Quanto costa un carroattrezzi a Ravenna?', answer: 'Il costo dipende da posizione, tipo di veicolo, condizioni del recupero, distanza e destinazione. Prima di organizzare l’intervento raccogliamo i dati essenziali per darti un’indicazione chiara.' },
  { question: 'Fate soccorso stradale a Ravenna e provincia?', answer: 'Sì, il servizio è organizzato in città, nelle zone produttive, sulle strade provinciali e nei comuni vicini, valutando accessi e caratteristiche del mezzo.' },
  { question: 'Posso scegliere dove portare l’auto?', answer: 'Sì. Puoi indicare officina, carrozzeria, deposito, abitazione o un altro indirizzo concordato prima del recupero.' },
  { question: 'Intervenite anche per moto e furgoni?', answer: 'Sì, valutiamo auto, moto, scooter e furgoni leggeri. Durante la richiesta chiediamo peso, dimensioni e posizione per preparare il mezzo adatto.' },
  { question: 'Cosa devo comunicare durante la richiesta?', answer: 'Servono posizione, tipo di veicolo, problema riscontrato, eventuali danni e destinazione. Queste informazioni aiutano a organizzare il soccorso in modo più preciso.' },
] as const
