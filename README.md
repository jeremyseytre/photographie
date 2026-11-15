# Site de Jérémy Seytre — pages HTML indépendantes

Tous les fichiers sont à la racine. Aucun outil de compilation n’est nécessaire.

## Pages
- index.html : Accueil
- mariage.html : Mariage et formules
- blog.html : liste des articles
- contact.html : Contact
- 10 autres fichiers HTML : un par article

Le contenu et les liens fonctionnent sans JavaScript. app.js gère le menu mobile, le formulaire, les cookies et les anciens liens à fragments. style.css est commun à toutes les pages.

## Installation sur GitHub
1. Extraire le ZIP sur votre ordinateur.
2. Déposer tous les fichiers extraits à la racine du dépôt photographie, en remplaçant les anciennes versions. Ne pas déposer seulement le ZIP.
3. Conserver la branche et le dossier de publication déjà utilisés par GitHub Pages.
4. Attendre la fin du déploiement puis ouvrir https://jeremyseytre.github.io/photographie/ et actualiser avec Ctrl + F5.

Le fichier CNAME n’est pas inclus : l’archive cible l’adresse GitHub Pages actuellement utilisée. Si un ancien CNAME est toujours présent et que vous utilisez exclusivement l’adresse github.io, retirez-le et vérifiez la configuration du domaine personnalisé. Pour utiliser votre domaine personnel, configurez-le au préalable puis adaptez sitemap.xml et robots.txt.

## Modifier le site
Modifier directement le HTML de la page concernée. Le menu et le pied de page sont présents dans chaque HTML : répercuter les changements communs sur toutes les pages.

## Ajouter vos photographies
Les emplacements colorés existants sont conservés. Déposer les photos à la racine puis remplacer, dans les figures concernées, le span « photo · … » par une balise img avec le nom du fichier, un texte alt descriptif et loading="lazy". Exemple : <img src="hero.jpg" alt="Mariés dans la Loire" loading="lazy">.

## Formulaire
Le formulaire Contact envoie vers https://formspree.io/f/xdegezee, renseigné dans son attribut action et dans app.js. Avec JavaScript, une confirmation apparaît dans la page ; sans JavaScript, le navigateur envoie directement à Formspree. Aucun message réel n’a été envoyé lors des vérifications.

Les textes, prix et coordonnées d’origine sont conservés. Compléter les mentions légales et la politique de confidentialité avant utilisation commerciale.
