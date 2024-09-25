// helpers/auth.ts
import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';

export const getAuthToken = () => Cookies.get(TOKEN_KEY);

export const setAuthToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: 1 }); // Token expires in 1 day
};

export const clearAuthToken = () => {
  Cookies.remove(TOKEN_KEY);
};
