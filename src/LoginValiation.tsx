export default function Validation(values: any) {
  const error: any = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /.*/;

  if (values.email === '') {
    error.email = 'Name should not be empty';
  } else if (!email_pattern.test(values.email)) {
    error.email = 'Email Didnt match';
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = 'Password should not be empty';
  } else if (!password_pattern.test(values.password)) {
    error.password = 'Password Didnt match';
  } else {
    error.password = '';
  }

  if (values.emailSecond === '') {
    error.emailSecond = 'Name should not be empty';
  } else {
    error.emailSecond = '';
  }

  if (values.passwordSecond === '') {
    error.passwordSecond = 'Password should not be empty';
  } else {
    error.passwordSecond = '';
  }

  if (values.name === '') {
    error.name = 'Name should not be empty';
  } else {
    error.name = '';
  }

  return error;
}
