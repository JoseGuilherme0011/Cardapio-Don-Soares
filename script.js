// script.js

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.menu-item');
  
    items.forEach(item => {
      const name = item.querySelector('.dish-name');
      const img = item.querySelector('.dish-thumb');
      const details = item.querySelector('.dish-details');
  
      const toggleDetails = () => {
        const isOpen = !details.classList.contains('hidden');
  
        // Fecha todos os outros
        document.querySelectorAll('.dish-details').forEach(detail => {
          detail.classList.add('hidden');
        });
  
        // Alterna o atual
        if (!isOpen) {
          details.classList.remove('hidden');
        }
      };
  
      name.addEventListener('click', toggleDetails);
      img.addEventListener('click', toggleDetails);
    });
  });
  