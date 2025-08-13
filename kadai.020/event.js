document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn');  
  const message = document.getElementById('text'); 

  button.addEventListener('click', () => {
    message.textContent = 'ボタンをクリックしました';
  });
});
