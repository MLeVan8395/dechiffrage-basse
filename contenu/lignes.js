// ============================================================================
//  Basse — formules et grilles par style : rock, reggae, funk, jazz (contenu pédagogique)
//  © 2026 Mickael Le Van – Tous droits réservés (voir LICENSE).
//  Formules écrites pour cette appli : ce sont des tournures courantes de chaque style,
//  elles ne reprennent aucune ligne de basse existante.
//
//  Une FORMULE est une mesure de basse écrite en intervalles, pour qu'elle s'adapte à n'importe quel accord.
//  Chaque note s'écrit Intervalle.Durée, comme dans les autres fichiers de contenu :
//    durée en douzièmes de noire : 3 double croche, 4 croche de triolet, 6 croche, 9 croche pointée,
//    12 noire, 18 noire pointée, 24 blanche, 36 blanche pointée, 48 ronde. Une mesure = 48.
//    1  fondamentale      8  octave           5  quinte de l'accord (quinte diminuée sur m7♭5 et dim7)
//    t  tierce de l'accord (majeure ou mineure, selon l'accord)
//    s  septième de l'accord (♭7 sur un accord 7, m7 ou mineur ; 7 sur Maj7 ; sixte sur un accord parfait majeur ou un accord 6)
//    2  4  6  b3  3  b5  b7  7 : intervalles fixes, quel que soit l'accord
//    un « - » après l'intervalle : sous la fondamentale (5- = la quinte en dessous)
//    a  note d'approche : un demi-ton sous la fondamentale de l'accord suivant ;  A : un demi-ton au-dessus
//    x  ghost note (note étouffée, tête en croix)      r  silence      ~ à la fin : liée à la note suivante
//  niv  : difficulté de la formule dans son style (1 à 4), décrite dans « niveaux »
//  demi : true = formule de 2 temps (24), pour les mesures à deux accords
//  q    : "maj" = seulement sur un accord à tierce majeure, "min" = seulement sur un accord mineur
//
//  Une GRILLE s'écrit en C (ou en A mineur avec mineur:true) : l'appli la transpose dans la tonalité demandée.
//  Les mesures sont séparées par « | » ; deux accords dans une mesure = 2 temps chacun.
//  Accords reconnus : C, Cm, C5, C7, CMaj7, Cm7, Cm7♭5, Cdim7, C6, Cm6.
//
//  Par style :  acc = batterie de l'accompagnement (pop, funk, reggae, swing2) ; son = eb (basse électrique)
//  ou cb (contrebasse) ; swing:true = croches ternaires ; tenir = nombre de mesures pendant lesquelles
//  la même formule se répète (un groove se répète ; en walking, la ligne change à chaque mesure) ;
//  accords = les types d'accords proposés pour travailler une formule seule ("" = accord parfait majeur).
// ============================================================================
const STYLES=[
{id:"rock",t:"Rock",acc:"pop",son:"eb",swing:false,tenir:4,accords:["","m","7"],
 intro:"En rock, la basse joue serré avec la grosse caisse : la fondamentale d'abord, en valeurs régulières, puis la quinte, l'octave et quelques notes de passage pour amener l'accord suivant.",
 niveaux:["Rondes et blanches : fondamentale et quinte","Noires : fondamentale, quinte, octave","Croches : la pompe","Octaves, notes de passage et syncopes"],
 formules:[
  {niv:1,n:"1.48"},
  {niv:1,n:"1.24 1.24"},
  {niv:2,n:"1.36 1.12"},
  {niv:2,n:"1.24 r.12 1.12"},
  {niv:1,n:"1.24 5.24"},
  {niv:2,n:"1.12 1.12 1.12 1.12"},
  {niv:2,n:"1.12 1.12 5.12 5.12"},
  {niv:2,n:"1.12 1.12 1.12 a.12"},
  {niv:2,n:"1.12 r.12 1.12 1.12"},
  {niv:2,n:"1.24 5.12 8.12"},
  {niv:2,n:"1.12 5.12 8.12 5.12"},
  {niv:2,n:"1.12 1.12 5.12 a.12"},
  {niv:3,n:"1.6 1.6 1.6 1.6 1.6 1.6 1.6 1.6"},
  {niv:3,n:"1.6 1.6 1.6 1.6 1.6 1.6 5.6 5.6"},
  {niv:3,n:"1.12 1.6 1.6 1.12 1.6 1.6"},
  {niv:3,n:"1.6 1.6 1.6 1.6 1.6 1.6 1.6 a.6"},
  {niv:3,n:"1.18 1.6 1.12 1.12"},
  {niv:3,n:"1.12 1.6 1.6 5.12 5.6 5.6"},
  {niv:3,n:"1.18 1.6 1.18 1.6"},
  {niv:3,n:"1.6 1.6 1.6 1.6 8.6 8.6 5.6 5.6"},
  {niv:4,n:"1.6 8.6 1.6 8.6 1.6 8.6 1.6 8.6"},
  {niv:4,n:"1.6 1.6 t.6 t.6 5.6 5.6 s.6 5.6"},
  {niv:4,n:"1.18 1.6~ 1.12 5.6 a.6"},
  {niv:4,n:"1.6 1.6 1.6 8.6 r.6 1.6 5.6 a.6"},
  {niv:4,n:"1.12 8.6 1.6 r.6 1.6 5.6 a.6"},
  {niv:4,n:"1.6 1.6 5.6 1.6 s.6 1.6 5.6 a.6"},
  {niv:4,n:"r.6 1.6 1.6 1.6 r.6 1.6 t.6 a.6"},
  {niv:1,demi:true,n:"1.24"},
  {niv:2,demi:true,n:"1.12 1.12"},
  {niv:3,demi:true,n:"1.6 1.6 1.6 1.6"},
  {niv:4,demi:true,n:"1.6 1.6 5.6 a.6"}
 ],
 grilles:[
  {t:"I – V – vi – IV",n:"C | G | Am | F"},
  {t:"I – vi – IV – V",n:"C | Am | F | G"},
  {t:"I – IV – V – IV",n:"C | F | G | F"},
  {t:"I – ♭VII – IV – I",n:"C | B♭ | F | C"},
  {t:"vi – IV – I – V (mineur)",mineur:true,n:"Am | F | C | G"},
  {t:"i – ♭VII – ♭VI – ♭VII (mineur)",mineur:true,n:"Am | G | F | G"},
  {t:"Blues rock (12 mesures)",n:"C7 | C7 | C7 | C7 | F7 | F7 | C7 | C7 | G7 | F7 | C7 | G7"}
 ]},
{id:"reggae",t:"Reggae",acc:"reggae",son:"eb",swing:false,tenir:4,accords:["","m"],
 intro:"En reggae, la basse est la mélodie du morceau : des lignes rondes construites sur la fondamentale, la tierce et la quinte, avec beaucoup de silences. Le premier temps est souvent laissé vide.",
 niveaux:["Noires et silences : on laisse respirer le premier temps","Croches : fondamentale, tierce, quinte","Lignes mélodiques : octave et valeurs pointées","Triolets et doubles croches"],
 formules:[
  {niv:1,n:"r.12 1.12 1.12 r.12"},
  {niv:1,n:"r.12 1.12 5.12 1.12"},
  {niv:1,n:"r.24 1.12 5.12"},
  {niv:1,n:"1.12 r.12 1.12 5.12"},
  {niv:1,n:"r.12 1.12 r.12 5.12"},
  {niv:1,n:"r.12 1.24 5.12"},
  {niv:2,n:"r.12 1.6 1.6 t.12 5.12"},
  {niv:2,n:"1.12 1.6 t.6 r.12 5.12"},
  {niv:2,n:"r.12 1.12 t.6 5.6 r.12"},
  {niv:2,n:"1.6 1.6 r.12 t.6 t.6 5.12"},
  {niv:2,n:"r.6 1.6 1.6 1.6 r.12 5.6 t.6"},
  {niv:2,n:"r.12 1.6 1.6 r.12 5.6 5.6"},
  {niv:2,n:"1.12 r.6 1.6 5.12 t.12"},
  {niv:3,n:"1.18 1.6 r.6 5.6 t.6 1.6"},
  {niv:3,n:"r.12 8.6 8.6 5.6 t.6 1.12"},
  {niv:3,n:"1.6 1.6 t.6 5.6 r.12 5.6 t.6"},
  {niv:3,n:"1.18 t.6 5.12 r.12"},
  {niv:3,n:"r.6 1.6 t.6 5.6 8.12 r.6 5.6"},
  {niv:3,n:"1.12 r.6 5-.6 1.12 r.6 t.6"},
  {niv:3,n:"8.12 5.6 t.6 1.12 r.12"},
  {niv:4,n:"r.12 1.4 1.4 1.4 5.12 t.12"},
  {niv:4,n:"1.6 1.3 1.3 r.12 t.6 5.6 r.12"},
  {niv:4,n:"1.9 1.3 r.12 5.6 t.6 1.12"},
  {niv:4,n:"r.12 1.6 t.3 5.3 8.12 5.6 t.6"},
  {niv:4,n:"1.4 t.4 5.4 r.12 8.6 5.6 r.12"},
  {niv:4,n:"r.6 1.3 1.3 t.6 5.6 r.12 5.4 t.4 1.4"},
  {niv:1,demi:true,n:"r.12 1.12"},
  {niv:2,demi:true,n:"1.6 1.6 r.12"},
  {niv:3,demi:true,n:"1.6 t.6 5.12"}
 ],
 grilles:[
  {t:"I – IV",n:"C | F | C | F"},
  {t:"I – ii",n:"C | Dm | C | Dm"},
  {t:"I – IV – V – IV",n:"C | F | G | F"},
  {t:"I – V – vi – IV",n:"C | G | Am | F"},
  {t:"i – iv (mineur)",mineur:true,n:"Am | Dm | Am | Dm"},
  {t:"i – ♭VII (mineur)",mineur:true,n:"Am | G | Am | G"},
  {t:"i – ♭VII – ♭VI – ♭VII (mineur)",mineur:true,n:"Am | G | F | G"}
 ]},
{id:"funk",t:"Funk",acc:"funk",son:"eb",swing:false,tenir:2,accords:["7","m7"],
 intro:"En funk, tout part du premier temps : une fondamentale bien posée, puis des notes courtes, des silences et des octaves. Les ghost notes (têtes en croix) se jouent étouffées : elles font tourner le rythme.",
 niveaux:["Croches et silences : le premier temps et l'octave","Doubles croches : la syncopette","Ghost notes","Doubles croches en continu et chromatismes"],
 formules:[
  {niv:1,n:"1.12 r.12 8.6 1.6 r.12"},
  {niv:1,n:"1.12 r.6 1.6 r.6 s.6 8.12"},
  {niv:1,n:"1.6 1.6 r.12 r.6 8.6 r.12"},
  {niv:1,n:"1.12 8.6 r.6 1.12 8.6 r.6"},
  {niv:1,n:"1.6 r.6 r.6 1.6 r.12 5.6 s.6"},
  {niv:1,n:"1.12 r.6 8.6 r.6 8.6 s.6 5.6"},
  {niv:2,n:"1.3 1.6 1.3 r.12 r.6 s.6 8.12"},
  {niv:2,n:"1.9 1.3 r.12 r.6 8.6 s.6 5.6"},
  {niv:2,n:"1.6 r.3 1.3 r.6 8.6 r.12 s.6 8.6"},
  {niv:2,n:"1.12 r.6 r.3 1.3 r.6 8.3 8.3 r.12"},
  {niv:2,n:"1.3 1.3 r.6 r.6 1.6 r.6 s.3 8.3 r.12"},
  {niv:2,n:"1.6 1.3 1.3 r.6 8.6 r.6 5.3 s.3 8.12"},
  {niv:3,n:"1.6 x.3 1.3 r.6 x.3 8.3 r.6 s.6 8.6 x.6"},
  {niv:3,n:"1.3 x.3 x.3 1.3 r.12 8.3 x.3 s.6 5.6 a.6"},
  {niv:3,n:"1.6 8.3 x.3 r.6 1.3 x.3 s.6 8.6 r.6 a.6"},
  {niv:3,n:"1.9 x.3 r.6 8.6 x.3 s.3 8.6 r.6 5.3 a.3"},
  {niv:3,n:"1.6 x.6 8.3 x.3 1.6 r.6 x.3 s.3 8.6 x.6"},
  {niv:4,n:"1.3 1.3 8.3 x.3 1.3 x.3 s.3 8.3 r.6 5.3 s.3 8.3 x.3 4.3 a.3"},
  {niv:4,q:"maj",n:"1.6 b3.3 3.3 r.6 8.3 x.3 s.6 8.3 x.3 r.3 5.3 s.3 8.3"},
  {niv:4,n:"1.3 x.3 1.3 8.3 r.3 8.3 x.3 s.3 r.6 5.3 s.3 8.6 a.6"},
  {niv:4,n:"1.9 1.3 r.3 x.3 8.6 r.3 s.3 8.3 x.3 5.3 s.3 a.6"},
  {niv:1,demi:true,n:"1.12 r.6 8.6"},
  {niv:2,demi:true,n:"1.3 1.6 1.3 r.6 8.6"},
  {niv:3,demi:true,n:"1.6 x.3 1.3 r.6 8.3 x.3"}
 ],
 grilles:[
  {t:"Un seul accord 7",n:"G7 | G7 | G7 | G7"},
  {t:"Un seul accord m7 (dorien)",n:"Dm7 | Dm7 | Dm7 | Dm7"},
  {t:"ii – V en boucle",n:"Dm7 | G7 | Dm7 | G7"},
  {t:"Deux mesures par accord : V7 puis I7",n:"G7 | G7 | C7 | C7"},
  {t:"i – iv (mineur)",mineur:true,n:"Am7 | Am7 | Dm7 | Dm7"}
 ]},
{id:"jazz",t:"Jazz",acc:"swing2",son:"cb",swing:true,tenir:1,accords:["Maj7","7","m7","m7♭5"],
 intro:"En jazz, la basse marche : une note par temps (walking bass), la fondamentale sur le premier temps de chaque accord, puis les notes de l'accord ou de la gamme, et une note d'approche vers l'accord suivant.",
 niveaux:["À la blanche (two-feel) : fondamentale et quinte","Walking en noires : arpèges et notes de la gamme","Notes d'approche chromatiques","Croches swing et triolets"],
 formules:[
  {niv:1,n:"1.24 5.24"},
  {niv:1,n:"1.24 5-.24"},
  {niv:1,n:"1.36 a.12"},
  {niv:1,n:"1.24 5.12 a.12"},
  {niv:1,n:"1.24 t.24"},
  {niv:2,n:"1.12 t.12 5.12 t.12"},
  {niv:2,n:"1.12 t.12 5.12 s.12"},
  {niv:2,n:"8.12 s.12 5.12 t.12"},
  {niv:2,n:"1.12 2.12 t.12 5.12"},
  {niv:2,n:"1.12 5.12 t.12 5.12"},
  {niv:2,q:"maj",n:"1.12 t.12 5.12 6.12"},
  {niv:3,n:"1.12 t.12 5.12 a.12"},
  {niv:3,n:"1.12 2.12 t.12 a.12"},
  {niv:3,n:"8.12 s.12 5.12 A.12"},
  {niv:3,n:"1.12 5.12 t.12 a.12"},
  {niv:3,n:"1.12 t.12 4.12 a.12"},
  {niv:3,n:"8.12 5.12 t.12 a.12"},
  {niv:4,n:"1.12 t.12 5.6 5.6 a.12"},
  {niv:4,n:"1.12 t.6 t.6 5.12 a.12"},
  {niv:4,n:"1.12 5.12 8.4 5.4 t.4 a.12"},
  {niv:4,n:"1.12 t.12 5.12 s.6 a.6"},
  {niv:4,n:"8.12 s.6 s.6 5.12 A.12"},
  {niv:1,demi:true,n:"1.24"},
  {niv:2,demi:true,n:"1.12 5.12"},
  {niv:2,demi:true,n:"1.12 t.12"},
  {niv:3,demi:true,n:"1.12 a.12"},
  {niv:3,demi:true,n:"1.12 A.12"},
  {niv:4,demi:true,n:"1.12 a.6 a.6"}
 ],
 grilles:[
  {t:"ii – V – I",n:"Dm7 | G7 | CMaj7 | CMaj7"},
  {t:"ii – V – I – VI",n:"Dm7 | G7 | CMaj7 | A7"},
  {t:"Anatole (I – VI – ii – V), deux accords par mesure",n:"CMaj7 A7 | Dm7 G7 | Em7 A7 | Dm7 G7"},
  {t:"ii – V – i (mineur)",mineur:true,n:"Bm7♭5 | E7 | Am6 | Am6"},
  {t:"Blues (12 mesures)",n:"C7 | F7 | C7 | C7 | F7 | F7 | C7 | A7 | Dm7 | G7 | C7 A7 | Dm7 G7"},
  {t:"Cycle de quartes dans la tonalité (8 mesures)",n:"Dm7 | G7 | CMaj7 | FMaj7 | Bm7♭5 | E7 | Am7 | Am7"}
 ]}
];
