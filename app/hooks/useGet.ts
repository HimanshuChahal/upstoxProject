import {useState} from 'react';
import axiosAPI from '../api/axiosAPI';
import {AxiosHeaders, AxiosResponse, RawAxiosRequestHeaders} from 'axios';

type HeaderType = RawAxiosRequestHeaders | AxiosHeaders | undefined;

const useGet = <T>(URL: string, {headers}: {headers?: HeaderType}) => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getNetworkCall = async () => {
    setLoading(true);
    try {
      const response = await axiosAPI?.get<any, AxiosResponse<T, any>>?.(URL, {
        headers,
      });
      return response;
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {getNetworkCall, loading, error};
};

export default useGet;
