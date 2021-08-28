let left1 = document.getElementById('left1');

let play = document.getElementById('play');

var c = JSON.parse(localStorage.getItem('circleData'));

console.log("c before", c)

if (c == null) {
    localStorage.setItem('circleData', JSON.stringify('0'));
    // c = 0;
}
console.log("c ", c)
play.addEventListener('click', function () {

    left1.innerHTML = null;

    let iframe = document.createElement('iframe');

    iframe.src = "Assets/preview.mp4";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "transparent";

    left1.append(iframe);
    console.log(left1);

})

let play1 = document.getElementById('play1');

play1.addEventListener('click', function () {

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



function tracked(event) {
    event.preventDefault(event);
    let right_top = document.getElementById("right_top");
    right_top.style.color = "#00ff00";
    let img = document.getElementById("im1");
    img.src = "https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
    img.style.opacity = "0.5";
    img.style.width = "80%";

    c++;
    localStorage.setItem('circleData', JSON.stringify(c));
    let number = document.querySelector(".number");
    number.innerHTML = ((c / 11) * 100).toFixed(0) + "%";
    console.log("bottom c", c)
    aa(c);
    window.location.href = "content"
    //     window.location.href = "content"


}
function tracked1() {
    let right_top1 = document.getElementById("right_top1");
    right_top1.style.color = "#00ff00";

    let img = document.getElementById("im2");
    img.src = "https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
    img.style.opacity = "0.5";
    img.style.width = "80%";
    c++;
    localStorage.setItem('circleData', JSON.stringify(c));
    let number = document.querySelector(".number");
    number.innerHTML = ((c / 11) * 100).toFixed(0) + "%";
    aa(c);
    window.location.href = "content"

}

function tracked2() {
    let right_top2 = document.getElementById("right_top2");
    right_top2.style.color = "#00ff00";

    let img = document.getElementById("im3");
    img.src = "https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
    img.style.opacity = "0.5";
    img.style.width = "80%";
    c++;
    localStorage.setItem('circleData', JSON.stringify(c));

    let number = document.querySelector(".number");
    number.innerHTML = ((c / 11) * 100).toFixed(0) + "%";
    aa(c);
    window.location.href = "content"

}

function tracked3() {
    let right_top3 = document.getElementById("right_top3");
    right_top3.style.color = "#00ff00";

    let img = document.getElementById("im4");
    img.src = "https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
    img.style.opacity = "0.5";
    img.style.width = "80%";
    c++;
    localStorage.setItem('circleData', JSON.stringify(c));

    let number = document.querySelector(".number");
    number.innerHTML = ((c / 11) * 100).toFixed(0) + "%";
    aa(c);
    window.location.href = "content"

}

//-----------------------------Untracked----------------
function untracked() {
    let right_top = document.getElementById("right_top");
    right_top.style.color = "#ff4500";

}

function untracked1() {
    let right_top1 = document.getElementById("right_top1");
    right_top1.style.color = "#00ff00";

}

function untracked2() {
    let right_top2 = document.getElementById("right_top2");
    right_top2.style.color = "#00ff00";

}

function untracked3() {
    let right_top3 = document.getElementById("right_top3");
    right_top3.style.color = "#00ff00";

}

function courseview() {
    window.location.href = "courses.html"
}


function aa(c) {
    console.log("c insie aa", c)
    let d = (472 - ((c / 11) * 472)).toFixed(0);
    console.log("d data", d);//429

    localStorage.setItem('saveCircle', JSON.stringify(d));

    let newCircleData = JSON.parse(localStorage.getItem('saveCircle'));



    let circle = document.querySelector('circle');
    circle.style.strokeDashoffset = newCircleData;
    // circle.style.strokeDashoffset = 472 - ((d / 11) * 472);

    circle.style.stroke = "#4ce600";


}
let circle = document.querySelector('circle');

circle.style.stroke = "#ffffff";

function getCircle() {

    let d = (472 - ((c / 11) * 472)).toFixed(0);

    localStorage.setItem('saveCircle', JSON.stringify(d));

    let newCircleData = JSON.parse(localStorage.getItem('saveCircle'));

    circle = document.querySelector('circle');

    circle.style.strokeDashoffset = newCircleData;

    circle.style.stroke = "#4ce600";

}

function changePercentage() {

    let number = document.querySelector(".number");
    number.innerHTML = ((c / 11) * 100).toFixed(0) + "%";
}

// 

function callMe() {
    checkVisited();
    getCircle();
    changePercentage();
}

function visited(a) {


    let colorChanger = document.getElementById(`visitedPage${a}`);
    let colorChangers = document.getElementById(`visitedPages${a}`);


    colorChanger.style.color = "Green";
    colorChangers.style.color = "Green";

    let temp = localStorage.setItem(`color${a}`, JSON.stringify('1'));





}


function checkVisited() {

    for (let i = 1; i < 10; i++) {

        let colorChanger = document.getElementById(`visitedPage${i}`);
        let colorChangers = document.getElementById(`visitedPages${i}`);


        let linkdata = JSON.parse(localStorage.getItem(`color${i}`));


        if (linkdata != null) {


            colorChanger.style.color = "Green";
            colorChangers.style.color = "Green";
        }


    }
}