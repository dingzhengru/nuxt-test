<template>
  <div class="container">
    <div>
      <h2>plugins/siteInfo 取得的資料</h2>
      {{ siteInfo }}
    </div>

    <div>
      <h2>Store Getters</h2>
      counter: {{ counter }} <br />
      siteTitle: {{ siteTitle }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['counter', 'siteInfo', 'siteTitle']),
  },
  data() {
    return {
      site: {},
    };
  },
  mounted() {
    console.log('11111');
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
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
