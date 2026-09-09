window.addEventListener('DOMContentLoaded',()=>{
  // Category colours sampled from the reference screenshot.
  const DEFAULT_BG='#030b24';
  const PALETTE={
    bg:DEFAULT_BG,
    proof:'#b72f7b',
    debate:'#176979',
    knockout:'#80677d',
    quote:'#43298b'
  };
  const LEGACY_BACKGROUNDS=['#030059','#061437'];
  const LEGACY_CATEGORY_SETS={
    proof:['#ff4497','#ff3d96'],
    debate:['#5b2d89','#fc68b6'],
    knockout:['#1897a5','#fcb3e0'],
    quote:['#eb9f2e','#000082']
  };

  // These are the real formatting defaults, including reset behaviour.
  window.defaultsSettings=function(){return{timer:15,debateTimer:15,font:'dm',opacity:.80,colours:{...PALETTE}}};

  let changed=false;
  if(!settings.colours)settings.colours={};

  // Migrate previous default backgrounds to the new darker navy.
  if(!settings.colours.bg || LEGACY_BACKGROUNDS.includes(settings.colours.bg.toLowerCase())){
    settings.colours.bg=DEFAULT_BG;changed=true;
  }

  ['proof','debate','knockout','quote'].forEach(k=>{
    const current=(settings.colours[k]||'').toLowerCase();
    if(!current || LEGACY_CATEGORY_SETS[k].includes(current)){
      settings.colours[k]=PALETTE[k];changed=true;
    }
  });

  // Migrate either of the previous untouched opacity defaults to 80%.
  const oldDefaultOpacities=[.36,.65];
  if(typeof settings.opacity!=='number' || oldDefaultOpacities.includes(settings.opacity)){
    settings.opacity=.80;changed=true;
  }

  if(changed){
    localStorage.setItem('chooseLoserSettings',JSON.stringify(settings));
    applySettings();
  }

  const priorOpenSettings=window.openSettings;
  window.openSettings=function(){
    priorOpenSettings();
    ['bg','proof','debate','knockout','quote'].forEach(k=>{
      const input=document.getElementById(k+'Colour');
      if(input)input.value=settings.colours[k];
    });
    const opacity=document.getElementById('opacitySetting');
    const opacityValue=document.getElementById('opacitySettingValue');
    if(opacity)opacity.value=Math.round(settings.opacity*100);
    if(opacityValue)opacityValue.textContent=Math.round(settings.opacity*100);
  };
});