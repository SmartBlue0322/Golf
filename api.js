window.GAME_API=async function({url:t,mountNode:e}){const n=await fetch(t),o=await n.text();return new Promise(((t,n)=>{const a=document.createElement("iframe");a.onload=()=>{if(null===a.contentWindow)return n("Failed to get contentWindow from iframe");const e=a.contentWindow.document;e.open(),e.write(o),a.style.width="100%",a.style.height="100%",a.style.border="none",a.allow="autoplay";const i={on(t,e){window.addEventListener("message",(n=>{const o=JSON.parse(n.data??"");o.event===t&&e(o.data)}),!1)},emit(t,e){const n=JSON.stringify({event:t,data:e});return console.log("message",JSON.parse(n)),a?null===a.contentWindow?console.error("Failed to get contentWindow from iframe"):void a.contentWindow.postMessage(n,"*"):window.parent.postMessage(n,"*")},start(t){i.emit("start",t)}};t(i)},e.appendChild(a)}))};
