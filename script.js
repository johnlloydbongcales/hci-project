// darkmode controls
const options = {
  bottom: "32px", // default: '32px'
  right: "32", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new darkmode(options);
darkmode.showWidget();

// const order = document.getElementById("cart");

// order.addEventListener('click', () => {
//   Swal.fire({
//       title: 'Announcement',
//       text: 'Sorry, this feature is currently under development. Please proceed to our section. Thanks!',
//       icon: 'info',
//       confirmButtonText: 'OK'
//     });
// } )

function showMenu() {
  const menuButton = document.getElementById("menu"); 
  const menuElement = document.getElementById("nav-menu");
  menuElement.classList.toggle("show-menu");
//   menuButton.classList.toggle("close-icon");
 
}

function showMsg() {
  Swal.fire({
    title: "Announcement",
    text: "Sorry, this feature is currently under development. Please proceed to our contact section. Thanks!",
    icon: "info",
    confirmButtonColor: "#2b20ed",
    confirmButtonText: "OK",
  });
}

function sendMsg() { 

// Assuming you have a form with id "myForm" and a submit button with id "submitButton"

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show SweetAlert prompt
  Swal.fire({
    title: "Sending",
    text: "Please wait...",
    icon: "info",
    showConfirmButton: false,
    timer: 2000 // Set the desired duration in milliseconds (e.g., 3000ms = 3 seconds)
  });

  // Perform your form submission or any other necessary actions here

  // Example: Simulate a delay before completing the form submission
  setTimeout(function() {
    // Complete the form submission or perform other actions here

    // Update SweetAlert prompt if needed
    Swal.update({
      title: "Success",
      text: "Your message has been sent successfully. We will respond to you as soon as possible. Thanks!",
      icon: "success",
      showConfirmButton: true,
      timer: 3000 // Set the duration for the success message to stay on the screen
    });
  }, 2000); // Simulate a delay of 2 seconds before completing the form submission
});

} 


   
// const send = document.getElementById("message");

// send.addEventListener('click', () => {
//   Swal.fire({
//     title: 'Message Sent!',
//     text: 'Your message has been sent successfully.',
//     icon: 'success',
//     confirmButtonText: 'OK'
//   }); 
// })

// menuElement.classList.toggle("show-menu");
// menuButton.classList.toggle("close-icon");

