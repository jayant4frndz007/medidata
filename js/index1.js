console.log('hello');
var circle=document.getElementById('circle');
var upBtn=document.getElementById('upbtn');
var downBtn=document.getElementById('downbtn');

var homeClick=document.getElementById('homeClick');

var rotateValue=circle.style.transform;
var rotateSum;

upBtn.onclick= function(){
    rotateSum=rotateValue + "rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}
downBtn.onclick= function(){
    rotateSum=rotateValue + "rotate(90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}


setInterval(function(){ 
     
}, 3000);