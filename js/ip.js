async function getVisitorData() {
    const targetElement = document.getElementById('GetVisitorIP');

    setTimeout(async () => {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error('Network error');

            const data = await response.json();

            const ipValue = data.ip || "UNKNOWN";
            const cityValue = data.city || "UNKNOWN_CITY";
            const regionValue = data.region || "UNKNOWN_REGION";
            const ispValue = data.org || "UNKNOWN_ISP";

            const fullString =
            `\nIP: ${ipValue}\nLOC: ${cityValue}\nISP: ${ispValue}`;
            typeEffect(targetElement, "ANALYST: :)", 120);

            setTimeout(() => {
                typeEffect(targetElement, fullString, 120);
            }, 2000);

        } catch (error) {
            typeEffect(targetElement, "ANONYMOUS_PROXY [SECURE_NODE]", 150);
        }
    }, 3000);
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