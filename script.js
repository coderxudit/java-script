/* =====================================
   LOVE LETTER TYPING EFFECT
===================================== */

const message = `
Dear Drishti ❤️

I don't know if words will ever be enough
to explain how special you are to me.

You make my normal days a little more beautiful,
my smiles a little bigger,
and my life a little happier.

I love all the little things about you,
even the things you probably don't notice.

Thank you for being you.
And thank you for being a beautiful part
of my life. ❤️

— Yours, always 💗
`;

const typingText = document.getElementById("typing-text");

let index = 0;
let startedTyping = false;


/* Typing function */

function typeMessage() {

    if (index < message.length) {

        typingText.innerHTML +=
            message.charAt(index) === "\n"
                ? "<br>"
                : message.charAt(index);

        index++;

        setTimeout(typeMessage, 35);

    }

}


/* =====================================
   OPEN MY HEART BUTTON
===================================== */

function openHeart() {

    document
        .getElementById("letter")
        .scrollIntoView({
            behavior: "smooth"
        });

    if (!startedTyping) {

        startedTyping = true;

        setTimeout(() => {
            typeMessage();
        }, 700);

    }

}


/* =====================================
   FLOATING HEARTS
===================================== */

const heartContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "🌸"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    /* Random position */

    heart.style.left =
        Math.random() * 100 + "vw";


    /* Random size */

    heart.style.fontSize =
        14 + Math.random() * 20 + "px";


    /* Random animation speed */

    heart.style.animationDuration =
        4 + Math.random() * 5 + "s";


    heartContainer.appendChild(heart);


    /* Remove after animation */

    setTimeout(() => {

        heart.remove();

    }, 9000);

}


/* Create hearts automatically */

setInterval(createHeart, 800);


/* =====================================
   SURPRISE BUTTON
===================================== */

function showSurprise() {

    const surprise =
        document.getElementById("surprise");


    surprise.style.display = "block";


    /* Create lots of hearts */

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }


    /* Scroll slightly */

    setTimeout(() => {

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

}


/* =====================================
   SCROLL ANIMATION
===================================== */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach((section) => {

    observer.observe(section);

});


/* =====================================
   IMAGE CLICK EFFECT
===================================== */

const photos =
    document.querySelectorAll(".photo-card img");


photos.forEach((photo) => {

    photo.addEventListener("click", () => {

        photo.classList.toggle("zoom");

    });

});


/* =====================================
   WELCOME MESSAGE
===================================== */

window.addEventListener("load", () => {

    console.log(
        "❤️ Welcome to Drishti's website ❤️"
    );

});