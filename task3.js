const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
 
  ]

function sortUsersByAge(users) {
   
    const sortedUsers = users.sort((a, b) => a.age - b.age);
    return sortedUsers;
  }

console.log(sortUsersByAge(users))





  