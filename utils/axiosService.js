import axios from 'axios';
// import { baseUrl } from './configUrl';

class AxiosService {
  constructor() {
    const instance = axios.create({
      headers: {}
    });
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  get(url) {
    return this.instance.get(process.env.REACT_APP_API + url, { timeout: 60000 });
  }

  patch(url, data) {
    return this.instance.patch(process.env.REACT_APP_API + url, data);
  }

  post(url, body) {
    return this.instance.post(process.env.REACT_APP_API + url, body);
  }

  put(url, body) {
    return this.instance.put(process.env.REACT_APP_API + url, body);
  }

  delete(url, body) {
    return this.instance.delete(process.env.REACT_APP_API + url);
  }

  setHeader(name, value) {
    this.instance.defaults.headers.common[name] = value;
  }

  removeHeader(name) {
    delete this.instance.defaults.headers.common[name];
  }
}
export default new AxiosService();
