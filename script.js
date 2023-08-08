const txtuser=document.getElementById("user");
const txtpassword=document.getElementById("password");
const btnsubmit=document.getElementById("submit");
const ptxt=document.getElementById("txt");
const aAncla=document.getElementById("ancla");
const txtPista=document.getElementById("pista");
const aAncla2=document.getElementById("perdida");

 btnsubmit.addEventListener("click",entrar)
 
function entrar(){
    const user=txtuser.value;
    const password=txtpassword.value;
    if(user==="jose"&& password==="jose" || user==="ada" && password==="ada" ){
        ptxt.style="color: hsl(90, 100%, 50%)";
        ptxt.style="font-family: monospace; color: green";
        ptxt.innerText="Acertaste... Y por acertar te dejare mi numero para q me contactes por si quieres q te haga una pagina web";
        aAncla.innerText="+58 04122684864";
        
    }else{
    ptxt.style="color:red";
    ptxt.innerText="Intentalo de nuevo";
    txtPista.innerText='Si quieres una pista lee este rastro q te voy a dejar "empieza por j y termina por o  y los dos para la maquina significan lo mismo "  y si te rendiste aca te dejo mi numero de tlf para q me preguntes';
    aAncla2.innerText="+58 04122684864";


  }
} 