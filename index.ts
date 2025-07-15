import promptSync from 'prompt-sync';
const prompt = promptSync();

interface User {
    fullName?: string
    username?: string
    email?: string
    pass?: string
    date?: Date
}
interface Goods {
    id: number
    name: string
    description: string
    count: number
    price: number
    fullInfo?: string
}
function checkUndefinedNameSurname(u, n:string , s:string) {
    if(n.length === 0 || s.length === 0) {
        console.error("Ім'я та прізвище не можуть бути порожніми!")
        return
    }else{
        console.log(`Повне ім'я користувача: ${u.fullName}`)
    }
}
function checkUsernamePass(u, userP, passP,checkPass:string) {
    if(userP === u.username && passP === u.pass && checkPass === u.pass) {
        console.error("Вхід успішний!");
    }else{
        console.log("Доступ заборонено! Перевірте ваш логін та пароль.")
        return
    }
}
function createGoods(idP:number, nameP:string, descriptionP:string, countP:number, priceP:number) {
    const goodsUser: Goods = {
        id: idP,
        name: nameP,
        description: descriptionP,
        count: countP,
        price: priceP,
        fullInfo: `Id: ${idP}, Назва: ${nameP}, Опис: ${descriptionP}, Кількість: ${countP}, Ціна: ${priceP} грн`
    };

    if(nameP.length < 2 || descriptionP.length < 5 || countP <= 0 || priceP <= 0) {
        console.error("Всі поля повинні бути заповнені коректно!")
        return
    }else {
        console.log(`Товар успішно створено! ${goodsUser.fullInfo}`)
    }

    return goodsUser
}
function checkCmKg(c:number, w:number) {
    const bmi:number = w / ((c / 100) ** 2)

    if (bmi < 18.5) {
        console.log("Недостатня вага")
    }else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("Норма")
    }
    else if (bmi >= 25 && bmi < 29.9) {
        console.log("Надмірна вага")}
}
function checkEmail(e:string) {

}
function login() {

}
//////////////////////////////////////////////////
function taskOne(){
    //Task 1
    let name:string = prompt("Введіть ваше ім'я: ").trim()
    let surname:string = prompt("Введіть ваше прізвище: ").trim()

    const user: User = {
        fullName: `${name} ${surname}`
    }

    checkUndefinedNameSurname(user, name, surname)
}
function taskTwo() {
    //Task 2 
    const admin: User = {
        username: "admin",
        pass: "12345"
    };
    const userPrint = prompt("Ваш логін:: ").trim()
    const passPrint = prompt("Ваш пароль: ").trim()
    const passPrintCheck = prompt("Підтвердіть ваш пароль: ").trim()
    if (userPrint.length === 0 || passPrint.length === 0 || passPrintCheck.length === 0) {
        console.error("Логін та пароль не можуть бути порожніми!")
        return
    }
    checkUsernamePass(admin, userPrint, passPrint, passPrintCheck)
}
function taskThree() {
    //Task 3
    const nameP = prompt("Введіть назву товару: ").trim()
    const descriptionP = prompt("Введіть опис товару: ").trim()
    const countP = parseInt(prompt("Введіть кількість товару: ").trim())
    const priceP = parseFloat(prompt("Введіть ціну товару: ").trim())

    if (nameP.length < 2 || descriptionP.length < 5 || isNaN(countP) || isNaN(priceP) || countP <= 0 || priceP <= 0) {
        console.error("Всі поля повинні бути заповнені коректно!")
        return
    }

    createGoods(Math.floor(Math.random() * 10000), nameP, descriptionP, countP, priceP)
}
function taskFour() {
    //Task 4
    const cantimeters = Number(prompt("Введіть довжину в сантиметрах: ").trim())
    const weight = Number(prompt("Введіть вагу в кілограмах: ").trim())

    if (isNaN(cantimeters) || isNaN(weight) || cantimeters <= 0 || weight <= 0) {
        console.error("Введіть коректні значення для довжини та ваги!")
        return
    }

    checkCmKg(cantimeters, weight)
}
function taskFive() {
    //Task 5
    const date = new Date();
    const emailPrint = prompt("Введіть ваш email: ").trim()
    const passPrint = prompt("Введіть ваш пароль: ").trim()
    const datePrint = prompt("Введіть дату (у форматі ДД.ММ.РРРР): ").trim()
    // Не доробив, хочу спати, дуже 
}
//taskOne()
//taskTwo()
//taskThree()
//taskFour()