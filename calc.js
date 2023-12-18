function calc(va){
    document.getElementById('a').value+=va;
}
function d(va){
    let x=document.getElementById("a").value
    let y=eval(x)
    document.getElementById("a").value=y;

}
function clr() { 
    document.getElementById("a").value=""
} 


