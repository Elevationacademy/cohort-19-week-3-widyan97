
//ex1

const StringFormatter = function () {
    const capitalizeFirst=  function (word) { 
    console.log( word[0].toUpperCase()+word.slice(1).toLowerCase())
    }

const skewerCase=  function (word){
console.log( word.split(" ").join("-").toLowerCase()) 
}
return {
    capitalizeFirst: capitalizeFirst,
    skewerCase: skewerCase
}
}
const formatter = StringFormatter()


formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box





//ex2
const Bank = function () {
    let _money = 500

    const depositCash = function (cash) {
        return _money += cash
    }

    const checkBalance = function () {
        console.log(_money)

    }
    
    return {
    deposit : depositCash,
    showBalance:checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950