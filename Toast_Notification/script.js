const toastButtons = document.querySelectorAll('.toast-button');
const container = document.getElementById('toast-container');

toastButtons.forEach(button => {
  button.addEventListener('click', () => {
    const toastType = button.getAttribute('data-toast');
    showToast(toastType);
  })
})

function showToast(type) {
    const toast = document.createElement('div');
    toast.textContent = `This is a ${type} message!`;

    let baseClasses = "p-4 rounded-lg shadow-lg font-medium text-white min-w-[250px] transition-all duration-300";

    switch (type) {
    case 'success':
      toast.className = `${baseClasses} bg-green-500`;
      break;
    case 'error':
      toast.className = `${baseClasses} bg-red-500`;
      break;
    case 'warning':
      toast.className = `${baseClasses} bg-yellow-500`;
      break;
    default:
      toast.className = `${baseClasses} bg-gray-800`;
  }

  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}