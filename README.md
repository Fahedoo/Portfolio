# Portfolio Fahed

Portfolio personnel créé avec React, Vite et déployé sur GitHub Pages.

## Technologies utilisées

- React
- Vite
- React Router
- EmailJS pour le formulaire de contact
- GitHub Pages pour le déploiement

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

### Déploiement sur GitHub Pages

1. Modifiez le champ `homepage` dans `package.json` avec votre nom d'utilisateur GitHub
2. Exécutez la commande suivante :

```bash
npm run deploy
```

## Structure du projet

- `src/components/` - Composants réutilisables
- `src/pages/` - Pages de l'application
- `src/data/` - Données statiques (projets, tags)
- `src/assets/` - Images et ressources

## Contact

Pour toute question ou suggestion, utilisez le formulaire de contact sur le site.
