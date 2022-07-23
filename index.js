// template_52p15cc
// service_1s2vz64
// E1nRs1lrQbhiZ5YwY

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_1s2vz64',
            'template_52p15cc',
            event.target,
            'E1nRs1lrQbhiZ5YwY'
        ).then(() => {
            console.log('thisworked1')
        })
}