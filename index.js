// template_52p15cc
// service_1s2vz64
// E1nRs1lrQbhiZ5YwY

let contrastToggle = false;
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme";
    }
    else{
        document.body.classList.remove ("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_1s2vz64',
            'template_52p15cc',
            event.target,
            'E1nRs1lrQbhiZ5YwY'
        ).then(() => {
            loading.classList .remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("the email service is temporarily available. Please contact me directly on nguyef1@unlv.nevada.edu");
        })
}

let isModalOpen = false;
function toggleModal() {
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

const scaleFactor = 1/20
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i <shapes.length; ++i){
        const isOdd = i % 2 === 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}