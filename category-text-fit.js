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
    const maximum=matchMedia('(max-height:700px)').matches?11.5:12.5;
    const measurements=labels.map(label=>({
      width:label.clientWidth-3,
      style:getComputedStyle(label),
      text:label.textContent.trim()
    })).filter(item=>item.width>0);
    if(!measurements.length)return;
    const fitsAll=size=>measurements.every(item=>measure(item.text,item.style,size)<=item.width);
    let size=maximum;
    if(!fitsAll(maximum)){
      let low=1,high=maximum;
      for(let i=0;i<12;i++){
        const mid=(low+high)/2;
        if(fitsAll(mid))low=mid;else high=mid;
      }
      size=Math.floor(low*100)/100;
    }
    labels.forEach(label=>{label.style.fontSize=size+'px'});
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