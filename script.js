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
  // menuButton.classList.toggle("close-icon");
 
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

// function sendMsg(){
//   Swal.fire({
//         title: 'Message Sent!',
//         text: 'Your message has been sent successfully.',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }); 
// }


// Assuming you have a form with id "myForm" and a submit button with id "submitButton"

function sendMsg(){

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  Swal.fire({
    title: "Processing",
    text: "Please wait...",
    icon: "info",
    confirmButtonColor: "#2b20ed",
    showConfirmButton: false,
    timer: 3000 
  });

  setTimeout(function() {

    // Update SweetAlert prompt if needed
    Swal.fire({
      title: "Message sent!",
      text: "Your message has been sent successfully. We will respond to you as soon as possible. Thanks!",
      icon: "success",
      confirmButtonColor: "#2b20ed",
      showConfirmButton: true,
      timer: 10000 // Set the duration for the success message to stay on the screen
    });

    document.getElementById("myForm").reset();
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

