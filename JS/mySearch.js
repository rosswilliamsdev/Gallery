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













// function search() {
//     let searchInput = document.getElementById("search").value;
//     searchInput = searchInput.toLowerCase();

//     const imageArr = [];
//     let image, result;

//     let images = document.querySelectorAll("img");
//     let links = document.getElementsByTagName("a");

//     for (let i = 0; i<12; i++) {
//         imageArr.push(images[i].image)
//     }

//     for (let i = 0; i<imageArr.length; i++) {
//        image = imageArr[i];
//        result = image.includes(searchInput);

//        if (!result) {
//         images[i].style.display = "none";
//         links[i].style.order = "-1";
//        } else {
//         images[i].style.display = "block";
//         links[i].style.display = "1";
//        }
//     }
// }