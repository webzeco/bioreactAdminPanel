// Render Prop
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './Register.scss';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/Thunk/auth.js';
import { useNavigate } from 'react-router-dom';
import { UploadFile } from '@mui/icons-material';
import { setError } from '../../redux/reducers/userReducer.js';

const loginSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required !'),
  password: Yup.string().required('Password is Required !'),
});

const Register = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  let navigate = useNavigate();
  const { pending, error } = useSelector((state) => state.user);
  const submitHandler = async (values) => {
    values.goToHome = goToHome;
    if (!image) return dispatch(setError('Image is required !!!'));
    values.image = image;
    dispatch(register(values));
  };
  useEffect(() => {
    return () => {
      dispatch(setError(null));
    };
  }, []);

  useEffect(() => {
    console.log(image);
  }, [image]);

  const goToHome = () => {
    navigate('/');
  };
  return (
    <div className=" register register-container">
      <h1>Register Here!</h1>
      <div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('values');

            submitHandler(values);
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="d-flex flex-row">
                <div className="card_left  mx-2 ">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    className="input__field"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                  {touched.firstName && errors.firstName && (
                    <p class="alert alert-danger  p-2 my-1 ">
                      {errors.firstName}
                    </p>
                  )}
                  <label htmlFor="firstName">Last Name</label>

                  <Field
                    className="input__field"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  />
                  {touched.lastName && errors.lastName && (
                    <p class="alert alert-danger  p-2 my-1 ">
                      {errors.lastName}
                    </p>
                  )}
                  <label htmlFor="firstName">Email</label>

                  <Field
                    className="input__field"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  {touched.email && errors.email && (
                    <p class="alert alert-danger  p-2 my-1 ">
                      {errors.email}
                    </p>
                  )}
                  <label htmlFor="firstName">Password</label>

                  <Field
                    className="input__field"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {touched.password && errors.password && (
                    <p class="alert alert-danger  p-2 my-1 ">
                      {errors.password}
                    </p>
                  )}
                  {error && <p className="error">{error}</p>}

                  <button disabled={pending} type="submit">
                    {pending ? 'Loading...' : 'Submit'}
                  </button>
                </div>
                <div className="card_right mx-5">
                  <div className="image">
                    <img
                      src={
                        image
                          ? URL.createObjectURL(image)
                          : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div className="upload">
                    <label className="d-flex fex-row rounded-pill  justify-content-center    bg-warning ">
                      <p className=" mb-1 mt-2  fw-bold">Image:</p>
                      <span className="my-1">
                        <UploadFile />
                      </span>
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
              </div>
            </Form>
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

export default Register;
