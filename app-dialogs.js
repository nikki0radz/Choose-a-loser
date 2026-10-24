(()=>{
let queue=Promise.resolve();
function show(message,confirmation){
 const task=()=>new Promise(resolve=>{
  const dialog=document.createElement('dialog');dialog.className='appDialog';dialog.setAttribute('aria-labelledby','appDialogTitle');dialog.setAttribute('aria-describedby','appDialogMessage');
  const title=document.createElement('h2');title.id='appDialogTitle';title.textContent=confirmation?'Just checking…':'All set';
  const text=document.createElement('p');text.id='appDialogMessage';text.textContent=message;
  if(!confirmation&&/type |add |exactly/i.test(message))title.textContent='One more thing';
  const actions=document.createElement('div');actions.className='appDialogActions';
  let settled=false;
  function finish(value){if(settled)return;settled=true;dialog.close();dialog.remove();resolve(value)}
  if(confirmation){const cancel=document.createElement('button');cancel.type='button';cancel.textContent='Cancel';cancel.onclick=()=>finish(false);actions.appendChild(cancel)}
  const accept=document.createElement('button');accept.type='button';accept.className='appDialogAccept';accept.textContent=confirmation?'Reset':'OK';accept.onclick=()=>finish(true);actions.appendChild(accept);
  dialog.append(title,text,actions);document.body.appendChild(dialog);dialog.addEventListener('cancel',event=>{event.preventDefault();finish(false)});
  const previous=document.activeElement;
  dialog.addEventListener('close',()=>{if(previous?.isConnected)previous.focus()},{once:true});
  dialog.showModal();(confirmation?actions.firstElementChild:accept).focus();
 });
 const result=queue.then(task);queue=result.catch(()=>{});return result;
}
window.appNotice=message=>show(message,false);
window.appConfirm=message=>show(message,true);
})();