var hr1=document.querySelector("#hr1");
var h1=document.querySelector("#h1");
var arr1=[];
function change(){
    wdh=window.innerWidth;
    we=window.getComputedStyle(h1).width;
    arr1=we.split("");
    arr1.splice(arr1.length-2, 2);
    we="";
    for(x=0;x<arr1.length;x++){
        we+=arr1[x];
    };
    we=Number(we);
    we+=25;
    hr1.style.width=we+"px";
};
change();
window.addEventListener("resize", change);