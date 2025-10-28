let userNumber = "";

while (!userNumber) {
    userNumber = prompt("0 ile 100 arasında bir sayı değeri giriniz:");

    let number = Number(userNumber);

    if (number >= 0 && number <= 100) {
        console.log(`Girilen sayı: ${number}`);
        break;
    } else {
        console.log("Lütfen 0 ile 100 arasında bir değer girin.");
        userNumber = ""; 
    }
}

