export const site = {
  domain: 'carroattrezziravenna24h.it',
  template: 'ravenna-nordest',
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
  { title: 'Soccorso stradale 24 ore', slug: 'soccorso-stradale-24-ore', ...serviceText('soccorso stradale 24 ore') },
  { title: 'Traino auto', slug: 'traino-auto', ...serviceText('traino auto') },
  { title: 'Recupero auto incidentata', slug: 'recupero-auto-incidentata', ...serviceText('recupero auto incidentata') },
  { title: 'Carroattrezzi moto', slug: 'carroattrezzi-moto', ...serviceText('carroattrezzi per moto') },
  { title: 'Assistenza batteria scarica', slug: 'assistenza-batteria-scarica', ...serviceText('assistenza per batteria scarica') },
  { title: 'Recupero auto in panne', slug: 'recupero-auto-in-panne', ...serviceText('recupero auto in panne') },
  { title: 'Soccorso in autostrada', slug: 'soccorso-in-autostrada', ...serviceText('soccorso in autostrada') },
] as const

export const zones = [
  { title: 'Carroattrezzi a Ravenna', name: 'Ravenna', slug: 'ravenna' },
  { title: 'Carroattrezzi a Tavagnacco', name: 'Tavagnacco', slug: 'tavagnacco' },
  { title: 'Carroattrezzi a Pasian di Prato', name: 'Pasian di Prato', slug: 'pasian-di-prato' },
  { title: 'Carroattrezzi a Povoletto', name: 'Povoletto', slug: 'povoletto' },
  { title: 'Carroattrezzi a Campoformido', name: 'Campoformido', slug: 'campoformido' },
  { title: 'Carroattrezzi a Martignacco', name: 'Martignacco', slug: 'martignacco' },
  { title: 'Carroattrezzi a Pozzuolo del Friuli', name: 'Pozzuolo del Friuli', slug: 'pozzuolo-del-friuli' },
  { title: 'Carroattrezzi a Remanzacco', name: 'Remanzacco', slug: 'remanzacco' },
  { title: 'Carroattrezzi a Manzano', name: 'Manzano', slug: 'manzano' },
  { title: 'Carroattrezzi a Cividale del Friuli', name: 'Cividale del Friuli', slug: 'cividale-del-friuli' },
  { title: 'Carroattrezzi a Codroipo', name: 'Codroipo', slug: 'codroipo' },
  { title: 'Carroattrezzi a Palmanova', name: 'Palmanova', slug: 'palmanova' },
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
