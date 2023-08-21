document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("imageInput");
    const userImage = document.getElementById("userImage");
    const addImageButton = document.getElementById("addImageButton");

    addImageButton.addEventListener("click", function () {
        imageInput.click();
    });

    imageInput.addEventListener("change", function (event) {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            
            reader.onload = function () {
                userImage.src = reader.result;
            };
            
            reader.readAsDataURL(selectedFile);
        }
    });
});

