const hamburger=document.getElementById('hamburger'),navLinks=document.getElementById('navLinks');
if(hamburger) hamburger.addEventListener('click',()=>navLinks.classList.toggle('open'));

const search=document.getElementById('search'), list=document.getElementById('eventList'), empty=document.getElementById('empty');
let activeCat='all';
function filterEvents(){if(!list)return;const q=(search?.value||'').toLowerCase().trim();let count=0;list.querySelectorAll('.event-row').forEach(card=>{const okCat=activeCat==='all'||card.dataset.cat===activeCat;const okText=card.dataset.name.toLowerCase().includes(q);card.hidden=!(okCat&&okText);if(okCat&&okText)count++});if(empty)empty.hidden=count!==0}
if(search)search.addEventListener('input',filterEvents);
document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));btn.classList.add('active');activeCat=btn.dataset.cat;filterEvents()}));

const form=document.getElementById('form');
if(form){const params=new URLSearchParams(location.search),event=params.get('event'),select=document.getElementById('event');if(event&&select){[...select.options].forEach(o=>{if(o.value===event)o.selected=true})}form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}form.hidden=true;document.getElementById('success').hidden=false;window.scrollTo({top:200,behavior:'smooth'})})}
