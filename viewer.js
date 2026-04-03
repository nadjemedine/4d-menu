document.addEventListener('DOMContentLoaded', () => {
  const controls = document.querySelector('.controls');
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'toggle-btn';
  toggleBtn.innerHTML = '<span>&#x25BC;</span> التفاصيل';
  
  controls.prepend(toggleBtn);
  
  let isCollapsed = true;
  controls.classList.add('collapsed');
  toggleBtn.innerHTML = '<span>&#x25B2;</span> التفاصيل';
  
  const toggle = () => {
    isCollapsed = !isCollapsed;
    controls.classList.toggle('collapsed', isCollapsed);
    toggleBtn.innerHTML = isCollapsed ? '<span>&#x25B2;</span> التفاصيل' : '<span>&#x25BC;</span> التفاصيل';
  };
  
  toggleBtn.addEventListener('click', toggle);
  
  // Start collapsed by default? 
  // Maybe start expanded but user can hide.
});
