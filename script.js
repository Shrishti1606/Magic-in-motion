let boxSpace = document.getElementById("bigBox");
const images = [
  "https://plus.unsplash.com/premium_photo-1673998269850-8f953fd2fe0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFlcm9wbGFuZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1755739617206-0d57b0860d37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1679830513985-2a2e07ac1d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1679917737897-9b373261ad57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1679830513880-67584d7327e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
];

//thrttle function
function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

//mouse movement
boxSpace.addEventListener("mousemove", 
    throttle((details) => {
        let div = document.createElement("div"); //for pop-up
        div.classList.add("imagediv");
        div.style.left = details.clientX + "px";
        div.style.top = details.clientY + "px";
        div.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`;

        let img =  document.createElement("img");

        //pick a random image from the array og image
        let randomIndex = Math.floor(Math.random() * images.length);
        img.setAttribute("src", images[randomIndex]);

        div.appendChild(img);

        document.body.appendChild(div);
        
        //animation to the pop-up img
        gsap.to(img, {
            y:"0%",
            ease: Power1,
            duration: .6
        });

        gsap.to(img, {
            y:"100%",
            delay: .6,
            ease: Power2,
        });

        gsap.from(div, {
            rotate: Math.random() * 40 - 20,
            opacity: 0,
            duration: 0.3
        });


        setTimeout(function(){
            div.remove();
        },1000);
    },400));