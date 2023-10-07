const apiKey = "live_qDykMXf6vRIgZpZWvhqqjvpllRs5c3m921G35jkI6S4G0bdyJoZscfWaexBvZAOx";
const apiUrl = "https://api.thecatapi.com/v1/images/search";

function fetchCatImage() {
    fetch(apiUrl, {
        headers: {
            "x-api-key": apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const catImage = data[0].url;
        document.getElementById("cat-image").src = catImage;
    })
    .catch(error => console.error("Erro ao obter imagem de gato:", error));
}

function loadRandomCatImage() {
    fetchCatImage();
    setInterval(fetchCatImage, 7000);
}

loadRandomCatImage();