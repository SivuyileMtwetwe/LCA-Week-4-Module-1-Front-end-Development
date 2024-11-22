const fetchData = async (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch("https://sivuyilemtwetwe.github.io/LCA-Week-4-Module-1-Front-end-Development/");
          const data = await response.json();
  
          
          const users = data.users;
  
          
          const filteredData = users.filter(user => user.id === userId);
  
          if (filteredData.length > 0) {
            resolve(filteredData[0]);
          } else {
            reject(new Error("User not found"));
          }
        } catch (error) {
          reject(error);
        }
      }, 1500); 
    });
  };
  
fetchData(5) 
    .then(userData => {
      console.log("Fetched user data:", userData);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

