window.addEventListener("DOMContentLoaded", ()=>{

    let elementsToAnimateFromRight = document.querySelectorAll(".animate-right");

    let animateFromRight = (entradas, observer) => {
        entradas.forEach((entrada) => {
            if(entrada.isIntersecting){
                entrada.target.classList.add("fade-right");
            }else{
                entrada.target.classList.remove("animate-from-right");
            }
        });
    }

    let observerToRight = new IntersectionObserver(animateFromRight, {
        root: null,
        rootMargin: "200px 200px",
        threshold: 1.0
    });

    elementsToAnimateFromRight.forEach((element) => {
        observerToRight.observe(element);
    });

});