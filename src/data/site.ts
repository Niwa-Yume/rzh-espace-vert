// ─────────────────────────────────────────────────────────────
//  Toutes les infos éditables du site sont ici.
//  Modifier ce fichier → rebuild → redéployer. Rien d'autre à toucher.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'RZH Espaces Verts',
  tagline: 'Entretien & soin des extérieurs',
  url: 'https://rzh-espacesverts.ch',
  // Les deux frères co-gèrent l'entreprise. Le premier est le contact principal (site.phone).
  managers: [
    { name: 'Florian Rizahi', role: 'Co-gérant', phone: '+41 79 747 83 99', phoneHref: '+41797478399' },
    { name: 'Ilirjan Rizahi', role: 'Co-gérant', phone: '+41 79 528 91 44', phoneHref: '+41795289144' },
  ],
  phone: '+41 79 747 83 99',
  phoneHref: '+41797478399',
  whatsapp: '41797478399', // format wa.me, sans + ni espaces
  email: 'info@rzh-espacesverts.ch',
  address: {
    street: 'Route des Romelles 9',
    zip: '1293',
    city: 'Bellevue',
    canton: 'Genève',
  },
  audiences: ['Particuliers', 'PPE', 'Régies', 'Immeubles'],
  // Chiffres affichés dans le hero de la page d'accueil — À METTRE À JOUR avec les vrais chiffres.
  stats: [
    { value: '150+', label: 'Projets réalisés' },
    { value: '10', label: 'Années d’expérience' },
    { value: '80+', label: 'Entretiens saisonniers' },
  ],
};

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Formules', href: '/formules/' },
  { label: 'Régies & PPE', href: '/regies-ppe/' },
  { label: 'Réalisations', href: '/realisations/' },
  { label: 'À propos', href: '/a-propos/' },
  { label: 'Contact', href: '/contact/' },
];

export const quickServices = [
  'Tonte', 'Taille', 'Haies', 'Massifs', 'Désherbage',
  'Nettoyage', 'Plantations', 'Élagage', 'Évacuation des déchets verts',
  'Abattage d’arbres', 'Pose de treillis et clôtures',
  'Création et aménagement de massifs', 'Installation de fontaines',
];

// price: mettre un nombre (ex. 180) pour afficher « À partir de CHF 180 / mois ».
// null → « Sur devis ».
export const formules = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    icon: 'Sprout',
    title: 'L’entretien courant de votre jardin',
    text: 'Une formule adaptée aux propriétés nécessitant un entretien régulier.',
    items: [
      'Tonte du gazon',
      'Finitions des bordures',
      'Soufflage et nettoyage',
      'Petits travaux d’entretien',
      'Entretien courant des espaces verts',
      'Évacuation des déchets verts liés à nos interventions',
    ],
    price: null as number | null,
    featured: false,
  },
  {
    id: 'confort',
    name: 'Confort',
    icon: 'Leaf',
    title: 'Un entretien plus complet au fil des saisons',
    text: 'Une formule destinée aux propriétés nécessitant un suivi régulier et un entretien saisonnier.',
    items: [
      'Tonte et finitions',
      'Taille des haies',
      'Taille des arbustes',
      'Entretien des massifs',
      'Ramassage des feuilles',
      'Désherbage',
      'Entretien saisonnier',
      'Contrôle régulier de la propriété',
      'Nettoyage des extérieurs',
      'Évacuation des déchets verts',
    ],
    price: null as number | null,
    featured: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: 'TreeDeciduous',
    title: 'Une prise en charge complète de vos espaces extérieurs',
    text: 'Pour les propriétaires souhaitant confier l’entretien global de leur jardin à un seul interlocuteur.',
    items: [
      'Entretien complet du jardin',
      'Tonte et finitions',
      'Taille des haies et végétaux',
      'Entretien des massifs',
      'Désherbage',
      'Nettoyage des extérieurs',
      'Suivi régulier du jardin',
      'Évacuation des déchets verts',
      'Photos après intervention',
      'Suivi personnalisé',
      'Intervention prioritaire selon les disponibilités',
    ],
    price: null as number | null,
    featured: false,
  },
];

export const services = [
  { icon: 'Sprout', title: 'Entretien de jardins', text: 'Tonte, finitions, désherbage, entretien des massifs et entretien courant de vos espaces verts.' },
  { icon: 'Scissors', title: 'Taille & entretien des végétaux', text: 'Haies, arbustes, petits arbres et végétation : nous assurons les travaux de taille nécessaires au maintien d’un extérieur soigné.' },
  { icon: 'Wind', title: 'Entretien saisonnier', text: 'Ramassage des feuilles, nettoyage et préparation des espaces extérieurs selon les différentes périodes de l’année.' },
  { icon: 'Leaf', title: 'Plantations & aménagements', text: 'Plantation de végétaux, remplacement de plantes, haies, jardinières et différents travaux d’aménagement extérieur.' },
  { icon: 'TreePine', title: 'Élagage', text: 'Interventions d’élagage et suppression des branches sèches ou gênantes, avec ramassage et évacuation des déchets.' },
  { icon: 'House', title: 'Entretien de propriétés privées', text: 'Nous assurons l’entretien régulier de jardins et espaces extérieurs de villas et propriétés privées.' },
  { icon: 'Building2', title: 'PPE & immeubles', text: 'Solutions d’entretien adaptées aux copropriétés, résidences et immeubles.' },
  { icon: 'Tractor', title: 'Travaux extérieurs', text: 'Différents travaux d’entretien, de remise en état et d’aménagement selon les besoins de votre propriété.' },
  { icon: 'Landmark', title: 'Missions diplomatiques & organisations internationales', text: 'Entretien régulier des jardins et espaces extérieurs de missions diplomatiques, représentations et organisations internationales. Des prestations adaptées aux exigences de ces sites, avec un suivi professionnel, une communication claire et une attention particulière à la discrétion.' },
];

export const regiesSolutions = [
  { icon: 'Sprout', title: 'Entretien régulier', text: 'Tonte, taille, désherbage, entretien des massifs, nettoyage et travaux saisonniers.' },
  { icon: 'Eye', title: 'Suivi des propriétés', text: 'Un suivi régulier des espaces extérieurs afin d’identifier les besoins d’entretien.' },
  { icon: 'Camera', title: 'Photos après intervention', text: 'Des photos peuvent être transmises après les interventions afin de faciliter le suivi à distance.' },
  { icon: 'ClipboardCheck', title: 'Rapport d’intervention', text: 'Un suivi simple et professionnel des travaux réalisés.' },
  { icon: 'Recycle', title: 'Évacuation des déchets verts', text: 'Les déchets générés par nos interventions sont pris en charge selon les prestations convenues.' },
  { icon: 'UserRound', title: 'Interlocuteur unique', text: 'Un contact direct pour faciliter la gestion des interventions.' },
  { icon: 'FileText', title: 'Devis', text: 'Visite de la propriété et établissement d’une offre adaptée aux besoins du site.' },
];

export const regiesChecklist = [
  'Tonte', 'Taille', 'Désherbage', 'Soufflage', 'Ramassage des feuilles',
  'Entretien des massifs', 'Petits travaux', 'Évacuation des déchets verts',
  'Photos après intervention', 'Rapport d’intervention', 'Interlocuteur unique', 'Devis sur demande',
];

export const why = [
  { title: 'Une entreprise genevoise', text: 'Une entreprise locale spécialisée dans l’entretien des espaces verts et des extérieurs.' },
  { title: 'Une prise en charge globale', text: 'Nous ne proposons pas uniquement une intervention ponctuelle : nous pouvons assurer le suivi régulier de votre propriété.' },
  { title: 'Un interlocuteur unique', text: 'Un contact direct pour organiser et suivre les interventions.' },
  { title: 'Un travail soigné', text: 'Chaque intervention comprend une attention particulière portée aux finitions et à la propreté du chantier.' },
  { title: 'Un suivi professionnel', text: 'Pour les propriétés suivies régulièrement, nous pouvons assurer un suivi des interventions avec photos et rapports.' },
  { title: 'Une relation de confiance', text: 'RZH Espaces Verts s’inscrit dans la continuité d’une entreprise familiale de jardinage active à Genève, avec une nouvelle identité et une nouvelle génération.' },
];

export const zones = [
  'Genève', 'Cologny', 'Vandœuvres', 'Collonge-Bellerive', 'Vésenaz', 'Chêne-Bougeries',
  'Conches', 'Anières', 'Veyrier', 'Troinex', 'Pregny-Chambésy', 'Genthod', 'Bellevue', 'Versoix',
];

export const propertyTypes = ['Villa', 'PPE', 'Immeuble', 'Commerce', 'Bureau', 'Autre'];
