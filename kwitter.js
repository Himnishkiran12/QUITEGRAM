function login() {
    username = document.getElementById("username").value;
    if (username == "") {
        username = "IDIOT";
    }
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
}