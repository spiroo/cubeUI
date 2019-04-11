import axios from 'axios';
import store from '../store'; //引入vuex

const Axios = axios.create({
  // baseURL: process.env.BASE_API,
  baseURL: '/',
  timeout: 50000,
  responseType: 'json'
  // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json;charset=utf-8'
  // }
});

// 请求前置拦截器
Axios.interceptors.request.use(
  config => {
    // 防重复提交
    if (store.state.token) {
      // config.headers[Authorization] = Bearer  + store.state.token;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 返回响应拦截器
Axios.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      const res = response.data;
      if (res.code === 0) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  },
  error => {
    console.log('error = ', error);
    //断网处理或者请求超时
    if (!error.response) {
      //请求超时
      if (error.message.includes(timeout)) {
        console.log(超时了);
        // messages(error, 请求超时，请检查互联网连接);
      } else {
        //断网，可以展示断网组件
        console.log(断网了);
        // messages(error, 请检查网络是否已连接);
      }
      return;
    }
    
    const status = error.response.status;
    switch (status) {
      case 500:
        // messages(error, 服务器内部错误);
        break;
      case 404:
        // messages(error,  未找到远程服务器);
        break;
      case 401:
        // messages(warning, 用户登陆过期，请重新登陆);
        // localStorage.removeItem(token);
        // setTimeout(() => {
        //   router.replace({
        //     path: /login,
        //     query: {
        //       redirect: router.currentRoute.fullPath
        //     }
        //   });
        // }, 1000);
        break;
      case 400:
        // messages(error, 数据异常);
        break;
      default:
        // messages(error, error.response.data.message);
    }
    return Promise.reject(error);
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时候携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    Axios.get(url, { params })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时候携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    Axios.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
