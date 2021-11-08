
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

// window.addEventListener('scroll',function(){
//     var value = -600+window.pageYOffset;

//     scents.style.right = -value * 0.5 + 'px' ;
//     pear.style.top = value * 0.5 + 'px' ;
// });

// window.addEventListener('scroll',function(){
//     var value = -600+window.pageYOffset;

//     freesia.style.right = value * 0.5 + 'px' ;
// })

window.addEventListener('scroll',function(){
    var value = -750+window.pageYOffset;

    if( window.pageYOffset<800){
        scents.style.right = -value * 0.5 + 'px' ;
        pear.style.top = value * 0.5 + 'px' ;
        freesia.style.right = value * 0.5 + 'px' ;
    }
    else {
        scents.style.right= "-35px";
        freesia.style.right= "35px";
        pear.style.top='35px';
    }
})

