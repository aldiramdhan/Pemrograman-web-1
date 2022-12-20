function login(username, password) {
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "ahmad2017" && pass == "integrity") {
      alert("Yeah kamu berhasil!");
      location.href = "/tugas/login-sukses.html";
    } else {
      alert("Ups! gagal");
    }
  }