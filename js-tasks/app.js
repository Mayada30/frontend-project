// Task 1
let score=92;
if (score<0 || score>100){
    console.log("درجة غير صحيحة");
}else if(score>=85 && score<=100){
    console.log("ممتاز");
} else if(score>=75 && score<85){
    console.log("جيد جدا");
} else if(score>=65 && score<75){
    console.log("جيد");
} else if(score>=50 && score<65){
    console.log("مقبول");
} else if(score>=0 && score<50){
    console.log("راسب");
}

// Task 2
let drinkCode=3;
switch(drinkCode){
    case 1:
        console.log("طلبك قهوة - السعر 20 جنيه");
        break;
    case 2:
        console.log("طلبك شاي - السعر 10 جنيه");
        break;
    case 3:
        console.log("طلبك عصير برتقال - السعر 15 جنيه");
        break;
    case 4:
        console.log("طلبك مياه معدنية - السعر 5 جنيه");
        break;
        default:
        console.log(" اختيار غير موجود");
}

// Task 3
let distance=1000;
let total=0;
for(let i=1;i<=7;i++){
let line = `اليوم ${i}: ${distance} متر`;
  if (distance >= 3000) {
    line += " (يوم صعب)";
  }
  console.log(line);
  total += distance;
  distance += 500;
}
console.log(`إجمالي المسافة: ${total} متر`);

// Task 4
const price = 1000;
let savings = 0;
let weeks = 0;
 
while (savings < price) {
  savings += 150;
  weeks++;
  console.log(`الأسبوع ${weeks}: معاك ${savings} جنيه`);
}
console.log(`وصلت للهدف بعد ${weeks} أسابيع، ومعاك ${savings} جنيه`);

// Task 5
const correctPin = "1234";
 
function atm(pinAttempts, operation, amount, balance = 2000) {
  let attempts = 0;
  let enteredPin;
 
 
  do {
    enteredPin = pinAttempts[attempts];
    attempts++;
    if (enteredPin !== correctPin) {
      console.log(`رقم سري غلط، فاضلك ${3 - attempts} محاولات`);
    }
  } while (enteredPin !== correctPin && attempts < 3);
 
  if (enteredPin === correctPin) {
    console.log("أهلاً بيك");
  } else {
    console.log("تم إيقاف الكارت");
    return; 
  }
 
  
  switch (operation) {
    case "balance":
      console.log(`رصيدك: ${balance} جنيه`);
      break;
    case "withdraw":
      if (amount > balance) {
        console.log("رصيدك لا يكفي");
      } else {
        balance -= amount;
        console.log(`تم سحب ${amount} جنيه، رصيدك الحالي: ${balance} جنيه`);
      }
      break;
    case "deposit":
      balance += amount;
      console.log(`تم إيداع ${amount} جنيه، رصيدك الحالي: ${balance} جنيه`);
      break;
    default:
      console.log("عملية غير معروفة");
  }
}
 
console.log("\n--- Task 5 / Case 1 ---");
atm(["1111", "2580", "1234"], "withdraw", 500);
 
console.log("\n--- Task 5 / Case 2 ---");
atm(["0000", "1111", "2222"], "withdraw", 500);
 
console.log("\n--- Task 5 / Case 3 ---");
atm(["1111", "2580", "1234"], "withdraw", 5000);
 

console.log("\n--- Task 5 / Extra challenge ---");
const operations = ["balance", "withdraw", "deposit"];
let balance = 2000;
const amountToUse = 500;
 
for (let i = 0; i < operations.length; i++) {
  switch (operations[i]) {
    case "balance":
      console.log(`رصيدك: ${balance} جنيه`);
      break;
    case "withdraw":
      if (amountToUse > balance) {
        console.log("رصيدك لا يكفي");
      } else {
        balance -= amountToUse;
        console.log(`تم سحب ${amountToUse} جنيه، رصيدك الحالي: ${balance} جنيه`);
      }
      break;
    case "deposit":
      balance += amountToUse;
      console.log(`تم إيداع ${amountToUse} جنيه، رصيدك الحالي: ${balance} جنيه`);
      break;
    default:
      console.log("عملية غير معروفة");
  }
}
 