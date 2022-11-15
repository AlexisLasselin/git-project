const avatarElement = document.querySelector("#avatar");
const avatarImage = document.querySelector("#avatar-preview");
const errorOut = document.querySelector("#error-output");

avatarElement.addEventListener("change", function () {
    errorOut.style.display = "none";
    const selImage = avatarElement.files[0];
    if (selImage.size <= (100 * 1024) && (selImage.type.startsWith("image/"))) {
        const imgReader = new FileReader();
        imgReader.readAsDataURL(selImage);
        imgReader.addEventListener("load", function () {
            avatarImage.src = imgReader.result;
        });         
        } else {
        errorOut.textContent = "File size is too large or not a valid image file";
        errorOut.style.display = "block";
    }

    console.log(avatarElement.files);
});