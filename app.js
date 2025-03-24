let text = document.querySelector('.text');
let spans = text.innerText.split('').map((letter, i) =>{
    return `<span style="transition-delay:${i*40}ms; filter:hue-rotate(${i*30}deg)">${letter}</span>`
}).join(''); 

//* split property used strings to split them but if we want split all of them we have to use ('') but for split two words we can use (' ') and it returns an array which contains the split word or lettters and the empty strings.

//* map method is basically a method that loops through the array , and creates a new array based on calling a function on each element of the original array. Here first perameter is the elements of the original array. So letter will be the letters inside our spans array and the i will be the index of the element.

//* join method used to conv array to normal string

//* we used the index here to make the transition delay unique for each span 40 ms. So zero times 40 ms for the first letter . one times 40 ms for the second letter and so on.

//* we used hue-rotate -this will make each span have a different color 

text.innerHTML = spans; //* set innerHTML property to replace the content of the element with the specified HTML
console.log(spans);
