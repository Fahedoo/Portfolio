# Portfolio Fahed

Portfolio personnel créé avec React, Vite et déployé sur Vercel.

## Compte-rendu

C'est mon premier projet réalisé avec React, j'ai d'abord appris les bases de celui-ci sur Codédex avant de me jeter à l'eau avec pour compagnon Copilot. <br><br>
J'ai aussi eu l'occasion de toucher pour la première fois à Node.js, un environnement d'exécution permettant de réaliser des projets et y installer des "dependencies", des outils utiles au fonctionnement de ces projets : j'ai notamment eu recours à l'API EmailJS, et ai aussi dû l'installer avec NPM (Node Package Manager) dans les modules.<br><br>
Enfin, c'est le premier projet dans lequel j'ai pu avoir recours à Git. Il m'a valu quelques soucis, tant il était encore flou et pas assez maîtrisé pour moi (je pense notamment à une ancienne branche que j'ai essayé de déployer mais qui n'a pas fonctionné..),
mais j'ai pû petit à petit le comprendre un peu mieux. Ce coup-ci, l'IA m'a plus handicapé qu'aidé, car je me suis beaucoup reposé dessus pour les commandes Git et ne me chargeais que des commit. J'essaierai d'apprendre au moins les bases de cet outil, qui peut s'avérer très utile pour mieux "versionner" des projets.

## Futurs apports

Le site peut encore être perfectionné et je compte bien lui apporter des améliorations : je pense notamment à une animation de transition, ou à une amélioration du filtrage, qui va devenir indispensable avec tous les projets qui arrivent sur le portfolio.

## Technologies utilisées

- React
- Vite
- React Router
- EmailJS pour le formulaire de contact
- Vercel pour le déploiement

## Configuration du projet

### Installation des dépendances

```bash
npm install
```

### Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les clés suivantes :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Un fichier `.env.example` est fourni comme modèle.

### Développement local

```bash
npm run dev
```

### Build pour production

```bash
npm run build
```

## Structure du projet

- `src/components/` - Composants réutilisables
- `src/pages/` - Pages de l'application
- `src/data/` - Données statiques (projets, tags)
- `src/assets/` - Images et ressources, aussi placés dans le répertoire `public/`

## Responsivité

Le site est responsive et s'adapte des mobiles aux grands écrans :

- Typographies et éléments clés utilisent des tailles fluides via `clamp()`.
- Les images/vidéos sont fluides (`max-width: 100%`).
- Les sections cartes (projets, détails) se réorganisent en colonne sous 900px.
- La page d'accueil empile les nuages et réduit la taille sur mobiles (<768px).
- Les cartes projets redimensionnent leur largeur avec `clamp(210px, 43vw, 250px)`.

Breakpoints principaux : 1024px, 900px et 768px (+ ajustements à 520px).

## Contact

Pour toute question ou suggestion, utilisez le formulaire de contact sur le site.
