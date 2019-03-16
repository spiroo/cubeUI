import axios from 'axios';
import qs from 'qs';

const Axios = axios.create({
  // baseURL: process.env.BASE_API,
  baseURL: '/',
  timeout: 10000,
  responseType: 'json'
  // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json;charset=utf-8'
  // }
});
const CancelToken = axios.CancelToken;
const requestMap = new Map();

// 请求前置拦截器
Axios.interceptors.request.use(
  config => {
    // 防重复提交
    const keyString = qs.stringify(
      Object.assign({}, { url: config.url, method: config.method }, config.data)
    );
    if (requestMap.get(keyString)) {
      // 取消当前请求
      config.cancelToken = new CancelToken(cancel => {
        cancel('Please slow down a little');
      });
    }
    requestMap.set(keyString, true);
    Object.assign(config, { _keyString: keyString });

    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      // 序列化
      // config.data = qs.stringify(config.data);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 返回响应拦截器
Axios.interceptors.response.use(
  res => {
    // 重置requestMap
    const { config } = res;
    requestMap.set(config._keyString, false);

    if (res.status === 200) {
      return res.data;
    }
    // todo 弹窗提示等
    console.log('request error', res);
  },
  error => {
    console.log('error = ', error);
    return {
      error
    };
  }
);

/**
 * @description
 * 请求
 * @param url
 * @param data
 * @param method
 */
const request = ({ url, data = {}, method = 'get' }) => {
  return Axios({
    method,
    url,
    data,
    params: method.toUpperCase() === 'GET' && data
  });
};

export default request;
