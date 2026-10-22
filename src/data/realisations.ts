// Réalisations — ajouter une photo : la déposer dans src/assets/photos/, l'importer ici, ajouter une entrée.
// Ajouter une vidéo : déposer le .mp4 (et une image poster) dans public/media/, puis une entrée avec `video` + `poster`.
import villaModerne from '../assets/photos/villa-moderne-gazon.jpg';
import cypres2 from '../assets/photos/cypres-villa-2.jpg';
import elagage from '../assets/photos/elagage-sequoia.jpg';
import bassin from '../assets/photos/bassin-rocaille.jpg';
import gazon from '../assets/photos/pose-gazon-rouleaux.jpg';
import haie from '../assets/photos/haie-taillee.jpg';
import piscine from '../assets/photos/piscine-crepuscule.jpg';
import pergola from '../assets/photos/terrasse-pergola-piscine.jpg';
import massif from '../assets/photos/remise-en-etat-massif.jpg';
import plantations from '../assets/photos/plantations-jardin.jpg';
import terrasseLed from '../assets/photos/terrasse-eclairage-led.jpg';
import terrasseGravier from '../assets/photos/terrasse-gravier-bordures.jpg';
import haieCypres from '../assets/photos/taille-haie-cypres.jpg';
import gazonAvant from '../assets/photos/terrasse-gazon-avant.jpg';
import gazonApres from '../assets/photos/terrasse-gazon-apres.jpg';

type Realisation = {
  alt: string;
  type: string;
  works: string[];
  category: string;
  wide?: boolean;
} & ({ img: ImageMetadata; video?: never } | { video: string; poster: string; img?: never });

export const realisations: Realisation[] = [
  { img: haieCypres, alt: 'Taille d’une très haute haie de cyprès le long d’une roseraie', type: 'Taille de haies', works: ['Taille en hauteur', 'Finitions', 'Ramassage'], category: 'Taille' },
  { img: terrasseLed, alt: 'Jardin contemporain avec terrasse en dalles, gazon, bacs maçonnés et éclairage LED intégré', type: 'Aménagement', works: ['Terrasse', 'Gazon', 'Bacs plantés', 'Éclairage'], category: 'Aménagements' },
  { video: '/media/gazon-enrochement.mp4', poster: '/media/gazon-enrochement-poster.jpg', alt: 'Visite d’un jardin de villa : gazon neuf, enrochement et clôture', type: 'Aménagement', works: ['Pose de gazon', 'Enrochement', 'Clôture'], category: 'Aménagements' },
  { img: terrasseGravier, alt: 'Terrasse en gravier clair bordée de profilés métalliques le long d’une villa', type: 'Aménagement', works: ['Terrasse en gravier', 'Bordures métalliques', 'Gazon'], category: 'Aménagements' },
  { img: cypres2, alt: 'Propriété avec allée de cyprès taillés et buis en boule', type: 'Entretien complet', works: ['Taille des cyprès', 'Buis', 'Tonte', 'Ramassage des feuilles'], category: 'Taille' },
  { img: elagage, alt: 'Séquoia élagué, coupes nettes le long du tronc', type: 'Élagage', works: ['Suppression des branches basses', 'Évacuation'], category: 'Élagage' },
  { img: bassin, alt: 'Bassin d’agrément bordé de rochers et paillage neuf', type: 'Aménagement', works: ['Bassin', 'Rocaille', 'Plantations', 'Paillage'], category: 'Aménagements' },
  { img: gazon, alt: 'Gazon en rouleaux fraîchement posé et roulé', type: 'Remise en état', works: ['Préparation du sol', 'Pose de gazon en rouleaux'], category: 'Remise en état' },
  { img: haie, alt: 'Longue haie de thuyas taillée au cordeau', type: 'Taille de haies', works: ['Taille', 'Finitions', 'Nettoyage'], category: 'Taille' },
  { img: piscine, alt: 'Jardin avec piscine et gazon entretenu au crépuscule', type: 'Entretien de jardin', works: ['Tonte', 'Taille', 'Nettoyage'], category: 'Entretien' },
  { img: pergola, alt: 'Terrasse sous pergola donnant sur un gazon et une piscine', type: 'Entretien de propriété', works: ['Tonte', 'Massifs', 'Nettoyage des extérieurs'], category: 'Entretien' },
  { img: massif, alt: 'Massif préparé le long d’une allée en dalles', type: 'Remise en état', works: ['Préparation des massifs', 'Nettoyage', 'Évacuation'], category: 'Remise en état' },
  { img: plantations, alt: 'Jardin en cours d’aménagement avec arbres plantés et terre préparée', type: 'Plantations', works: ['Plantation d’arbres', 'Terre végétale', 'Rocaille'], category: 'Plantations' },
  { img: villaModerne, alt: 'Villa contemporaine avec large pelouse entretenue', type: 'Entretien de jardin', works: ['Tonte', 'Bordures', 'Haies'], category: 'Entretien', wide: true },
];

// Avant / après — même chantier photographié avant et après l'intervention.
export const avantApres = [
  { before: gazonAvant, after: gazonApres, alt: 'Jardin de villa le long d’une terrasse en dalles', type: 'Remise en état', works: ['Préparation du sol', 'Pose de gazon en rouleaux', 'Talus planté'] },
];
