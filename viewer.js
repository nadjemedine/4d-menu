document.addEventListener('DOMContentLoaded', () => {
  const controls = document.querySelector('.controls');
  const modelViewer = document.querySelector('model-viewer');
  
  // Create button container
  const btnContainer = document.createElement('div');
  btnContainer.className = 'action-buttons';
  controls.prepend(btnContainer);

  // Details Toggle Button
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'toggle-btn';
  toggleBtn.innerHTML = '<span>&#x25B2;</span> التفاصيل';
  btnContainer.appendChild(toggleBtn);
  
  // AR Mode Button (Custom AR Button)
  const arBtn = document.createElement('button');
  arBtn.className = 'ar-btn-styled';
  arBtn.innerHTML = '<span>&#x1F4F1;</span> عرض 3D بالواقع المعزز';
  btnContainer.appendChild(arBtn);
  
  let isCollapsed = true;
  controls.classList.add('collapsed');

  const toggle = () => {
    isCollapsed = !isCollapsed;
    controls.classList.toggle('collapsed', isCollapsed);
    toggleBtn.innerHTML = isCollapsed ? '<span>&#x25B2;</span> التفاصيل' : '<span>&#x25BC;</span> التفاصيل';
  };
  
  toggleBtn.addEventListener('click', toggle);

  // Trigger AR from the custom button
  arBtn.addEventListener('click', () => {
    modelViewer.activateAR();
  });
});
