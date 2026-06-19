async function getVisitorIP() {
    try {
        const response = await fetch('https://ipify.org');
        const data = await response.json();
        
        document.getElementById('GetVisitorIP').textContent = data.ip;
    } catch (error) {
        document.getElementById('GetVisitorIP').textContent = "SYSTEM";
        console.error('Fout bij ophalen IP:', error);
    }
}
getVisitorIP();