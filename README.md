# React + TypeScript + Vite

## Déploiement GitHub Pages

Le site est construit et déployé automatiquement sur GitHub Pages à chaque mise à jour de la branche `main`. Dans les paramètres du dépôt, sélectionnez **Settings > Pages > Build and deployment > Source: GitHub Actions**.

## Formulaire de contact

Le composant de contact envoie les messages avec EmailJS. Pour l'activer :

1. Créez un compte EmailJS et connectez le service e-mail qui doit recevoir les messages.
2. Créez un modèle e-mail contenant les variables `{{from_name}}`, `{{reply_to}}`, `{{subject}}` et `{{message}}`. Configurez le destinataire du modèle dans EmailJS.
3. Copiez `.env.example` vers `.env`, puis renseignez les identifiants du service, du modèle et la clé publique depuis le tableau de bord EmailJS.
4. Redémarrez le serveur Vite après toute modification de `.env`.

La clé EmailJS exposée au navigateur est une clé publique ; ne placez jamais de clé privée ou de mot de passe dans une variable `VITE_*`. Restreignez l'utilisation de la clé publique aux domaines de votre site dans les paramètres EmailJS.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
