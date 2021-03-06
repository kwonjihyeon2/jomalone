AOS.init();

//modal
const closeButton = document.querySelector(".xi-close");
const modal = document.querySelector(".modal")

function closeModal(){
    modal.style.display = "none";
}
closeButton.addEventListener("click", closeModal);

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


//service slick
$('.one-time').slick({
    dots:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
});