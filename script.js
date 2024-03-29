const progressBar = document.querySelector('.progress-bar');

//event listen for scroll
document.addEventListener('scroll', updateProgressBar)
//function, to compare total height to current height
//update progress-bar
function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop/((scrollHeight - 
        window.innerHeight))*100;
    progressBar.style.setProperty('width', scrollPercent+'%')
    console.log(scrollTop, scrollHeight, scrollPercent)
}

/*
Oben:
scrollTop: 0
scrollHeight: 1048

Unten:
scrollTop: 679
scrollHeight: 1048
*/

window.onscroll = () => {
    shrinkHeader();
}
const header = document.querySelector('.header');

function shrinkHeader(){
    if(document.documentElement.scrollTop > 70){
        header.style.setProperty('height', '10vh');
    } else {
        header.style.setProperty('height', '30vh');
    }
}