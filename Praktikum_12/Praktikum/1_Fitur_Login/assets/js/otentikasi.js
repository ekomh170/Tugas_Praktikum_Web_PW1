function login() {
    // Tangkap Data Usernama & Password
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Validasi Data
    if (user === "eko" && pass === "123") {
        alert("Login Berhasil!!")
    } else {
        alert("Login Gagal!!")
    }
}