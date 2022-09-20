import API from '../api/api';
import { signup } from '../api/endpoints';

export const register = async (params) => await API.post(signup, params);