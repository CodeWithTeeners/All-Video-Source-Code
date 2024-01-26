const image = document.getElementById("profileImage");
const input = document.getElementById("fileInput");
const removeButton = document.getElementById("removeButton");

// Check if there's a saved image in localStorage
const savedImage = localStorage.getItem("profileImage");
if (savedImage) {
  image.src = savedImage;
  removeButton.style.display = "block"; // Show remove button if there's a saved image
}

input.addEventListener("change", () => {
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      image.src = reader.result;
      removeButton.style.display = "block"; // Show remove button when a new image is selected

      // Save the image in localStorage
      localStorage.setItem("profileImage", reader.result);
    };

    reader.readAsDataURL(file);
  }
});

// Add click event for the image to show a larger preview
image.addEventListener("click", () => {
  showImagePreview(image.src);
});

// Add click event for the remove button
removeButton.addEventListener("click", () => {
  localStorage.removeItem("profileImage"); // Remove the image from localStorage
  image.src = "img.png"; // Set a default image or empty string based on your requirements
  removeButton.style.display = "none"; // Hide the remove button
  input.value = ""; // Clear the file input
});

// Function to show a larger image preview in a popup
function showImagePreview(src) {
  const previewPopup = window.open("", "Image Preview", "width=600,height=600");
  previewPopup.document.write(
    `<img src="${src}" style="width:100%;height:100%;" alt="Image Preview">`
  );
}
