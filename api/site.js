import axios from 'axios';
import { API_URL } from './settings';

//* SEO資訊
export async function apiGetSiteSeoInfo() {
  const result = await axios.post(API_URL + '/SiteInfo/SeoInfo');
  return result.data;
}

//* 推廣碼
export async function apiSendProxyCode(data) {
  const result = await axios.post(API_URL + '/Siteinfo/ProxyCode', data);
  return result.data;
}

export async function apiGetSiteInfo(data) {
  const result = await axios.post(API_URL + '/Siteinfo/getinfo', data);
  return result.data;
}
