/* 
    প্রাকটিস প্রব্লেম- ৫ খানা 
    ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।
    
    ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  
    
    ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 
    
    ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 
    
    ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 
    */
   
/* 
   
   ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

    function arrayTolowest(lowest) {
        let lowestEle = lowest[0];
        for (let i = 0; i < lowest.length; i++){
            const index = i;
            const element = lowest[index];
            if (element < lowestEle) {
                lowestEle = element;
            }
        }
        return lowestEle;
    }

    let lowestInput = [50, 100, 20, 30, 55,10]
    var lowestOutput = arrayTolowest(lowestInput)
    console.log(lowestOutput);
 */

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।
/* var inp1 = 10;
var inp2 = 300;
var inp3 = 1;
let lowest = Math.min(inp1, inp2, inp3);
console.log(lowest); */

// home work 1
/* 
    function toLowest(num1, num2, num3) {
        let lowest = Math.max(num1, num2, num3);
        return lowest;
    }
    var inp1 = 10;
    var inp2 = 300;
    var inp3 = 200;
    const lowestInput = toLowest(inp1, inp2, inp3);
    console.log(lowestInput)
 */
// home work 2
/* 
    function toLowest(num1, num2, num3) {
        let lowest = Math.min(num1, num2, num3);
        return lowest;
    }
    var inp1 = 10;
    var inp2 = 300;
    var inp3 = 200;
    const lowestInput = toLowest(inp1, inp2, inp3);
    console.log(lowestInput)
*/
//৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

/* 
    let numbersArray = [10,20,30];
    function numberToAvrg(numbersArray) {
        let sum = 0;
        for (let i = 0; i < numbersArray.length; i++){
            const element = numbersArray[i]
            sum = sum + element;

        }
        let avrgReturn = sum / numbersArray.length;
        return avrgReturn;
    }
    const output = numberToAvrg(numbersArray)
    const forFixed = output.toFixed(1);
    console.log(forFixed) 
*/
// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।
/* 
    function Aytokhetro(dorgo, uchota) {
        var area = dorgo * uchota;
        return area;
    }
    var dorgo = 20;
    var uchota = 10;
    var output = Aytokhetro(dorgo, uchota,)
    console.log(output);
 */
// ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

/* 
    var array = ['20','1700','111','215','54','78'];
    array.sort(function(a,b){
        return b-a;
    });
    let secendLargest = array[1];
    console.log(secendLargest); 
*/

/* 
    function largestNumber(array) {
        var largestNumber = array[0];
        var secondLargestNumber = array[0];
        for (i = 0; i < array.length; i++) {
            if (array[i] > largestNumber) {
                largestNumber = array[i];
            }
        }
        for (i = 0; i < array.length; i++) {
            if (array[i] > secondLargestNumber && array[i] < largestNumber) {
                secondLargestNumber = array[i];
            }
        }
        return secondLargestNumber;
    }
    var numbers = [10,20,30,40,50,60,70,80,80];
    var result = largestNumber(numbers);
    console.log(result); 
*/