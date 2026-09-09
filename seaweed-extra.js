window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.seaweedGarden,.seaweedScene,.codedSeaweedScene').forEach(el=>el.remove());

  const style=document.createElement('style');
  style.id='codedSeaweedStyle';
  style.textContent=`
    .codedSeaweedScene{position:fixed;left:0;right:0;bottom:0;height:66vh;pointer-events:none;overflow:hidden;z-index:0}
    .codedSeaweedScene svg{position:absolute;left:50%;bottom:-2px;width:112%;height:100%;transform:translateX(-50%);overflow:visible}
    .codedSeaweedScene .kelp{transform-box:fill-box;transform-origin:50% 100%;animation:seaSway 8s ease-in-out infinite alternate}
    .codedSeaweedScene .kelp.alt{animation:seaSwayAlt 9.5s ease-in-out infinite alternate}
    @keyframes seaSway{from{transform:rotate(-.45deg) translateX(-1px)}to{transform:rotate(.55deg) translateX(2px)}}
    @keyframes seaSwayAlt{from{transform:rotate(.4deg) translateX(1px)}to{transform:rotate(-.5deg) translateX(-2px)}}
  `;
  document.head.appendChild(style);

  const scene=document.createElement('div');
  scene.className='codedSeaweedScene';
  scene.innerHTML=`
    <svg viewBox="0 0 390 650" preserveAspectRatio="none" aria-hidden="true">
      <g fill="#0a2454" opacity=".72">
        <path class="kelp" d="M4 650 C-6 604 15 570 4 530 C-7 489 17 454 6 414 C-4 375 19 341 9 302 C1 270 17 242 12 211 C27 236 25 263 19 289 C12 319 25 348 18 378 C11 408 24 438 17 468 C10 499 22 532 16 564 C11 595 18 622 17 650 Z"/>
        <path class="kelp alt" d="M52 650 C40 620 57 596 49 568 C40 538 57 512 49 484 C41 456 57 430 50 402 C44 378 55 354 54 328 C67 350 65 373 60 394 C54 419 65 442 59 466 C53 490 63 514 58 539 C53 565 62 592 59 650 Z"/>
        <path class="kelp" d="M101 650 C88 592 110 547 98 494 C85 441 111 394 100 341 C89 289 115 244 103 194 C95 158 110 121 107 82 C126 114 122 151 115 185 C105 224 121 260 112 297 C103 336 118 373 109 412 C101 450 116 490 107 529 C99 569 111 612 108 650 Z"/>
        <path class="kelp alt" d="M148 650 C139 630 151 611 145 592 C139 572 151 553 145 534 C139 515 150 496 145 477 C140 460 149 444 149 426 C158 442 157 459 153 474 C149 492 156 509 152 526 C148 544 156 562 152 580 C148 600 153 620 153 650 Z"/>
        <path class="kelp" d="M205 650 C193 609 213 576 202 538 C191 499 213 464 203 426 C193 388 216 354 207 316 C199 281 219 249 212 216 C206 190 216 164 215 135 C229 158 227 184 221 207 C214 234 226 259 220 285 C213 313 225 339 219 367 C212 395 223 424 217 453 C211 481 221 511 216 541 C211 571 219 603 218 650 Z"/>
        <path class="kelp alt" d="M258 650 C247 626 263 603 255 580 C247 556 263 533 255 510 C247 487 263 465 256 442 C250 422 261 402 261 380 C272 399 271 420 266 438 C261 460 271 480 266 501 C261 523 270 544 265 566 C261 589 267 614 266 650 Z"/>
        <path class="kelp" d="M313 650 C300 596 322 553 310 505 C299 456 323 414 312 365 C301 317 326 274 315 226 C307 191 322 155 320 116 C338 147 335 183 328 215 C319 252 333 286 325 322 C317 358 330 394 322 431 C314 469 328 507 320 545 C313 584 323 619 321 650 Z"/>
        <path class="kelp alt" d="M366 650 C356 616 374 588 365 557 C356 525 375 495 366 464 C357 433 376 404 368 373 C361 346 374 320 372 291 C386 315 383 343 378 367 C371 395 383 421 377 448 C370 476 381 504 375 532 C369 560 379 591 374 620 L374 650 Z"/>
      </g>

      <g fill="#123a69" opacity=".88">
        <path class="kelp alt" d="M22 650 C9 621 28 596 20 570 C11 541 29 515 21 488 C13 460 29 434 22 406 C16 382 27 359 26 333 C39 355 37 379 32 400 C26 425 37 448 31 472 C25 497 36 521 31 546 C26 572 34 600 32 650 Z"/>
        <path class="kelp" d="M73 650 C60 605 81 569 70 528 C58 485 81 448 70 407 C60 366 83 330 73 291 C65 256 84 225 78 194 C73 170 82 146 82 120 C96 143 93 168 88 190 C81 216 93 240 87 265 C80 291 92 316 86 342 C79 369 91 396 84 423 C78 450 89 478 83 506 C77 535 86 565 82 594 C79 619 82 635 82 650 Z"/>
        <path class="kelp alt" d="M126 650 C115 627 131 605 124 583 C117 560 132 538 125 516 C118 493 133 472 126 449 C120 430 130 410 130 389 C141 407 139 427 135 445 C130 465 139 484 134 504 C129 524 138 544 133 564 C129 586 136 610 135 650 Z"/>
        <path class="kelp" d="M175 650 C162 588 185 540 172 485 C159 430 187 381 175 325 C163 272 188 224 178 173 C170 133 186 94 183 51 C202 87 199 128 191 165 C181 207 198 246 188 286 C179 328 195 367 186 408 C177 450 193 493 184 535 C176 578 188 619 185 650 Z"/>
        <path class="kelp alt" d="M232 650 C221 611 241 579 231 544 C221 508 242 475 232 440 C223 404 243 372 234 337 C226 305 244 277 238 247 C233 224 242 201 241 176 C254 198 252 222 247 244 C241 269 252 292 246 317 C240 343 251 368 245 393 C239 419 249 446 244 472 C238 498 248 526 243 553 C238 580 246 609 245 650 Z"/>
        <path class="kelp" d="M287 650 C275 618 293 590 284 561 C275 531 294 502 285 473 C276 443 295 415 286 385 C279 359 292 333 290 305 C304 329 301 355 296 379 C289 406 301 431 295 457 C289 484 300 510 294 537 C288 565 298 595 293 622 L293 650 Z"/>
        <path class="kelp alt" d="M340 650 C328 603 349 565 338 522 C327 479 350 441 339 397 C329 354 352 316 342 273 C334 238 351 205 346 171 C343 145 351 119 351 91 C367 116 364 145 358 170 C350 200 364 228 357 257 C350 287 363 316 356 346 C348 376 361 407 354 438 C347 469 359 501 352 533 C345 565 355 600 353 650 Z"/>
      </g>

      <g fill="#07163e" opacity=".95">
        <ellipse cx="28" cy="646" rx="48" ry="24"/><ellipse cx="92" cy="651" rx="57" ry="31"/><ellipse cx="162" cy="648" rx="52" ry="27"/><ellipse cx="229" cy="653" rx="61" ry="33"/><ellipse cx="305" cy="649" rx="58" ry="30"/><ellipse cx="374" cy="653" rx="51" ry="27"/>
      </g>

      <g fill="none" stroke="#1b4b78" stroke-width="2" opacity=".55">
        <circle cx="136" cy="286" r="4"/><circle cx="140" cy="268" r="3"/><circle cx="137" cy="250" r="2"/><circle cx="142" cy="232" r="1.7"/>
      </g>
    </svg>`;

  const app=document.getElementById('app');
  if(app)app.prepend(scene);else document.body.prepend(scene);
});