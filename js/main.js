const openModalButton = document.querySelector('.modal-btn');
const videoModal = document.getElementById('videoModal');
const closeModalButton = document.querySelector('.close-modal-button');

// Функция для открытия модального окна
function openModal() {
  videoModal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  videoModal.style.display = 'none';
  // Остановка видео при закрытии модального окна
  const iframe = videoModal.querySelector('iframe');
  iframe.src = iframe.src; // Присваивание снова той же ссылки останавливает видео
}

// События клика на кнопки
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    closeModal();
  }
});

