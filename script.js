function register() {
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const category = document.getElementById("category").value;

  if (!name || !email || !category) {
    alert("Please fill in all the fields.");
    return;
  }

  // Save user info for later use (e.g., in score.html)
  sessionStorage.setItem("quiz_user", name);
  sessionStorage.setItem("quiz_email", email);

  // Redirect to selected quiz
  window.location.href = category;
}
