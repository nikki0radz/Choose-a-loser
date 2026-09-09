window.addEventListener('DOMContentLoaded',()=>{
  const HISTORY_KEY='chooseLoserQuestionHistoryV2';
  const norm=s=>String(s||'').trim().toLowerCase().replace(/\s+/g,' ');
  const key=q=>norm(q&&q.text);
  function read(){try{return JSON.parse(localStorage.getItem(HISTORY_KEY)||'{}')}catch{return {}}}
  function write(v){localStorage.setItem(HISTORY_KEY,JSON.stringify(v))}

  // Persistent per-browser/player decks. Editing, adding questions and page reloads do
  // not wipe progress. A deck resets only after every currently eligible question has appeared.
  drawQuestion=function(mode){
    const pool=mode==='whoSaid'?data.whoSaid:available(data[mode]);
    if(!pool.length)return null;
    const deckKey=`${mode}:${mode==='whoSaid'?'all':chaos}`;
    const state=read();
    let used=Array.isArray(state[deckKey])?state[deckKey]:[];
    const valid=new Set(pool.map(key));
    used=used.filter(k=>valid.has(k));
    let unseen=pool.filter(q=>!used.includes(key(q)));
    if(!unseen.length){
      const previous=used[used.length-1];
      used=[];
      unseen=pool.filter(q=>pool.length===1||key(q)!==previous);
      if(!unseen.length)unseen=pool;
    }
    const picked=unseen[Math.floor(Math.random()*unseen.length)];
    used.push(key(picked));
    state[deckKey]=used;
    write(state);
    return picked;
  };
});