// Notification permission and display
Notification.requestPermission().then((res) => {
    if (res === "granted") {
        const notification = new Notification("Welcome To My Portfolio 💓", {
            icon: "IMG-20230719-WA0007.jpg",
            body: "Haiii 🤍😊💓"
        });
    }
});

// Handle preloader


// Device width and height
let width = window.innerWidth;
let height = window.innerHeight;

let widthElement = document.querySelector(".width");
let heightElement = document.querySelector(".height");

if (widthElement) widthElement.textContent = "Device Width: " + width + "px";
if (heightElement) heightElement.textContent = "Device Height: " + height + "px";

// Contact form submission using Formspree
document.querySelector("#c-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let email = data.get("email");
    let message = data.get("message");

    fetch('https://formspree.io/f/xanjqnny', {
        method: 'POST',
        mode: 'no-cors',
        body: data
    })
    .then(() => {
        showToast(`✔️ Email sent!\nEmail: ${email}\nMessage: ${message}`);
        setTimeout(launchConfetti, 600);
    });
});

// Toast function
function showToast(text) {
    let toast = document.createElement("div");
    toast.innerText = text;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.padding = "15px";
    toast.style.background = "#4BB543";
    toast.style.color = "white";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    toast.style.zIndex = "9999";
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// Toggle background color
function demo() {
    let red = Math.floor(Math.random() * 100);
    let green = Math.floor(Math.random() * 100);
    let blue = Math.floor(Math.random() * 100);
    let random = `rgb(${red},${green},${blue})`;
    document.querySelector("body").style.backgroundColor = random;
}

// Scroll to top functionality
let icon = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        icon.classList.add("active");
    } else {
        icon.classList.remove("active");
    }
});

// Display current date
const date = new Date();
let dateElement = document.querySelector(".date");
if (dateElement) dateElement.textContent = `Today is ${date.toLocaleDateString()}`;

// Display current time
let CT = document.querySelector(".time");

if (CT) {
    setInterval(() => {
        const currentTime = new Date();
        const formattedTime = "Current Time is: " + currentTime.toLocaleTimeString();
        CT.innerHTML = formattedTime;
    }, 1000);
}

// Display device information
let DF = document.querySelector(".browser");

if (DF) {
    if (navigator.userAgentData) {
        const deviceName = navigator.userAgentData.brands[0].brand;
        DF.innerHTML = "Device Name: " + deviceName;
    } else {
        const userAgent = navigator.userAgent;
        const match = userAgent.match(/\((.*?)\)/);
        if (match && match.length > 1) {
            const deviceInfo = match[1];
            DF.innerHTML = "Your Device Name Is: " + deviceInfo;
        } else {
            DF.innerHTML = "Unable to Find Device Info";
        }
    }
}

// Display battery information
let dis = document.querySelector(".battery");

if (dis) {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            updateBatteryStatus(battery);

            battery.addEventListener('levelchange', function () {
                updateBatteryStatus(battery);
            });

            function updateBatteryStatus(battery) {
                const batteryPercentage = battery.level * 100;
                dis.innerHTML = `Battery Percentage: ${batteryPercentage.toFixed(2)}%`;
            }
        });
    } else {
        dis.innerHTML = "Battery API is not supported by your browser.";
    }
}

// Greeting based on time of day
let goodmorning = document.querySelector(".current");

if (goodmorning) {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        goodmorning.textContent = "Good morning 🌄!";
    } else if (hour >= 12 && hour < 17) {
        goodmorning.textContent = "Good afternoon 😋!";
    } else if (hour >= 17 && hour < 22) {
        goodmorning.textContent = "Good evening 🌆!";
    } else {
        goodmorning.textContent = "Good night 🌙!";
    }
}



// Typing animation using Typed.js
var typed = new Typed('#element', {
    strings: [' Digital Explorer 🌐...', ' Self-Taught Developer 📘...', ' Web Designer 💕...'],
    typeSpeed: 50,
    loop: true
});

// Vibration function
function vibrate(ms) {
    navigator.vibrate(ms);
}

// Leaflet map with user location
let map = L.map('map');

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var userLat = position.coords.latitude;
        var userLng = position.coords.longitude;

        map.setView([userLat, userLng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var marker = L.marker([userLat, userLng]).addTo(map);
        marker.bindPopup("<b>Your Location ❤️</b>").openPopup();
    });
} else {
    alert('Geolocation is not supported by your browser.');
}

// Dialog box handling
let tag = document.querySelector("#myDialog");

function openpop() {
    if (tag) tag.showModal();
}

function closepop() {
    if (tag) tag.close();
}

// Visibility change handling
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        console.log("Tab is hidden");
    } else {
        console.log("Tab is visible");
        Notification.requestPermission().then((res) => {
            if (res === "granted") {
                const notification = new Notification("Welcome back to the page!", {
                    icon: "IMG-20230719-WA0007.jpg",
                    body: "Glad to have you back 💓!"
                });
            }
        });
    }
});

// Scroll to top functionality
function along() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Confetti launch function
function launchConfetti() {
    const duration = 1* 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 9999,
        scalar: 2
    };

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        confetti(Object.assign({}, defaults, {
            particleCount: 100,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random()
            }
        }));
    }, 250);
}

// Particle.js setup
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 40,
                size_min: 0.1
            }
        },
        links: {
            enable: true,
            distance: 150,
            color: '#ffffff'
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out'
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            }
        }
    }
});
