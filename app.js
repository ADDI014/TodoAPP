const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    const item = document.createElement('li');
    item.innerText = input.value;
    ul.appendChild(item);
    const delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    input.value="";
});
let u = document.querySelector('ul');
u.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let itemList = event.target.parentElement;
        console.log(itemList);
        itemList.remove();
        console.log("deleted");
    }
})
let delbtn = document.querySelector('.del-btn');
delbtn.addEventListener("click",function(){
    let allbtn = document.querySelectorAll('.delete');
    for(allbtns of allbtn){
        let par = allbtns.parentElement;
        console.log(par);
        par.remove();

    }
})








