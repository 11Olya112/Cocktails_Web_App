import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { Form, Button } from 'react-bulma-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InputEvent, InputValues } from '../types/Movie';
import Validation from '../LoginValiation';

export const Register: React.FC = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    email: '',
    password: '',
    name: '',
    emailSecond: '',
    passwordSecond: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const err = Validation(inputValues);

    setErrors(err);

    if (err.name === '' && err.emailSecond === '' && err.passwordSecond === '') {
      axios.post('http://localhost:8081/register', inputValues)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(res => {
          navigate('/');
        })
        // eslint-disable-next-line no-console
        .catch(errr => console.log(errr));
    }
  };

  const handleInputChange = (event: InputEvent) => {
    const { name, value } = event.target;

    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="sign"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        className="sign-container"
        style={{ width: '600px', height: '408px' }}
      >
        <form onSubmit={(e) => handleSubmit(e)} className="has-text-centered">
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            className="buttons has-addons is-centered"
          >
            <Button.Group>
              <Link
                to="/"
                color="primary"
                className="button is-primary"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                color="primary"
                className="button is-secondary"
              >
                Register
              </Link>
            </Button.Group>
          </div>
          <div>

            <Form.Label>Name</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="John Doe"
                className="input"
                name="name"
                onChange={handleInputChange}
              />
              {errors.name && (
                <span className="error-message has-text-danger">
                  {errors.name}
                </span>
              )}
            </Form.Control>

            <Form.Field>
              <Form.Label>Email</Form.Label>
              <Form.Control>
                <Form.Input
                  type="email"
                  placeholder="example@gmail.com"
                  className="input"
                  name="emailSecond"
                  onChange={handleInputChange}
                />
                {errors.emailSecond && (
                  <span className="error-message has-text-danger">
                    {errors.emailSecond}
                  </span>
                )}
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Label>Password</Form.Label>
              <Form.Control>
                <Form.Input
                  type="password"
                  placeholder="Password"
                  className="input"
                  name="passwordSecond"
                  onChange={handleInputChange}
                />
                {errors.passwordSecond && (
                  <span className="error-message has-text-danger">
                    {errors.passwordSecond}
                  </span>
                )}
              </Form.Control>
            </Form.Field>

            <Button fullwidth rounded color="primary" type="submit">
              Register
            </Button>

          </div>
        </form>
      </div>
    </div>
  );
};
