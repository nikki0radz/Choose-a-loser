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

  // Match the editor to the visible area when a mobile keyboard opens.
  const editorScreen=document.getElementById('editorScreen');
  function keepEditorFieldVisible(){
    const field=document.activeElement;
    const editing=editorScreen.classList.contains('active')&&editorScreen.contains(field)&&field.matches('textarea,input,select');
    if(!editing){editorScreen.style.removeProperty('height');editorScreen.style.removeProperty('min-height');editorScreen.style.removeProperty('top');return}
    const viewport=window.visualViewport;
    if(viewport){
      editorScreen.style.height=viewport.height+'px';
      editorScreen.style.minHeight='0';
      editorScreen.style.top=viewport.offsetTop+'px';
    }
    const bounds=editorScreen.getBoundingClientRect(),rect=field.getBoundingClientRect();
    const top=bounds.top+16,bottom=bounds.bottom-20;
    if(rect.bottom>bottom)editorScreen.scrollTop+=rect.bottom-bottom;
    if(rect.top<top||rect.height>bottom-top)editorScreen.scrollTop+=field.getBoundingClientRect().top-top;
  }
  function scheduleEditorScroll(){requestAnimationFrame(keepEditorFieldVisible)}
  editorScreen.addEventListener('focusin',()=>{scheduleEditorScroll();setTimeout(scheduleEditorScroll,300)});
  editorScreen.addEventListener('focusout',()=>setTimeout(scheduleEditorScroll,0));
  window.visualViewport?.addEventListener('resize',scheduleEditorScroll);
  window.visualViewport?.addEventListener('scroll',scheduleEditorScroll);
  window.addEventListener('resize',scheduleEditorScroll);
  const addDialog=document.getElementById('newQuestionDialog');
  const addToggle=document.getElementById('newQuestionToggle');
  function closeAdd(){if(addDialog.open)addDialog.close()}
  addToggle.onclick=()=>{addDialog.showModal();document.getElementById('newQ').focus()};
  document.getElementById('closeNewQuestion').onclick=closeAdd;
  addDialog.addEventListener('close',()=>addToggle.focus({preventScroll:true}));
  function fitAddDialog(){
    addDialog.style.setProperty('--editor-visible-top',((window.visualViewport?.offsetTop||0)+16)+'px');
    addDialog.style.setProperty('--editor-visible-height',(window.visualViewport?.height||window.innerHeight)+'px');
    if(addDialog.open&&addDialog.contains(document.activeElement))document.activeElement.scrollIntoView({block:'nearest'});
  }
  window.visualViewport?.addEventListener('resize',fitAddDialog);
  addDialog.addEventListener('focusin',()=>requestAnimationFrame(fitAddDialog));
  const originalOpenEditor=window.openEditor;
  window.openEditor=function(mode){
    ['newQ','newA','newE','newWho'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('newChaos').value='1';closeAdd();originalOpenEditor(mode);
  };
  window.renderEditor=function(){
    const list=document.getElementById('editList');list.innerHTML='';const mode=currentMode;
    if(!document.getElementById('newQ').value)closeAdd();
    data[mode].forEach((q,i)=>{
      const row=document.createElement('div'),top=document.createElement('div'),summary=document.createElement('p'),edit=document.createElement('button'),del=document.createElement('button'),details=document.createElement('div');
      row.className='editRow';top.className='questionSummary';summary.className='questionSummaryText';summary.textContent=q.text;
      details.className='questionDetails';details.id='question-details-'+mode+'-'+i;details.hidden=true;
      edit.type=del.type='button';edit.className=del.className='questionAction';del.classList.add('danger');
      edit.setAttribute('aria-label','Edit question');edit.setAttribute('aria-expanded','false');edit.setAttribute('aria-controls',details.id);
      edit.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m16 3 5 5-12 12-6 1 1-6Z M14 5l5 5"/></svg>';
      del.setAttribute('aria-label','Delete question');del.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12 M18 6 6 18"/></svg>';
      const fields={};
      function field(key,label,kind='input'){
        const caption=document.createElement('label'),input=document.createElement(kind);
        caption.className='editLabel';caption.textContent=label;input.id=details.id+'-'+key;caption.htmlFor=input.id;
        input.className='field';input.value=q[key]||'';if(kind==='textarea')input.rows=2;
        fields[key]=input;details.append(caption,input);return input;
      }
      const text=field('text','Question','textarea');
      if(mode!=='whoSaid'){
        const select=field('chaos','Question mode','select');
        select.innerHTML='<option value="1">🌱 Family Friendly</option><option value="3">🎰 Question Roulette</option>';select.value=String(q.chaos===3?3:1);
      }
      if(mode==='knockout'){field('answer','Answer');field('explain','Explanation')}
      if(mode==='whoSaid')field('who','Who said it?');
      const footer=document.createElement('div'),status=document.createElement('span'),saveButton=document.createElement('button');
      footer.className='questionSaveRow';status.setAttribute('role','status');saveButton.type='button';saveButton.className='primary questionSave';saveButton.textContent='Save';
      details.addEventListener('input',()=>{status.textContent='';text.setCustomValidity('')});
      details.addEventListener('change',()=>status.textContent='');
      saveButton.onclick=()=>{
        if(!text.value.trim()){text.setCustomValidity('Please enter a question.');text.reportValidity();return}
        const before={...q};
        Object.entries(fields).forEach(([key,input])=>q[key]=key==='chaos'?+input.value:input.value.trim());
        try{save()}catch(error){Object.assign(q,before);appNotice('Could not save your changes. Please try again.');return}
        localStorage.removeItem('chooseLoserQuestionHistory');summary.textContent=q.text;status.textContent='✓ Saved';
        details.hidden=true;edit.setAttribute('aria-expanded','false');row.append(status);edit.focus({preventScroll:true});
      };
      if(fields.chaos){
        const modeControl=document.createElement('div');modeControl.className='questionModeControl';
        const label=details.querySelector('label[for="'+fields.chaos.id+'"]');
        modeControl.append(label,fields.chaos);footer.append(modeControl);
      }
      footer.append(status,saveButton);details.append(footer);
      edit.onclick=()=>{details.hidden=!details.hidden;edit.setAttribute('aria-expanded',String(!details.hidden));if(!details.hidden){status.textContent='';footer.prepend(status);text.focus({preventScroll:true})}};
      del.onclick=async()=>{
        if(!await appConfirm('Delete this question? This cannot be undone.\n\n'+q.text,{title:'Delete question?',confirmLabel:'Delete'}))return;
        const index=data[mode].indexOf(q);if(index<0)return;
        data[mode].splice(index,1);save();localStorage.removeItem('chooseLoserQuestionHistory');
        if(currentMode===mode){row.remove();const next=list.querySelector('.questionAction')||addToggle;next.focus({preventScroll:true})}
      };
      top.append(summary,edit,del);row.append(top,details);list.append(row);
    });
  };
  const copyBank=document.getElementById('copyQuestionBank');
  copyBank.onclick=async()=>{
    const names={proven:"Pick 'n' Mix",debate:'Debatable',knockout:'Knockout'};
    const sections=Object.entries(names).map(([key,name])=>{
      const questions=data[key]||[];
      return name+' ('+questions.length+' questions)\n'+questions.map(q=>JSON.stringify(q)).join('\n');
    });
    const text='CHOOSE A LOSER — EDITED QUESTION BANK\nThis is my complete saved bank. Omitted questions were removed.\nchaos: 1 = Family Friendly, 3 = Question Roulette.\n\n'+sections.join('\n\n');
    const status=document.getElementById('copyQuestionBankStatus');
    try{
      await navigator.clipboard.writeText(text);
      status.textContent='✓ Copied — paste it into this chat.';
    }catch(error){
      const dialog=document.createElement('dialog');dialog.className='appDialog';
      dialog.setAttribute('aria-label','Copy question bank');
      const heading=document.createElement('h2');heading.textContent='Copy question bank';
      const note=document.createElement('p');note.textContent='Automatic copying is unavailable. Hold the selected text, choose Copy, then paste it into this chat.';
      const field=document.createElement('textarea');field.className='field';field.readOnly=true;field.rows=8;field.value=text;field.setAttribute('aria-label','Saved question bank');
      const close=document.createElement('button');close.type='button';close.className='primary questionSave';close.textContent='Close';close.style.marginTop='12px';close.onclick=()=>dialog.close();
      dialog.append(heading,note,field,close);document.body.append(dialog);
      dialog.addEventListener('close',()=>{dialog.remove();copyBank.focus()},{once:true});
      dialog.showModal();field.focus();field.select();field.setSelectionRange(0,text.length);
      status.textContent='Use the text in the pop-up to copy your bank.';
    }
  };

});
