window.addEventListener('DOMContentLoaded',()=>{
const style=document.createElement('style');style.textContent=`
#settingsScreen .colourControl{display:block;padding:0;border:0;background:none}
.colourTile{--swatch:var(--pink);width:100%;min-height:76px;display:flex;align-items:center;gap:13px;padding:12px 16px;border-radius:22px 13px 22px 13px;border:1px solid color-mix(in srgb,var(--swatch) 48%,rgba(255,255,255,.18));background:radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--swatch) 24%,transparent),transparent 70%),rgba(255,255,255,.04);color:white;text-align:left;box-shadow:inset 0 1px rgba(255,255,255,.06)}
.colourTile .colourIcon{font:22px/1 system-ui;width:31px;text-align:center;color:var(--pink)}
.colourTile .colourCopy{display:grid;gap:5px;flex:1}.colourTile .colourName{font-size:14px;font-weight:700}.colourTile .colourHex{font:10px/1.2 "DM Sans",sans-serif;letter-spacing:.1em;color:var(--soft);opacity:.65}
.colourTile .colourBlob{width:43px;height:43px;border-radius:42% 58% 62% 38% / 45% 40% 60% 55%;background:var(--swatch);border:2px solid rgba(255,255,255,.45);box-shadow:0 0 16px color-mix(in srgb,var(--swatch) 30%,transparent);transform:rotate(-12deg);flex-shrink:0}
.colourTile:focus-visible{outline:2px solid var(--pink);outline-offset:3px}
#colourWheelDialog{width:min(92vw,370px);max-height:90dvh;overflow:auto;padding:22px;border:1px solid color-mix(in srgb,var(--pink) 30%,transparent);border-radius:27px;background:linear-gradient(145deg,#241838,#080e2a);color:#fff;box-shadow:0 25px 80px #0008}
#colourWheelDialog::backdrop{background:rgba(0,0,12,.7);backdrop-filter:blur(6px)}
#colourWheelTitle{margin:0 0 15px;text-align:center;font:600 21px/1.3 "DM Sans",sans-serif}
.hueDisc{position:relative;width:min(100%,250px);aspect-ratio:1;margin:0 auto 18px;border-radius:50%;background:radial-gradient(circle closest-side,white,rgba(255,255,255,0)),conic-gradient(from 90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red);touch-action:none;cursor:crosshair;box-shadow:0 0 0 5px rgba(255,255,255,.055),0 8px 30px #0004}
.hueMarker{position:absolute;left:50%;top:50%;width:20px;height:20px;border:3px solid white;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 0 1px #0008,0 2px 8px #0006;pointer-events:none}
#colourWheelDialog label{display:grid;gap:7px;margin:13px 0;font:12px/1.4 "DM Sans",sans-serif;color:var(--soft)}
#colourWheelDialog input[type=range]{width:100%;accent-color:var(--pink);min-height:28px}
.wheelHexRow{display:flex;gap:12px;align-items:center}.wheelLiveSwatch{width:42px;height:42px;border:1px solid #ffffff60;border-radius:14px;flex-shrink:0}
#colourWheelHex{width:100%;min-height:44px;padding:9px 12px;border:1px solid #ffffff30;border-radius:12px;background:#ffffff08;color:white;font:14px monospace}
.wheelActions{display:flex;gap:10px;margin-top:20px}.wheelActions button{flex:1;min-height:44px;border:1px solid #ffffff20;border-radius:13px;background:#ffffff08;color:white;font:600 14px "DM Sans",sans-serif}.wheelActions .wheelDone{background:var(--pink);color:#26152e;border:0}
`;document.head.appendChild(style);
const dialog=document.createElement('dialog');dialog.id='colourWheelDialog';dialog.setAttribute('aria-labelledby','colourWheelTitle');
dialog.innerHTML='<h2 id="colourWheelTitle">Choose a colour</h2><div class="hueDisc" role="slider" tabindex="0" aria-label="Hue wheel. Arrow keys change hue; Shift and arrow keys change saturation." aria-valuemin="0" aria-valuemax="360"><span class="hueMarker"></span></div><label>Saturation<input id="wheelSaturation" type="range" min="0" max="100" step="1"></label><label>Brightness<input id="wheelBrightness" type="range" min="0" max="100" step="1"></label><label>Hex colour<div class="wheelHexRow"><span class="wheelLiveSwatch"></span><input id="colourWheelHex" maxlength="7" spellcheck="false" aria-label="Hex colour"></div></label><div class="wheelActions"><button type="button" class="wheelCancel">Cancel</button><button type="button" class="wheelDone">Done</button></div>';
document.body.appendChild(dialog);
const disc=dialog.querySelector('.hueDisc'),marker=dialog.querySelector('.hueMarker'),sat=dialog.querySelector('#wheelSaturation'),bright=dialog.querySelector('#wheelBrightness'),hex=dialog.querySelector('#colourWheelHex'),preview=dialog.querySelector('.wheelLiveSwatch');
let active=null,original='',h=0,s=0,v=1,committed=false,opener=null;
const tiles=[];
function hsvToHex(h,s,v){const f=n=>{const k=(n+h/60)%6;return Math.round(255*(v-v*s*Math.max(0,Math.min(k,4-k,1)))).toString(16).padStart(2,'0')};return '#'+f(5)+f(3)+f(1)}
function fromHex(value){const rgb=value.slice(1).match(/../g).map(x=>parseInt(x,16)/255),[r,g,b]=rgb,max=Math.max(...rgb),min=Math.min(...rgb),d=max-min;h=d?(max===r?((g-b)/d+6)%6:max===g?(b-r)/d+2:(r-g)/d+4)*60:h;s=max?d/max:0;v=max}
function syncTiles(){tiles.forEach(({input,button})=>{button.style.setProperty('--swatch',input.value);button.querySelector('.colourHex').textContent=input.value.toUpperCase()})}
function send(value){active.value=value;active.dispatchEvent(new Event('input',{bubbles:true}));syncTiles()}
function render(save=true){const value=hsvToHex(h,s,v),a=h*Math.PI/180;marker.style.left=(50+50*s*Math.cos(a))+'%';marker.style.top=(50+50*s*Math.sin(a))+'%';sat.value=Math.round(s*100);bright.value=Math.round(v*100);hex.value=value.toUpperCase();hex.removeAttribute('aria-invalid');preview.style.background=value;disc.setAttribute('aria-valuenow',String(Math.round(h)));disc.setAttribute('aria-valuetext',Math.round(h)+' degrees, '+Math.round(s*100)+'% saturation');if(save)send(value)}
function open(input,button,label){active=input;opener=button;original=input.value;committed=false;fromHex(original);dialog.querySelector('h2').textContent=label;render(false);dialog.showModal();disc.focus()}
function pointer(event){const rect=disc.getBoundingClientRect(),x=(event.clientX-rect.left-rect.width/2)/(rect.width/2),y=(event.clientY-rect.top-rect.height/2)/(rect.height/2);h=(Math.atan2(y,x)*180/Math.PI+360)%360;s=Math.min(1,Math.hypot(x,y));render()}
disc.addEventListener('pointerdown',event=>{disc.setPointerCapture(event.pointerId);pointer(event)});disc.addEventListener('pointermove',event=>{if(disc.hasPointerCapture(event.pointerId))pointer(event)});
disc.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();const delta=['ArrowRight','ArrowUp'].includes(event.key)?1:-1;if(event.shiftKey)s=Math.max(0,Math.min(1,s+delta*.02));else h=(h+delta*3+360)%360;render()});
sat.oninput=()=>{s=Number(sat.value)/100;render()};bright.oninput=()=>{v=Number(bright.value)/100;render()};
hex.oninput=()=>{const value=hex.value.trim();if(/^#[0-9a-f]{6}$/i.test(value)){fromHex(value);render()}else hex.setAttribute('aria-invalid','true')};
dialog.querySelector('.wheelDone').onclick=()=>{committed=true;dialog.close()};dialog.querySelector('.wheelCancel').onclick=()=>dialog.close();
dialog.addEventListener('close',()=>{if(!committed&&active)send(original);opener?.focus()});
const icons={bgColour:'☾',proofColour:'✦',debateColour:'⚡',knockoutColour:'✷',axoBodyColour:'♡',axoGillColour:'❋',axoOutlineColour:'✎'};
document.querySelectorAll('#settingsScreen .colourControl').forEach(control=>{const input=control.querySelector('input[type=color]'),label=control.querySelector('span');if(!input||!label)return;const name=label.textContent,button=document.createElement('button');button.type='button';button.className='colourTile';button.setAttribute('aria-label','Change '+name+' colour');button.innerHTML='<span class="colourIcon" aria-hidden="true">'+(icons[input.id]||'✦')+'</span><span class="colourCopy"><span class="colourName"></span><small class="colourHex"></small></span><span class="colourBlob" aria-hidden="true"></span>';button.querySelector('.colourName').textContent=name;input.hidden=true;input.style.display='none';label.remove();control.appendChild(button);button.onclick=()=>open(input,button,name);tiles.push({input,button})});
const previousOpen=window.openSettings;window.openSettings=function(){previousOpen();syncTiles()};
const previousApply=window.applySettings;window.applySettings=function(){previousApply();queueMicrotask(syncTiles)};
syncTiles();
});