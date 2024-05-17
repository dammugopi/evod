
let c=0;
let cvalue=document.getElementById('count');

let evod=document.getElementById('evod');

function incre(){
  if(c<25){
    c++;
    cvalue.textContent=c;
  }
  evenodd();
}

function decre(){
  if(c>0){
    c--;
    cvalue.textContent=c;

  }
  evenodd()
}

function reset(){
  c=0;
  cvalue.textContent=c;
  evenodd();
}
 

function evenodd(){
if(c%2!=0){
  evod.innerText='O';
}
else{
  evod.innerText='E';
}
}











