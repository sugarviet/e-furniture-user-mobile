import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { request, requestWithoutAuth } from '../../utils/request';

export const fetcher = async (url, params) => {
  const data = await requestWithoutAuth.get(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData);

  return data;
};

const fetcherWithAuth = async (url, params) => {
  const data = await request.get(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData);

  return data;
};

export const useFetchWithAuth = (url, params, options) => {
  return useQuery([url, params], () => fetcherWithAuth(url, params), options);
}

export const useFetch = (url, params, enabled) => {
  return useQuery([url, params], () => fetcher(url, params), {
    enabled
  });
};


const useGenericMutation = (func, key, params, onSuccessAPI, onErrorAPI) => {
  const queryClient = useQueryClient();
  return useMutation(func, {
    onSuccess: (data) => {
      onSuccessAPI(data);
    },
    onError: (error) => {
      onErrorAPI(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries([key, params]);
    },
  });
};

export const useDelete = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (id) => request.delete(`${url}/${id}`),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useDeleteAuth = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => request.delete(url, { data }),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePost = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    async (data) => await request.post(url, data).then((response) => response.data)
      .then((data) => data.metaData),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePostAuth = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => request.post(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


export const useUpdate = (url, params, onSuccessAPI = () => {}, onErrorAPI = () => {}, key) => {
  return useGenericMutation(
    async (data) => await request.put(url, data).then((response) => response.data)
      .then((data) => data.metaData),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useUpdateWithAuth = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => request.put(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


export const usePostWithoutAuth = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    async (data) => await requestWithoutAuth.post(url, data).then((response) => response.data)
      .then((data) => data.metaData),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


