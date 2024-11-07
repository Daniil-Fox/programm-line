import { validateForms } from './../functions/validate-forms.js';
const checks = [
  {
    selector: ".checkbox-wrapper",
    errorMessage: "Обязательное поле",
  }
];

const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимум 2 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-email',

    rules: [
      {
        rule: 'email',
        errorMessage: 'Некорректный Email'
      }
    ]
  },
];

const rules2 = [
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const modal = document.querySelector('.modal-main')
const thanks = document.querySelector('.modal-thx')

const afterForm = () => {
  modal.classList.remove('active')
  thanks.classList.add('active')
};

const afterForm2 = () => {
  thanks.classList.add('active')
};

validateForms('.modal-form', rules1, checks, afterForm);
validateForms('.hero__form', rules2, [], afterForm2);
