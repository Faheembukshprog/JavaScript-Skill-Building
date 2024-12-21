const accountId=14452;
let accountEmail="abc@gmail.com";
var accountPassword="123456";
accountCity="Karachi";
let accountState;

// accountId= 2 ; // not allowed

accountEmail="xyz@gmail.com";
accountPassword="212121";
accountCity = "Lahore";

console.log(accountId);

/*
Prefer not to use var 
because  of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 