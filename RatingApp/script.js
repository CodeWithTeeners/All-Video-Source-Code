document.addEventListener("DOMContentLoaded", function () {
  var ratings = document.querySelectorAll(".ratings span");

  ratings.forEach(function (span) {
    span.addEventListener("click", function () {
      // Remove 'active' class from all spans
      ratings.forEach(function (innerSpan) {
        innerSpan.classList.remove("active");
      });

      // Add 'active' class to the clicked span
      span.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get necessary elements
  const ratingSection = document.querySelector(".rating_section");
  const thankSection = document.querySelector(".thank_section");
  const ratingSpans = document.querySelectorAll(".ratings span");
  const submitButton = document.querySelector(".submit_btn");
  const rateDisplay = document.getElementById("rate");

  // Add click event listener to the submit button
  submitButton.addEventListener("click", function () {
    // Find the selected rating
    let selectedRating = 0;
    ratingSpans.forEach((span, index) => {
      if (span.classList.contains("selected")) {
        selectedRating = index + 1;
      }
    });

    // Hide the rating section and show the thank you section
    ratingSection.style.display = "none";
    thankSection.style.display = "block";

    // Display the selected rating in the thank you section
    rateDisplay.textContent = selectedRating;

    // Update the thank you message with the selected rating
    const thankYouMessage = document.querySelector(
      ".thank_section .description"
    );
    thankYouMessage.innerHTML = `You selected ${selectedRating} out of 5. We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
  });

  // Add click event listener to the rating spans for selection
  ratingSpans.forEach((span) => {
    span.addEventListener("click", function () {
      // Remove the 'selected' class from all spans
      ratingSpans.forEach((s) => s.classList.remove("selected"));
      // Add the 'selected' class to the clicked span
      span.classList.add("selected");
    });
  });
});
