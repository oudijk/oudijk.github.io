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

            const lines = [
                ["ANALYST:", "SYSTEM"],
                ["ANALYST:", ":)"],
                ["IP:", ipValue],
                ["LOC:", cityValue],
                ["ISP:", ispValue],
                ["CLEARANCE:", "PUBLIC"]
            ];

            targetElement.innerHTML = "";

            let i = 0;

            function renderLine() {
                if (i >= lines.length) return;

                const [label, value] = lines[i];

                const line = document.createElement("div");
                line.innerHTML = `
                    <span class="meta-label">${label}</span>
                    <span class="meta-value">${value}</span>
                `;

                targetElement.appendChild(line);

                i++;
                setTimeout(renderLine, 350);
            }

            renderLine();

        } catch (error) {
            targetElement.innerHTML = "";
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