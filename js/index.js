const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonAddMinutes = document.querySelector('.add-minutes');
const buttonSubtractMinutes = document.querySelector('.subtract-minutes');
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countdown() {
    setTimeout(function() {

        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);  
        let finish = minutes <= 0 && seconds <= 0;

        updateDisplay(minutes, 0);

        if( finish ) {
            pauseSounds();
           
            return
        }       
        
        if( seconds <= 0 ) {
            seconds = 60;
            --minutes;
        }
        
        updateDisplay(minutes,  String(seconds - 1));
        
        countdown();
    }, 1000);
}

buttonPlay.addEventListener('click', ()=> {
    countdown();  
});

buttonStop.addEventListener('click', ()=> {
    secondsDisplay.textContent = "00";
    minutesDisplay.textContent = "00";
    pauseSounds();
});

buttonAddMinutes.addEventListener('click', ()=> {
    let minutes = Number(minutesDisplay.textContent); 
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
})

buttonSubtractMinutes.addEventListener('click', ()=> {
    let minutes = Number(minutesDisplay.textContent); 
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")

    if( minutes <= 0 ) {
        minutesDisplay.textContent = "00";
    }
})


const buttonForestOff = document.querySelector('.buttonForest-off');
    const buttonForestOn = document.querySelector('.buttonForest-on');
    const buttonRainOff = document.querySelector('.buttonRain-off');
    const buttonRainOn = document.querySelector('.buttonRain-on');
    const buttonFireOff = document.querySelector('.buttonFire-off');
    const buttonFireOn = document.querySelector('.buttonFire-on');
    const buttonCoffeeShopOff = document.querySelector('.buttonCoffeeShop-off');
    const buttonCoffeeShopOn = document.querySelector('.buttonCoffeeShop-on');
    
    const audioRain = new Audio("./assets/audio/Chuva.wav");
    const audioForest = new Audio("./assets/audio/Floresta.wav");
    const audioFire = new Audio("./assets/audio/Lareira.wav");
    const audioCoffeeShop = new Audio("./assets/audio/Cafeteria.wav");
    
    audioForest.loop = true;
    audioRain.loop = true;
    audioCoffeeShop.loop = true;
    audioFire.loop = true;
    
    function pauseSounds() {
        audioForest.pause();
        buttonForestOff.classList.remove('hide');
        buttonForestOn.classList.add('hide');
        audioRain.pause();
        buttonRainOff.classList.remove('hide');
        buttonRainOn.classList.add('hide');
        audioFire.pause();
        buttonFireOff.classList.remove('hide');
        buttonFireOn.classList.add('hide');
        audioCoffeeShop.pause();
        buttonCoffeeShopOff.classList.remove('hide');
        buttonCoffeeShopOn.classList.add('hide');
    }
    
    buttonForestOff.addEventListener('click', ()=> {
        audioForest.play();
        buttonForestOff.classList.add('hide')
        buttonForestOn.classList.remove('hide')
    });
    
    buttonForestOn.addEventListener('click', ()=> {
        audioForest.pause();
        buttonForestOff.classList.remove('hide')
        buttonForestOn.classList.add('hide')
    });
    
    buttonRainOff.addEventListener('click', ()=> {
        audioRain.play();
        buttonRainOff.classList.add('hide')
        buttonRainOn.classList.remove('hide')
    });
    
    buttonRainOn.addEventListener('click', ()=> {
        audioRain.pause();
        buttonRainOff.classList.remove('hide')
        buttonRainOn.classList.add('hide')
    });
    
    buttonFireOff.addEventListener('click', ()=> {
        audioFire.play();
        buttonFireOff.classList.add('hide')
        buttonFireOn.classList.remove('hide')
    });
    
    buttonFireOn.addEventListener('click', ()=> {
        audioFire.pause();
        buttonFireOff.classList.remove('hide')
        buttonFireOn.classList.add('hide')
    });
    
    buttonCoffeeShopOff.addEventListener('click', ()=> {
        audioCoffeeShop.play();
        buttonCoffeeShopOff.classList.add('hide')
        buttonCoffeeShopOn.classList.remove('hide')
    });
    
    buttonCoffeeShopOn.addEventListener('click', ()=> {
        audioCoffeeShop.pause();
        buttonCoffeeShopOff.classList.remove('hide')
        buttonCoffeeShopOn.classList.add('hide')
    });

