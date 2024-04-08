// // Add your code here
// function submitData(name, email) {
//     const formData = {
//       name: name,
//       email: email
//     };
  
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': 'Bearer YOUR_AUTH_TOKEN' // Replace YOUR_AUTH_TOKEN with your actual token
//       },
//       body: JSON.stringify(formData)
//     };
  
//     fetch('http://localhost:3000/users', requestOptions)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle successful response
//         console.log(data);
//         // Append the new id value to the DOM
//         const idElement = document.createElement('p');
//         idElement.textContent = `New ID: ${data.id}`;
//         document.body.appendChild(idElement);
//       })
//       .catch(error => {
//         // Handle failed request
//         console.error('Error:', error);
//         // Append the error message to the DOM
//         const errorElement = document.createElement('p');
//         errorElement.textContent = `Error: ${error.message}`;
//         document.body.appendChild(errorElement);
//       });
//   }

  
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(parsedData => {
    const newId = parsedData.id;
    const idElement = document.createElement('p');
    idElement.textContent = `New ID: ${newId}`;
    document.body.appendChild(idElement);
  })
  .catch(error => {
    const errorMessage = error.message;
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorElement);
  });
}