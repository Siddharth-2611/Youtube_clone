// Get references to the input and upload section
const fileInput = document.getElementById('fileInput');
const uploadSection = document.getElementById('uploadSection');
const fileNameDisplay = document.getElementById('fileName');

// Add event listener to the upload section to trigger file input
uploadSection.addEventListener('click', function() {
    fileInput.click(); // Programmatically click the file input to open the file dialog
});

// Add event listener to handle file selection
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0]; // Get the selected file
    if (file) {
        fileNameDisplay.text .content = `Selected file: ${file.name}`; // Display the file name
    } else {
        fileNameDisplay.textContent = ''; // Clear the display if no file is selected
    }
});

function openLoginWindow() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLoginWindow() {
  document.getElementById("loginModal").style.display = "none";
}

function signInWithGoogle() {
  // Implement Google Sign-In logic here
  // Example using Firebase:
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
      // User signed in successfully
      var user = result.user;
      console.log("User  signed in: ", user);
      closeLoginWindow();
  }).catch((error) => {
      console.error("Error during sign-in: ", error);
  });
}

function proceedToYouTube() {
  // Redirect to the YouTube page
  window.location.href = "youtube.html"; // Change this to your YouTube clone page
}