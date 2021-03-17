function displayList() {
let glist = document.getElementById('goalList');
let newPara = document.createElement('li');
newPara.setAttribute("class", "democlass")

glist.appendChild(newPara);
newPara.innerHTML=document.getElementById("goal1").value+"  <button onclick='del()' class='got'>delete</button>" + "  <button>Goal Completed</button>";

}

let bton = document.querySelector('button');
bton.onclick= displayList;



function del(){
  let cc= document.getElementsByClassName("democlass");
  cc.innerHTML="";

}
