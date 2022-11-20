import client from './client';
export const getAllStoresApi = () => client.get('/stores/my');
const getTrendingStores = () => client.get('/store/trend');
const getDownloadStoreLink = (id) =>
  client.get(`/store/temporary-download/${id}`);
const getAllCategories = () =>
  client.get(
    '/store/getAllCate',
    {},
    {
      onDownloadProgress: (prog) => {
        console.log('progress', prog);
      },
    }
  );
export function deleteStore(id) {
  return client.delete(`/stores/${id}`);
}
const getSameCateStores = (cate) =>
  client.get(`/store/samecate/${cate}`);

export const addStoreApi = (store, onUploadProgress) => {
  const data = new FormData();
  data.append('title', store.title);
  data.append('website', store.website);
  data.append('phone', store.phone);
  data.append('description', store.description);
  data.append('address', JSON.stringify(store.address));
  store.images?.forEach((image) => {
    data.append('images', image);
  });
  return client.post('/stores/add', data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
