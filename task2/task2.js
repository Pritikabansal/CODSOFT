// let number= document.getElementById("number");
// let counter = 0;
// setInterval(()=>{
//     if(counter ==65){
//         clearInterval();
//     }
//     else{
//         counter +=1;
//     number.innerHTML=counter + "%";
//     }
// },30);

let progress=document.getElementById('progressbar');
let totalHeight=document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
    let progressHeight = (window.pageYOffset /totalHeight)*100;
    progress.style.height=progressHeight+"%";
}