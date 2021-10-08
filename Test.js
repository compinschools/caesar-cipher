let str = "aa a"
str = str.toLocaleLowerCase()
let key = 1;
// encode
for (let i = 0; i < str.length; i++){
    let number = str.charCodeAt(i);
    number = number + key
    console.log(number);
    if (number > 122){
        console.log(String.fromCharCode(number- 26) )
    } 
    else if(number == 32 + key){
        console.log(" ");
    }
    else{
       console.log(String.fromCharCode(number)) 
    }
}
//decode
for (let i = 0; i < str.length; i++){
    let number = str.charCodeAt(i);
    number = number - key
    console.log(number);
    if (number < 97){
        console.log(String.fromCharCode(number + 26) )
    } 
    else if(number == 32 - key){
        console.log(" ");
    }
    else{
        console.log(String.fromCharCode(number)) 
    }
}