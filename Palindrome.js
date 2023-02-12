let number = 123321;
let a = "";
let temp = number;
while (temp > 0) {
    a += (temp % 10);
    temp = Math.floor(temp / 10);
}
if (a == number) {
    console.log("Yes,Number is Palindrom");
}
else {
    //console.log("NO,Number is not Palindrom");
}
