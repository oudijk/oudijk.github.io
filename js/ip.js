async function getVisitorData() {
    const targetElement = document.getElementById('GetVisitorIP');
    
    typeEffect(targetElement, "SYSTEM", 80);

    setTimeout(async () => {
        try {
            const response = await fetch('https://ipwhois.app');
            if (!response.ok) throw new Error();
            
            const data = await response.json();
            
            if (data.ip && data.city && data.country_code) {
                const fullString = `${data.ip} [${data.city}, ${data.country_code}]`;
                typeEffect(targetElement, fullString, 120);
                return;
            }
            throw new Error();

        } catch (primaryError) {
            try {
                const backupResponse = await fetch('https://freeipapi.com');
                if (!backupResponse.ok) throw new Error();
                
                const backupData = await backupResponse.json();
                if (backupData.ipAddress && backupData.cityName && backupData.countryCode) {
                    const backupString = `${backupData.ipAddress} [${backupData.cityName}, ${backupData.countryCode}]`;
                    typeEffect(targetElement, backupString, 120);
                    return;
                }
                throw new Error();

            } catch (backupError) {
                typeEffect(targetElement, "SYSTEM", 200);
            }
        }
    }, 2000);
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