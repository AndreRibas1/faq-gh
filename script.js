const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  const content = header.nextElementSibling;
 content.style.display = 'none';
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    const isActive = item.classList.contains('active');

    item.classList.toggle('active');
    content.style.display = isActive ? 'none' : 'block';
    icon.style.transform = isActive ? 'rotate(45deg)' : 'rotate(135deg)';
  });
});
