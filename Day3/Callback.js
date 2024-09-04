function fetchData(callback) {
    setTimeout(() => {
      const data = "Data fetched successfully!";
      callback(data); // Call the callback function with the fetched data
    }, 2000); // Simulates a 2-second delay
  }
  
  function displayData(data) {
    console.log(data);
  }
  
  fetchData(displayData); // Pass displayData as the callback
  