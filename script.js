// Current page number
let currentPage = 0;

// All pages
const pages = [

`<div class="text-center">

<h1 class="title">❤️ Hello Beautiful ❤️</h1>

<p class="subtitle">
Today isn't just another day...
<br><br>
It's all about YOU.
<br><br>
I have something special waiting.
</p>

<button class="btn start-btn" onclick="nextPage()">
Start Journey 🎁
</button>

</div>`,

`<div class="text-center">

<h2>🌸 Just Curious...</h2>

<h3 class="mt-4">
If I had to describe you in one word...
</h3>

<div class="d-grid gap-3 mt-4">

<button class="btn option-btn" onclick="correctAnswer('Honestly... every single one of these describes you perfectly ❤️')">Beautiful ❤️</button>

<button class="btn option-btn" onclick="correctAnswer('Honestly... every single one of these describes you perfectly ❤️')">Kind 🌸</button>

<button class="btn option-btn" onclick="correctAnswer('Honestly... every single one of these describes you perfectly ❤️')">Adorable 🥹</button>

<button class="btn option-btn" onclick="correctAnswer('Honestly... every single one of these describes you perfectly ❤️')">Perfect ✨</button>

</div>

</div>`,

`<div class="text-center">

<h2>😊 Be Honest...</h2>

<h3 class="mt-4">
Who has the prettiest smile?
</h3>

<div class="d-grid gap-3 mt-4">

<button class="btn option-btn" onclick="correctAnswer(smileMessage)">Me 😄</button>

<button class="btn option-btn" onclick="correctAnswer(smileMessage)">Obviously Me 😊</button>

<button class="btn option-btn" onclick="correctAnswer(smileMessage)">Still Me ❤️</button>

<button class="btn option-btn" onclick="correctAnswer(smileMessage)">Do you even need to ask? 😂</button>

</div>

</div>`,

`<div class="text-center">

<h2>🥹 Cuteness Detector...</h2>

<h3 class="mt-4">
Rate your cuteness.
</h3>

<input type="range" min="1" max="10" value="5" class="form-range" id="slider">

<br>

<button class="btn start-btn mt-3" onclick="showScore()">Calculate ❤️</button>

</div>`,

`<div class="text-center">

<h2>💖 One Wish...</h2>

<h3 class="mt-4">
What do you deserve the most today?
</h3>

<div class="d-grid gap-3 mt-4">

<button class="btn option-btn" onclick="correctAnswer('You deserve all the happiness in the world ❤️')">Happiness 😊</button>

<button class="btn option-btn" onclick="correctAnswer('You deserve endless love today and always ❤️')">Love 💖</button>

<button class="btn option-btn" onclick="correctAnswer('You deserve the warmest hugs ❤️')">Lots of Hugs 🤗</button>

<button class="btn option-btn" onclick="correctAnswer('Exactly! You deserve everything beautiful in life ❤️')">Everything ✨</button>

</div>

</div>`,

`<div class="text-center">

<h2>👑 Final Question...</h2>

<h3 class="mt-4">
What's your secret superpower?
</h3>

<div class="d-grid gap-3 mt-4">

<button class="btn option-btn" onclick="correctAnswer('True! You make everyone smile without even trying ❤️')">Making Everyone Smile 😊</button>

<button class="btn option-btn" onclick="correctAnswer('Absolutely! Looking adorable is your full-time job 🥹❤️')">Looking Adorable 🌸</button>

<button class="btn option-btn"
onclick="correctAnswer('100% Correct! You have definitely stolen one very special heart ❤️😉')">
Stealing Hearts 💘
</button>
<button class="btn option-btn" onclick="correctAnswer('I checked... turns out all four answers are correct ❤️')">Being Absolutely Perfect ✨</button>

</div>

</div>`
];

// Load first page
const smileMessage = "I looked everywhere... but I still couldn't find a smile more beautiful than yours. ❤️🥹";
document.getElementById("page").innerHTML = pages[currentPage];

function nextPage() {
    currentPage++;
    if (currentPage >= pages.length) {
        showBirthdayCover();
        return;
    }
    document.getElementById("page").innerHTML = pages[currentPage];
}

let popupNext = false;

function correctAnswer(message){

    popupNext = true;

const emojis = ["🥹","❤️","🌸","💖","😍","✨","👑","🤗"];

document.querySelector(".popup-emoji").innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];

document.getElementById("popupMessage").innerHTML = message;
    document.getElementById("popupOverlay").classList.add("show");

}

function showScore(){

    popupNext = true;

    document.getElementById("popupMessage").innerHTML =
    "❤️ ERROR ❤️<br><br>Cuteness level exceeded the system limit.<br><br><b>Infinity / 10 😍</b>";

    document.getElementById("popupOverlay").classList.add("show");

}

function closePopup(){

    document.getElementById("popupOverlay").classList.remove("show");

    if(popupNext){

        popupNext = false;

        nextPage();

    }

}

function hideRightPanel(){
    const rightPanel = document.querySelector(".col-xl-5.col-lg-5");
    if(rightPanel){
        rightPanel.style.display = "none";
        rightPanel.style.visibility = "hidden";
    }
    const photoContainer = document.querySelector(".photo-container");
    if(photoContainer){
        photoContainer.style.display = "none";
    }
}

function ensureBgMusic(){
    let audio = document.getElementById("bgMusic");
    if(audio){
        if(audio.parentElement !== document.head){
            document.head.appendChild(audio);
        }
        return audio;
    }

    audio = document.createElement("audio");
    audio.id = "bgMusic";
    audio.loop = true;
    audio.preload = "auto";
    audio.playsInline = true;
    audio.style.display = "none";

    const source = document.createElement("source");
    source.src = "Music/Birthday.mp3";
    source.type = "audio/mpeg";
    audio.appendChild(source);

    document.head.appendChild(audio);
    return audio;
}

function playBackgroundMusic(){
    const audio = ensureBgMusic();
    audio.volume = 0.35;
    const playPromise = audio.play();
    if(playPromise && playPromise.catch){
        playPromise.catch(() => {
            // Autoplay may be blocked by browser, but the user already interacted.
        });
    }
}

function showBirthdayCover(){

document.body.innerHTML=`
<section class="birthday-cover">
<div class="cover-content">
<div class="cover-text-section">
<h5>🎂 HAPPY BIRTHDAY</h5>
<h1 style="font-size:4rem;margin:.2em 0;font-family:cursive;">Jyoti ❤️</h1>
<p style="font-size:1.25rem;line-height:1.8">
Today is all about celebrating you—your smile,
your kindness and every beautiful memory you create.
May this year bring you endless happiness, success,
good health and dreams fulfilled.
</p>
<button class="start-btn" onclick="showBirthdayLetter()">Open Your Letter 💌</button>
</div>
<div class="cover-photo">
<img src="Images/Joy1.jpg" onerror="this.src='Images/Joy1.jpg'">
</div>
</div>
</section>`;

playBackgroundMusic();
}

function showBirthdayLetter(){

document.body.innerHTML=`

<section class="letter-page fadePage">

<h1>💌 Dear Jyoti ❤️</h1>

<div id="typewriter"></div>

<br>

<button
class="start-btn"
onclick="showKrishnaBlessing()">

Continue ❤️

</button>

</section>

`;

typeWriter();

}

function typeWriter(){
    const text = `Happy Birthday Jyoti! ❤️

May your day be filled with laughter, beautiful surprises, and memories that stay with you forever.

You deserve every happy moment, every warm hug, and all the love in the world.

Keep shining, keep smiling, and always remember how special you are.`;
    let i = 0;
    const speed = 30;
    const target = document.getElementById("typewriter");
    target.innerHTML = "";

    function typing(){
        if(i < text.length){
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

function showKrishnaBlessing(){
    hideRightPanel();
    document.body.innerHTML=`
        <div class="krishna-page">
            <div class="peacock">🦚</div>
            <h1>Lord Krishna's Blessings</h1>
            <p>
                May Lord Krishna always guide your path,
                fill your heart with peace,
                bless your life with happiness,
                good health,
                success,
                beautiful memories,
                and endless smiles.
                <br><br>
                May His divine grace always protect you, today and always.
            </p>
            <h2>✨ Radhe Krishna ✨</h2>
            <button class="btn start-btn" onclick="showGallery()">
                View Beautiful Memories 📸
            </button>
        </div>
    `;
    playBackgroundMusic();
}

function showGallery(){
    hideRightPanel();
    const galleryItems = [
        {src: "Images/Joy2.jpg", title: "A Blooming Smile 🌸", text: "Like these flowers, you brighten every place you go. Your smile makes every moment beautiful."},
        {src: "Images/Joy3.jpg", title: "Grace in Every Step 🌿", text: "Some people look beautiful in pictures. You make every picture come alive with your presence."},
        {src: "Images/Joy4.jpg", title: "Birthday Queen 👑", text: "A smile this genuine deserves a celebration as wonderful as you. Today is all about you."},
        {src: "Images/Joy5.jpg", title: "Elegance Redefined ✨", text: "Traditional or modern, you carry every look with grace, confidence, and effortless beauty."},
        {src: "Images/Joy6.jpg", title: "Pure Happiness 😊", text: "Your laughter is contagious, your joy is unforgettable, and your happiness lights up every heart."},
        {src: "Images/Joy9.jpg", title: "Simply Beautiful 🌼", text: "Beauty isn't just about appearances—it's the kindness, warmth, and happiness you bring wherever you go."},
        {src: "Images/Joy10.jpg", title: "A Heart Full of Love 💖", text: "The love and kindness you share with everyone make this world a little brighter every day."},
        {src: "Images/Joy7.jpg", title: "Forever My Favorite Memory 🎈", text: "Every picture tells a story, but every story becomes special because you're in it."}

    ];

    const cards = galleryItems.map(item => `
        <div class="photo-card">
            <img src="${item.src}" alt="${item.title}" onerror="this.closest('.photo-card').style.display='none'">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </div>
    `).join("");

    document.body.innerHTML= `
        <div class="gallery-page">
            <h1 class="gallery-title">Beautiful Memories</h1>
            <div class="gallery-grid">
                ${cards}
            </div>
        </div>
    `;
    playBackgroundMusic();
}

// -------------------------
// Floating Hearts Animation
// -------------------------

function createHeart() {

    const item = document.createElement("div");
    item.classList.add("heart");

    const items = [
        "❤️",
        "❤️",
        "❤️",
        "❤️",
        "❤️",
        "❤️ Joy ❤️",
        "❤️",
        "❤️",
        "❤️ Cutie ❤️"
    ];

    item.innerHTML = items[Math.floor(Math.random() * items.length)];

    item.style.left = Math.random() * (window.innerWidth - 180) + "px";

    if (
        item.innerHTML.includes("Joy") ||
        item.innerHTML.includes("Cutie")
    ) {
        item.style.fontSize = "18px";
    } else {
        item.style.fontSize = (22 + Math.random() * 8) + "px";
    }

    item.style.opacity = "0.85";
    item.style.fontWeight = Math.random() > 0.5 ? "700" : "500";
    item.style.animationDuration = (8 + Math.random() * 4) + "s";

    const value = item.innerHTML;

    if (value.includes("Joy") || value.includes("Cutie")) {
        item.style.transform = "rotate(0deg)";
    } else {
        item.style.transform = `rotate(${Math.random() * 360}deg)`;
    }

    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 12000);
}

window.addEventListener("load", () => {

    for (let i = 0; i < 8; i++) {
        setTimeout(createHeart, i * 150);
    }

    setInterval(createHeart, 800);

});

function photoSurprise(){

    const container = document.querySelector(".photo-container");

    const emojis = ["🎉","🎊","✨","💖","❤️","🌸","💥","🎂"];

    for(let i=0;i<40;i++){

        const e = document.createElement("div");

        e.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        e.style.position="absolute";
        e.style.left="50%";
        e.style.top="50%";
        e.style.fontSize=(20+Math.random()*25)+"px";
        e.style.pointerEvents="none";
        e.style.zIndex="9999";

        const angle=Math.random()*360;
        const distance=120+Math.random()*180;

        e.animate([
            {
                transform:"translate(-50%,-50%) scale(0)",
                opacity:1
            },
            {
                transform:`translate(calc(-50% + ${Math.cos(angle*Math.PI/180)*distance}px),calc(-50% + ${Math.sin(angle*Math.PI/180)*distance}px)) scale(1.8)`,
                opacity:0
            }
        ],{
            duration:1200,
            easing:"ease-out"
        });

        container.appendChild(e);

        setTimeout(()=>e.remove(),1200);
    }

    const wish=document.getElementById("birthdayWish");

    wish.classList.add("show");

    setTimeout(()=>{
        wish.classList.remove("show");
    },3500);

}
