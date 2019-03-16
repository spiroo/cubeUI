<template>
  <div class="about">
    <h1>This is an about page</h1>
    <cube-toolbar :actions="actions" @click="clickHandler"></cube-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 10,
      actions: [
        {
          text: '完成订单',
          action: 'showText'
        },
        {
          text: '打车来接',
          checked: false,
          type: 'checkbox'
        },
        {
          text: '一口价<span class="orange">10元</span>',
          action: 'moreMoney'
        }
      ]
    }
  },
  created() {
    this.$store
      .dispatch('getUsers')
      .then(res => {
        console.log('getUsers res = ', res);
        // this.$router.push({ path: this.redirect || '/' })
      })
      .catch(err => {
        console.log('err = ', err);
      });
  },
  methods: {
    showText(item) {
      this.$createToast({
        type: 'correct',
        txt: 'clicked ' + item.text,
        time: 1000
      }).show()
    },
    moreMoney(item) {
      this.money += 10
      item.text = '一口价<span class="orange">' + this.money + '元</span>'
    },
    clickHandler(item) {
      if (item.action) {
        this[item.action](item)
      }
    }
  }
};
</script>
