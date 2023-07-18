export type InputEvent = React.ChangeEvent<HTMLInputElement>
| React.ChangeEvent<HTMLTextAreaElement>;

export type InputValues = {
  email: string,
  password: string,
  name: string,
  emailSecond: string,
  passwordSecond: string
};
