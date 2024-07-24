function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const h1 = document.querySelector('h1');

const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));


const spinner = ['|', '/', '-', '\\'];
function h1reset() {
    h1.innerHTML = "Tamwyn's Portfolio";
}

async function displayAnimation(frames) {
    let currentFrame = 0;
    for (let i = 0; i < 10; i++) {
        currentFrame = (currentFrame + 1) % frames.length;
        h1.innerHTML = "Tamwyn's Portfolio " + frames[currentFrame];
        await sleepNow(400); // Adjust the delay to control the speed of the animation
    }
    h1reset();
}

async function changingCharacterO() {
    let currentFrame = 0;
    for (let i = 0; i < 4; i++) {
        if(i%2 === 0) {
            h1.innerHTML = "Tamwyn's P_rtfolio";
        } else {
        h1.innerHTML = "Tamwyn's Portfolio";
        }
        await sleepNow(800); // Adjust the delay to control the speed of the animation
    }
    h1reset();
}


async function nextTitleEffectOccurence() {
    while (true) {
        let delaytitle = getRndInteger(4000, 10000);
        await sleepNow(delaytitle);
        console.log('delay:', delaytitle);
        random = getRndInteger(0, 2);
        console.log('random:', random);
        switch(random) {
            case 0:
                displayAnimation(spinner);
                break;
            case 1:
                changingCharacterO();
                break;
            default:
                displayAnimation(spinner);
        }
    }
}

nextTitleEffectOccurence();