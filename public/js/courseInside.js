let left1 = document.getElementById('left1');

let play = document.getElementById('play');

play.addEventListener('click',function(){

    left1.innerHTML = null;

    let iframe = document.createElement('iframe');

    iframe.src = "Assets/preview.mp4";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "transparent";

    left1.append(iframe);
    console.log(left1);

})

let right3 = document.getElementById("right3");


//------------------------------------Tracked content --------------------------------

var c = 0;

function tracked(event){
    event.preventDefault(event);
    let right_top = document.getElementById("right_top");
    right_top.style.color = "#00ff00";
    let img = document.getElementById("im1");
    img.src = "https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
    img.style.opacity = "0.5";
    img.style.width = "80%";

    c++;
    let number = document.querySelector(".number");
     number.innerHTML = ((c/11)*100).toFixed(0)+"%" ;
    aa(c);
   // window.location.href = "content.html"
    window.open("content");
    
    
}
function tracked1(){
    let right_top1 = document.getElementById("right_top1");
    right_top1.style.color = "#00ff00";

    let img = document.getElementById("im2");
    img.src = "https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
    img.style.opacity = "0.5";
    img.style.width = "80%";
     c++;
      let number = document.querySelector(".number");
     number.innerHTML = ((c/11)*100).toFixed(0)+"%" ;
    aa(c);
    window.open("content");

}

function tracked2(){
    let right_top2 = document.getElementById("right_top2");
    right_top2.style.color = "#00ff00";

    let img = document.getElementById("im3");
    img.src = "https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
    img.style.opacity = "0.5";
    img.style.width = "80%";
     c++;
      let number = document.querySelector(".number");
     number.innerHTML = ((c/11)*100).toFixed(0)+"%" ;
    aa(c);
    window.open("content");

}

function tracked3(){
    let right_top3 = document.getElementById("right_top3");
    right_top3.style.color = "#00ff00";

    let img = document.getElementById("im4");
    img.src = "https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
    img.style.opacity = "0.5";
    img.style.width = "80%";
     c++;
      let number = document.querySelector(".number");
     number.innerHTML = ((c/11)*100).toFixed(0)+"%" ;
    aa(c);
    window.open("content");

}

//-----------------------------Untracked----------------
function untracked(){
    let right_top = document.getElementById("right_top");
    right_top.style.color = "#ff4500";

}

function untracked1(){
    let right_top1 = document.getElementById("right_top1");
    right_top1.style.color = "#00ff00";

}

function untracked2(){
    let right_top2 = document.getElementById("right_top2");
    right_top2.style.color = "#00ff00";

}

function untracked3(){
    let right_top3 = document.getElementById("right_top3");
    right_top3.style.color = "#00ff00";

}

function courseview() {
    window.location.href = "courses.html"
}


function aa(c){
    let circle = document.querySelector('circle');
     circle.style.strokeDashoffset = 472 - ((c/11)*472);

    circle.style.stroke = "#4ce600";

   
}
    