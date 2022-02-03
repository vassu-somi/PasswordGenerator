
const resultEl = document.getElementById('result');
const resultEl = document.getElementById('length');
const resultEl = document.getElementById('uppercase');
const resultEl = document.getElementById('lowercase');
const resultEl = document.getElementById('symoles');
const resultEl = document.getElementById('generate');
const resultEl = document.getElementById('clipboard');
const resultEl = document.getElementById('numbers');

const randomFunc = {
    lower:getRandomLower,
    upper:getRandomUpeer,
    number:getRandomNumber,
    Symbol:getRandomSymbol
    
}

Clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return;
    }

textarea.value = password;
document.body.appendChild('textarea');
textarea.select();
document.executeCommand('copy');
textarea.remove();
alert('password copied to Clipboard');
});

generateEl.addEventListener('click',() =>{
    const length=+lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberscaseEl.checked;
    const hasSymbol = symbolscaseEl.checked;

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,
        hasSymbol,length);

    
});

function generatePassword(lower,upper,number,symbol,length){
    let generatePassword = "";
    const typesCount = lower + upper + number + symbol;
    const typeArr =  [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.value(item)[0]);
        
        if(typeCount === 0){
            return 'slect at leat 1 option';
        }
        for(let i=0; i<length; i+=typeCount){
            typeArr,forEach(type => {
                const funcName = Object.keys(type)[0];
                generatePassword +=randomFunc[funcName]();
            });
        }

        const finalPassword = generatePassword.slice(0,length);
        return finalPassword;


}
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);

}
function getRandomUpeer(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    const symbols="!@#$%^&*(){}[],.+/'>=";
    return symbols[(Math.floor(Math.random()*symbols.length)];
}