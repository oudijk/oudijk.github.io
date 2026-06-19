async function getVisitorData() {
    const label = document.getElementById('analystLabel');
    const targetElement = document.getElementById('GetVisitorIP');

    setTimeout(async () => {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error();

            const data = await response.json();

            const ipValue = data.ip || "UNKNOWN";
            const cityValue = data.city || "UNKNOWN_CITY";
            const ispValue = data.org || "UNKNOWN_ISP";

            const finalString =
`IP: ${ipValue}
LOC: ${cityValue}
ISP: ${ispValue}`;

            setTimeout(() => {
                typeEffect(targetElement, ":)", 80);
            }, 800);

            setTimeout(() => {
                label.parentElement.style.display = "none";
                typeEffect(targetElement, finalString, 60);
            }, 2000);

        } catch (error) {
            label.textContent = "";
            typeEffect(targetElement, "ANONYMOUS_PROXY", 150);
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