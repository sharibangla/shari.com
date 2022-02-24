const nav=document.querySelector(".nav-bar nav");
const ham=document.querySelector(".nav-bar .ham");

ham.addEventListener("click",function(){
    nav.classList.toggle("nav-toggle")
    ham.classList.toggle("close")
});


///// p1 function
///// p1 function
///// p1 function
var p1=["image/p1.1.jpg","image/p1.2.jpg","image/p1.3.jpg","image/p1.4.jpg","image/p1.5.jpg"]
var img=document.querySelector("#image");
// onclick function
var count=0;
function next(){
    count++;
    if(count>=p1.length){
        count=0;
        img.src=p1[count];
    }else{
        img.src=p1[count];
    }
}
// previse function
function left(){
    count--;
    if(count<0){
        count=p1.length-1;
        img.src=p1[count];
    }else{
        img.src=p1[count];
    }
}
///// p2 function
///// p2 function
///// p2 function
var p2=["image/p2.2.jpg","image/p2.3.jpg","image/p2.4.jpg"]
var img2=document.querySelector("#p2");
// onclick function
var count=0;
function next2(){
    count++;
    if(count>=p2.length){
        count=0;
        img2.src=p2[count];
    }else{
        img2.src=p2[count];
    }
}
// previse function
function left2(){
    count--;
    if(count<0){
        count=p2.length-1;
        img2.src=p2[count];
    }else{
        img2.src=p2[count];
    }
}
///// p3 function
var p3=["image/p3.1.jpg","image/p3.2.jpg","image/p3.3.jpg"]
var img3=document.querySelector("#p3");
// onclick function
var count=0;
function next3(){
    count++;
    if(count>=p3.length){
        count=0;
        img3.src=p3[count];
    }else{
        img3.src=p3[count];
    }
}
// previse function
function left3(){
    count--;
    if(count<0){
        count=p3.length-1;
        img3.src=p3[count];
    }else{
        img3.src=p3[count];
    }
}
///// p4 function
var p4=["image/p4.1.jpg","image/p4.2.jpg","image/p4.3.jpg","image/p4.4.jpg","image/p4.5.jpg"]
var img4=document.querySelector("#p4");
// onclick function
var count=0;
function next4(){
    count++;
    if(count>=p4.length){
        count=0;
        img4.src=p4[count];
    }else{
        img4.src=p4[count];
    }
}
// previse function
function left4(){
    count--;
    if(count<0){
        count=p4.length-1;
        img4.src=p4[count];
    }else{
        img4.src=p4[count];
    }
}
///// p8 function
var p8=["image/p8.1.jpg","image/p8.2.jpg","image/p8.3.jpg","image/p8.4.jpg","image/p8.5.jpg"]
var img8=document.querySelector("#p8");
// onclick function
var count=0;
function next8(){
    count++;
    if(count>=p8.length){
        count=0;
        img8.src=p8[count];
    }else{
        img8.src=p8[count];
    }
}
// previse function
function left8(){
    count--;
    if(count<0){
        count=p8.length-1;
        img8.src=p8[count];
    }else{
        img8.src=p8[count];
    }
}
///// p9 function
var p9=["image/p9.1.jpg","image/p9.2.jpg","image/p9.3.jpg","image/p9.4.jpg","image/p9.5.jpg"]
var img9=document.querySelector("#p9");
// onclick function
var count=0;
function next9(){
    count++;
    if(count>=p9.length){
        count=0;
        img9.src=p9[count];
    }else{
        img9.src=p9[count];
    }
}
// previse function
function left9(){
    count--;
    if(count<0){
        count=p9.length-1;
        img9.src=p9[count];
    }else{
        img9.src=p9[count];
    }
}
///// p9 function
var p10=["image/p10.1.jpg","image/p10.2.jpg"]
var img10=document.querySelector("#p10");
// onclick function
var count=0;
function next10(){
    count++;
    if(count>=p10.length){
        count=0;
        img10.src=p10[count];
    }else{
        img10.src=p10[count];
    }
}
// previse function
function left10(){
    count--;
    if(count<0){
        count=p10.length-1;
        img10.src=p10[count];
    }else{
        img10.src=p10[count];
    }
}
