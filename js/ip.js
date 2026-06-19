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

            // clear
            targetElement.innerHTML = "";

            // helper to add a line
            function addLine(text) {
                const div = document.createElement("div");
                div.textContent = text;
                targetElement.appendChild(div);
            }

            // 1. system state
            addLine("ANALYST: SYSTEM");

            // 2. fake “:)” state
            setTimeout(() => {
                targetElement.innerHTML = "";
                addLine("ANALYST: :)");

                // 3. final data reveal
                setTimeout(() => {
                    targetElement.innerHTML = "";
                    addLine(`IP: ${ipValue}`);
                    addLine(`LOC: ${cityValue}`);
                    addLine(`ISP: ${ispValue}`);
                }, 1200);

            }, 1200);

        } catch (error) {
            targetElement.textContent = "ANONYMOUS_PROXY [SECURE_NODE]";
        }
    }, 3000);
}

getVisitorData();