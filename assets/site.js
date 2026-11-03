
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
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',event=>event.preventDefault()));
})();
