window.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');style.id='oceanEditEnhancements';style.textContent=`
    select.field,select.field option{background:#0b2148!important;color:#fff!important}
    .editMeta{display:grid;grid-template-columns:1fr 1fr;gap:8px}.editMeta.one{grid-template-columns:1fr}
    .editLabel{font-size:10px;font-weight:800;letter-spacing:.08em;color:var(--soft);opacity:.65;margin:2px 2px -3px}

    #app:before,#app:after,.weed,.seaweedGarden{display:none!important}
    .seaweedScene{position:fixed;left:0;right:0;bottom:0;height:64vh;pointer-events:none;overflow:hidden;z-index:0}
    .seaweedScene svg{position:absolute;left:50%;bottom:-4px;width:112%;height:100%;transform:translateX(-50%);overflow:visible}
    .kelpSlow{transform-origin:50% 100%;animation:kelpSlow 7s ease-in-out infinite alternate}
    .kelpSlow2{transform-origin:50% 100%;animation:kelpSlow2 8.5s ease-in-out infinite alternate}
    .seaweedScene .plant{transform-box:fill-box;transform-origin:50% 100%}
    @keyframes kelpSlow{from{transform:translateX(-2px) rotate(-.8deg)}to{transform:translateX(2px) rotate(.8deg)}}
    @keyframes kelpSlow2{from{transform:translateX(2px) rotate(.6deg)}to{transform:translateX(-2px) rotate(-.7deg)}}

    .thoughtBubbles{top:42%!important;transform:translate(-50%,-50%)!important;height:520px!important}
    .thoughtBubble:nth-child(1){left:49%!important;top:59%!important}.thoughtBubble:nth-child(2){left:52%!important;top:58%!important}.thoughtBubble:nth-child(3){left:48%!important;top:60%!important}.thoughtBubble:nth-child(4){left:53%!important;top:57%!important}.thoughtBubble:nth-child(5){left:50%!important;top:59%!important}.thoughtBubble:nth-child(6){left:51%!important;top:58%!important}
    @keyframes bubbleUp{0%{transform:translate(0,0) scale(.65);opacity:0}10%{opacity:.88}82%{opacity:.58}100%{transform:translate(42px,-310px) scale(1.25);opacity:0}}
  `;document.head.appendChild(style);

  document.querySelectorAll('.seaweedGarden,.seaweedScene').forEach(el=>el.remove());
  const scene=document.createElement('div');scene.className='seaweedScene';
  scene.innerHTML=`
  <svg viewBox="0 0 390 650" preserveAspectRatio="none" aria-hidden="true">
    <g class="kelpSlow2">
      <path class="plant" d="M34 650 C24 620 43 592 32 566 C20 538 43 511 33 486 C23 459 44 432 34 405 C25 379 45 353 36 327 C29 304 42 282 42 255 C57 278 55 302 49 324 C42 348 54 371 47 394 C41 419 53 441 45 465 C38 489 49 512 43 536 C37 562 46 589 42 616 L42 650 Z"/>
      <path class="plant" d="M90 650 C76 604 95 568 83 526 C71 484 93 448 82 407 C71 367 96 331 86 291 C77 254 99 218 91 181 C85 153 96 122 95 88 C112 116 109 149 102 178 C94 211 108 240 100 270 C92 303 106 333 98 365 C90 398 104 430 95 462 C87 494 101 527 94 558 C88 589 100 619 98 650 Z"/>
      <path class="plant" d="M277 650 C267 626 285 603 276 581 C266 557 283 534 274 511 C264 488 282 466 273 443 C264 420 281 398 274 375 C268 354 282 334 282 311 C294 331 293 352 288 371 C282 393 294 414 288 435 C282 458 293 478 287 500 C281 522 291 544 286 566 C281 588 291 611 289 650 Z"/>
      <path class="plant" d="M348 650 C335 610 356 576 343 539 C330 499 353 464 341 426 C330 390 354 353 343 316 C334 280 357 244 348 205 C341 173 357 141 355 106 C371 133 369 163 362 191 C354 223 368 252 361 282 C354 315 368 344 360 376 C352 407 366 438 358 470 C350 501 364 532 357 562 C351 592 362 620 360 650 Z"/>
    </g>

    <g class="kelpSlow">
      <path class="plant" d="M8 650 C-3 629 15 608 7 589 C-2 568 14 548 6 528 C-3 507 14 486 6 466 C0 447 13 428 13 407 C25 425 24 444 19 462 C13 481 24 499 19 518 C13 538 24 557 18 576 C13 595 20 615 19 650 Z"/>
      <path class="plant" d="M151 650 C138 610 159 575 147 538 C135 500 156 465 145 428 C134 391 157 357 147 321 C138 284 159 251 151 216 C145 188 158 157 157 122 C172 149 169 180 163 207 C155 238 169 266 162 296 C154 327 168 357 161 387 C153 418 167 448 159 479 C152 509 165 541 159 571 C153 601 164 624 162 650 Z"/>
      <path class="plant" d="M219 650 C208 621 226 595 217 569 C207 541 225 515 216 488 C206 461 225 435 216 408 C208 382 226 357 219 331 C213 309 224 286 224 261 C237 283 235 306 230 328 C223 352 235 375 229 398 C223 423 235 446 229 470 C223 494 233 519 228 543 C223 568 232 594 230 650 Z"/>
      <path class="plant" d="M386 650 C376 632 392 614 386 598 C379 580 391 563 384 546 C378 528 391 511 385 494 C380 478 390 461 390 443 C400 458 400 475 396 490 C391 507 400 523 396 540 C391 557 399 574 395 591 C391 609 398 628 397 650 Z"/>
    </g>

    <g>
      <path class="plant" d="M0 650 C-4 620 15 594 8 566 C1 537 19 510 10 481 C1 451 21 422 12 392 C4 364 24 336 16 307 C9 283 23 258 20 232 C35 253 31 278 26 300 C19 326 32 350 25 375 C18 402 31 427 24 453 C17 480 29 506 23 532 C17 558 28 583 23 607 C18 630 24 640 24 650 Z"/>
      <path class="plant" d="M320 650 C306 606 326 570 315 531 C304 492 324 456 313 418 C302 379 324 344 315 306 C307 268 328 233 320 196 C314 166 326 134 324 97 C340 126 337 159 331 188 C323 221 338 251 331 282 C323 315 337 345 329 377 C322 410 335 442 328 474 C321 507 334 539 327 570 C320 601 333 626 330 650 Z"/>
    </g>

    <g>
      <path class="plant" d="M72 650 L76 586 C64 572 59 557 61 541 C72 549 79 560 82 572 C89 557 100 544 115 535 C115 551 107 566 91 578 L91 650 Z"/>
      <path class="plant" d="M236 650 L238 532 C224 512 218 489 221 465 C234 479 241 496 243 514 C250 489 262 469 279 455 C278 480 269 502 251 523 L252 650 Z"/>
    </g>

    <g fill="#05064f" opacity=".96">
      <ellipse cx="25" cy="645" rx="42" ry="28"/><ellipse cx="82" cy="651" rx="54" ry="31"/><ellipse cx="151" cy="647" rx="49" ry="27"/><ellipse cx="214" cy="653" rx="57" ry="32"/><ellipse cx="285" cy="647" rx="51" ry="29"/><ellipse cx="355" cy="651" rx="55" ry="31"/>
    </g>
  </svg>`;

  const seaweedColours=['#07165c','#0b2852'];
  const heightScales=[.46,1.12,.63,.94,.36,1.03,.58,.29,.77,1.18,.48,.84];
  scene.querySelectorAll('.plant').forEach((p,i)=>{
    p.style.fill=seaweedColours[i%2];
    p.style.opacity=i%2===0?'.72':'.9';
    p.style.transform=`scaleY(${heightScales[i%heightScales.length]})`;
  });

  const app=document.getElementById('app');if(app)app.prepend(scene);else document.body.prepend(scene);

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