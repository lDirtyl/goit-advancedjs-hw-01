const feedbackFormEl = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

const fillFormFields = form => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields(feedbackFormEl);

const onFormFieldChange = e => {
  const fieldName = e.target.name;
  const fieldValue = e.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = e => {
  e.preventDefault();

  const formElements = e.target.elements;

  if (!formElements.email.value || !formElements.message.value) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  e.target.reset();
  localStorage.removeItem('feedback-form-state');
};

console.log(formData);

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
