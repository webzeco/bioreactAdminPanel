// Render Prop
import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import './login.scss';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/Thunk/auth.js';
import { Link, useNavigate } from 'react-router-dom';
import { setError } from '../../redux/reducers/userReducer.js';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required !'),
  password: Yup.string().required('Password is Required !'),
});

const Login = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const { pending, error } = useSelector(({ user }) => user);
  const loginHandler = async (values) => {
    values.goToHome = goToHome;
    dispatch(login(values));
  };
  useEffect(() => {
    return () => {
      dispatch(setError(null));
    };
  }, []);
  const goToHome = () => {
    navigate('/');
  };
  return (
    <div className="login login-container">
      <h1>Login Here!</h1>
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            loginHandler(values);
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <div class="card">
              {error && <p>{error}</p>}
              <Form>
                <label htmlFor="email">Email</label>
                <Field
                  className="input__field"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
                <label htmlFor="password">Password</label>
                <Field
                  className="input__field"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {touched.password && errors.password && (
                  <div className="error">{errors.password}</div>
                )}
                <button disabled={isSubmitting} type="submit">
                  {pending ? 'Loading...' : 'Submit'}
                </button>
                <Link to={'/register'}>Register</Link>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      {/* <div class="card">
        <h2>Regular</h2>
        <label class="input">
          <input class="input__field" type="text" placeholder=" " />
          <span class="input__label">Some Fancy Label</span>
        </label>
        <div class="button-group">
          <button>Send</button>
          <button type="reset">Reset</button>
        </div>
      </div>
      <div class="card card--inverted">
        <h2>Inverted</h2>
        <label class="input">
          <input
            class="input__field"
            type="text"
            placeholder=" "
            value="Valuable value"
          />
          <span class="input__label">Some Fancy Label</span>
        </label>

        <div class="button-group">
          <button>Send</button>
          <button type="reset">Reset</button>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
