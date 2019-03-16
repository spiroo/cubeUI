<template>
  <div id="app">
    <m-header
      title="use prop:title"
      :right-options="{ showMore: true }"
      @on-click-more="showActionSheet"
    >
    </m-header>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import MHeader from '@/components/MHeader/Index.vue';

export default {
  components: {
    MHeader
  },
  methods: {
    showActionSheet() {
      this.$createActionSheet({
        title: '我是标题~~~',
        active: 0,
        data: [
          {
            content: '舒适型'
          },
          {
            content: '七座商务'
          },
          {
            content: '豪华型'
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            type: 'correct',
            time: 1000
          }).show();
        },
        onCancel: () => {
          this.$createToast({
            txt: `Clicked canceled`,
            type: 'warn',
            time: 1000
          }).show();
        }
      }).show();
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  margin-top: 46px;
  height: calc(100% - 46px);
}
</style>
