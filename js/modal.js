document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.body,
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.error('Не всі елементи модалки знайдені');
    return;
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    refs.body.classList.toggle('modal-open');
  }
});
