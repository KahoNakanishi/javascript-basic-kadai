const btn = document.getElementById('btn');   
const text = document.getElementById('text'); 

console.log(text);
console.log(btn);

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
