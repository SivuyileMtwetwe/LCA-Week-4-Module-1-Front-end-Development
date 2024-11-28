const spellArea = document.getElementById('spellArea');
const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const ingredientsList = document.getElementById('ingredientsList');
const halloweenSound = document.getElementById('halloweenSound')
const evilLaugh = document.getElementById('evilLaugh')

generateButton.addEventListener('click', () => {
    
    function countdown(callback) {
        let count = 3;
        const countdownInterval = setInterval(() => {
            if (count > 0) {
                spellArea.textContent = count;
                count--;
            } else {
                clearInterval(countdownInterval);
                callback();
            }
        }, 1000);
    }
    countdown(() => {
        const ingredients = ingredientsList.getElementsByTagName('li');
        const randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)].textContent; 
        const randomColor = `hsl(${Math.random() * 360}, 50%, 70%)`;
        
        spellArea.textContent = `Spell: ${randomIngredient}!`;
        spellArea.style.backgroundColor = randomColor;

    });
});


resetButton.addEventListener('click', () => {
    spellArea.textContent = '';
});

window.addEventListener('load', () => {
    const halloweenSound = document.getElementById('halloweenSound');
    
    
    const playSound = () => {
        halloweenSound.currentTime = 0;
        
       
        const playPromise = halloweenSound.play();
        
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                
                console.log('Sound played on load');
            }).catch((error) => {
                
                console.warn('Autoplay blocked:', error);
                
                
                const enableSound = () => {
                    halloweenSound.play();
                    
                    document.removeEventListener('click', enableSound);
                };
                
                document.addEventListener('click', enableSound);
            });
        }
    };

    
    playSound();
});