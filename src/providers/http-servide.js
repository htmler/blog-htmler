import axios from 'axios';
import { Upload } from 'element-ui';
import store from '../store/index';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:3000'; //填写域名

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (store.state.Token.token) {
      config.headers.Authorization = `token ${store.state.Token.token}`;
     }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('错误请求')
        break;
      case 401:
        console.log('未授权，请重新登录')
        store.state.Token.isLogin = false;
        store.dispatch('UserLogout');
        break;
      case 403:
        console.log('拒绝访问')
        break;
      case 404:
        console.log('请求错误,未找到该资源')
        break;
      case 405:
        console.log('请求方法未允许')
        break;
      case 408:
        console.log('请求超时')
        break;
      case 500:
        console.log('服务器端出错')
        break;
      case 501:
        console.log('网络未实现')
        break;
      case 502:
        console.log('网络错误')
        break;
      case 503:
        console.log('服务不可用')
        break;
      case 504:
        console.log('网络超时')
        break;
      case 505:
        console.log('http版本不支持该请求')
        break;
      default:
        console.log(`连接错误${err.response.status}`)
    }
  } else {
    console.log('连接到服务器失败')
  }
  return Promise.resolve(err.response)
})


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 下面是获取数据的接口
*/
/** 
* 测试接口
* 名称：file
* 参数：paramObj/null
* 方式：fetch/post/patch/put
*/
export const server = {
  getSystemInfo() {
    return post('/api/system');
  },
  judgeToken() {
    return fetch('/api/status');
  },
  register(paramObj) {
    return post('/api/register', paramObj);
  },
  login(paramObj) {
    return fetch('/api/login', paramObj);
  },
  getHomeList(paramObj) {
    return fetch('/api/fileHomeList', paramObj);
  },
  getHotList() {
    return fetch('/api/hotList');
  },
  getHomeBanner(paramObj) {
    return fetch('/api/fileBannerList');
  },
  getAmuseBanner(paramObj) {
    return fetch('/api/fileAmuseBannerList');
  },
  getAmuseList() {
    return fetch('/api/fileAmuseList')
  },
  getFileList(paramObj) {
    return fetch('/api/fileList', paramObj);
  },
  addFile(paramObj) {
    return post('/api/fileSave', paramObj);
  },
  editFile(paramObj) {
    return post('/api/fileDetail', paramObj)
  },
  updateFile(paramObj) {
    return post('/api/fileEdit', paramObj)
  },
  uploadFile(paramObj) {
    return post('/api/fileUpload', paramObj)
  },
  removeFile(paramObj) {
    return fetch('/api/fileRemove', paramObj)
  },
  //用户信息
  getUserInfo(paramObj) {
    return fetch('/api/userInfo', paramObj)
  },
  //讨论接口
  addDiscuss(paramObj) {
    return post('/api/discussSave', paramObj)
  },
  getDiscussList(){
    return fetch('/api/discussList')
  }
}