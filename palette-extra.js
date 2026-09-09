window.addEventListener('DOMContentLoaded',()=>{
  const PALETTE={
    bg:'#030059',
    proof:'#ff3d96',
    debate:'#fc68b6',
    knockout:'#fcb3e0',
    quote:'#000082'
  };
  const OLD={bg:'#061437',proof:'#ff4497',debate:'#5b2d89',knockout:'#1897a5',quote:'#eb9f2e'};

  // Make this palette the app's real defaults, including future formatting resets.
  window.defaultsSettings=function(){return{timer:15,font:'dm',opacity:.36,colours:{...PALETTE}}};

  // Move anyone still using the original untouched palette onto the new one,
  // while preserving colours they have deliberately customised.
  let changed=false;
  Object.keys(PALETTE).forEach(k=>{
    if(!settings.colours[k] || settings.colours[k].toLowerCase()===OLD[k].toLowerCase()){
      settings.colours[k]=PALETTE[k];
      changed=true;
    }
  });
  if(changed){
    localStorage.setItem('chooseLoserSettings',JSON.stringify(settings));
    applySettings();
  }

  // Keep the settings colour pickers in sync whenever Settings opens.
  const priorOpenSettings=window.openSettings;
  window.openSettings=function(){
    priorOpenSettings();
    ['bg','proof','debate','knockout','quote'].forEach(k=>{
      const input=document.getElementById(k+'Colour');
      if(input)input.value=settings.colours[k];
    });
  };
});