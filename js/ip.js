async function getVisitorData() {
    const targetElement = document.getElementById('GetVisitorIP');

    setTimeout(async () => {
        try {
            const response = await fetch('https://1.1.1');
            if (!response.ok) throw new Error();
            
            const text = await response.text();
            const lines = text.split('\n');
            
            const ipLine = lines.find(line => line.startsWith('ip='));
            const locLine = lines.find(line => line.startsWith('loc='));
            
            if (ipLine) {
                const ipValue = ipLine.split('=')[1];
                const locValue = locLine ? locLine.split('=')[1] : "UNKNOWN";
                const fullString = `${ipValue} [NODE_${locValue}]`;
                
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
