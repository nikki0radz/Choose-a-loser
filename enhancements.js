window.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');style.id='oceanEditEnhancements';style.textContent=`
    select.field,select.field option{background:#0b2148!important;color:#fff!important}
    .editMeta{display:grid;grid-template-columns:1fr 1fr;gap:8px}.editMeta.one{grid-template-columns:1fr}
    .editLabel{font-size:10px;font-weight:800;letter-spacing:.08em;color:var(--soft);opacity:.65;margin:2px 2px -3px}

    #app:before,#app:after,.weed{display:none!important}
    .seaweedGarden{position:fixed!important;left:0!important;right:0!important;bottom:0!important;height:61vh!important;pointer-events:none!important;overflow:hidden!important;z-index:0!important}
    .kelpPlant{position:absolute;bottom:-7px;width:72px;height:var(--h);transform-origin:50% 100%;opacity:var(--op);animation:kelpSway var(--speed) ease-in-out infinite alternate}
    .kelpRibbon{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
    .oceanFloor{position:absolute;left:-5%;right:-5%;bottom:-3px;height:34px;opacity:.8;background:radial-gradient(ellipse at 8% 90%,#0a244b 0 32px,transparent 34px),radial-gradient(ellipse at 25% 100%,#0d2b56 0 40px,transparent 42px),radial-gradient(ellipse at 44% 105%,#092247 0 46px,transparent 48px),radial-gradient(ellipse at 66% 100%,#0d2b56 0 38px,transparent 40px),radial-gradient(ellipse at 88% 100%,#082047 0 44px,transparent 46px)}
    @keyframes kelpSway{from{transform:rotate(-1.4deg) translateX(-1px)}to{transform:rotate(1.8deg) translateX(2px)}}

    .thoughtBubbles{top:42%!important;transform:translate(-50%,-50%)!important;height:520px!important}
    .thoughtBubble:nth-child(1){left:49%!important;top:59%!important}.thoughtBubble:nth-child(2){left:52%!important;top:58%!important}.thoughtBubble:nth-child(3){left:48%!important;top:60%!important}.thoughtBubble:nth-child(4){left:53%!important;top:57%!important}.thoughtBubble:nth-child(5){left:50%!important;top:59%!important}.thoughtBubble:nth-child(6){left:51%!important;top:58%!important}
    @keyframes bubbleUp{0%{transform:translate(0,0) scale(.65);opacity:0}10%{opacity:.88}82%{opacity:.58}100%{transform:translate(42px,-310px) scale(1.25);opacity:0}}
  `;document.head.appendChild(style);

  const oldGarden=document.querySelector('.seaweedGarden');if(oldGarden)oldGarden.remove();
  const garden=document.createElement('div');garden.className='seaweedGarden';
  const floor=document.createElement('div');floor.className='oceanFloor';garden.appendChild(floor);

  const palette=['#092249','#0b2a55','#0e315f','#123969','#0a2852','#103663'];
  const plants=[
    {x:-5,h:250,w:84,c:0,o:.78},{x:2,h:335,w:84,c:1,o:.64},{x:9,h:225,w:72,c:2,o:.62},
    {x:16,h:390,w:90,c:2,o:.68},{x:24,h:285,w:82,c:1,o:.72},{x:32,h:205,w:68,c:3,o:.55},
    {x:39,h:315,w:88,c:0,o:.78},{x:48,h:190,w:68,c:2,o:.5},{x:55,h:260,w:76,c:1,o:.63},
    {x:63,h:345,w:90,c:3,o:.67},{x:72,h:220,w:72,c:0,o:.74},{x:80,h:300,w:82,c:2,o:.58},
    {x:88,h:365,w:88,c:0,o:.82},{x:96,h:245,w:80,c:1,o:.68}
  ];

  plants.forEach((cfg,i)=>{
    const p=document.createElement('div');p.className='kelpPlant';p.style.left=cfg.x+'%';p.style.width=cfg.w+'px';p.style.setProperty('--h',cfg.h+'px');p.style.setProperty('--speed',(4.8+(i%4)*.65)+'s');p.style.setProperty('--op',cfg.o);const c=palette[cfg.c];
    const type=i%4;
    const path=type===0
      ?`M39 410 C18 380 18 349 36 324 C53 301 52 274 34 252 C16 230 17 202 37 181 C55 162 53 135 35 113 C17 91 21 55 42 7`
      :type===1
      ?`M38 410 C55 378 56 351 37 327 C18 303 20 272 40 249 C58 228 57 197 37 176 C18 155 21 123 41 101 C58 82 55 45 36 6`
      :type===2
      ?`M38 410 C20 381 23 351 42 329 C57 311 54 279 34 258 C17 239 21 205 42 183 C58 165 55 134 35 111 C17 90 19 53 39 8`
      :`M38 410 C56 383 53 352 34 331 C17 312 19 281 40 257 C57 237 55 208 36 185 C18 163 20 131 42 109 C59 91 55 53 36 7`;
    const branch=type===0
      ?`M36 325 C18 313 12 294 16 272 C30 285 38 300 39 315 M35 252 C55 238 60 218 55 197 C43 211 36 226 35 242 M37 181 C18 169 12 149 16 127 C30 140 38 155 39 171 M35 113 C54 100 59 81 54 61 C43 74 36 89 35 103`
      :type===1
      ?`M37 327 C55 313 61 293 56 272 C44 286 37 301 37 317 M40 249 C20 236 15 216 19 195 C32 208 39 224 40 239 M37 176 C55 162 60 143 55 123 C44 136 37 151 37 166 M41 101 C23 89 18 70 22 51 C34 63 41 78 41 92`
      :type===2
      ?`M42 329 C57 314 62 294 57 275 C46 287 40 303 41 319 M34 258 C16 245 12 226 17 205 C29 218 35 232 35 248 M42 183 C58 169 62 149 57 130 C46 143 40 158 41 173 M35 111 C18 98 14 79 19 59 C31 72 36 86 36 101`
      :`M34 331 C17 318 13 298 18 278 C30 291 36 306 35 321 M40 257 C57 242 61 222 56 201 C45 215 39 230 39 247 M36 185 C18 171 14 151 19 131 C31 144 37 159 37 175 M42 109 C57 95 61 76 56 57 C46 69 40 84 41 99`;
    p.innerHTML=`<svg class="kelpRibbon" viewBox="0 0 78 410" preserveAspectRatio="none"><path d="${path}" fill="none" stroke="${c}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="${branch}" fill="${c}" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    garden.appendChild(p);
  });
  document.body.prepend(garden);

  const originalOpenEditor=window.openEditor;
  window.openEditor=function(mode){originalOpenEditor(mode);const chaos=document.getElementById('newChaos');if(chaos&&mode!=='whoSaid'){chaos.style.display='block';chaos.innerHTML='<option value="1">🌱 Family Friendly</option><option value="3">🎰 Question Roulette</option>';}let quip=document.getElementById('newInsult');if(!quip&&mode==='proven'){quip=document.createElement('textarea');quip.id='newInsult';quip.className='field';quip.rows=2;quip.placeholder='Sarcastic comment (optional)';document.getElementById('newChaos').before(quip)}if(quip)quip.style.display=mode==='proven'?'block':'none';};

  window.renderEditor=function(){let list=document.getElementById('editList');list.innerHTML='';data[currentMode].forEach((q,i)=>{let row=document.createElement('div'),top=document.createElement('div'),text=document.createElement('textarea'),del=document.createElement('button');row.className='editRow';top.className='editRowTop';text.className='field';text.rows=2;text.value=q.text;text.placeholder='Question';text.onchange=()=>{q.text=text.value.trim()||q.text;save();localStorage.removeItem('chooseLoserQuestionHistory')};del.className='iconBtn danger';del.textContent='Delete';del.onclick=()=>requestDelete(i);top.append(text,del);row.append(top);
    if(currentMode!=='whoSaid'){let label=document.createElement('div');label.className='editLabel';label.textContent='QUESTION MODE';row.append(label);let sel=document.createElement('select');sel.className='field';sel.innerHTML='<option value="1">🌱 Family Friendly</option><option value="3">🎰 Question Roulette</option>';sel.value=String(q.chaos||1);sel.onchange=()=>{q.chaos=+sel.value;save();localStorage.removeItem('chooseLoserQuestionHistory')};row.append(sel)}
    if(currentMode==='proven'){let label=document.createElement('div');label.className='editLabel';label.textContent='SARCASTIC COMMENT';row.append(label);let x=document.createElement('textarea');x.className='field';x.rows=2;x.value=q.insult||'';x.placeholder='Sarcastic comment';x.onchange=()=>{q.insult=x.value.trim();save()};row.append(x)}
    if(currentMode==='knockout'){[['answer','Answer'],['explain','Explanation']].forEach(([k,p])=>{let label=document.createElement('div');label.className='editLabel';label.textContent=p.toUpperCase();row.append(label);let x=document.createElement('input');x.className='field';x.value=q[k]||'';x.placeholder=p;x.onchange=()=>{q[k]=x.value;save()};row.append(x)})}
    if(currentMode==='whoSaid'){let label=document.createElement('div');label.className='editLabel';label.textContent='WHO SAID IT?';row.append(label);let x=document.createElement('input');x.className='field';x.value=q.who||'';x.placeholder='Who said it?';x.onchange=()=>{q.who=x.value;save()};row.append(x)}list.append(row)})};

  const originalRequestAdd=window.requestAdd;
  window.requestAdd=function(){if(currentMode!=='proven')return originalRequestAdd();let text=document.getElementById('newQ').value.trim();if(!text)return;let payload={text,chaos:+document.getElementById('newChaos').value,insult:(document.getElementById('newInsult')?.value||'').trim()};gateAction=()=>{data[currentMode].push(payload);save();localStorage.removeItem('chooseLoserQuestionHistory');document.getElementById('newQ').value='';if(document.getElementById('newInsult'))document.getElementById('newInsult').value='';renderEditor();showScreen('editorScreen')};openGate()};
});