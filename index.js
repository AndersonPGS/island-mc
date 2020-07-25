function typeWriter (elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 40 * i);
    });
}

const title = document.querySelector('.quote-title');
typeWriter(title);

function btnmore (){
    document.getElementById('sobre').scrollIntoView({behavior: "smooth"});
}