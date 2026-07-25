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
Today is all about celebrating you, your smile,
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
    const text = `💌 My Dearest Joy,

Happy Birthday, Beautiful Girl! ❤️🎉

Today is all about celebrating someone who makes life brighter just by being herself. I hope your day is filled with endless laughter, beautiful surprises, delicious cake, and countless reasons to smile.

From the very first moment I got to know you, I realized there is something truly special about you. Your kindness, your caring heart, your beautiful smile, and the way you spread happiness wherever you go make you one of the most wonderful people I have ever met.

You have this incredible way of making ordinary moments feel extraordinary. Whether you're smiling, laughing, talking, or simply being yourself, everything becomes a little more beautiful because you're there. That's one of the many things I admire about you.

I want you to know that you deserve every happiness this world has to offer. You deserve peaceful days, exciting adventures, genuine friendships, endless success, and all the love your heart can hold. Never doubt how amazing, talented, strong, and beautiful you truly are.

I hope this new year of your life brings you closer to every dream you've been working for. May every challenge make you stronger, every success make you prouder, and every day remind you just how loved and appreciated you are.

Thank you for being the wonderful person you are. Thank you for all the smiles you've unknowingly given me and for making so many moments memorable just by being a part of them.

Always keep smiling because your smile has a way of making the world feel brighter. Keep believing in yourself because you're capable of achieving incredible things. And no matter where life takes you, never forget how special and precious you are.

On your special day, I just want to remind you that you are loved, admired, appreciated, and cherished more than words can ever express.

Happy Birthday once again, My Cutie, My Sunshine, My Favorite Person. ❤️

May your heart always be filled with happiness, your eyes always sparkle with joy, and your life always overflow with love, laughter, and beautiful memories.

Wishing you the happiest birthday ever!

With lots of love,
❤️ From Someone Who Always Wishes the Best for You`;
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
    // const galleryItems = [
    //     {src: "Images/Joy11.jpg", title: "Birthday Queen 👑", text: "A smile this genuine deserves a celebration as wonderful as you. Today is all about you."},
    //     {src: "Images/Joy2.jpg", title: "A Blooming Smile 🌸", text: "Like these flowers, you brighten every place you go. Your smile makes every moment beautiful."},
    //     {src: "Images/Joy14.jpg", title: "Grace in Every Step 🌿", text: "Some people look beautiful in pictures. You make every picture come alive with your presence."},
    //     {src: "Images/Joy9.jpg", title: "Simply Beautiful 🌼", text: "Beauty isn't just about appearances—it's the kindness, warmth, and happiness you bring wherever you go."},
    //     {src: "Images/Joy10.jpg", title: "A Heart Full of Love 💖", text: "The love and kindness you share with everyone make this world a little brighter every day."},
    //     {src: "Images/Joy13.jpg", title: "A Heart Full of Love 💖", text: "The love and kindness you share with everyone make this world a little brighter every day."},

    //     {src: "Images/Joy7.jpg", title: "Forever My Favorite Memory 🎈", text: "Every picture tells a story, but every story becomes special because you're in it."},
    //     {src: "Images/Joy4.jpg", title: "Pure Happiness 😊", text: "Your laughter is contagious, your joy is unforgettable, and your happiness lights up every heart."},
    //     {src: "Images/Joy6.jpg", title: "Simply Beautiful 🌼", text: "Beauty isn't just about appearances—it's the kindness, warmth, and happiness you bring wherever you go."},
    //     {src: "Images/Joy12.jpg", title: "Pure Happiness 😊", text: "Your laughter is contagious, your joy is unforgettable, and your happiness lights up every heart."},

    //     {src: "Images/Joy5.jpg", title: "Elegance Redefined ✨", text: "Traditional or modern, you carry every look with grace, confidence, and effortless beauty."},

    //     {src: "Images/Joy3.jpg", title: "Forever My Favorite Memory 🎈", text: "Every picture tells a story, but every story becomes special because you're in it."}

    // ];

    const galleryItems = [
    {
        src: "Images/Joy11.jpg",
        title: "Birthday Queen 👑",
        text: "Every birthday deserves a queen, and today that queen is you. Your happiness is the most beautiful celebration."
    },

    {
        src: "Images/Joy2.jpg",
        title: "A Blooming Smile 🌸",
        text: "Holding flowers in your hands, yet you're the prettiest blossom in the picture. Your smile brightens everything around you."
    },

    {
        src: "Images/Joy14.jpg",
        title: "A Smile Worth a Thousand Words 😊",
        text: "One genuine smile from you is enough to make an ordinary moment feel unforgettable."
    },

    {
        src: "Images/Joy9.jpg",
        title: "Simply Beautiful 🌼",
        text: "No grand pose, no filters—just you, your beautiful smile, and a moment that feels absolutely perfect."
    },

    {
        src: "Images/Joy10.jpg",
        title: "A Heart Full of Love 💖",
        text: "Your kindness shines brighter than anything else. The warmth you carry is what makes you truly special."
    },

    {
        src: "Images/Joy13.jpg",
        title: "Grace in Every Look 🌺",
        text: "Every picture tells a different story, but in every story your elegance steals the spotlight."
    },

    {
        src: "Images/Joy7.jpg",
        title: "Love in Your Eyes ❤️",
        text: "Hidden behind a tiny heart is the smile that has captured my whole heart forever."
    },

    {
        src: "Images/Joy4.jpg",
        title: "Blooming with Happiness 💐",
        text: "The flowers may be beautiful, but standing beside you, even they seem to fade. Your smile is the real beauty in this picture."
    },


    {
        src: "Images/Joy6.jpg",
        title: "Pure Happiness 😊",
        text: "That joyful smile, the sparkle in your eyes, and your happiness make this one of my favorite memories."
    },

    {
        src: "Images/Joy12.jpg",
        title: "Birthday Joy 🎉",
        text: "The cake, the celebration, and your glowing smile together make this birthday picture absolutely perfect."
    },

    {
        src: "Images/Joy5.jpg",
        title: "Elegance Redefined ✨",
        text: "Grace isn't just about what you wear—it's the confidence, charm, and kindness you carry effortlessly."
    },

    {
        src: "Images/Joy3.jpg",
        title: "Forever My Favorite Memory 🎈",
        text: "Every picture freezes a moment in time, but every moment with you becomes a memory I'll always treasure."
    }
];

    const cards = galleryItems.map(item => `
        <div class="col-12 col-sm-6 col-lg-3">
            <div class="card gallery-card h-100 shadow-sm border-0">
                <img src="${item.src}" class="card-img-top" alt="${item.title}" onerror="this.closest('.col-12').style.display='none'">
                <div class="card-body">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-text">${item.text}</p>
                </div>
            </div>
        </div>
    `).join("");

    document.body.innerHTML= `
        <div class="gallery-page">
            <div class="container py-4">
                <h1 class="gallery-title text-center mb-4">Beautiful Memories</h1>
                <div class="row gx-3 gy-4">
                    ${cards}
                </div>
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
