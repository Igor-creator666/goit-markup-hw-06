document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.error('Не всі елементи знайдені');
    return;
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
});