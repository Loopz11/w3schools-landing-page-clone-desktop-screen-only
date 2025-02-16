// image changing when slide button is clicked
const sleft = document.querySelector(".sleft");
const sright = document.querySelector(".sright");
const screenImg = document.querySelectorAll(".screen-img");
const sc = document.querySelectorAll(".sc");

let initialImgNum = 0
slider(initialImgNum);

function slider(n){
    screenImg.forEach(
        displayingImg =>{
            displayingImg.style.display = "none";
        }
    );
    sc.forEach(
        activeCircle =>{
            activeCircle.classList.remove("active");
        }
    );

    screenImg[n].style.display = "block";
    sc[n].classList.add("active");
}

sright.addEventListener("click", ()=>{
    initialImgNum++;
    if(initialImgNum>=screenImg.length){initialImgNum=2;}
    slider(initialImgNum);
});

sleft.addEventListener("click", ()=>{
    initialImgNum--;
    if(initialImgNum<0){initialImgNum=0;}
    slider(initialImgNum);
});

sc.forEach(
    (button, index)=>{
        button.addEventListener("click", ()=>{
            initialImgNum = index;
            slider(initialImgNum);
        });
    }
);