async function fetchPlayer() {
    const playerName = document.getElementById("playerName").value;

    try {
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(playerName)}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const playerPhoto = data.thumbnail?.source;

        const imagePlayer = document.getElementById("playerPhoto");

        imagePlayer.src = playerPhoto;
        imagePlayer.style.display = "block";
    } 
    catch (error) {
        console.error(error);
    }
}
