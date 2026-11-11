# Déchiffrage Basse

Une appli gratuite de **déchiffrage pour bassistes** : lecture de notes en clé de Fa et lignes de basse dans quatre styles (rock, reggae, funk, jazz), toujours au métronome.

C'est la petite sœur de [Déchiffrage Guitare](https://mlevan8395.github.io/lecture-guitare/), conçue pour les élèves de basse musiques actuelles et jazz en conservatoire. Basse 4 cordes.

👉 **Utiliser l'appli :** https://mlevan8395.github.io/dechiffrage-basse/

## Installer l'appli

- **Android** (Chrome) : ouvre le site, puis touche **Installer l'appli** en haut de la page, ou menu ⋮ → **Installer l'application**.
- **iPhone / iPad** (Safari) : bouton Partager → **Sur l'écran d'accueil**.
- **Ordinateur** (Chrome, Edge) : icône d'installation dans la barre d'adresse.

L'appli fonctionne ensuite **hors ligne**, son compris. Elle se met à jour toute seule à chaque ouverture avec une connexion.

## Ce qu'on y trouve

Chaque exercice se travaille de deux façons : par **niveaux** (une progression toute faite, 20 niveaux pour la lecture de notes et 18 pour les lignes de basse) ou en **réglages libres**.

| Onglet | Contenu |
|---|---|
| **Lecture de notes** | Partition générée au hasard, en position ou le long d'une corde, dans une tonalité (jusqu'à 5 dièses ou 5 bémols), avec modulations au relatif mineur et aux tons voisins, ou avec changements d'armure ; valeur rythmique la plus courte réglable (des rondes aux doubles croches), nombre d'attaques par mesure, intervalle maximal, articulations ; réponse affichée sur le manche |
| **Lignes de basse** | Des lignes fabriquées à partir de formules propres à chaque style, sur une grille d'accords écrite au-dessus de la portée : rock (de la ronde à la pompe en croches, octaves, syncopes), reggae (silences, lignes mélodiques, triolets), funk (syncopette, ghost notes, doubles croches), jazz (two-feel, walking, notes d'approche, croches swing). Quatre difficultés par style, 12 tonalités, bas ou milieu du manche. La batterie et les accords accompagnent ; la basse, c'est l'élève |

Tempo lent, moyen ou rapide, réglable de 5 en 5 ; croches droites ou swing, et clic sur 2 et 4 en option. Un bouton **Droitier / Gaucher** retourne le manche.

## Principes

- **Aucune donnée collectée.** Pas de compte, pas de publicité ; les réglages restent dans le navigateur.
- **Notation française** : notes seules en Do, Ré, Mi… ; accords et tonalités en lettres (C, Am7, « en G »).
- Les niveaux sont dans `contenu/niveaux.js`, une ligne par niveau : on peut les modifier, en ajouter ou les déplacer sans toucher au code.
- Les formules et les grilles de chaque style sont dans `contenu/lignes.js` : on peut en ajouter sans toucher au code (le mode d'emploi est en tête du fichier).

## Crédits

- Glyphes musicaux de la partition (clé de Fa, altérations, silences) : tracés de la police GNU FreeFont (FreeSerif), utilisés selon son exception de police ; dièse, bémol et bécarre : police DejaVu Sans.
- Basse électrique (`sons/basse`) : échantillons de [Karoryfer Samples](https://www.karoryfer.com/karoryfer-samples), mis en forme par Nicholaus Brosowsky ([tonejs-instruments](https://github.com/nbrosowsky/tonejs-instruments)), licence [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/deed.fr). Fichiers raccourcis et convertis en mono.
- Batterie (`sons/batterie`) : Virtuosity Drums, domaine public ([CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.fr)).
- Contrebasse en pizzicato (`sons/contrebasse`) : [VSCO 2 Community Edition](https://github.com/sgossner/VSCO-2-CE) de Versilian Studios, domaine public (CC0). Fichiers raccourcis, normalisés et convertis en mono.
- Le métronome, le pad et l'orgue sont des sons de synthèse fabriqués par l'appli.

## Licence

© 2026 Mickael Le Van, **tous droits réservés** (voir [`LICENSE`](LICENSE)). Reproduction, diffusion et usage commercial interdits sans autorisation écrite de l'auteur. Les éléments de tiers cités restent sous leur propre licence.
