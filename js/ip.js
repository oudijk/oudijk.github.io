async function getVisitorData() {
    const targetElement = document.getElementById('GetVisitorIP');

    setTimeout(async () => {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error('Network error');

            const data = await response.json();

            const ipValue = data.ip || "UNKNOWN";
            const cityValue = data.city || "UNKNOWN_CITY";
            const ispValue = data.org || "UNKNOWN_ISP";

            const finalString =
`IP: ${ipValue}
LOC: ${cityValue}
ISP: ${ispValue}`;

            // STEP 1 already in HTML: SYSTEM

            // STEP 2: :)
            setTimeout(() => {
                typeEffect(targetElement, ":)", 100);
            }, 800);

            // STEP 3: FINAL DATA
            setTimeout(() => {
                typeEffect(targetElement, finalString, 80);
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
            element.textContent += text.charAt(index++);
            setTimeout(type, speedInMs);
        }
    }

    type();
}

getVisitorData();