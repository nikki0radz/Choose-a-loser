window.addEventListener('DOMContentLoaded',()=>{
  // Category colours sampled from the reference screenshot.
  // Background deliberately stays on the original app navy.
  const ORIGINAL_BG='#061437';
  const PALETTE={
    bg:ORIGINAL_BG,
    proof:'#b72f7b',
    debate:'#176979',
    knockout:'#80677d',
    quote:'#43298b'
  };
  const LEGACY_BACKGROUNDS=['#030059'];
  const LEGACY_CATEGORY_SETS={
    proof:['#ff4497','#ff3d96'],
    debate:['#5b2d89','#fc68b6'],
    knockout:['#1897a5','#fcb3e0'],
    quote:['#eb9f2e','#000082']
  };

  // These are now the real formatting defaults, so reset returns here on every device.
  window.defaultsSettings=function(){return{timer:15,debateTimer:15,font:'dm',opacity:.65,colours:{...PALETTE}}};

  let changed=false;
  if(!settings.colours)settings.colours={};

  // Undo the accidental background palette change while leaving deliberate custom backgrounds alone.
  if(!settings.colours.bg || LEGACY_BACKGROUNDS.includes(settings.colours.bg.toLowerCase())){
    settings.colours.bg=ORIGINAL_BG;changed=true;
  }

  // Migrate untouched old category defaults to the new reference colours.
  ['proof','debate','knockout','quote'].forEach(k=>{
    const current=(settings.colours[k]||'').toLowerCase();
    if(!current || LEGACY_CATEGORY_SETS[k].includes(current)){
      settings.colours[k]=PALETTE[k];changed=true;
    }
  });

  // The requested default card opacity is 65%.
  const oldDefaultOpacities=[.36];
  if(typeof settings.opacity!=='number' || oldDefaultOpacities.includes(settings.opacity)){
    settings.opacity=.65;changed=true;
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