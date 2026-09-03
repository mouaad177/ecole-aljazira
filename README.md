El Jazira School — Site Web

Site vitrine réalisé pour El Jazira School, école d’enseignement général située à Casablanca, Oulfa.

🎯 Objectif

Créer un site web moderne, responsive et professionnel permettant aux parents de :

* Découvrir l’école et son approche pédagogique
* Consulter les activités proposées
* Voir les photos de l’école
* Trouver les coordonnées et l’itinéraire
* Accéder aux réseaux sociaux de l’école
* Préparer à terme une préinscription en ligne
* Consulter automatiquement les dernières publications Instagram

🛠️ Technologies utilisées

* HTML5
* CSS3
* JavaScript
* Git / GitHub
* GitHub Pages — hébergement du site
* Cloudflare Workers — backend / API
* Instagram Graph API — intégration prévue


ecole-aljazira/
│
├── index.html
├── ecole.html
├── activites.html
├── galerie.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo.png
│   ├── activites/
│   └── galerie/
│
└── contenu-a-demander.txt



Une API intermédiaire a été créée avec Cloudflare Workers afin de ne pas exposer directement les éventuels tokens Instagram dans le code public du site.

Architecture actuelle :
Site GitHub Pages
        ↓
Cloudflare Worker
        ↓
/instagram
        ↓
Réponse JSON


~~~~~> instagram api EN COURS 