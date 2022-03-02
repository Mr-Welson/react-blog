import { api } from './config';
import axios from 'axios';

const postApi = {
  getArticleList: `${api}/default/getArticleList`,
  getArticleById: `${api}/default/getArticleById/<id>`,
  getTypeList: `${api}/default/getTypeList`,
  getArticleListByTypeId: `${api}/default/getArticleListByTypeId/<id>`,
}

const postService = {
  getArticleList() {
    return axios(postApi.getArticleList);
  },
  getArticleById(id) {
    return axios(postApi.getArticleById.replace('<id>', id));
  },
  getTypeList() {
    return axios(postApi.getTypeList);
  },
  getArticleListByTypeId(id) {
    return axios(postApi.getArticleListByTypeId.replace('<id>', id));
  }
}

export default postService;