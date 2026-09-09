window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.seaweedGarden,.seaweedScene,.codedSeaweedScene').forEach(el=>el.remove());

  const style=document.createElement('style');
  style.id='codedSeaweedStyle';
  style.textContent=`
    .codedSeaweedScene{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:0}
    .codedSeaweedScene svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
    .codedSeaweedScene .kelp{transform-box:fill-box;transform-origin:50% 100%;animation:seaSway 10s ease-in-out infinite alternate}
    .codedSeaweedScene .kelp.alt{animation:seaSwayAlt 12s ease-in-out infinite alternate}
    @keyframes seaSway{from{transform:rotate(-.35deg)}to{transform:rotate(.45deg)}}
    @keyframes seaSwayAlt{from{transform:rotate(.3deg)}to{transform:rotate(-.4deg)}}
  `;
  document.head.appendChild(style);

  const scene=document.createElement('div');
  scene.className='codedSeaweedScene';
  scene.innerHTML=`
    <svg viewBox="0 0 390 844" preserveAspectRatio="none" aria-hidden="true">
      <!-- Far kelp: same navy hue family as the foreground, simply dimmer. -->
      <g fill="#0b2852" opacity=".48">
        <path class="kelp alt" d="M15 844 C2 792 27 748 13 699 C0 651 29 608 16 559 C4 512 30 469 18 421 C8 380 28 343 22 302 C18 271 29 241 28 208 C44 237 41 270 35 299 C27 334 41 366 33 399 C25 434 39 467 31 502 C23 537 37 572 29 607 C22 642 34 680 28 717 C22 755 31 798 29 844 Z"/>
        <path class="kelp" d="M105 844 C94 820 111 797 103 774 C95 750 111 727 104 704 C97 682 111 660 105 638 C100 619 109 600 109 579 C120 597 118 617 114 635 C109 656 118 676 113 697 C108 718 117 739 112 760 C107 782 114 806 113 844 Z"/>
        <path class="kelp alt" d="M223 844 C210 807 231 776 220 742 C209 707 231 675 221 640 C211 606 233 575 224 541 C216 510 233 482 228 452 C224 429 232 407 231 382 C244 403 242 427 237 448 C231 473 242 496 236 520 C230 546 241 570 235 595 C229 621 239 648 234 674 C228 700 238 728 233 755 C228 782 236 812 235 844 Z"/>
        <path class="kelp" d="M372 844 C359 798 380 761 369 720 C358 678 381 641 370 599 C360 558 382 521 373 480 C365 447 381 415 376 383 C373 358 381 334 380 307 C395 331 392 359 387 384 C379 413 392 440 385 468 C378 498 391 526 384 556 C377 586 389 617 382 648 C375 679 387 711 380 743 C374 775 383 810 381 844 Z"/>
      </g>

      <!-- Near kelp: identical hue direction, brighter rather than a different blue. -->
      <g fill="#123a69" opacity=".82">
        <!-- One hero strand reaches almost to the top. -->
        <path class="kelp" d="M56 844 C42 760 70 691 54 614 C39 538 72 470 57 393 C44 321 75 255 61 186 C51 134 68 83 65 25 C88 72 83 125 74 173 C62 228 82 279 71 332 C60 387 79 439 68 494 C58 549 76 606 66 663 C56 720 70 782 68 844 Z"/>
        <path class="kelp alt" d="M151 844 C138 789 160 745 148 696 C136 646 161 602 150 553 C139 505 163 462 153 415 C145 377 162 341 158 303 C175 334 171 372 164 405 C155 444 170 480 161 517 C153 556 167 593 159 632 C151 672 165 713 157 754 C150 795 160 823 160 844 Z"/>
        <!-- Second tall strand, but clearly shorter than the hero. -->
        <path class="kelp" d="M304 844 C290 776 315 720 301 658 C287 596 318 540 304 478 C292 420 319 367 308 310 C299 267 316 224 313 177 C333 216 329 261 321 301 C311 347 327 390 317 434 C308 480 324 525 315 571 C306 618 321 666 312 714 C304 763 315 808 313 844 Z"/>
        <path class="kelp alt" d="M348 844 C339 819 353 796 347 773 C340 749 354 726 348 703 C342 681 353 659 348 637 C343 618 352 599 352 578 C363 596 361 616 357 634 C352 655 361 675 356 696 C351 717 360 738 355 759 C351 781 357 806 356 844 Z"/>
      </g>

      <!-- A few tiny background strands only, leaving most of the screen open. -->
      <g fill="#0b2852" opacity=".42">
        <path class="kelp" d="M184 844 C175 824 188 805 182 786 C176 766 188 748 182 729 C177 712 186 695 186 676 C196 692 194 710 190 726 C186 744 193 761 189 779 C185 797 191 817 191 844 Z"/>
        <path class="kelp alt" d="M263 844 C253 817 269 793 261 768 C253 742 270 718 262 693 C255 670 268 648 267 623 C279 644 277 667 272 688 C267 712 277 734 272 757 C267 781 275 808 274 844 Z"/>
      </g>

      <!-- Dark rounded rocks along the seabed. -->
      <g fill="#07163e" opacity=".98">
        <ellipse cx="15" cy="838" rx="55" ry="34"/>
        <ellipse cx="82" cy="846" rx="62" ry="40"/>
        <ellipse cx="160" cy="841" rx="55" ry="32"/>
        <ellipse cx="229" cy="849" rx="66" ry="43"/>
        <ellipse cx="310" cy="842" rx="59" ry="35"/>
        <ellipse cx="384" cy="848" rx="55" ry="39"/>
      </g>

      <g fill="none" stroke="#123a69" stroke-width="1.6" opacity=".42">
        <circle cx="205" cy="511" r="3.6"/><circle cx="209" cy="492" r="2.7"/><circle cx="206" cy="474" r="1.8"/>
      </g>
    </svg>`;

  const app=document.getElementById('app');
  if(app)app.prepend(scene);else document.body.prepend(scene);
});