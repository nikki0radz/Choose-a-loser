window.addEventListener('DOMContentLoaded',()=>{
  const originalAxo=window.axo;
  if(typeof originalAxo!=='function')return;

  const EXTRA=['love','cool','dizzy','kiss','dead','puffed','star','angel','money'];
  const SILLY=['tongue','surprised','wink','sleepy','angry','smirk','happy','love','cool','dizzy','kiss','dead','puffed','star','angel','money'];
  let sillyBag=[];

  function refillBag(){sillyBag=[...SILLY];for(let i=sillyBag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[sillyBag[i],sillyBag[j]]=[sillyBag[j],sillyBag[i]];}}
  function randomSilly(){if(!sillyBag.length)refillBag();return sillyBag.pop();}
  function swapFace(svg,eyes,mouth,extra=''){
    svg=svg.replace(/<g fill="#[0-9a-fA-F]{6}"><circle cx="110" cy="96" r="12"\/><circle cx="190" cy="96" r="12"\/><\/g>/,eyes);
    svg=svg.replace(/<path d="M139 126 L161 126" fill="none" stroke="#[0-9a-fA-F]{6}" stroke-width="5" stroke-linecap="round"\/>/,mouth);
    if(extra)svg=svg.replace('</g></svg>',extra+'</g></svg>');return svg;
  }
  const star=(cx,cy,r=15)=>{let p=[];for(let i=0;i<10;i++){let a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.43:r;p.push(`${cx+Math.cos(a)*rr},${cy+Math.sin(a)*rr}`)}return p.join(' ')};
  const heart=(cx,cy)=>`M${cx} ${cy+12} C${cx-25} ${cy-3} ${cx-20} ${cy-24} ${cx-8} ${cy-24} C${cx} ${cy-24} ${cx+3} ${cy-17} ${cx} ${cy-12} C${cx+3} ${cy-17} ${cx+8} ${cy-24} ${cx+16} ${cy-24} C${cx+28} ${cy-24} ${cx+33} ${cy-3} ${cx} ${cy+12}Z`;

  window.axo=function(requested='auto'){
    let ex=requested==='auto'?randomSilly():requested;
    if(!EXTRA.includes(ex))return originalAxo(ex);
    let svg=originalAxo('neutral'),stroke='#351921';
    if(ex==='love')return swapFace(svg,`<g fill="#ef6378" stroke="${stroke}" stroke-width="4" stroke-linejoin="round"><path d="${heart(110,103)}"/><path d="${heart(190,103)}"/></g>`,'<path d="M130 123 Q150 145 170 123" fill="none" stroke="#351921" stroke-width="5" stroke-linecap="round"/>');
    if(ex==='cool')return swapFace(svg,`<g><path d="M91 86 L132 86 L126 108 Q112 116 99 106 Z" fill="#17151a" stroke="${stroke}" stroke-width="4"/><path d="M168 86 L209 86 L201 106 Q188 116 174 108 Z" fill="#17151a" stroke="${stroke}" stroke-width="4"/><path d="M132 91 Q150 84 168 91" fill="none" stroke="${stroke}" stroke-width="5"/></g>`,'<path d="M134 128 Q150 139 166 126" fill="none" stroke="#351921" stroke-width="5" stroke-linecap="round"/>');
    if(ex==='dizzy')return swapFace(svg,`<g fill="none" stroke="${stroke}" stroke-width="4" stroke-linecap="round"><path d="M110 96 C95 83 91 108 109 108 C130 108 131 78 106 78 C82 78 82 116 112 117"/><path d="M190 96 C175 83 171 108 189 108 C210 108 211 78 186 78 C162 78 162 116 192 117"/></g>`,'<ellipse cx="150" cy="134" rx="12" ry="9" fill="#e76c79" stroke="#351921" stroke-width="4"/>');
    if(ex==='kiss')return swapFace(svg,`<g><circle cx="110" cy="96" r="12" fill="${stroke}"/><path d="M178 98 Q190 87 202 98" fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round"/></g>`,`<g fill="#ef6378" stroke="${stroke}" stroke-width="3" stroke-linejoin="round"><path d="M137 128 Q145 118 150 127 Q155 118 163 128 Q156 137 150 137 Q144 137 137 128Z"/></g>`,'<path d="M205 126 C198 117 188 123 191 132 C194 140 204 145 204 145 C204 145 215 139 217 131 C219 122 210 117 205 126 Z" fill="#ef6378" stroke="#351921" stroke-width="3"/>');
    if(ex==='dead')return swapFace(svg,`<g fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round"><path d="M100 86 L120 106 M120 86 L100 106 M180 86 L200 106 M200 86 L180 106"/></g>`,'<path d="M135 129 Q150 121 165 129 L163 142 Q150 148 137 142 Z" fill="#e76c79" stroke="#351921" stroke-width="4"/><path d="M145 140 Q150 151 155 140" fill="#f18191" stroke="#351921" stroke-width="3"/>');
    if(ex==='puffed')return swapFace(svg,`<g fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round"><path d="M98 97 Q110 85 122 97 M178 97 Q190 85 202 97"/></g>`,'<path d="M136 124 Q145 132 140 143 M164 124 Q155 132 160 143 M140 143 Q150 151 160 143" fill="none" stroke="#351921" stroke-width="5" stroke-linecap="round"/>');
    if(ex==='star')return swapFace(svg,`<g fill="#ffd75f" stroke="${stroke}" stroke-width="3" stroke-linejoin="round"><polygon points="${star(110,96,17)}"/><polygon points="${star(190,96,17)}"/></g>`,'<path d="M132 125 Q150 146 168 125" fill="none" stroke="#351921" stroke-width="5" stroke-linecap="round"/>','<path d="M226 55 L230 64 L240 68 L231 72 L227 82 L223 73 L213 69 L222 65 Z" fill="#ffd75f" stroke="#351921" stroke-width="2"/>');
    if(ex==='angel')return swapFace(svg,`<g fill="none" stroke="${stroke}" stroke-width="5" stroke-linecap="round"><path d="M98 97 Q110 86 122 97 M178 97 Q190 86 202 97"/></g>`,'<path d="M136 126 Q150 137 164 126" fill="none" stroke="#351921" stroke-width="5" stroke-linecap="round"/>','<ellipse cx="150" cy="45" rx="43" ry="11" fill="none" stroke="#ffd75f" stroke-width="6"/><ellipse cx="150" cy="45" rx="32" ry="6" fill="none" stroke="#fff1a8" stroke-width="2"/>');
    if(ex==='money')return swapFace(svg,`<g font-family="Arial,sans-serif" font-size="29" font-weight="900" fill="#3a9b55" stroke="${stroke}" stroke-width="1.5" paint-order="stroke"><text x="110" y="106" text-anchor="middle">$</text><text x="190" y="106" text-anchor="middle">$</text></g>`,'<path d="M130 126 Q150 143 170 126" fill="none" stroke="#351921" stroke-width="5" stroke-linecap="round"/>','<g transform="translate(220 48) rotate(12)"><rect x="0" y="0" width="35" height="19" rx="3" fill="#65b978" stroke="#351921" stroke-width="2"/><circle cx="17.5" cy="9.5" r="5" fill="none" stroke="#351921" stroke-width="2"/><text x="17.5" y="13" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#351921">$</text></g>');
    return originalAxo('neutral');
  };

  randomLoading=function(cb,ms=3000){const el=document.getElementById('loadingAxo');if(loadingTiltTimer)clearInterval(loadingTiltTimer);el.classList.remove('tiltLeft','tiltRight');el.classList.add('thinking','tiltLeft');el.innerHTML=window.axo(randomSilly());let left=true;loadingTiltTimer=setInterval(()=>{left=!left;el.classList.toggle('tiltLeft',left);el.classList.toggle('tiltRight',!left)},250);showScreen('loadingScreen');setTimeout(()=>{clearInterval(loadingTiltTimer);loadingTiltTimer=null;el.classList.remove('thinking','tiltLeft','tiltRight');cb()},ms);};
});