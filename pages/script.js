const nav = document.querySelector('header');

window.addEventListener('scroll',fixNav);
function fixNav(){
    if (window.scrollY >50){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
}
