// !!!!!!!! Через глобальну змінну

// const form = document.querySelector('.js-form');
// let selectedFilters = {};

// initForm();

// form.addEventListener('submit', onSubmitForm);
// form.addEventListener('change', onChangeForm);
// form.addEventListener('reset', onResetForm);

// function onSubmitForm(e) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   formData.forEach((value, name) => console.log(value, name));
// }

// function onChangeForm(e) {
//   selectedFilters[e.target.name] = e.target.value;

//   localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters));
// }

// function onResetForm() {
//   selectedFilters = {};
//   localStorage.removeItem('selectedFilters');
// }

// function initForm() {
//   let persistedFilters = localStorage.getItem('selectedFilters');
//   if (persistedFilters) {
//     persistedFilters = JSON.parse(persistedFilters);
//     console.log(persistedFilters);
//     Object.entries(persistedFilters).forEach(([name, value]) => {
//       selectedFilters[name] = value;
//       form.elements[name].value = value;
//     });
//   }
// }

// !!!!!!!!!!! Без глобальної змінної
const LOCALSTORAGE_KEY = 'selectedFilters';
const form = document.querySelector('.js-form');

initForm();

form.addEventListener('submit', onSubmitForm);
form.addEventListener('change', onChangeForm);
form.addEventListener('reset', onResetForm);

function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(value, name));
}

function onChangeForm(e) {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
}

function onResetForm() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function initForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    console.log(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
