var count = 0;

document.addEventListener("click", function(event){

    let labels = document.querySelectorAll(".offcanvas header label span"),
        serv = document.querySelectorAll(".offcanvas-wrapper .slider"),
        check = document.querySelectorAll(".offcanvas-wrapper > div"),
        mainHam = document.querySelector(".left-sidebar header label span");
    for(let i = 0; i < labels.length; i++){
        if(event.target.matches(".offcanvas header label span")){
            if(labels[i] === event.target){
                serv[i].style.transform = "translate3d(0, 0, 0)";
                serv[i].style.opacity = "1";
                // check[i].style.overflow = "visible";

                check[i].style.zIndex = "1";
                // serv[i].style.display = "block";
                serv[i].style.transition = ".256s opacity ease-in-out, 0.6s transform ease-in-out, 0.6s -webkit-transform ease-in-out";
            }else{
                // check[i].style.overflow = "hidden";
                serv[i].style.transform = "translate3d(0px, 100px, 0)";
                serv[i].style.opacity = "0";
                serv[i].style.transition = ".256s opacity ease-in-out, 0.6s transform ease-in-out, 0.6s -webkit-transform ease-in-out";
                check[i].style.zIndex = "0";
                // serv[i].style.display = "none";
            }
        }
    }

    if(event.target.matches("#toggle-ham")){
        count++;
        if (count % 2 === 1){
            serv[0].style.opacity = "1";
            serv[0].style.transform = "translate3d(0px, 0, 0)";
        }else{
            serv[0].style.transform = "translate3d(0px, 100px, 0)";
            serv[1].style.transform = "translate3d(0px, 100px, 0)";
            serv[2].style.transform = "translate3d(0px, 100px, 0)";
            serv[0].style.opacity = "0";
            serv[1].style.opacity = "0";
            serv[2].style.opacity = "0";
        }
        // alert(count);
    }
})







// labels[0].addEventListener("click", function(){
//     serv[0].style.transform = "translate3d(0, 0, 0)";
//     serv[0].style.opacity = "1";
//     serv[1].style.transform = "translate3d(0px, 100px, 0)";
//     serv[1].style.opacity = "0";
//     serv[2].style.transform = "translate3d(0px, 100px, 0)";
//     serv[2].style.opacity = "0";
// })
// labels[1].addEventListener("click", function(){
//     serv[1].style.transform = "translate3d(0, 0, 0)";
//     serv[1].style.opacity = "1";
//     serv[0].style.transform = "translate3d(0px, 100px, 0)";
//     serv[0].style.opacity = "0";
//     serv[2].style.transform = "translate3d(0px, 100px, 0)";
//     serv[2].style.opacity = "0";
// })
// labels[2].addEventListener("click", function(){
//     serv[2].style.transform = "translate3d(0, 0, 0)";
//     serv[2].style.opacity = "1";
//     serv[0].style.transform = "translate3d(0px, 100px, 0)";
//     serv[0].style.opacity = "0";
//     serv[1].style.transform = "translate3d(0px, 100px, 0)";
//     serv[1].style.opacity = "0";
// })
