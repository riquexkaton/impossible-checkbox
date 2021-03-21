const checkbox = document.querySelector(".checkbox");
let osoAfuera = false;
let durationAnimation=false;

const tl2=gsap.timeline();
checkbox.addEventListener("mouseover", async () => {

    if(durationAnimation===false)
    {
        tl2.to(".oso", {
            transform: "translateY(50px) rotate(10deg)",
            duration:0.10
        });
    }

});


checkbox.addEventListener("mouseleave",()=>
{
    if(durationAnimation===false)
    {
        tl2.to(".oso", {
            transform: "translateY(120px) rotate(10deg)",
            duration:0.10
        });
    }
});

checkbox.addEventListener("click", async () => {
    durationAnimation=true;
    const tl = gsap.timeline();
    await tl.to(".checkbox", {
        background:"rgb(49, 223, 49)"
    });
    await tl.to(".circle", {
        top: "5px",
        right: "10px"
    });
    await tl.to(".oso", {
        transform: " translateY(0) rotate(10deg)",
        duration:0.09
    });
    await tl.to(".brazo", {
        right: 0,
        delay: 1
    });

    await tl.to(".brazo", {
        zIndex: 1,
        transform: "rotateY(180deg) perspective(1000px)"
    });
    await tl.to(".brazo", {
        zIndex: -1,
        transform: "rotateY(0deg) perspective(1000px)"
    });
    await tl.to(".checkbox", {
        background:"white"
    });
    await tl.to(".circle", {
        top: "5px",
        right: "45%"
    });
    await tl.to(".brazo", {
        right: "50px"
    });
    await tl.to(".oso", {
        transform: "translateY(120px) rotate(10deg)",
        duration:0.07
    });
    durationAnimation=false;
});