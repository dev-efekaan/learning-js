// localStorage.setItem("key","value"); // --> Veri Ekleme
// localStorage.getItem("key"); // --> Veri Okuma

/* 	localStorage.removeItem("key");  --> Veri Silme 
	localStorage.clear(); */

/*

let user = {userName: "EfeKaanKavalcı", isActive: true}

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo') // bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)

// Local Storage Bölüm Sonu Egzersizi

let counter = 0
let counterDOM = document.querySelector('#counter')
let increseDOM = document.querySelector('increse')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}
    */