import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useRef, useState } from 'react';
import ImageUploader from 'react-images-upload';

import AutocompleteAddressInput from '../../components/LocationAuthComplete/AutocompleteAddressInput.jsx';
import './newstore.scss';
import { useDispatch } from 'react-redux';
import { addStore } from '../../redux/Thunk/store.js';
import { useNavigate } from 'react-router-dom';

const storeSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  // address: Yup.object({
  //   area: Yup.string().required().label('Area'),
  //   city: Yup.string().required().label('City'),
  //   zip: Yup.number().required().label('Zip'),
  //   coordinates: Yup.object({
  //     latitude: Yup.number().required().label('Location'),
  //     longitude: Yup.number().required().label('Location'),
  //   }).optional(),
  // }),
  // info: Yup.array().of(
  //   Yup.object({
  //     category: Yup.string().label('category'),
  //     content: Yup.array().of(
  //       Yup.object({
  //         title: Yup.string().label('Tag value'),
  //         values: Yup.array().of(Yup.string()).label('Tag value'),
  //       })
  //     ),
  //   })
  // ),
  website: Yup.string().required().label('Website'),
  phone: Yup.string().required().label('Phone'),
  logo: Yup.string(),
  description: Yup.string().required().label('Description'),
});

const initialStoreValues = {
  title: '',
  description: '',
  address: {
    location: '',
    coordinates: {
      longitude: 0,
      latitude: 0,
    },
  },
  // address: {
  //   area: '',
  //   city: '',
  //   zip: 0,
  //   coordinates: {
  //     latitude: 0,
  //     longitude: 0,
  //   },
  // },
  // info: [
  //   {
  //     category: '',
  //     content: [
  //       {
  //         title: '',
  //         values: [''],
  //       },
  //     ],
  //   },
  // ],
  website: '',
  phone: '',
  logo: '',
  description: '',
};
export default function NewStore() {
  const [images, setImages] = useState([]);
  const [addressError, setAddressError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [address, setAddress] = useState({
    location: '',
    coordinates: {
      longitude: 0,
      latitude: 0,
    },
  });

  const onDrop = (images) => {
    setImages(images);
  };
  const AddAddressHandler = (address) => {
    setAddressError(false);
    setAddress(address);
  };
  const goToStores = () => {
    navigate('/stores');
  };
  useEffect(() => {
    console.log(images);
  }, [images]);
  const submitHandler = (values) => {
    if (!address.location) {
      return setAddressError(true);
    }
    if (images.length < 1) {
      return setImageError(true);
    }
    const data = {
      ...values,
      address: { ...address },
      images: images,
      goToStores,
    };
    dispatch(addStore(data));
  };

  return (
    <div className="container">
      <h3 class="title">Add New Store</h3>
      <div>
        <Formik
          initialValues={initialStoreValues}
          validationSchema={storeSchema}
          onSubmit={async (values, { resetForm }) => {
            submitHandler(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="row">
              <div>
                <label className="input_label fw-bold">Title</label>
                <Field
                  name="title"
                  className="form-control"
                  placeholder="Title of store"
                />
                {errors.title && touched.title ? (
                  <p class="alert alert-danger  p-2 mt-1">
                    {errors.title}
                  </p>
                ) : null}
              </div>
              <label className="label fw-bold my-1 mt-2">
                Description
              </label>
              <div class="input">
                <Field
                  name="description"
                  type="text"
                  className="form-control "
                  placeholder="Description"
                />
                {errors.description && touched.description ? (
                  <div
                    class="alert alert-danger  p-2  mt-1"
                    role="alert"
                  >
                    {errors.description}
                  </div>
                ) : null}
              </div>
              <label className="label fw-bold my-1 mt-2">
                Location
              </label>
              <AutocompleteAddressInput
                AddAddressHandler={AddAddressHandler}
              />
              {addressError ? (
                <div
                  class="alert alert-danger  p-2  mt-1"
                  role="alert"
                >
                  Address is Required !!!
                </div>
              ) : null}
              <label htmlFor="phone" className=".label"></label>
              <div class="input">
                <label className="label fw-bold">Phone</label>

                <Field
                  name="phone"
                  type="text"
                  className="form-control"
                  placeholder="phone Number"
                />
                {errors.phone && touched.phone ? (
                  <div
                    class="alert alert-danger  p-2 mt-1  "
                    role="alert"
                  >
                    {errors.phone}
                  </div>
                ) : null}
              </div>
              <div class="input">
                <label className="label fw-bold my-1 mt-2">
                  Website
                </label>
                <Field
                  name="website"
                  type="text"
                  className="form-control"
                  placeholder="Website"
                />
                {errors.website && touched.website ? (
                  <div
                    class="alert alert-danger  p-2 mt-1"
                    role="alert"
                  >
                    {errors.website}
                  </div>
                ) : null}
              </div>

              <ImageUploader
                withPreview={true}
                withIcon={false}
                onChange={onDrop}
                buttonText="Select Images"
                buttonStyles={{
                  background: 'yellow',
                  color: 'black',
                }}
                imgExtension={['.jpg', '.png', '.jpeg']}
              />
              {imageError && (
                <div
                  class="alert alert-danger  p-2 mt-1"
                  role="alert"
                >
                  {'Please Upload at least one image !!!'}
                </div>
              )}
              <div class="cart mt-4 mb-5 align-items-center">
                <button
                  type="submit"
                  class="btn bg-warning d-flex rounded-pill create_btn "
                >
                  submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
