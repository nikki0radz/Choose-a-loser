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
      <path fill="#123a69" opacity=".27" transform="translate(0 92) scale(1 .86)" d="M34 650 C24 602 44 568 31 526 C18 484 43 450 31 410 C20 372 45 336 34 294 C24 255 47 223 38 181 C31 147 46 112 43 72 C59 101 57 133 49 161 C40 194 53 222 47 252 C40 287 54 318 45 350 C36 383 52 413 43 445 C35 476 49 510 42 542 C35 575 46 610 42 650 Z"/>
      <path fill="#17416e" opacity=".32" transform="translate(0 5) scale(1 .99)" d="M90 650 C76 608 94 575 83 539 C72 500 91 468 81 428 C70 388 93 353 83 317 C73 278 96 247 88 210 C82 183 93 153 92 122 C106 147 104 174 98 198 C90 230 105 258 98 286 C90 320 105 349 97 379 C89 410 104 441 95 473 C87 503 100 535 94 565 C88 595 100 620 98 650 Z"/>
      <path fill="#10355f" opacity=".30" transform="translate(0 132) scale(1 .80)" d="M277 650 C267 608 286 574 274 536 C263 499 282 466 272 429 C260 390 283 357 275 320 C267 282 290 249 281 211 C275 179 291 148 289 113 C304 140 302 170 295 197 C287 228 302 255 295 285 C287 318 301 347 294 377 C287 410 300 442 292 473 C284 506 299 538 292 568 C285 598 296 624 295 650 Z"/>
      <path fill="#163d68" opacity=".35" transform="translate(0 47) scale(1 .93)" d="M348 650 C335 604 355 568 342 529 C328 486 353 451 340 411 C328 373 352 337 342 296 C333 258 356 224 347 183 C340 150 356 116 354 79 C370 107 368 136 361 165 C353 196 368 226 361 256 C354 289 368 318 360 351 C352 382 367 414 358 446 C350 478 364 510 357 543 C350 576 363 611 360 650 Z"/>
    </g>

    <g class="kelpSlow">
      <path fill="#0b2b57" opacity=".56" transform="translate(0 148) scale(1 .77)" d="M8 650 C-7 611 16 578 4 544 C-8 509 13 476 2 439 C-10 402 13 368 4 333 C-5 296 18 263 8 226 C1 197 14 166 12 131 C27 158 24 188 18 214 C11 243 25 271 18 298 C10 329 25 357 18 387 C10 417 25 448 16 478 C8 510 22 542 15 572 C8 602 18 627 17 650 Z"/>
      <path fill="#0e315f" opacity=".49" transform="translate(0 20) scale(1 .97)" d="M151 650 C138 606 158 571 147 532 C135 493 156 459 145 421 C134 383 156 350 147 314 C138 277 159 245 151 209 C145 182 157 154 156 122 C170 147 168 175 162 200 C154 229 169 256 162 284 C154 315 169 343 161 373 C153 404 167 434 159 465 C152 495 165 526 159 556 C152 587 164 618 162 650 Z"/>
      <path fill="#123760" opacity=".51" transform="translate(0 84) scale(1 .87)" d="M219 650 C208 613 227 579 216 542 C205 505 224 471 214 435 C204 399 225 365 216 329 C207 292 228 260 220 224 C214 196 226 168 225 136 C239 161 237 190 231 214 C223 244 238 271 231 299 C223 330 238 358 230 388 C222 419 236 449 228 480 C221 511 234 542 228 571 C221 600 233 626 231 650 Z"/>
      <path fill="#0a2853" opacity=".60" transform="translate(0 177) scale(1 .73)" d="M386 650 C374 611 394 577 382 540 C370 503 391 469 380 431 C369 394 392 360 382 323 C372 286 394 253 385 216 C379 186 391 157 390 124 C404 150 402 179 396 205 C388 235 403 262 396 290 C388 321 403 350 395 380 C387 411 401 442 393 473 C386 504 400 535 393 566 C386 596 398 624 397 650 Z"/>
    </g>

    <g>
      <path fill="#09244e" opacity=".78" transform="translate(0 74) scale(1 .89)" d="M0 650 C-4 615 15 590 8 555 C1 520 19 491 10 457 C1 422 21 391 12 356 C4 323 24 293 16 258 C9 229 24 199 20 168 C35 194 31 220 26 244 C18 273 32 298 25 326 C18 356 31 383 24 412 C17 442 29 469 23 499 C17 530 28 558 23 587 C18 615 24 636 24 650 Z"/>
      <path fill="#0b2852" opacity=".84" transform="translate(0 3) scale(1 .995)" d="M320 650 C306 608 326 573 315 536 C304 499 323 466 313 430 C302 392 324 358 315 322 C307 285 328 253 320 216 C314 187 326 158 324 124 C339 150 336 178 331 203 C323 233 337 261 330 289 C323 319 337 347 329 377 C322 408 335 438 328 469 C321 500 334 531 327 561 C320 592 333 621 330 650 Z"/>
    </g>

    <g>
      <path fill="#103966" opacity=".47" transform="translate(0 30) scale(1 .95)" d="M72 650 L76 565 C64 547 58 529 61 508 C73 519 80 532 82 546 C89 526 100 511 116 500 C116 520 108 538 91 553 L91 650 Z"/>
      <path fill="#0d315c" opacity=".55" transform="translate(0 95) scale(1 .85)" d="M236 650 L238 560 C224 544 218 525 221 504 C233 515 241 529 243 544 C250 525 262 509 278 498 C278 519 269 538 251 552 L252 650 Z"/>
    </g>

    <g fill="#081f45" opacity=".95">
      <ellipse cx="25" cy="645" rx="42" ry="28"/><ellipse cx="82" cy="651" rx="54" ry="31"/><ellipse cx="151" cy="647" rx="49" ry="27"/><ellipse cx="214" cy="653" rx="57" ry="32"/><ellipse cx="285" cy="647" rx="51" ry="29"/><ellipse cx="355" cy="651" rx="55" ry="31"/>
    </g>
  </svg>`;
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