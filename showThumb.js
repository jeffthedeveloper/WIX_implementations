function mostrarThumb() {
    const reader = new FileReader();
    const imagem = document.getElementById("imagem").files[0];

    reader.onload = function (event) {
        const img = document.createElement('img');
        img.src = event.target.result;

        // Set desired width and height for the thumbnail
        img.width = 200;

        const area = document.getElementById("area");
        area.innerHTML = ""; // Clear any previous image
        area.appendChild(img);
    };

    reader.readAsDataURL(imagem);
}

document.getElementById("imagem").addEventListener("change", mostrarThumb);
