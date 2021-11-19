var myVar;

function myFunction() {
    document.getElementById("container").style.display = "none";  
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("super").style.display = "none";
  document.getElementById("container").style.display = "block";
}


const cSlide = document.querySelector('.slide');
const cImages = document.querySelectorAll('.slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');



var cStyle={
    "background-color":"white",
    "color":"black"
}
var styles ={
    "position":"absolute",
    "padding":"10px",
    "top":"60px",
    "margin":"auto",
    "color":"white",
    "text-decoration":"underline",
    "z-index":"12"
};

var styles2={
    "position":"absolute",
    "padding":"10px",
    "top":"60px",
    "margin":"auto",
    "color":"white",
    "text-decoration":"underline",
    "z-index":"12"
}

var styles3={
    "position":"absolute",
    "padding":"10px",
    "top":"60px",
    "margin":"auto",
    "color":"white",
    "text-decoration":"underline",
    "z-index":"12"
    
}

var styles4={
    "position":"absolute",
    "padding":"10px",
    "top":"60px",
    "left":"0%",
    "margin":"auto",
    "color":"white",
    "font-weight":"500",
    "text-decoration":"underline",
    "z-index":"12"
}

var obj=document.getElementById("subTitle");
Object.assign(obj.style,styles);

let count = 0;
const size=cImages[0].clientWidth;

cSlide.style.transform = 'translateX(' +  (-size * count) + 'px)';
const change = (c) =>{
    if(c==0){
        document.getElementById("subTitle").innerHTML="WE ARE BREAKING OUR VOW OF SILENCE";
        Object.assign(obj.style,styles);

    }
    if(c==1){
        document.getElementById("subTitle").innerHTML="TALENT IS GIVEN TRUE SKILL IS EARNED";
        Object.assign(obj.style,styles);
    }
    if(c==2){
        document.getElementById("subTitle").innerHTML="BE FLEXIBLE TO CHANGE AND STURDY IN CONVICTION";
        Object.assign(obj.style,styles2);
    }
    if(c==3){
        document.getElementById("subTitle").innerHTML="USE MANY SKILLS YET WORK AS ONE";
        Object.assign(obj.style,styles);
    }
    if(c==4){
        document.getElementById("subTitle").innerHTML="TO MASTER ANYTHING FIND INTEREST IN EVERYTHING";
        Object.assign(obj.style,styles3);
    }
    if(c==5){
        document.getElementById("subTitle").innerHTML="INDIVIDUALS FLOURISH IF CULTURE AND WISDOM ARE SHARED";
        Object.assign(obj.style,styles4);
    }
    if(c==6){
        document.getElementById("subTitle").innerHTML="TRAIN FOR PERFECTION BUT AIM FOR MORE";
        Object.assign(obj.style,styles);
    }
    if(c==7){
        document.getElementById("subTitle").innerHTML="TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE";
        Object.assign(obj.style,styles3);
        
    }
}



nextBtn.addEventListener('click',()=>{
    if(count >=cImages.length-1) return;
    cSlide.style.transition = "transform 0.4s ease-in-out";
    count++;
    change(count);
    console.log(count);
    cSlide.style.transform = 'translateX(' +  (-size * count) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(count <=0) return;
    cSlide.style.transition = "transform 0.4s ease-in-out";
    count--;
    change(count);
    console.log(count);
    cSlide.style.transform = 'translateX(' +  (-size * count) + 'px)';
});

const traverse = (n) => {
    count=n;
    change(count);
    cSlide.style.transform = 'translateX(' +  (-size * n) + 'px)';
}
