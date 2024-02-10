const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.form'),
};

const rowData = localStorage.getItem(STORAGE_KEY);
if (rowData) {
  const data = JSON.parse(rowData);
  refs.form.name.value = data.userName;
  refs.form.message.value = data.message;
}

// refs.form.addEventListener('submit', onSubmitForm);

// !!!!!!Робимо щоб постійно оновлювався localStorage!!!!!!
refs.form.addEventListener('input', onSubmitForm);
refs.form.addEventListener('submit', onSubmitFormReset);

function onSubmitForm(e) {
  e.preventDefault();

  const data = readFormData(e.currentTarget);
  const dataString = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, dataString);
}

function onSubmitFormReset(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
}

function readFormData() {
  const message = refs.form.message.value;
  const userName = refs.form.name.value;

  return {
    message,
    userName,
  };
}
