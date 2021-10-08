function change(message,key)
{
let result = ""

for(let i = 0; i < message.length; i++)
{
    let char = message[i];
    
    let num = message.charCodeAt(i);
    let newnum = num;
    if((num >= 97 && num <= 122) || (num >=65 && num <= 90))
    {
        newnum = newnum + key
        if((num >= 97 && num <= 122) && newnum < 97)
            newnum += 26;
        else if ((num >= 97 && num <= 122) && newnum >122)
            newnum -= 26;
        
        if((num >= 65 && num <= 90) && newnum < 65)
            newnum += 26;
        else if ((num >= 65 && num <= 90) && newnum >90)
            newnum -= 26;

        //console.log(num);
        char = String.fromCharCode(newnum)
        //console.log(char);
    
    }
    result = result + char;
}
return result;
}


let message = "Hello World!! This is xyz";
//message = message.toLowerCase();
let key = 1;
let result = change(message,key)
console.log(result)
console.log( change(result,-1));