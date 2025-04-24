(async () => {
    try {
        const response = await fetch('https://moosyu.leprd.space/index.php');
        const data = await response.json();
        document.getElementById('hit-counter').textContent = data.views;
    } catch (error) {
        console.error("Fetching hit count failed:", error);
    }
})();