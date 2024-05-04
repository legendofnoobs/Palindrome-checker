let input = document.getElementById('myInput');
let button = document.getElementById('myBtn');
let result = document.getElementById('result');

button.onclick = checkPalindrome;
function checkPalindrome(){
  if(input.value == ""){
    result.innerHTML = "please enter a text"
    result.style.backgroundColor = "red";
    return;
  }else{
    let text = input.value.toLowerCase();
    let tempArray = [...text];
    let reversedTempArray = tempArray.reverse();
    let joinedReversedTempArray = reversedTempArray.join('').toLowerCase();
    if(text == joinedReversedTempArray){
        result.innerHTML = `${input.value} is a palindrome`
        result.style.backgroundColor = "rgb(0, 49, 139)";
    }else{
        result.innerHTML = `${input.value} is not a palindrome`
        result.style.backgroundColor = "red";
    }
  }
}
