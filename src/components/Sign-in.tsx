import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { Form, Icon, Button } from 'react-bulma-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InputEvent, InputValues } from '../types/Movie';
import Validation from '../LoginValiation';

export const Sign: React.FC = () => {
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

    if (err.email === '' && err.password === '') {
      // eslint-disable-next-line no-console
      console.log('errr');
      axios.post('http://localhost:8081/sign', inputValues)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(res => {
          if (res.data === 'Success') {
            navigate('/home');
          } else {
            // eslint-disable-next-line no-alert
            alert('No record existed');
          }
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
            <Form.Field>
              <Form.Label>Email</Form.Label>
              <Form.Control>
                <Form.Input
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  onChange={handleInputChange}
                />
                <Icon align="left">
                  <i className="fas fa-envelope" />
                </Icon>
              </Form.Control>
              {errors.email && (
                <span className="error-message has-text-danger">
                  {errors.email}
                </span>
              )}
            </Form.Field>

            <Form.Field>
              <Form.Label>Password</Form.Label>
              <Form.Control>
                <Form.Input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handleInputChange}
                />
                <Icon align="left">
                  <i className="fas fa-lock" />
                </Icon>
                {errors.password && (
                  <span className="error-message has-text-danger">
                    {errors.password}
                  </span>
                )}
              </Form.Control>
            </Form.Field>
            <Button fullwidth rounded color="primary" type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
