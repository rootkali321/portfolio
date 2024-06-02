// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Auth service
const auth = firebase.auth();

// Function to check if the provided credentials belong to an admin user
function isAdmin(email, password) {
    // Implement your logic here to determine if the user is an admin
    // This could involve querying a database or checking custom claims
    // For demonstration purposes, let's assume admin credentials are hardcoded
    const adminEmail = "admin@example.com";
    const adminPassword = "adminPassword";
    return email === adminEmail && password === adminPassword;
}

// Function to handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the provided credentials belong to an admin user
    if (isAdmin(email, password)) {
        // Proceed with signing in the user
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Redirect to the editor route upon successful login
                window.location.href = "/editor";
            })
            .catch((error) => {
                // Handle errors here
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Login error:', errorMessage);
            });
    } else {
        // If not an admin, deny access
        console.error('Access denied: Not an admin');
    }
});



// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  
 // firebase.initializeApp(firebaseConfig);

// // Get a reference to the Firebase Auth service
// const auth = firebase.auth();

// // Function to handle login
// function handleLogin() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Sign in with email and password
//     auth.signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Redirect to the specified route upon successful login
//             window.location.href = "/editor"; // Replace "/dashboard" with your desired route
//         })
//         .catch((error) => {
//             // Handle errors here
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error('Login error:', errorMessage);
//         });
// }
