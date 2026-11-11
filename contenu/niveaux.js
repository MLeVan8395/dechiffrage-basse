// ============================================================================
//  Déchiffrage Basse — les niveaux (contenu pédagogique)
//  © 2026 Mickael Le Van – Tous droits réservés (voir LICENSE).
//
//  Chaque ligne est un niveau, dans l'ordre. On peut en ajouter, en retirer ou les déplacer
//  sans toucher au code : la numérotation se refait toute seule.
//
//  LECTURE DE NOTES (clé de Fa)
//    t            : la petite phrase affichée sous le niveau, qui dit ce qu'il contient
//    zones        : où jouer. Quand il y en a plusieurs, l'appli en tire une à chaque partition.
//                   p0 = 1re position (cordes à vide, cases 1 à 4), p2 = cases 2 à 5, p5 = cases 5 à 8,
//                   p7 = cases 7 à 10, p9 = cases 9 à 12, s4 à s1 = le long d'une corde (4 = Mi grave, 1 = Sol)
//    armures      : nombre d'altérations à la clé, + pour les dièses, − pour les bémols ([0, 1, -1] = C, G, F).
//                   L'appli en tire une à chaque partition. "change" = l'armure change en cours de route.
//    rythme       : valeur la plus courte. 1 rondes, 2 blanches, 3 noires, 4 croches, 6 triolets de croches,
//                   7 doubles croches, 8 tout mélangé. Les valeurs plus longues et les silences restent présents.
//    intervalle   : le plus grand saut. 1 seconde, 2 tierce, 3 quarte, 4 quinte, 5 sixte, 6 septième, 7 octave
//    modulations  : "none" aucune ; "rel" vers le relatif mineur ; "vois" relatif mineur, ton de la dominante
//                   et ton de la sous-dominante ; "tous" les cinq tons voisins.
//    articulations: "none", "stacc" (piqué), "acc" (accent), "marc" (chevron), "mix" (mélangées)
//
//  LIGNES DE BASSE (formules et grilles de contenu/lignes.js)
//    style        : "rock", "reggae", "funk" ou "jazz"
//    formules     : difficulté des formules dans ce style, de 1 à 4 (voir « niveaux » dans contenu/lignes.js)
//    armures      : comme ci-dessus ; la grille est transposée dans la tonalité tirée au sort
//    zone         : "bas" = bas du manche (cordes à vide, cases 1 à 5), "milieu" = cases 2 à 9, sans corde à vide
// ============================================================================
const NIVEAUX={
notes:[
 {t:"1re position, C, rondes", zones:["p0"], armures:[0], rythme:1, intervalle:1},
 {t:"1re position, C, blanches", zones:["p0"], armures:[0], rythme:2, intervalle:1},
 {t:"1re position, C, noires, notes voisines", zones:["p0"], armures:[0], rythme:3, intervalle:1},
 {t:"1re position, C, noires, sauts de tierce", zones:["p0"], armures:[0], rythme:3, intervalle:2},
 {t:"1re position, C, G ou F, noires, sauts de quarte et de quinte", zones:["p0"], armures:[0,1,-1], rythme:3, intervalle:4},
 {t:"1re position, C, G ou F, croches", zones:["p0"], armures:[0,1,-1], rythme:4, intervalle:2},
 {t:"1re position, jusqu'à 2 altérations, croches", zones:["p0"], armures:[0,1,-1,2,-2], rythme:4, intervalle:4},
 {t:"1re position, jusqu'à 2 altérations, croches, modulation au relatif mineur", zones:["p0"], armures:[0,1,-1,2,-2], rythme:4, intervalle:4, modulations:"rel"},
 {t:"Cases 2 à 5, C, G ou D, noires", zones:["p2"], armures:[0,1,2], rythme:3, intervalle:2},
 {t:"Cases 2 à 5, jusqu'à 2 altérations, croches, modulation au relatif mineur", zones:["p2"], armures:[0,1,-1,2,-2], rythme:4, intervalle:4, modulations:"rel"},
 {t:"5e position, C, G ou F, noires", zones:["p5"], armures:[0,1,-1], rythme:3, intervalle:2},
 {t:"5e position, jusqu'à 3 altérations, croches, modulation au relatif mineur", zones:["p5"], armures:[0,1,-1,2,-2,3,-3], rythme:4, intervalle:4, modulations:"rel"},
 {t:"1re position, cases 2 à 5 ou 5e position, jusqu'à 3 altérations, croches avec articulations, modulations à la dominante et à la sous-dominante", zones:["p0","p2","p5"], armures:[0,1,-1,2,-2,3,-3], rythme:4, intervalle:5, modulations:"vois", articulations:"mix"},
 {t:"7e position, jusqu'à 2 altérations, croches", zones:["p7"], armures:[0,1,-1,2,-2], rythme:4, intervalle:3},
 {t:"De la 1re à la 7e position, jusqu'à 4 altérations, triolets de croches, modulations à la dominante et à la sous-dominante", zones:["p0","p2","p5","p7"], armures:[0,1,-1,2,-2,3,-3,4,-4], rythme:6, intervalle:5, modulations:"vois"},
 {t:"Cases 9 à 12, jusqu'à 3 altérations, croches", zones:["p9"], armures:[0,1,-1,2,-2,3,-3], rythme:4, intervalle:4},
 {t:"Le long d'une seule corde, C, G ou F, noires", zones:["s1","s2","s3","s4"], armures:[0,1,-1], rythme:3, intervalle:3},
 {t:"Tout le manche, jusqu'à 4 altérations, doubles croches, modulations à la dominante et à la sous-dominante", zones:["p0","p2","p5","p7","p9"], armures:[0,1,-1,2,-2,3,-3,4,-4], rythme:7, intervalle:5, modulations:"vois"},
 {t:"Tout le manche, jusqu'à 5 altérations, toutes les valeurs rythmiques, modulations vers tous les tons voisins", zones:["p0","p2","p5","p7","p9"], armures:[0,1,-1,2,-2,3,-3,4,-4,5,-5], rythme:8, intervalle:7, modulations:"tous", articulations:"mix"},
 {t:"Tout le manche, toutes les valeurs rythmiques, changements d'armure en cours de route", zones:["p0","p2","p5","p7","p9"], armures:"change", rythme:8, intervalle:7, articulations:"mix"}
],
lignes:[
 {t:"Rock, rondes et blanches : fondamentale et quinte, en C, G ou D", style:"rock", formules:1, armures:[0,1,2], zone:"bas"},
 {t:"Rock, noires : fondamentale, quinte, octave, en C, G, D ou A", style:"rock", formules:2, armures:[0,1,2,3], zone:"bas"},
 {t:"Reggae, noires et silences, en C, G ou F", style:"reggae", formules:1, armures:[0,1,-1], zone:"bas"},
 {t:"Jazz à la blanche (two-feel), en C, F ou B♭", style:"jazz", formules:1, armures:[0,-1,-2], zone:"bas"},
 {t:"Rock, la pompe en croches, jusqu'à 3 altérations", style:"rock", formules:3, armures:[0,1,2,3,-1,-2], zone:"bas"},
 {t:"Reggae, croches : fondamentale, tierce, quinte, en C, G, F ou D", style:"reggae", formules:2, armures:[0,1,-1,2], zone:"bas"},
 {t:"Jazz, walking en noires (arpèges et gamme), en C, F ou B♭", style:"jazz", formules:2, armures:[0,-1,-2], zone:"bas"},
 {t:"Funk, croches et silences, le premier temps et l'octave, en C, G ou F", style:"funk", formules:1, armures:[0,1,-1], zone:"bas"},
 {t:"Rock, octaves, notes de passage et syncopes, jusqu'à 3 altérations", style:"rock", formules:4, armures:[0,1,2,3,-1,-2,-3], zone:"bas"},
 {t:"Reggae, lignes mélodiques avec octave et valeurs pointées, jusqu'à 2 altérations", style:"reggae", formules:3, armures:[0,1,-1,2,-2], zone:"bas"},
 {t:"Jazz, walking avec notes d'approche chromatiques, jusqu'à 3 bémols", style:"jazz", formules:3, armures:[0,-1,-2,-3], zone:"bas"},
 {t:"Funk, doubles croches et syncopette, en C, G, F ou D", style:"funk", formules:2, armures:[0,1,-1,2], zone:"bas"},
 {t:"Rock au milieu du manche (sans corde à vide), toutes les formules, jusqu'à 4 altérations", style:"rock", formules:4, armures:[0,1,2,3,4,-1,-2,-3,-4], zone:"milieu"},
 {t:"Reggae, triolets et doubles croches, jusqu'à 3 altérations", style:"reggae", formules:4, armures:[0,1,-1,2,-2,3,-3], zone:"bas"},
 {t:"Funk, ghost notes, jusqu'à 2 altérations", style:"funk", formules:3, armures:[0,1,-1,2,-2], zone:"milieu"},
 {t:"Jazz, walking avec croches swing et triolets, jusqu'à 4 bémols", style:"jazz", formules:4, armures:[0,-1,-2,-3,-4,1], zone:"bas"},
 {t:"Funk, doubles croches en continu et chromatismes, jusqu'à 3 altérations", style:"funk", formules:4, armures:[0,1,-1,2,-2,3,-3], zone:"milieu"},
 {t:"Jazz au milieu du manche, toutes les formules, dans toutes les tonalités jusqu'à 5 altérations", style:"jazz", formules:4, armures:[0,1,-1,2,-2,3,-3,4,-4,5,-5], zone:"milieu"}
]};
