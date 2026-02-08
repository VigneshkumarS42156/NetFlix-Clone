// script.js
// ------------------- USER LOGIN/LOGOUT HANDLER -------------------

document.addEventListener("DOMContentLoaded", function () {
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  let authLink = document.getElementById("authLink");

  if (authLink) {
    if (activeUser) {
      // Extract nickname (before @ in email)
      let nickname = activeUser.email.split("@")[0];

      // Replace Sign In with a styled user box + logout
      authLink.innerHTML = `
        <div class="user-box">
          <span class="user-name">👤 ${nickname}</span>
          <a href="#" class="btn" id="logoutBtn">Logout</a>
        </div>
      `;

      // Handle logout
      document.getElementById("logoutBtn").addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("activeUser"); // clear session
        window.location.href = "login.html"; // redirect to login
      });
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  let authLink = document.getElementById("authLink");

  if (authLink) {
    if (activeUser) {
      // Extract nickname (before @ in email)
      let nickname = activeUser.email.split("@")[0];

      // Replace Sign In with a styled user box + logout
      authLink.innerHTML = `
        <div class="user-box">
          <span class="user-name">👤 ${nickname}</span>
          <a href="#" class="btn" id="logoutBtn">Logout</a>
        </div>
      `;

      // Handle logout
      document.getElementById("logoutBtn").addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("activeUser"); // clear session
        window.location.href = "login.html"; // redirect to login
      });
    }
  }
});

