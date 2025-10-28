        // var ile değişken tanımlamak:

//var serverName = "api.kodluyoruz.org"
//console.log(serverName)

        // let ile değişkeni boş tanımlamak:

//let serverName;
//console.log(serverName)


        // let ile değişkene bilgi atamak:

//serverName = "https://kodluyoruz.org"
//console.log(serverName)

       // let ile değişkene bilgi atayarak tanımlama: 

//let password = "1234"
//console.log(password)

        // değişken ataması yapmadan önce kullanamaya çalışmak:

/* Hatalı Kullanım 
console.log(fullName)
let fullName = "Efe Kaan Kavalcı" 
*/


/*Olması Gereken Kullanım
let fullName = "Efe Kaan Kavalcı"
console.log(fullName)
*/

        //let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:

//fullName = "Lorem Ipsum Dolar"
//console.log(fullName)



        //Birleştirme veya ekleme İŞlemi
//fullName += " Yeni eklenen bİlgi"
//console.log(fullName)


//fullName = fullName + " Yeni Bilgi"
//fullName += " 2:Bilgi"
//console.log(fullName)

        //const ile değişkeni boş tanımlama yaparak çalışmak:

//const serverPassword; //Sadece değişken tanımlandı ama içi boş ??

        //const ile değişken tanımlamak:

//const SERVER_PASSWORD = "asdknasnddas"
//console.log (SERVER_PASSWORD)

/* let password = "123456"
console.log(password);

let MyName = "Efe Kaan Kavalcı"
console.log(MyName);

let users = "Ali"
console.log(users);

const surname = "Kaval"
console.log(surname);

password += " surname"
console.log(password,"",surname);

console.log(users + surname);

const surnamee = "Selam"
console.log(surnamee) */

        //number veri türü tanımlamak;

//let price = 100
/*
let tax = 0.18
let priceTax = price * tax
let total = priceTax + price 
console.log
("Fiyat:", price,
"KDV Oranı", tax,
"KDV Tutarı", priceTax,
"KDV Dahil Tutar", total)  /*

        //arttırma ve azaltma işlemleri;

let counter = 320
counter = counter + 1 // uzun yöntem 
counter += 1;
counter ++ 
counter --
console.log(counter)

        //işlem önceliği 

console.log(29*2)
console.log(2+(28*2))

        //us alam ** ;
console.log(2 ** 10)

        //aşağı yuvarlama işlemi;

console.log("Aşağı Yuvarlama", Math.floor(1.8) )

        //yukarı yuvarlama işlemi;

console.log("Yukarı Yuvarlama", Math.ceil(1.3))

        //yakına yuvarlama işlemi;

console.log("Yakına Yuvarlama", Math.round(1.4)  )
console.log("Yakına Yuvarlama", Math.round(1.5)  )
console.log("Yakına Yuvarlama", Math.round(1.6)  )

        //Boolean Veri Türü

let isActive = false // 0
isActive = true //
console.log(isActive)

let userName = "a"
let isUserName = Boolean(userName)
console.log(isUserName)

userName = "user"
console.log(Boolean(userName))

let MyName = "Kaan"
console.log(Boolean(MyName))
*/
/*
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)
console.log(
    "stringPrice: ",
    typeof(stringPrice)
)
console.log(
    "hasPassword: ",
    typeof(hasPassword)
)*/

    // string(metinsel) bilgileri int ve float'a donüştürmek
/*
let number1 = "11"
number1 = parseInt(number1)
console.log( "number1: ", number1, typeof(number1))

let number2= "11px" 
number2 = parseInt(number2)
console.log( "number2: ", number2, typeof(number2))

let number3= "11" 
number3 = Number(number3)
console.log( "number3: ", number3, typeof(number3))

let number4= "11.4px" 
number4 = parseFloat(number4)
console.log( "number4: ", number4, typeof(number4))*/

    // number veri tipinden string'e dönitirmek:
/*
let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5)) */
/*
let username = "Kaan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
// console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresiniz", email)

let info = `Merhaba ${username} sitemize hoşgeldin..
 kısa isminiz: ${username[0]}.
 mail adresin: ${email}
 mail adresinin uzunlugu: ${email.length}
 borcunuz: ${(2 * 3) * 10} TL
 Zaman: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
`
console.log(info) */
/*
console.log(document.URL)
console.log(document.location.hostname)
console.log(document.body)

document.body.style.backgroundColor = "aqua"*/

//let h2 = document.getElementsByTagName('h2')

/*
let title = document.getElementById('title')
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("#KodluyoruzLink")
link.innerHTML = "Link Bilgisi Değişti"
link.style.color = "red"
link.classList.add("btn") */ 
/*

let fullName = prompt("Lutfen Adınızı Giriniz")
let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>` */

/*
let item = document.querySelector("ul#list>li:last-child")
item.innerHTML = "son öge ben ne istersem o olacak"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi oluşturduğumuz öge"

//ulDOM.append(liDOM) -> en sona ekliyor 
ulDOM.prepend(liDOM) // -> en başa ekliyor */

/*

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("text-one", "text-two", "text-three") // Birden fazla class eklemek 

greeting.classList.remove("title", "text-one", "text-two", "text-three") //Birden fazla class çıkarmak 

console.log(greeting.classList) */
















