window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 150) {
      nav.classList.add('nav-scroll');
    } else {
      nav.classList.remove('nav-scroll');
    }
});


var banner = document.getElementById('banner'),
// clip =['vedios/Oppenheimer.mp4','vedios/JohnWick','vedios/extraction2.mp4','vedios/monarch.mp4','vedios/galaxy.mp4','vedios/MoneyHeist.mp4','vedios/MortalKombact.mp4']
images = ['image/banner1.jpg','image/banner2.jpg','image/banner3.jpg','image/banner4.jpg','image/banner5.jpg','image/banner.jpg','image/banner6.jpg'];

var imgcount = images.length
var number = Math.floor(Math.random()*imgcount);

window.onload = function(){
    banner.style.backgroundImage = 'url('+images[number]+')'
    function changetext(index) {
        var heading = document.getElementById('banner_title');
        switch (index) {
            case 0:
                heading.innerHTML = 'Oppenheimer';
                break;
            case 1:
                heading.innerHTML = 'John Wick';
                break;
            case 2:
                heading.innerHTML = 'Extraction 2';
                break;
            case 3:
                heading.innerHTML = 'Monarch';
                break;
            case 4:
                heading.innerHTML = 'Guardians of Galaxy';
                break;
            case 5:
                heading.innerHTML = 'Money Heist';
                break;
            case 6:
                heading.innerHTML = 'Mortal Kombact';
                break;
        }
        
    }
    changetext(number);
}


const logo = document.querySelector(".logo");
const btn = document.querySelector(".logo");

btn.addEventListener("click",()=>{
    logo.classList.toggle("pulse");
    setTimeout(() => {
        this.classList.remove("pulse");
    }, 100);
});


function togglePara(){
var paragraph = document.getElementById('descp');
if(paragraph.style.display === 'none'){
    paragraph.style.display = 'block';
}else{
    paragraph.style.display = 'none';
}
}
