const textRegExp = /\w{1,255}/,
  emailRegExp = (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const form = document.forms['contact'],
  name = form['name'],
  email = form['_replyto'],
  message = form['message'];

const nameValid = () => {
  if (textRegExp.test(name.value)) {
    return true;
  } else {
    name.setAttribute('require', '');
    name.required = true;
    name.focus();
  }
};

const emailValid = () => {
  if (emailRegExp.test(email.value)) {
    return true;
  } else {
    email.setAttribute('required', '');
    email.required = true;
    email.focus();
  }
};

const msgValid = () => {
  if (textRegExp.test(message.value)) {
    return true;
  } else {
    message.setAttribute('required', '');
    message.required = true;
    message.focus();
  }
};

const validation = () => {
  return nameValid() && emailValid() && msgValid();
};

form.addEventListener('submit', event => {
  event.preventDefault();
  if (validation()) {
    form.submit();
  }
});