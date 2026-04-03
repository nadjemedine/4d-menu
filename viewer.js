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
  
  // Table View Mode
  const arContainer = document.querySelector('.ar-button-container') || document.querySelector('.details-panel');
  const tableBtn = document.createElement('button');
  tableBtn.className = 'table-mode-btn';
  tableBtn.innerHTML = '<span>&#x1F31F;</span> وضع الطاولة';
  arContainer.appendChild(tableBtn);
  
  tableBtn.addEventListener('click', () => {
    document.body.classList.toggle('table-view-active');
    tableBtn.classList.toggle('active');
    tableBtn.innerHTML = document.body.classList.contains('table-view-active') 
      ? '<span>&#x1F6AB;</span> إيقاف وضع الطاولة' 
      : '<span>&#x1F31F;</span> وضع الطاولة';
  });
});
