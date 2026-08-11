/* ---------------- DATA ---------------- */
const services = [
  ["Software Development","End-to-end custom builds from architecture to release."],
  ["Full Stack Development","Frontend, backend, and everything wired between them."],
  ["Mobile App Development","Native and cross-platform apps for iOS and Android."],
  ["UI/UX Design","Interfaces users understand in the first five seconds."],
  ["Cloud Computing","Infrastructure that scales with your traffic, not against it."],
  ["Artificial Intelligence (AI)","Applied AI features built for real business problems."],
  ["Machine Learning (ML)","Models trained, tuned, and deployed into production."],
  ["Data Science","Turning raw data into decisions worth acting on."],
  ["Data Analytics","Dashboards and reporting that teams actually check."],
  ["Cyber Security","Hardening systems before attackers find the gaps."],
  ["Software Testing","Manual and automated QA across every release."],
  ["Website Development","Fast, responsive sites built to convert."],
  ["API Development","Clean, documented APIs your team can build on."],
  ["CRM & ERP Solutions","Systems that fit how your business actually runs."],
  ["SaaS Development","Multi-tenant products built to scale with users."],
  ["IT Consulting","Technical direction before you commit to a stack."]
];
const tracks = ["Full Stack Development","Mobile App Development","UI/UX Design","Cloud Computing","Artificial Intelligence","Machine Learning","Data Science","Data Analytics","Cyber Security","Software Testing","Software Development"];
const benefits = ["Industry Certificate","Real-Time Projects","Practical Learning","Placement Assistance","Career Guidance"];
const whyUs = [["Professional Development Team","EXPERTISE"],["Innovative Solutions","APPROACH"],["On-Time Delivery","RELIABILITY"],["Client-Centric Approach","FOCUS"],["Affordable Pricing","VALUE"],["Latest Technologies","STACK"],["Secure Development","SECURITY"],["Long-Term Support","PARTNERSHIP"],["Transparent Communication","TRUST"]];
const stack = {
  "Frontend":["HTML","CSS","JavaScript","React","Angular"],
  "Backend":["Node.js","Java","Python","PHP",".NET"],
  "Database":["MySQL","PostgreSQL","MongoDB","Firebase"],
  "Mobile":["Flutter","Android","React Native"],
  "Cloud":["AWS","Microsoft Azure","Google Cloud"]
};
const process = [
  ["Requirement Analysis","Understanding your business goals, users, and constraints before a single line of code."],
  ["Planning","Scoping architecture, timelines, and resources so the build stays predictable."],
  ["UI/UX Design","Wireframes and interactive prototypes that put the end user first."],
  ["Development","Full stack build across frontend, backend, and infrastructure."],
  ["Testing","Manual and automated QA to catch issues before your users do."],
  ["Deployment","Shipping to production with monitoring and rollback plans in place."],
  ["Maintenance & Support","Ongoing updates, fixes, and scaling as your product grows."]
];
const industries = ["Education","Healthcare","Finance","Manufacturing","Retail","E-Commerce","Real Estate","Logistics","Startups","Government"];
const commitments = [["Quality","01"],["Innovation","02"],["Security","03"],["Reliability","04"],["Scalability","05"],["Satisfaction","06"]];

/* ---------------- RENDER ---------------- */
const svcGrid = document.getElementById('services-grid');
services.forEach(([s,desc],i)=>{
  const d = document.createElement('div');
  d.className='svc-card';
  d.innerHTML = `
    <div class="svc-inner">
      <div class="svc-face svc-front">
        <span class="svc-num">${String(i+1).padStart(2,'0')}</span>
        <h4>${s}</h4>
      </div>
      <div class="svc-face svc-back">
        <span class="tick">${String(i+1).padStart(2,'0')} / DETAIL</span>
        <p>${desc}</p>
      </div>
    </div>`;
  svcGrid.appendChild(d);
});

const trackWrap = document.getElementById('track-list');
tracks.forEach(t=>{
  const d = document.createElement('div');
  d.className='track-pill';
  d.textContent = t;
  trackWrap.appendChild(d);
});

const benWrap = document.getElementById('benefit-list');
benefits.forEach(b=>{
  const d = document.createElement('div');
  d.className='benefit-item';
  d.innerHTML = `<span class="benefit-dot"></span>${b}`;
  benWrap.appendChild(d);
});

const whyGrid = document.getElementById('why-grid');
whyUs.forEach(([t,l])=>{
  const d = document.createElement('div');
  d.className='why-item';
  d.innerHTML = `<span>${l}</span><h4>${t}</h4>`;
  whyGrid.appendChild(d);
});

const stackGrid = document.getElementById('stack-grid');
Object.entries(stack).forEach(([cat,items])=>{
  const col = document.createElement('div');
  col.innerHTML = `<div class="stack-col-title">${cat}</div>`;
  const tagWrap = document.createElement('div');
  tagWrap.className='stack-tags';
  items.forEach(it=>{
    const t = document.createElement('div');
    t.className='stack-tag';
    t.textContent = it;
    tagWrap.appendChild(t);
  });
  col.appendChild(tagWrap);
  stackGrid.appendChild(col);
});

const timeline = document.getElementById('timeline');
process.forEach(([title,desc],i)=>{
  const d = document.createElement('div');
  d.className='t-step';
  d.innerHTML = `<div class="t-num">${String(i+1).padStart(2,'0')}</div><div class="t-body"><h4>${title}</h4><p>${desc}</p></div>`;
  timeline.appendChild(d);
});

const indGrid = document.getElementById('ind-grid');
industries.forEach(i=>{
  const d = document.createElement('div');
  d.className='ind-chip';
  d.textContent = i;
  indGrid.appendChild(d);
});

const commitStrip = document.getElementById('commit-strip');
commitments.forEach(([label,num])=>{
  const d = document.createElement('div');
  d.className='commit-item';
  d.innerHTML = `<span class="big">${num}</span><span class="label">${label}</span>`;
  commitStrip.appendChild(d);
});

/* ---------------- SCROLL REVEAL ---------------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:0.12});
revealEls.forEach(el=>io.observe(el));

/* ---------------- 3D TILT ON VM CARDS, WHY ITEMS, FABRIC SWATCH ---------------- */
function attachTilt(selector, strength=12, lift=10){
  document.querySelectorAll(selector).forEach(card=>{
    card.style.transformStyle='preserve-3d';
    card.addEventListener('mousemove',(e)=>{
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y/r.height)-0.5) * -strength;
      const ry = ((x/r.width)-0.5) * strength;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${lift}px)`;
    });
    card.addEventListener('mouseleave',()=>{
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}
attachTilt('.vm-card', 8, 6);
attachTilt('.why-item', 10, 4);
attachTilt('.fabric-swatch', 14, 10);
attachTilt('.benefit-box', 6, 4);

/* ---------------- HERO CUBE — MOUSE-DRIVEN TILT LAYER ---------------- */
const cube = document.getElementById('hero-cube');
const cubeStage = document.querySelector('.cube-stage');
if(cube && cubeStage){
  let cubeTilt = {x:0,y:0};
  window.addEventListener('mousemove', e=>{
    const nx = (e.clientX/window.innerWidth - 0.5);
    const ny = (e.clientY/window.innerHeight - 0.5);
    cubeTilt.x = ny * -14;
    cubeTilt.y = nx * 14;
    cubeStage.style.transform = `translateY(-50%) rotateX(${cubeTilt.x}deg) rotateY(${cubeTilt.y}deg)`;
  });
}

/* ---------------- HERO LOOM CANVAS (mouse-reactive weave) ---------------- */
const canvas = document.getElementById('loom-canvas');
const ctx = canvas.getContext('2d');
let W,H;
function resize(){
  W = canvas.width = canvas.offsetWidth * devicePixelRatio;
  H = canvas.height = canvas.offsetHeight * devicePixelRatio;
}
resize();
window.addEventListener('resize', resize);

let mouse = {x:-9999,y:-9999};
canvas.addEventListener('mousemove', e=>{
  const r = canvas.getBoundingClientRect();
  mouse.x = (e.clientX - r.left) * devicePixelRatio;
  mouse.y = (e.clientY - r.top) * devicePixelRatio;
});
canvas.addEventListener('mouseleave', ()=>{ mouse.x=-9999; mouse.y=-9999; });

const SPACING = 46 * devicePixelRatio;
let t = 0;

function drawLoom(){
  ctx.clearRect(0,0,W,H);
  const cols = Math.ceil(W/SPACING)+2;
  const rows = Math.ceil(H/SPACING)+2;

  // vertical threads (cyan) with sine wave offset
  for(let c=-1;c<cols;c++){
    ctx.beginPath();
    const baseX = c*SPACING;
    for(let y=0;y<=H;y+=8*devicePixelRatio){
      const wave = Math.sin((y*0.006)+(t*0.6)+c*0.5) * 6 * devicePixelRatio;
      const dx = baseX+wave;
      const dist = Math.hypot(dx-mouse.x, y-mouse.y);
      const push = dist < 140*devicePixelRatio ? (140*devicePixelRatio-dist)*0.12 : 0;
      const dir = dx < mouse.x ? -1 : 1;
      const x = dx + dir*push;
      if(y===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.strokeStyle = 'rgba(63,224,255,0.14)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // horizontal threads (amber) with sine wave offset
  for(let r=-1;r<rows;r++){
    ctx.beginPath();
    const baseY = r*SPACING;
    for(let x=0;x<=W;x+=8*devicePixelRatio){
      const wave = Math.sin((x*0.006)+(t*0.6)+r*0.5) * 6 * devicePixelRatio;
      const dy = baseY+wave;
      const dist = Math.hypot(x-mouse.x, dy-mouse.y);
      const push = dist < 140*devicePixelRatio ? (140*devicePixelRatio-dist)*0.12 : 0;
      const dir = dy < mouse.y ? -1 : 1;
      const y = dy + dir*push;
      if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.strokeStyle = 'rgba(255,178,56,0.10)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // glowing intersection nodes near mouse
  for(let c=0;c<cols;c++){
    for(let r=0;r<rows;r++){
      const x = c*SPACING, y = r*SPACING;
      const dist = Math.hypot(x-mouse.x,y-mouse.y);
      if(dist < 160*devicePixelRatio){
        const alpha = 1 - dist/(160*devicePixelRatio);
        ctx.beginPath();
        ctx.arc(x,y, 2*devicePixelRatio*alpha+0.5, 0, Math.PI*2);
        ctx.fillStyle = `rgba(63,224,255,${alpha*0.9})`;
        ctx.fill();
      }
    }
  }

  t += 0.016;
  requestAnimationFrame(drawLoom);
}
drawLoom();

/* ---------------- ABOUT FABRIC MINI CANVAS ---------------- */
const fc = document.getElementById('fabric-canvas');
const fctx = fc.getContext('2d');
function resizeFabric(){
  fc.width = fc.offsetWidth * devicePixelRatio;
  fc.height = fc.offsetHeight * devicePixelRatio;
}
resizeFabric();
window.addEventListener('resize', resizeFabric);
let ft=0;
function drawFabric(){
  fctx.clearRect(0,0,fc.width,fc.height);
  const sp = 28*devicePixelRatio;
  const cols = Math.ceil(fc.width/sp)+1;
  const rows = Math.ceil(fc.height/sp)+1;
  for(let i=0;i<cols;i++){
    for(let j=0;j<rows;j++){
      const over = (i+j)%2===0;
      const x = i*sp, y = j*sp;
      const wobble = Math.sin(ft+i*0.4+j*0.4)*3*devicePixelRatio;
      fctx.strokeStyle = over ? 'rgba(63,224,255,0.35)' : 'rgba(255,178,56,0.28)';
      fctx.lineWidth = 2.4*devicePixelRatio;
      fctx.beginPath();
      if(over){
        fctx.moveTo(x-sp/2, y+wobble);
        fctx.lineTo(x+sp/2, y+wobble);
      } else {
        fctx.moveTo(x+wobble, y-sp/2);
        fctx.lineTo(x+wobble, y+sp/2);
      }
      fctx.stroke();
    }
  }
  ft += 0.012;
  requestAnimationFrame(drawFabric);
}
drawFabric();