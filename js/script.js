// Variable selections
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let theme_toggler=document.querySelector('.theme-toggler')
let toggle_btn = document.querySelector('.toggle-btn')


// Hambuger menu  the ONCLICK FUNCTIONALITY
menu.onclick =()=>{
navbar.classList.toggle('active')
}

// Theme toggler the onclick functionality
toggle_btn.onclick =()=>{
    theme_toggler.classList.toggle("active")
}

// Hamburger menu and theme toggler functionality ON WINDOW SCROLL FUNCTIONALITY
window.onscroll =()=>{
navbar.classList.remove('active')
theme_toggler.classList.remove('active')
}

// Theme toggler  main functionality looping through the colours and applying styles selected
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn=>{
    btn.onclick=()=>{
        let colour = btn.style.background;
        document.querySelector(':root').style.setProperty('--pc', colour)
    }
})


//  smooth scrolling with Jquery

$('a').on('click', function(event){
    //  we checked for #(hash)
if(this.hash !==""){
    event.preventDefault()
 //    we assign Hash in all nav links
    let hash = this.hash;
 //    we add animation on scroll
    $('html, body').animate({scrollTop: $(hash).offset().top - 90},2000,)
}
})


// The slider functionality with SliderJS {HOME SECTION}

var swiper = new Swiper(".home-slider",{
    effect:'coverflow',
    grabcursor:true,
    centeredSlider:true,
    slidesPerView: 'auto',
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:2,
        slideShadows:true,
    },
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    }
})

// The slider functionality with SliderJS {REVIEW SECTION}

var swiper = new Swiper(".review-slider",{
    // effect:'coverflow',
    grabcursor:true,
    centeredSlider:true,
    slidesPerView: 1,
    spaceBetween:10,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
        1050:{
            slidesPerView:3
        },
    },
    // coverflowEffect:{
    //     rotate:0,
    //     stretch:0,
    //     depth:100,
    //     modifier:2,
    //     slideShadows:true,
    // },
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    }
})


// Animate onScroll functionality
AOS.init({
    offset: 100,
    duration:3000,
})