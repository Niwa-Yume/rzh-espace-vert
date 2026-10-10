# RZH Espaces Verts — site vitrine

Site statique **Astro 7** (zéro framework JS côté client, ~quelques Ko de script), images optimisées en WebP au build, polices auto-hébergées (pas d'appel Google Fonts → rien à déclarer côté nLPD).

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/ (le site complet, statique)
npm run preview   # sert dist/ en local
```

Node ≥ 22.

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| Téléphone, e-mail, adresse, gérant, WhatsApp | `src/data/site.ts` → `site` |
| Prix des formules (`price: 180` → « À partir de CHF 180 / mois », `null` → « Sur devis ») | `src/data/site.ts` → `formules` |
| Services, régies, « Pourquoi », communes | `src/data/site.ts` |
| Photos des réalisations | déposer dans `src/assets/photos/`, déclarer dans `src/data/realisations.ts` |
| Vidéo du hero | `public/media/villa-entretien.mp4` (+ `-poster.jpg`) |
| Couleurs / polices | `src/styles/global.css` (`:root`) |

## Formulaire de devis

Le site est 100 % frontend, le formulaire passe par **Web3Forms** (gratuit, 250 envois/mois, pas de backend).

1. Aller sur https://web3forms.com, entrer `info@rzh-espacesverts.ch` → la clé arrive par e-mail.
2. La mettre dans la variable d'environnement `PUBLIC_WEB3FORMS_KEY` :
   - en local : copier `.env.example` en `.env`
   - sur Vercel : Project → Settings → Environment Variables, puis redéployer.
3. Rebuild.

**Sans clé**, le formulaire reste fonctionnel : il ouvre le client mail du visiteur avec la demande pré-remplie.

Les photos ne passent pas par le formulaire (pièces jointes = offre payante chez Web3Forms) : un bouton WhatsApp est proposé à la place.

Liens pré-remplis : `/contact/?formule=confort#devis`, `/contact/?type=Immeuble#devis`.

## Déploiement — option A : Vercel (recommandé)

1. Pousser le repo sur GitHub.
2. vercel.com → *Add New Project* → importer le repo. Astro est détecté automatiquement (build `npm run build`, output `dist`).
3. Ajouter `PUBLIC_WEB3FORMS_KEY`.
4. *Settings → Domains* → ajouter `rzh-espacesverts.ch` et `www.rzh-espacesverts.ch` (redirigé vers l'apex).
5. Chez le registrar du domaine (ex. Infomaniak → *Domaines → Zone DNS*) :
   - `A` `@` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com.`
   - supprimer les anciens A/AAAA sur `@` et `www` (sinon conflit). **Ne pas toucher aux MX** : les e-mails continuent de fonctionner.
6. Vérifier dans Vercel les valeurs DNS exactes affichées (elles peuvent varier) ; le HTTPS se met en place tout seul.

Chaque `git push` redéploie.

## Déploiement — option B : hébergement web Infomaniak

1. `npm run build`
2. Envoyer **le contenu** de `dist/` (pas le dossier lui-même) à la racine du site via FTP/SFTP ou le gestionnaire de fichiers Infomaniak.
3. Le fichier `.htaccess` (inclus) gère la page 404, le HTTPS, la redirection `www` → apex et le cache.
4. Activer le certificat SSL Let's Encrypt dans le Manager Infomaniak.

Pour le formulaire, la clé Web3Forms doit être dans `.env` **avant** le build.

## Contenu à valider avec le client

- Prix « À partir de CHF … / mois » de la formule Essentiel (actuellement « Sur devis »).
- Légendes des réalisations (types de travaux déduits des photos).
- Page mentions légales : vérifier raison sociale / forme juridique (RI, Sàrl…) et numéro IDE si existant.
