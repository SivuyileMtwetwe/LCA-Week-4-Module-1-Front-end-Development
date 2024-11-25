const fetchData = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://sivuyilemtwetwe.github.io/LCA-Week-4-Module-1-Front-end-Development/"
        );
        const data = await response.json();

        const users = data.users;

        console.log(users);

        users.forEach((item) => {
          console.log(
            `Hi, my name is ${item.name} and I am employee number ${item.id}. You can email me on ${item.email}. I was employed and started working from ${item.registrationDate}`
          );
        });

        const filteredData = users.filter((user) => user.id === userId);

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

fetchData(1);



const fetchPosts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        console.log("All posts:", data);


        const filteredData = data.filter((post) => post.userId === 1);

        console.log("Filtered posts:", filteredData);

        if (filteredData.length > 0) {
          resolve(filteredData[0]);
        } else {
          reject(new Error("No posts found for the specified condition"));
        }
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

fetchPosts()
  .then((post) => console.log("First filtered post:", post))
  .catch((error) => console.error("Error:", error));




  const fetchUserAndPosts = async (userId) => {
    try {
     
      const user = await fetchData(userId);
      console.log("User data fetched:", user);
  
    
      const posts = await fetchPosts();
      console.log("Posts data fetched:", posts);
  
      
      const result = {
        user,
        posts,
      };
  
      console.log("Combined Data:", result);
      return result;
    } catch (error) {
      
      console.error("Error occurred:", error.message);
      throw error; 
    }
  };
  

  fetchUserAndPosts(1)
    .then((combinedData) => console.log("Final combined object:", combinedData))
    .catch((error) => console.error("Error in fetching user and posts:", error));  


    const fetchMultipleUsers = async (userIds) => {
      try {
        console.log("Starting to fetch multiple users in parallel...");
    
      
        const userPromises = userIds.map(async (userId) => {
          try {
            const user = await fetchData(userId);
            console.log(`User fetched successfully (ID: ${userId}):`, user);
            return user;
          } catch (error) {
            console.error(`Error fetching user (ID: ${userId}):`, error.message);
            return null; 
          }
        });
    
     
        const users = await Promise.all(userPromises);
    
  
        const successfulUsers = users.filter((user) => user !== null);
        console.log("Successfully fetched users:", successfulUsers);
    
        return successfulUsers;
      } catch (error) {
        console.error("Unexpected error during fetching multiple users:", error.message);
        throw error; 
      }
    };
    
    (async () => {
      const userIds = [1, 2, 3, 4, 5];
      try {
        const users = await fetchMultipleUsers(userIds);
        console.log("Final result - Successfully fetched users:", users);
      } catch (error) {
        console.error("Error in fetching multiple users:", error);
      }
    })();
    