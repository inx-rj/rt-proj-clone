import axiosPrivate from '../api/axios';
import { useLayoutEffect } from 'react';
import { SET_PERSIST } from '../redux/reducers/config/app/app.slice';
import { CLEAR_AUTH } from '../redux/reducers/auth/auth.slice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { useRefreshToken } from './useRefreshToken';
import { closeAllModals } from '@mantine/modals';
import { toast } from 'react-toastify';
import ToastErrorIcon from '../components/UI/ToastErrorIcon';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const access_token = localStorage.getItem('access_token');
  const refresh_token = localStorage.getItem('refresh_token');
  let canReTry = false;

  useLayoutEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${access_token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error.config;
        if (error.response.status === 401) {
          console.log("Hook error", error.response, canReTry);

          if (!canReTry) {
            canReTry = true;
            const refreshToken = await refresh();
            console.log("if canReTry", { canReTry, refreshToken });
            prevRequest.headers['Authorization'] = `Bearer ${refreshToken.access}`;
            return await axiosPrivate(prevRequest);
          } else {
            console.log("else  canReTry", canReTry);
            canReTry = false;
            dispatch(SET_PERSIST(false));
            dispatch(CLEAR_AUTH());
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            closeAllModals();
            toast.error(error?.response?.data?.detail, {
              icon: ToastErrorIcon,
              toastId: 'token_error'
            });
            navigate('/auth', { replace: true, state: true });
          }
        }

        if (error.response.status === 403) {
          prevRequest.sent = false;
          closeAllModals();
          navigate('/unauthorized', { replace: true, state: true });
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return axiosPrivate;
};

export default useAxiosPrivate;
