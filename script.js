
const selfieInput = document.getElementById('selfie');
const preview = document.getElementById('preview');

selfieInput.addEventListener('change', function(event) {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});



// function saveFormData() {
//     // Get the form elements
//     const nameInput = document.getElementById("name");
//     const phoneInput = document.getElementById("mobile");
//     const emailInput = document.getElementById("email");
//     const ageInput = document.getElementById("age");
  
//     // Validate the inputs (optional)
//     // ...
  
//     // Create an object to store the data
//     const formData = {
//       name: nameInput.value,
//       phone: phoneInput.value,
//       email: emailInput.value,
//       age: ageInput.value,
//     };
  
//     // Convert the object to JSON string
//     const jsonData = JSON.stringify(formData);
  
//     // Save the data in local storage
//     localStorage.setItem("formdata", jsonData);
  
//     // Show success message (optional)
//     alert("Your data has been saved!");
//   }
  
//   // Attach the `saveFormData` function to the form's submit event
//   const form = document.getElementById("registration-form");
//   form.addEventListener("submit", saveFormData);
  

// import { existsSync, mkdirSync, writeFileSync } from 'fs';
// import { join } from 'path';

// // Data to be stored
// const data = {
//     name: 'John Doe',
//     email: 'john@example.com',
//     age: 30,
//     gender: 'male'
// };

// // Convert data to JSON string
// const jsonData = JSON.stringify(data, null, 2);

// // Specify the path to the data folder on your desktop
// const dataFolderPath = join(__dirname, '..', 'Desktop', 'data');

// // Ensure the data folder exists, if not, create it
// if (!existsSync(dataFolderPath)) {
//     mkdirSync(dataFolderPath);
// }

// // Specify the path to the JSON file within the data folder
// const filePath = join(dataFolderPath, 'data.json');

// // Write data to the JSON file
// writeFileSync(filePath, jsonData);

// console.log('Data stored in data.json file in the "data" folder on your desktop.');

// function takeSelfie() {
//   const selfieCanvas = document.getElementById('selfieCanvas');
//   const selfieImage = document.getElementById('selfieImage');
//   const selfieDataInput = document.getElementById('selfieData');
  
//   if (!selfieCanvas || !selfieImage || !selfieDataInput) return;

//   const width = selfieCanvas.width = 640;
//   const height = selfieCanvas.height = 480;

//   navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }) // Specify facingMode constraint
//     .then(stream => {
//       const video = document.createElement('video');
//       video.srcObject = stream;
//       video.onloadedmetadata = () => {
//         video.play();
//         const context = selfieCanvas.getContext('2d');
//         context.drawImage(video, 0, 0, width, height);
//         const imageDataURL = selfieCanvas.toDataURL('image/png');
//         selfieImage.src = imageDataURL; // Display the captured image
//         selfieImage.style.display = 'block'; // Show the image element
//         selfieDataInput.value = imageDataURL;
//         video.srcObject.getVideoTracks().forEach(track => track.stop());
//       };
//     })
//     .catch(error => console.error('Error accessing camera:', error));
// }
