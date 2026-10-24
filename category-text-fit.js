window.addEventListener('DOMContentLoaded',()=>{
  const labels=[...document.querySelectorAll('#homeScreen .categoryArea .bs')];
  const canvas=document.createElement('canvas'),context=canvas.getContext('2d');
  if(!context||!labels.length)return;
  let frame=0;
  function measure(text,style,size){
    context.font=style.fontStyle+' '+style.fontWeight+' '+size+'px '+style.fontFamily;
    const tracking=parseFloat(style.letterSpacing)||0;
    return context.measureText(text).width+Math.max(0,Array.from(text).length-1)*tracking;
  }
  function fit(){
    frame=0;
    for(const label of labels){
      const width=label.clientWidth-3;
      if(width<=0)continue;
      const style=getComputedStyle(label),text=label.textContent.trim();
      const maximum=matchMedia('(max-height:700px)').matches?12:13;
      let low=1,high=maximum;
      if(measure(text,style,maximum)<=width){label.style.fontSize=maximum+'px';continue}
      for(let i=0;i<12;i++){
        const mid=(low+high)/2;
        if(measure(text,style,mid)<=width)low=mid;else high=mid;
      }
      label.style.fontSize=(Math.floor(low*100)/100)+'px';
    }
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(fit)}
  const priorApply=window.applySettings;
  window.applySettings=function(){const result=priorApply.apply(this,arguments);schedule();return result};
  const priorShow=window.showScreen;
  window.showScreen=function(id){const result=priorShow.apply(this,arguments);if(id==='homeScreen')schedule();return result};
  if(window.ResizeObserver){const observer=new ResizeObserver(schedule);labels.forEach(label=>observer.observe(label.parentElement))}
  window.addEventListener('resize',schedule);
  if(document.fonts){document.fonts.ready.then(schedule);document.fonts.addEventListener('loadingdone',schedule)}
  schedule();
});