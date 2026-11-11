// Déchiffrage Basse : fonctionnement hors ligne.
// Page, contenu et manifeste : on demande d'abord la version en ligne (les modifications faites sur GitHub
// arrivent tout de suite), et on se rabat sur la copie enregistrée sans connexion.
// Sons (batterie, contrebasse, basse), icônes et polices : copie enregistrée d'abord.
// Si tu ajoutes un son, ajoute-le à FICHIERS et change VERSION.
const PREFIXE='dechiffrage-basse-',VERSION=PREFIXE+'3';
const FICHIERS=["./", "index.html", "contenu/lignes.js", "contenu/niveaux.js", "manifest.webmanifest", "icones/icone-192.png", "icones/icone-512.png", "sons/batterie/caisse-ghost.mp3", "sons/batterie/caisse.mp3", "sons/batterie/cross-stick.mp3", "sons/batterie/hh-doux.mp3", "sons/batterie/hh-ferme.mp3", "sons/batterie/hh-ouvert.mp3", "sons/batterie/hh-pied.mp3", "sons/batterie/kick.mp3", "sons/batterie/ride-cloche.mp3", "sons/batterie/ride.mp3", "sons/contrebasse/28.mp3", "sons/contrebasse/30.mp3", "sons/contrebasse/31.mp3", "sons/contrebasse/34.mp3", "sons/contrebasse/36.mp3", "sons/contrebasse/38.mp3", "sons/contrebasse/40.mp3", "sons/contrebasse/42.mp3", "sons/contrebasse/44.mp3", "sons/contrebasse/45.mp3", "sons/contrebasse/49.mp3", "sons/contrebasse/52.mp3", "sons/contrebasse/56.mp3", "sons/basse/28.mp3", "sons/basse/31.mp3", "sons/basse/34.mp3", "sons/basse/37.mp3", "sons/basse/40.mp3", "sons/basse/43.mp3", "sons/basse/46.mp3", "sons/basse/49.mp3", "sons/basse/52.mp3"];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FICHIERS)).then(()=>self.skipWaiting())); });
// on ne supprime que les anciennes copies de cette appli : les autres applis du même site (boîte à outils, Atelier FM…) gardent les leurs
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(PREFIXE)&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
// on ajoute ?v=… à l'adresse pour passer outre la mémoire de GitHub Pages (jusqu'à 10 minutes de retard sinon)
const frais=req=>{const u=new URL(req.url);u.searchParams.set('v',Date.now());return fetch(u.toString(),{cache:'no-store'});};
const enLigneDabord=req=>frais(req).then(r=>{ if(r.ok){ const c=r.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return r; }).catch(()=>caches.open(VERSION).then(c=>c.match(req,{ignoreSearch:true})).then(r=>r||caches.open(VERSION).then(c=>c.match('./'))));
const copieDabord=req=>caches.open(VERSION).then(c=>c.match(req)).then(r=>r||fetch(req).then(n=>{ if(n.ok||n.type==='opaque'){ const c=n.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return n; }));
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url);
  if(u.origin===location.origin){
    if(req.mode==='navigate'||/\.(html|js|webmanifest)$/.test(u.pathname)||u.pathname.endsWith('/')) e.respondWith(enLigneDabord(req));
    else e.respondWith(copieDabord(req));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) e.respondWith(copieDabord(req));
});
