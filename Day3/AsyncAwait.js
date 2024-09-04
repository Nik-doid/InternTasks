// Simulate an asynchronous task using a promise
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000); // Simulates a 2-second delay
    });
  }
  
  async function displayData() {
    console.log("Fetching data...");
  
    try {
      const data = await fetchData(); // Wait for fetchData() to complete
      console.log(data); // Logs the result after 2 seconds
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
    console.log("After fetching data");
  }
  
  displayData();
  