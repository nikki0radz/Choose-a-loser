window.addEventListener('DOMContentLoaded',()=>{
  if(!document.querySelector('link[rel="manifest"]')){
    const manifest=document.createElement('link');manifest.rel='manifest';manifest.href='manifest.webmanifest';document.head.appendChild(manifest);
  }
  const theme=document.querySelector('meta[name="theme-color"]')||document.createElement('meta');theme.name='theme-color';theme.content='#05042a';if(!theme.parentNode)document.head.appendChild(theme);
  const mobile=document.createElement('meta');mobile.name='mobile-web-app-capable';mobile.content='yes';document.head.appendChild(mobile);
  const apple=document.querySelector('meta[name="apple-mobile-web-app-capable"]')||document.createElement('meta');apple.name='apple-mobile-web-app-capable';apple.content='yes';if(!apple.parentNode)document.head.appendChild(apple);
  const appleStatus=document.createElement('meta');appleStatus.name='apple-mobile-web-app-status-bar-style';appleStatus.content='black-translucent';document.head.appendChild(appleStatus);
  const appleTitle=document.createElement('meta');appleTitle.name='apple-mobile-web-app-title';appleTitle.content='Choose a Loser';document.head.appendChild(appleTitle);
  if(!document.querySelector('link[rel="apple-touch-icon"]')){const icon=document.createElement('link');icon.rel='apple-touch-icon';icon.href='app-icon.svg';document.head.appendChild(icon);}

  if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js').catch(()=>{});}

  let installPrompt=null;
  function addInstallButton(){
    if(document.getElementById('installAppBtn'))return;
    const utility=document.querySelector('#homeScreen .utility');
    if(!utility)return;
    const btn=document.createElement('button');btn.id='installAppBtn';btn.className='ghost';btn.style.cssText='grid-column:1 / -1;width:100%';btn.textContent='⬇ Install app';
    btn.onclick=async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;btn.remove();};
    utility.appendChild(btn);
  }
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;addInstallButton();});
  window.addEventListener('appinstalled',()=>{document.getElementById('installAppBtn')?.remove();installPrompt=null;});
});