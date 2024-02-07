let userName = getFirstName("Junior-Goulart", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Carlos Goulart", " ")
console.log("Seja vem vindo " + userName)

userName = getFirstName("104.831.539-82", ".")
console.log("Seja vem vindo " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}