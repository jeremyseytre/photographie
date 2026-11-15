// Interactions communes : le contenu est directement dans chaque page HTML.
const EMAIL='jeremy.seytre@gmail.com';
const FORMSPREE='https://formspree.io/f/xdegezee';
const hd=document.getElementById('hd'),nv=document.getElementById('nv');
// Compatibilité avec les anciens liens à fragments.
const oldRoutes={"accueil":"index.html","mariage":"mariage.html","blog":"blog.html","contact":"contact.html","a1":"choisir-photographe-mariage.html","a2":"budget-photographe-mariage.html","a3":"photos-incontournables-mariage.html","a4":"first-look-mariage.html","a5":"photos-groupe-mariage.html","a6":"seance-engagement.html","a7":"mariage-sous-la-pluie.html","a8":"photographe-wedding-planner.html","a9":"planning-mariage.html","a10":"albums-et-tirages.html"};
const oldRoute=location.hash.slice(1);if(Object.hasOwn(oldRoutes,oldRoute))location.replace(oldRoutes[oldRoute]);
async function send(e){e.preventDefault();const f=e.target,m=document.getElementById('msg'),d=Object.fromEntries(new FormData(f));if(d._honey)return;const L={noms:'Vos prénoms',email:'E-mail',tel:'Téléphone',date:'Date du mariage',lieu:'Lieu',message:'Votre message'},er=[];for(const n in L){const v=(d[n]||'').trim();if(!v)er.push('« '+L[n]+' » est obligatoire.');else if(n==='email'&&!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v))er.push('Adresse e-mail invalide : vérifiez qu’elle ressemble à nom@domaine.fr.');else if(n==='tel'&&!/^(?:\+33|0033|0)[1-9]\d{8}$/.test(v.replace(/[\s.\-]/g,'')))er.push('Numéro de téléphone invalide : saisissez 10 chiffres, par exemple 06 12 34 56 78.')}if(!f.rgpd.checked)er.push('Merci de cocher la case de consentement.');m.style.color='#a33';if(er.length){m.innerHTML=er.join('<br>');return}m.style.color='';
d._subject='Nouvelle demande – jeremyseytre-photographie.fr';d._template='table';m.textContent='Envoi en cours…';
try{const r=await fetch(f.action || FORMSPREE,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;m.textContent='Merci ! Votre message est bien parti, je vous réponds très vite.';f.reset()}
catch(_){m.innerHTML='L’envoi du formulaire est indisponible. Contactez-moi par e-mail : <a href="mailto:'+EMAIL+'?subject=Demande%20mariage">écrire par e-mail</a>.'}}
let ly=0;addEventListener('scroll',()=>{const y=scrollY;hd.classList.toggle('hide',y>ly&&y>300);ly=y;const fo=document.getElementById('formules');document.getElementById('fl').classList.toggle('s',!!fo&&y>200&&fo.getBoundingClientRect().top>innerHeight*.6)},{passive:true});
document.getElementById('fl').onclick=()=>document.getElementById('formules')?.scrollIntoView({behavior:'smooth'});
const bt=document.getElementById('bt');bt.onclick=()=>{const open=nv.classList.toggle('o');bt.setAttribute('aria-expanded',String(open))};
const form=document.getElementById('fm');if(form)form.onsubmit=send;
const cc=document.getElementById('cc');let ck=null;try{ck=localStorage.getItem('cc')}catch(_){}
if(ck===null)setTimeout(()=>cc.classList.add('s'),1200);
cc.onclick=e=>{const c=e.target.dataset.c;if(c===undefined)return;try{localStorage.setItem('cc',c)}catch(_){}cc.classList.remove('s');/* si c==='1' : charger ici Analytics / pixels */};
document.getElementById('ckr').onclick=e=>{e.preventDefault();cc.classList.add('s')};
