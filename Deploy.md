Vite génère un site statique dans /dist
Quand tu fais :

bash
Copier
Modifier
npm run build
→ Vite crée des fichiers HTML, JS, CSS optimisés dans le dossier /dist

2. Le script npm run deploy (via gh-pages) :
Build le site (vite build)

Push le contenu de dist/ dans la branche gh-pages de ton repo

GitHub Pages sert automatiquement cette branche en tant que site web

3. La ligne clé dans vite.config.js :
js
Copier
Modifier
base: "/cv-flowtech/", // IMPORTANT si ton repo n'est pas en racine de domaine
C’est ça qui dit à Vite :

“Les assets doivent être chargés depuis /cv-flowtech/ sur GitHub Pages”


https://flowtech-lab.github.io/cv-flowtech/