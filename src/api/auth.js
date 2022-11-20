import decode from 'jwt-decode';

import client from './client';

export const loginApi = (email, password) =>
  client.post('/auth/login', {
    email,
    password,
  });

export const registerApi = (data) =>
  client.post('/auth/register', data);

export const forgotPassword = (email) =>
  client.post('/auth/forgotPassword', {
    email,
  });

export const resetPassword = (data, token) => {
  return client.patch(`/auth/resetPassword/${token}`, {
    password: data.password,
    passwordConfirm: data.confirmPassword,
  });
};

export const updatePassword = (data) => {
  return client.patch('/auth/updatePassword', {
    passwordCurrent: data.currentPassword,
    password: data.newPassword,
    passwordConfirm: data.confirmNewPassword,
  });
};

export const getUser = () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    const user = decode(token);
    return user;
  } else {
    return null;
  }
};

export const jwtClear = () => {
  localStorage.removeItem('jwt');
  window.location = '/login';
};
