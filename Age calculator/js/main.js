document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultBox = document.querySelector('.result-box');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      calculateAge();
    });
  
    function calculateAge() {
      const day = parseInt(document.getElementById('day').value) || 0;
      const month = parseInt(document.getElementById('month').value) || 0;
      const year = parseInt(document.getElementById('year').value) || 0;
  
      if (!isValidDate(year, month, day)) {
        displayError('Invalid date. Please enter a valid date.');
        return;
      }
  
      const currentDate = new Date();
      const birthDate = new Date(year, month - 1, day);
  
      const ageInMilliseconds = currentDate - birthDate;
  
      const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
      const ageInMinutes = Math.floor(ageInSeconds / 60);
      const ageInHours = Math.floor(ageInMinutes / 60);
      const ageInDays = Math.floor(ageInHours / 24);
  
      const years = Math.floor(ageInDays / 365);
      const remainingDays = ageInDays % 365;
      const months = Math.floor(remainingDays / 30);
  
      displayResult(years, months, remainingDays);
    }
  
    function isValidDate(year, month, day) {
      const inputDate = new Date(year, month - 1, day);
      return (
        !isNaN(inputDate.getTime()) &&
        inputDate.getFullYear() === year &&
        inputDate.getMonth() === month - 1 &&
        inputDate.getDate() === day
      );
    }
  
    function displayError(message) {
      resultBox.innerHTML = `<p class="error">${message}</p>`;
    }
  
    function displayResult(years, months, days) {
      resultBox.innerHTML = `
        <p class="result-data"><span>${years}</span> years</p>
        <p class="result-data"><span>${months}</span> months</p>
        <p class="result-data"><span>${days}</span> days</p>
      `;
    }
  });
  