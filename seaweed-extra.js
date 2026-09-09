window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.seaweedGarden,.seaweedScene,.codedSeaweedScene').forEach(el=>el.remove());
  const style=document.createElement('style');style.id='codedSeaweedStyle';style.textContent=`.codedSeaweedScene{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:0}.codedSeaweedScene svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.codedSeaweedScene .kelp{transform-box:fill-box;transform-origin:50% 100%;animation:seaSway 10s ease-in-out infinite alternate}.codedSeaweedScene .kelp.alt{animation:seaSwayAlt 12s ease-in-out infinite alternate}@keyframes seaSway{from{transform:rotate(-.35deg)}to{transform:rotate(.45deg)}}@keyframes seaSwayAlt{from{transform:rotate(.3deg)}to{transform:rotate(-.4deg)}}`;document.head.appendChild(style);
  const scene=document.createElement('div');scene.className='codedSeaweedScene';scene.innerHTML=`<svg viewBox="0 0 390 844" preserveAspectRatio="none" aria-hidden="true">
  <!-- Left edge cluster -->
  <g fill="#071d3e" opacity=".50">
    <path class="kelp alt" d="M9 844 C-4 792 21 748 7 699 C-6 651 23 608 10 559 C-2 512 24 469 12 421 C2 380 22 343 16 302 C12 271 23 241 22 208 C38 237 35 270 29 299 C21 334 35 366 27 399 C19 434 33 467 25 502 C17 537 31 572 23 607 C16 642 28 680 22 717 C16 755 25 798 23 844 Z"/>
    <path class="kelp" d="M38 844 C27 820 44 797 36 774 C28 750 44 727 37 704 C30 682 44 660 38 638 C33 619 42 600 42 579 C53 597 51 617 47 635 C42 656 51 676 46 697 C41 718 50 739 45 760 C40 782 47 806 46 844 Z"/>
  </g>
  <g fill="#0c294d" opacity=".78">
    <path class="kelp" fill="#071d3e" opacity=".82" d="M57 844 C43 760 71 691 55 614 C40 538 73 470 58 393 C45 321 76 255 62 186 C52 134 69 83 66 25 C89 72 84 125 75 173 C63 228 83 279 72 332 C61 387 80 439 69 494 C59 549 77 606 67 663 C57 720 71 782 69 844 Z"/>
    <path class="kelp alt" d="M82 844 C69 789 91 745 79 696 C67 646 92 602 81 553 C70 505 94 462 84 415 C76 377 93 341 89 303 C106 334 102 372 95 405 C86 444 101 480 92 517 C84 556 98 593 90 632 C82 672 96 713 88 754 C81 795 91 823 91 844 Z"/>
  </g>

  <!-- Right edge cluster -->
  <g fill="#071d3e" opacity=".50">
    <path class="kelp alt" d="M381 844 C394 792 369 748 383 699 C396 651 367 608 380 559 C392 512 366 469 378 421 C388 380 368 343 374 302 C378 271 367 241 368 208 C352 237 355 270 361 299 C369 334 355 366 363 399 C371 434 357 467 365 502 C373 537 359 572 367 607 C374 642 362 680 368 717 C374 755 365 798 367 844 Z"/>
    <path class="kelp" d="M352 844 C363 820 346 797 354 774 C362 750 346 727 353 704 C360 682 346 660 352 638 C357 619 348 600 348 579 C337 597 339 617 343 635 C348 656 339 676 344 697 C349 718 340 739 345 760 C350 782 343 806 344 844 Z"/>
  </g>
  <g fill="#0c294d" opacity=".78">
    <path class="kelp" fill="#0c294d" opacity=".80" d="M329 844 C315 776 340 720 326 658 C312 596 343 540 329 478 C317 420 344 367 333 310 C324 267 341 224 338 177 C358 216 354 261 346 301 C336 347 352 390 342 434 C333 480 349 525 340 571 C331 618 346 666 337 714 C329 763 340 808 338 844 Z"/>
    <path class="kelp alt" fill="#071d3e" opacity=".74" d="M306 844 C297 819 311 796 305 773 C298 749 312 726 306 703 C300 681 311 659 306 637 C301 618 310 599 310 578 C321 596 319 616 315 634 C310 655 319 675 314 696 C309 717 318 738 313 759 C309 781 315 806 314 844 Z"/>
  </g>

  <!-- Dark rocks stay across the seabed, but the centre water is clear of kelp. -->
  <g fill="#040d26" opacity=".98"><ellipse cx="15" cy="838" rx="55" ry="34"/><ellipse cx="82" cy="846" rx="62" ry="40"/><ellipse cx="160" cy="841" rx="55" ry="32"/><ellipse cx="229" cy="849" rx="66" ry="43"/><ellipse cx="310" cy="842" rx="59" ry="35"/><ellipse cx="384" cy="848" rx="55" ry="39"/></g>
  <g fill="none" stroke="#0c294d" stroke-width="1.6" opacity=".30"><circle cx="194" cy="574" r="3.2"/><circle cx="198" cy="555" r="2.4"/><circle cx="195" cy="538" r="1.7"/></g></svg>`;
  const app=document.getElementById('app');if(app)app.prepend(scene);else document.body.prepend(scene);
});