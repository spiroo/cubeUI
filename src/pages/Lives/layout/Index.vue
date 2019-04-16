<template>
  <div class="layout">
    <m-header :title="title">
      <a slot="right" v-if="header.showApply" @click="applyHandle">
        <svg-icon icon-class="plus"></svg-icon>
      </a>
    </m-header>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MHeader from '@/components/MHeader/Index.vue';

export default {
  name: 'live-layout',
  components: {
    MHeader
  },
  computed: {
    ...mapGetters(['title', 'header'])
  }
}
</script>

<style lang="less">
.layout {
  .svg-icon {
    font-size: 24px;
  }

  .content {
    margin-top: 46px;
    height: calc(100% - 46px);
  }
}
</style>
