function getTodaysDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
}

function typeEffect(element, text, speedInMs) {
    let index = 0;
    element.textContent = ""; 
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speedInMs);
        }
    }
    type();
}

typeEffect(document.getElementById('GetTodaysDate'), getTodaysDate(), 120);