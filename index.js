function typeWriter (elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 45 * i);
    });
}

const title = document.querySelector('.quote-title');
typeWriter(title);

function btnmore (){
    var contentSobre = document.querySelector(".content-more");
    var contentShop = document.querySelector(".content-shop");
    if (contentSobre.classList.contains("hide")) {
        contentSobre.classList.remove("hide");
        contentShop.classList.add("hide");
    }
    document.getElementById('sobre').scrollIntoView({behavior: "smooth"});
}

function btnshop (){
    var contentSobre = document.querySelector(".content-more");
    var contentShop = document.querySelector(".content-shop");
    if (contentShop.classList.contains("hide")) {
        contentSobre.classList.add("hide");
        contentShop.classList.remove("hide");
    }
    document.getElementById('shop').scrollIntoView({behavior: "smooth"});
}