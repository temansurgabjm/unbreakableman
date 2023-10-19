// Get all the images
let totalImage = 19
var image_array = []
let interval;
let isFirstTime = true;
//let urlDaftarNonActive = "https://api.whatsapp.com/send/?phone=6285349853664&text=%2AAssalamualaikum.+Wr.+Wb.%2A+Kak%2C+Saya+mau+ikut+Acara+Ramadhan%0A%0A%2ANama%3A%0A%2AUsia%3A%0A%2ASekolah%3A%0A%2AAsal+kota%3A%0A&app_absent=0"
//let urlDaftar = "https://api.whatsapp.com/send/?phone=6282157720748&text=%2AAssalamualaikum.+Wr.+Wb.%2A+Kak%2C+Saya+mau+ikut+Acara+Influencer+Youth+Muslim+Teman+Surga+Banjarmasin%0A%0A%2ANama%3A%0A%2AKelas%3A%0A%2AJurusan%3A%0A%2AAsal+sekolah%3A%0A&app_absent=0"
let intervalSpeed = 10;
let delayRandom = 5000;

// effects
var effectShake = 'headShake'
var effectTada = 'tada'
var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd'

for (var i = 0; i <= totalImage; i++) {
    image_array[i] = i + ".jpg";
}

document.getElementById('image_shower').onclick = function () {
    console.log('You clicked');
    get_random_image();
}

document.getElementById('btn').onclick = function () {
    console.log('You clicked btn');
    // window.open("https://www.w3schools.com");
    // get_random_image();
}

function get_random_image() {
    console.log("getRandomImage");
    // preventMultipleClick()
    const img = document.getElementById('image_shower')
    const button = document.getElementById('btn')

    if (isFirstTime) {
        console.log("isFirstTime");
        img.onclick = false;
        button.style.visibility = 'hidden'
        button.innerText = "Lagi di acak";
        button.classList.remove("btn-danger")
        button.classList.add("btn-success")

        startRandomImage()

        setTimeout(function () {
            // Play effect shake
            console.log("TimeOut End");
            clearInterval(interval)
            interval = null;
            button.innerText = "Daftar";
            button.style.visibility = 'visible'
            isFirstTime = false;

            startAnimation(img, effectTada)

            // Play Audio
            var audio = new Audio('finish.ogg');
            audio.play();
        }, delayRandom);
    } else {
        console.log("is not first time");
        window.location = urlDaftar;
    }
}

function startRandomImage() {
    console.log("Random Start");
    interval = setInterval(function () {
        // start animation
        const img = document.getElementById('image_shower')
        startAnimation(img, effectShake)
        // stopAnimation(img, effectShake)
        // Genarate image number
        const imageNumber = Math.floor(Math.random() * image_array.length);
        // Show image with the generated number
        if (image_array[imageNumber] != "0.jpg") {
            document.getElementById('image_shower').src = `./images/${image_array[imageNumber]}`
        }
    }, intervalSpeed);
}

function startAnimation(view, anim) {
    view.classList.add("animated")
    view.classList.add(anim)
    view.classList.add("forever")
}

function stopAnimation(view, anim) {
    view.classList.remove("animated")
    view.classList.remove(anim)
    view.classList.remove("forever")
}
