const photoSearch = document.getElementById("search");

photoSearch.addEventListener("keyup", e => {
    let currentValue = e.target.value.toLowerCase();
    let photos = document.querySelectorAll("img");

    photos.forEach(photo => {
        const caption = photo.getAttribute('data-caption');
        if (caption.toLowerCase().includes(currentValue)) {
            photo.style.display = "block";
        } else {
            photo.style.display = "none";
        }
    });
});