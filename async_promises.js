// const fetchData = async (userId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       try {
//         const response = await fetch(
//           "https://sivuyilemtwetwe.github.io/LCA-Week-4-Module-1-Front-end-Development/"
//         );
//         const data = await response.json();

//         const users = data.users;

//         console.log(users);

//         users.forEach((item) => {
//           console.log(
//             `Hi, my name is ${item.name} and I am employee number ${item.id}. You can email me on ${item.email}. I was employed and started working from ${item.registrationDate}`
//           );
//         });

//         const filteredData = users.filter((user) => user.id === userId);

//         if (filteredData.length > 0) {
//           resolve(filteredData[0]);
//         } else {
//           reject(new Error("User not found"));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     }, 1500);
//   });
// };

// fetchData(1);




const fetchPosts = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(
           " https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        const posts = data;

        console.log(posts);

        users.forEach((item) => {
          console.log(item.body

          );
        });

//         const filteredData = posts.filter((user) => console.log(user) );
// console.log(filteredData);
        // if (filteredData.length > 0) {
        //   resolve(filteredData[0]);
        // } else {
        //   reject(new Error("User not found"));
        // }
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

fetchPosts();




