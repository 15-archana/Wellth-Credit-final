const firebaseConfig = {
  apiKey: "AIzaSyAMC5m4y15deoBUpLxTBc7oODS_efIpH5g",
  authDomain: "wellthcredit.firebaseapp.com",
  projectId: "wellthcredit",
  storageBucket: "wellthcredit.appspot.com",
  messagingSenderId: "171507743131",
  appId: "1:171507743131:web",
  measurementId: "G-SRWFRLKVE7"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const auth = firebase.auth();
  
  // Function to handle user registration
  function UserRegister(e) {
      e.preventDefault();
      const email = document.getElementById('eemail').value;
      const password = document.getElementById('lpassword').value;
  
      auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              alert("Successfully Signed Up");
              document.getElementById('signupForm').reset();
          })
          .catch((error) => {
              alert(error.message);
          });
  }
  
  // Function to handle user sign-in
  function SignIn(e) {
      e.preventDefault();
      const email = document.getElementById('signinEmail').value;
      const password = document.getElementById('signinPassword').value;
  
      auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              alert("Successfully Logged In");
              window.open("https://www.google.com", "_self");
          })
          .catch((error) => {
              alert(error.message);
          });
  }
  
  // Event listener for sign-up form submission
  document.getElementById('signupForm').addEventListener('submit', UserRegister);
  
  // Event listener for sign-in form submission
  document.getElementById('signinForm').addEventListener('submit', SignIn);
  
  // Function to toggle forms
  function toggleForm() {
      const content01 = document.getElementById('content01');
      const content02 = document.getElementById('content02');
      content01.classList.toggle('display');
      content02.classList.toggle('display');
  }
  
  // Event listeners for toggling between sign-up and sign-in forms
  document.getElementById('login').addEventListener('click', function(e) {
      e.preventDefault();
      toggleForm();
  });
  document.getElementById('sign-up').addEventListener('click', function(e) {
      e.preventDefault();
      toggleForm();
  });
  // Function to handle user registration
function UserRegister(e) {
    e.preventDefault();
    const email = document.getElementById('eemail').value;
    const password = document.getElementById('lpassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Successfully Signed Up");
            document.getElementById('signupForm').reset();
            // Update button text and link
            document.getElementById('login').innerText = 'Profile';
            document.getElementById('login').href = '/profile'; // Example link to profile page
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Function to handle user registration
function UserRegister(e) {
    e.preventDefault();
    const email = document.getElementById('eemail').value;
    const password = document.getElementById('lpassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Successfully Signed Up");
            document.getElementById('signupForm').reset();
            // Optionally update button text
            document.getElementById('login').innerText = 'Profile';
            // Redirect to home page
            window.location.href = '/'; // Replace with your website's home page URL
        })
        .catch((error) => {
            alert(error.message);
        });
}


    

