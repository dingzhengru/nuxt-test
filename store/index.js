export const state = () => ({
  counter: 0,
});

export const getters = {
  counter: state => state.counter,

  siteInfo: state => state.site.info,
  siteTitle: state => state.site.info.LS_SiteTitle,
};

export const mutations = {
  increaseCounter(state) {
    state.counter++;
  },
};
