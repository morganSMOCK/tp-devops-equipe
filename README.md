# TP DevOps - Pipeline CI/CD

## 🚀 Comment lancer en local
1. [cite_start]Installez Node.js. [cite: 79]
2. [cite_start]Dans le dossier `backend`, lancez `npm install`. [cite: 79]
3. [cite_start]Démarrez le serveur avec `node server.js`. [cite: 79]

## 🔑 Variables et Secrets nécessaires
- [cite_start]**APP_CONFIG** : Variable non sensible définie dans le pipeline (ex: V1.0-Stable). [cite: 25, 80]
- [cite_start]**MY_DB_PASSWORD** : Secret à configurer dans les "Actions Secrets" de GitHub. [cite: 25, 80]

## 🛠️ Déroulement du Pipeline
[cite_start]Le pipeline s'exécute en 4 étapes majeures : [cite: 81]
1. [cite_start]**Setup Local** : Exécution d'un job sur un runner self-hosted pour valider l'environnement agent. [cite: 18, 22]
2. [cite_start]**Tests en Parallèle** : Lancement simultané des tests unitaires et d'intégration. [cite: 31, 35, 53]
3. [cite_start]**Analyse** : Réutilisation de l'artefact généré par les tests unitaires. [cite: 43, 45]
4. [cite_start]**Build Matrix** : Génération de builds distincts pour les environnements `staging` et `production`. [cite: 57, 58]