document.querySelectorAll("a").forEach((a) => {
    // * Jika di klik akan menjalankan fungsi computer Choice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
        
    })
})

function computerChoice(element){
    // *Pilihan User
    let pilihanUser = element.target.innerText;

    // TODO:Menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // TODO:Membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // *Pilihan computer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // *Jika Pilihan User == pilihan Komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("Draw")
    }

    // !Rock & Scissors
    // *Jika Pilihan User > pilihan Komputer (Menang)
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert ("Kamu menang")
    }
    // *Jika Pilihan User < pilihan Komputer (Menang)
    else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        alert("Komputer menang")
    }
    // !Paper & Rock
    // *Jika Pilihan User > pilihan Komputer (Menang)
    if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert ("Kamu menang")
    }
    // *Jika Pilihan User < pilihan Komputer (Menang)
    else if(pilihanUser == "Rock" && pilihanKomputer =="Paper"){
        alert("Komputer menang")
    }
    // !Rock & Scissors
    // *Jika Pilihan User > pilihan Komputer (Menang)
    if(pilihanUser == "Rock" && pilihanKomputer =="Scissors"){
        alert ("Kamu menang")
    }
    // *Jika Pilihan User < pilihan Komputer (Menang)
    else if(pilihanUser == "Rock" && pilihanKomputer =="Scissors"){
        alert("Komputer menang")
    }
}