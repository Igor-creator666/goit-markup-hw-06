(() => {
  const refs = {
    // Додати атрибут data-mobile-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-mobile-open]'),
    // Додати атрибут data-mobile-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    // Додати атрибут data-mobile на бекдроп модалки
    modal: document.querySelector('[data-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();