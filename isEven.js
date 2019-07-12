const even = document.getElementById('even');
const number = Number(even.value);
const hidden = document.getElementById('image1');
const hidden2 = document.getElementById('image2');

function isEven(number) {
    if (number % 2 === 0) {
        hidden.classList.remove('hidden');
    } else {
        hidden2.classList.remove('hidden2');
    } 
};

export default isEven;