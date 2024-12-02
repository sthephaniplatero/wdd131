// Function to display the wind chill factor
function displayWindChill() {
    // Get the static values from the weather section
    const temperature = parseFloat(document.getElementById("temperature").textContent); // °C
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent); // km/h
    
    // Check if the conditions are met
    if (temperature <= 10 && windSpeed > 4.8) {
      // Calculate wind chill and display it
      const windChill = calculateWindChill(temperature, windSpeed);
      document.getElementById("windChill").textContent = `${windChill} °C`;
    } else {
      // Display "N/A" if conditions are not met
      document.getElementById("windChill").textContent = "N/A";
    }
  }
  
  // Call the displayWindChill function when the page loads
  document.addEventListener("DOMContentLoaded", displayWindChill);