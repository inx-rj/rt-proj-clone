import AuthApiClient from '../services/auth/AuthApiClient';
import { useAppDispatch } from '../redux/store';
import { SET_PERSIST } from '../redux/reducers/config/app/app.slice';

export const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const refresh_token = localStorage.getItem('refresh_token');

  return async () => {
    const response = await AuthApiClient.refreshTokenAPI(refresh_token);
    const { refresh, access } = response?.data?.data?.token;
    localStorage.setItem("refresh_token", refresh);
    localStorage.setItem("access_token", access);
    dispatch(SET_PERSIST(true));
    return response?.data?.data?.token;
  };
};
