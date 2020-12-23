<template>
  <div class="container">
    <div>
      <router-view />
    </div>
    <div>
      <Logo />
      <h1 class="title">
        nuxt-test
      </h1>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey">
          GitHub
        </a>
      </div>
    </div>
    <div>
      <h2>asyncData</h2>
      {{ site }}
    </div>

    <div>
      <h2>Store Getters</h2>
      {{ counter }}
      {{ siteTitle }}
    </div>
  </div>
</template>

<script>
import { apiGetSiteInfo } from '~/api/site';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['counter', 'siteTitle']),
  },
  data() {
    return {
      site: {},
    };
  },
  async asyncData({ store }) {
    const requestData = { DeviceType: 1 };
    const result = await apiGetSiteInfo(requestData);

    console.log('[SiteInfo]', result);
    store.commit('site/setInfo', result.RetObj);
    return { site: result.RetObj };
  },
  mounted() {
    console.log('11111');
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  ul,
  li {
    list-style: none;
  }
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
