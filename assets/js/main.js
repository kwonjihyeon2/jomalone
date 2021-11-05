//collection slick
$('.multiple-items').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ,{breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



//scents
let scents = document.getElementById("scents");
let pear = document.getElementById("pear");
let freesia = document.getElementById("freesia");

window.addEventListener('scroll',function(){
    var value = -1000+window.scrollY;

    scents.style.right = -value * 0.05 + 'px' ;
});

window.addEventListener('scroll',function(){
    var value = -800+window.scrollY;

    pear.style.top = value * 0.05 + '%' ;
});

window.addEventListener('scroll',function(){
    var value = -500+window.scrollY;

    freesia.style.right = value * 0.01 + '%' ;
})

