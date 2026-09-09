window.addEventListener('DOMContentLoaded',()=>{
  const settingsScroll=document.querySelector('#settingsScreen .scroll');
  if(!settingsScroll)return;

  if(!document.getElementById('settingsOverflowFix')){
    const style=document.createElement('style');style.id='settingsOverflowFix';style.textContent=`
      #settingsScreen{justify-content:flex-start!important;align-items:center!important;overflow-y:auto!important;overflow-x:hidden!important;padding-top:0!important;padding-bottom:0!important}
      #settingsScreen .scroll{margin:0 auto!important;padding-top:max(76px,calc(env(safe-area-inset-top) + 58px))!important;padding-bottom:max(52px,calc(env(safe-area-inset-bottom) + 32px))!important;min-height:max-content!important;flex:0 0 auto!important}
    `;document.head.appendChild(style);
  }

  if(!document.getElementById('axoColourControls')){
    const wrap=document.createElement('div');
    wrap.id='axoColourControls';
    wrap.className='settingRow';
    wrap.innerHTML=`
      <label>Axolotl colours</label>
      <div class="colourGrid">
        <div class="colourControl"><span>Body</span><input id="axoBodyColour" type="color"></div>
        <div class="colourControl"><span>Gills</span><input id="axoGillColour" type="color"></div>
        <div class="colourControl"><span>Outline</span><input id="axoOutlineColour" type="color"></div>
      </div>`;
    const coloursRow=[...settingsScroll.querySelectorAll('.settingRow')].find(r=>r.textContent.includes('Colours'));
    if(coloursRow)coloursRow.after(wrap);else settingsScroll.appendChild(wrap);
  }

  if(!document.getElementById('resetEditsBtn')){
    const reset=document.createElement('button');
    reset.id='resetEditsBtn';
    reset.className='ghost';
    reset.style.cssText='width:100%;margin-top:16px;border-color:rgba(255,140,170,.22);color:#ffb0c7';
    reset.textContent='↺ Reset all game edits';
    reset.onclick=()=>openReset();
    settingsScroll.appendChild(reset);
  }

  const DEFAULT_AXO={body:'#f8bbc4',gills:'#f06f7f',outline:'#351921'};
  let axoColours={...DEFAULT_AXO};
  try{axoColours={...DEFAULT_AXO,...JSON.parse(localStorage.getItem('chooseLoserAxoColours')||'{}')}}catch{}

  function shade(hex,amount){
    let h=hex.replace('#',''),n=parseInt(h,16),r=(n>>16)&255,g=(n>>8)&255,b=n&255;
    const adj=x=>Math.max(0,Math.min(255,Math.round(x+(amount>=0?(255-x):x)*Math.abs(amount))));
    return '#'+[adj(r),adj(g),adj(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
  }

  const originalAxo=window.axo;
  window.axo=function(requested='auto'){
    let svg=originalAxo(requested);
    const bodyLight=shade(axoColours.body,.24),bodyDark=shade(axoColours.body,-.08);
    const gillLight=shade(axoColours.gills,.18),gillDark=shade(axoColours.gills,-.08);
    const accent=shade(axoColours.gills,.08),accentDark=shade(axoColours.gills,-.20);
    const replacements={
      '#ffd7dc':bodyLight,'#f6b0b7':bodyDark,
      '#ff8790':gillLight,'#e85d72':gillDark,
      '#351921':axoColours.outline,'#3a1720':axoColours.outline,'#2b1c20':axoColours.outline,'#30161c':axoColours.outline,
      '#ff8ea0':accent,'#e76c79':accent,'#f18191':accent,'#e56e7b':accent,'#b94d60':accentDark
    };
    Object.entries(replacements).forEach(([from,to])=>{svg=svg.split(from).join(to)});
    return svg;
  };

  function refreshVisibleAxos(){
    const map={homeAxo:chaos===3?'unhinged':'neutral',loadingAxo:chaos===3?'unhinged':'neutral',koSetupAxo:'auto',ideaAxo:'auto',insultAxo:'evil'};
    Object.entries(map).forEach(([id,ex])=>{const el=document.getElementById(id);if(el&&el.innerHTML.trim())el.innerHTML=axo(ex)});
  }

  function saveAxoColours(){
    localStorage.setItem('chooseLoserAxoColours',JSON.stringify(axoColours));
    refreshVisibleAxos();
  }

  const body=document.getElementById('axoBodyColour'),gills=document.getElementById('axoGillColour'),outline=document.getElementById('axoOutlineColour');
  body.value=axoColours.body;gills.value=axoColours.gills;outline.value=axoColours.outline;
  body.oninput=()=>{axoColours.body=body.value;saveAxoColours()};
  gills.oninput=()=>{axoColours.gills=gills.value;saveAxoColours()};
  outline.oninput=()=>{axoColours.outline=outline.value;saveAxoColours()};

  const previousOpenSettings=window.openSettings;
  window.openSettings=function(){previousOpenSettings();setTimeout(()=>{const screen=document.getElementById('settingsScreen');if(screen)screen.scrollTop=0},60);};
});