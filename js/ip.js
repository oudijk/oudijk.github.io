async function getVisitorData() {
    const targetElement = document.getElementById('GetVisitorIP');
    const apiUrl = "https://freeipapi.com";

    setTimeout(async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error();
            
            const data = await response.json();
            
            if (data.ipAddress && data.cityName && data.countryCode) {
                const fullString = `${data.ipAddress} [${data.cityName.toUpperCase()}, ${data.countryCode}]`;
                
                typeEffect(targetElement, "FOUND YOU...", 120);
                
                setTimeout(() => {
                    typeEffect(targetElement, fullString, 120);
                }, 2000);
                
                return;
            }
            throw new Error();

        } catch (error) {
            typeEffect(targetElement, "ANONYMOUS_PROXY [SECURE_NODE]", 150);
        }
    }, 5000);
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

getVisitorData();
