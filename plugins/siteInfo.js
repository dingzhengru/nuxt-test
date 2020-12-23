import { apiGetSiteInfo } from '~/api/site';

export default async ({ store }) => {
  const requestData = { DeviceType: 1 };
  const result = await apiGetSiteInfo(requestData);

  console.log('[plugins][siteInfo]', result);
  store.commit('site/setInfo', result.RetObj);
};
