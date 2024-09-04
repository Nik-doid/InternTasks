function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error fetching data.");
        }
      }, 2000); // Simulates a 2-second delay
    });
  }
  
  fetchData()
    .then((result) => {
      console.log(result); // Logs "Data fetched successfully!" after 2 seconds
    })
    .catch((error) => {
      console.error(error); // Logs an error if the promise is rejected
    });
  