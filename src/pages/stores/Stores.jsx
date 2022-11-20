import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllStores } from '../../redux/Thunk/store.js';
import { ASSET_URL } from '../../utils/env';

export default function Stores() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { stores } = useSelector(({ store }) => store);
  useEffect(() => {
    dispatch(getAllStores({}));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">All Uploaded Stores</h1>
      <button
        className="btn bg-warning"
        onClick={() => {
          navigate('/stores/new');
        }}
      >
        Add New
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Location</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, index) => (
            <tr key={index} className="justify-content-center">
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={ASSET_URL + store?.images[0]}
                  alt=""
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '25px',
                  }}
                />
              </td>
              <td className="align-middle">{store?.title}</td>
              <td className=" align-middle ">
                {store?.location.address}
              </td>
              <td className="align-middle">
                <button className="btn  bg-warning my-0 p-1">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
