
(() => {
const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.main-nav');
const closeMenu=()=>{toggle.setAttribute('aria-expanded','false');menu.classList.remove('open')};
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open)});
menu.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus()}});
document.addEventListener('click',event=>{if(!header.contains(event.target))closeMenu()});
window.matchMedia('(min-width:761px)').addEventListener('change',closeMenu);
const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>20);
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();

document.querySelectorAll('form:not(.appointment-form)').forEach(form=>form.addEventListener('submit',event=>event.preventDefault()));
document.querySelectorAll('.appointment-form').forEach(form=>{
 const status=form.querySelector('.form-status');
 const button=form.querySelector('button[type="submit"]');
 const local=location.protocol==='file:'||['localhost','127.0.0.1','::1','[::1]'].includes(location.hostname);
 if(!local)status.textContent='Csak saját tesztadataidat küldd be. A beküldés nem foglal időpontot.';
 let sending=false;
 form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(sending||!form.reportValidity())return;
  status.className='form-status';
  if(local){status.classList.add('error');status.textContent='Ez helyi előnézet. Nem küldtünk adatot; a próbaküldést az éles Netlify-oldalon végezd el.';return;}
  sending=true;button.disabled=true;button.textContent='Küldés folyamatban…';form.setAttribute('aria-busy','true');status.textContent='A tesztüzenet továbbítása folyamatban…';
  try{
   const data=new URLSearchParams(new FormData(form));
   const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),20000);
   let response;
   try{response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:data.toString(),signal:controller.signal});}finally{clearTimeout(timer);}
   if(!response.ok)throw new Error('submit-failed');
   status.classList.add('success');status.textContent='A szerver fogadta a tesztüzenetet. Az e-mail-értesítés megérkezését külön kell ellenőrizni. Ez nem időpontfoglalási visszaigazolás.';
   form.reset();
  }catch(error){status.classList.add('error');status.textContent=error.name==='AbortError'?'A szerver nem válaszolt időben. A beküldés állapota bizonytalan; ellenőrizd a Netlify felületét, mielőtt újra próbálod.':'Az üzenet továbbítását nem sikerült igazolni. Próbáld újra később; ha a hiba marad, ellenőrizd a Netlify űrlapbeállítását.';}
  finally{sending=false;button.disabled=false;button.textContent='Küldés';form.removeAttribute('aria-busy');}
 });
});

})();
