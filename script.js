// write your JS code here
let div1=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
function initialized(){
    let bodyEl=document.querySelector('#div-2')
    for(let i=0; i<div1.length; i++){
     bodyEl.innerHTML+= `
             <button class="card-img" onclick="pressKey()"  id="key" alt="Card image">${div1[i]}</button>
        `
    }
}
