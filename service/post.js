import { baseApi } from './config';
import axios from 'axios';

const api = {
  getArticleList: `${baseApi}/getArticleList`,
  getArticleById: `${baseApi}/getArticleById/<id>`,
  getTypeList: `${baseApi}/getTypeList`,
  getArticleListByTypeId: `${baseApi}/getArticleListByTypeId/<id>`,
};

const postService = {
  getArticleList() {
    return axios(api.getArticleList);
  },
  getArticleById(id) {
    return axios(api.getArticleById.replace('<id>', id));
  },
  getTypeList() {
    return axios(api.getTypeList);
  },
  getArticleListByTypeId(id) {
    return axios(api.getArticleListByTypeId.replace('<id>', id));
  },
};

export default postService;
