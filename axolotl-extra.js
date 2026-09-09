window.addEventListener('DOMContentLoaded',()=>{
  const originalAxo=window.axo;
  if(typeof originalAxo!=='function')return;

  const EXTRA=['love','cool','dizzy','kiss','dead','puffed'];
  const BUILTIN=['neutral','happy','smirk','tongue','surprised','wink','sad','angry','sleepy'];
  const FUN=[...BUILTIN,...EXTRA];
  const neutralEyes='<g fill="#2b1c20"><circle cx="110" cy="96" r="12"/><circle cx="190" cy="96" r="12"/></g>';
  const neutralMouth='<path d="M139 126 L161 126" fill="none" stroke="#2b1c20" stroke-width="5" stroke-linecap="round"/>';
  const randomFun=()=>FUN[Math.floor(Math.random()*FUN.length)];

  function swapFace(svg,eyes,mouth,extra=''){
    svg=svg.replace(neutralEyes,eyes).replace(neutralMouth,mouth);
    if(extra)svg=svg.replace('</g></svg>',extra+'</g></svg>');
    return svg;
  }

  window.axo=function(requested='auto'){
    let ex=requested==='auto'?randomFun():requested;
    if(!EXTRA.includes(ex))return originalAxo(ex);
    let svg=originalAxo('neutral');
    const stroke='#2b1c20';
    if(ex==='love')return swapFace(svg,`<g fill="#ef6378" stroke="${stroke}" stroke-width="4" stroke-linejoin="round"><path d="M110 108 C89 92 91 75 103 75 C110 75 114 81 116 86 C119 81 123 75 130 75 C142 75 144 92 123 108 L116 114 Z" transform="translate(-6 0) scale(.78)"/><path d="M190 108 C169 92 171 75 183 75 C190 75 194 81 196 86 C199 81 203 75 210 75 C222 75 224 92 203 108 L196 114 Z" transform="translate(-6 0) scale(.78)"/></g>`,'<path d="M130 120 Q150 146 170 120 Z" fill="#e76c79" stroke="#2b1c20" stroke-width="5"/>');
    if(ex==='cool')return swapFace(svg,`<g><path d="M91 86 L132 86 L126 108 Q112 116 99 106 Z" fill="#17151a" stroke="${stroke}" stroke-width="4"/><path d="M168 86 L209 86 L201 106 Q188 116 174 108 Z" fill="#17151a" stroke="${stroke}" stroke-width="4"/><path d="M132 91 Q150 84 168 91" fill="none" stroke="${stroke}" stroke-width="5"/><path d="M96 90 L80 85 M204 90 L220 85" stroke="${stroke}" stroke-width="5"/></g>`,'<path d="M134 128 Q150 139 166 126" fill="none" stroke="#2b1c20" stroke-width="5" stroke-linecap="round"/>','<path d="M226 48 L231 58 L242 62 L232 67 L228 78 L223 68 L212 64 L222 59 Z" fill="#ffd75f" stroke="#351921" stroke-width="3"/>');
    if(ex==='dizzy')return swapFace(svg,`<g fill="none" stroke="${stroke}" stroke-width="4" stroke-linecap="round"><path d="M110 96 C95 83 91 108 109 108 C130 108 131 78 106 78 C82 78 82 116 112 117"/><path d="M190 96 C175 83 171 108 189 108 C210 108 211 78 186 78 C162 78 162 116 192 117"/></g>`,'<ellipse cx="150" cy="134" rx="12" ry="9" fill="#e76c79" stroke="#2b1c20" stroke-width="4"/>');
    if(ex==='kiss')return swapFace(svg,`<g><circle cx="110" cy="96" r="12" fill="${stroke}"/><path d="M178 98 Q190 87 202 98" fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round"/></g>`,'<path d="M143 126 Q151 121 158 126 Q151 130 143 126 M151 126 L146 135 M151 126 L157 134" fill="none" stroke="#2b1c20" stroke-width="4" stroke-linecap="round"/>','<path d="M202 128 C196 120 187 125 190 133 C193 140 202 145 202 145 C202 145 212 139 214 132 C216 124 207 120 202 128 Z" fill="#ef6378" stroke="#351921" stroke-width="3"/>');
    if(ex==='dead')return swapFace(svg,`<g fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round"><path d="M100 86 L120 106 M120 86 L100 106 M180 86 L200 106 M200 86 L180 106"/></g>`,'<path d="M135 129 Q150 121 165 129 L163 142 Q150 148 137 142 Z" fill="#e76c79" stroke="#2b1c20" stroke-width="4"/><path d="M145 140 Q150 151 155 140" fill="#f18191" stroke="#2b1c20" stroke-width="3"/>');
    return swapFace(svg,`<g fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round"><path d="M98 97 Q110 85 122 97 M178 97 Q190 85 202 97"/></g>`,'<path d="M136 124 Q145 132 140 143 M164 124 Q155 132 160 143 M140 143 Q150 151 160 143" fill="none" stroke="#2b1c20" stroke-width="5" stroke-linecap="round"/>');
  };

  // Patch the existing core loader itself. Because the original game functions call
  // this global binding directly, assigning the declaration is what makes Again,
  // Knockout next-question, and every other question transition use funny faces too.
  randomLoading=function(cb,ms=3000){
    const el=document.getElementById('loadingAxo');
    if(loadingTiltTimer)clearInterval(loadingTiltTimer);
    el.classList.remove('tiltLeft','tiltRight');
    el.classList.add('thinking','tiltLeft');
    el.innerHTML=window.axo(randomFun());
    let left=true;
    loadingTiltTimer=setInterval(()=>{left=!left;el.classList.toggle('tiltLeft',left);el.classList.toggle('tiltRight',!left)},250);
    showScreen('loadingScreen');
    setTimeout(()=>{clearInterval(loadingTiltTimer);loadingTiltTimer=null;el.classList.remove('thinking','tiltLeft','tiltRight');cb()},ms);
  };
});