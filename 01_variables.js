
// printing statement
console.log("hello world")

// var const and let

const accountId = 144553
let accountMail = "samplemail@mail.com" // used only in the designated block
var accountPassword ="password"// can be used throughout  avoid using
accountCity = "PRAYAGRAJ"

console.log(accountId);
console.log(accountMail);
console.log(accountPassword);
console.log(accountCity);

// accountId = 455556 changing a const is not allowed
accountMail ="yashingh22@mail.com"
accountPassword = "225"
accountCity = "BBSR"

let accountState ; // remains undefined as it is not declared

// console.log(accountId);
console.table ([accountId ,accountMail,accountPassword ,accountCity,accountState])