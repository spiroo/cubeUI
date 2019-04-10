<template>
  <div class="scroll-list-wrap" :style="{ height: wrapHeight + 'px' }">
    <cube-scroll
      ref="scroll"
      :data="items"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
    >
      <ul class="foods-wrapper">
        <li v-for="(food, index) in items" :key="index" class="food-item border-1px">
          <div class="icon">
            <img width="57" height="57" :src="food.icon">
          </div>
          <div class="food-content">
            <h2 class="name">{{food.name}}</h2>
            <p class="description">{{food.description}}</p>
            <div class="extra">
              <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{food.price}}</span>
              <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
            </div>
          </div>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import goodsData from '@/store/goods-list.json';
let _foods = [];
goodsData.goods.forEach(item => {
  _foods = _foods.concat(item.foods);
});
export default {
  name: 'home',
  data() {
    return {
      wrapHeight: 300,
      items: _foods,
      pullDownRefresh: true,
      pullUpLoad: true,
      pullDownRefreshThreshold: 60,
      pullDownRefreshStop: 40,
      pullDownRefreshTxt: '更新完毕',
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '加载更多',
      pullUpLoadNoMoreTxt: '暂无更多数据',
    };
  },
  mounted() {
    this.wrapHeight = this.$calcWrapHeight();
  },
  computed: {
    options() {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        startY: 0,
        scrollbar: true
      };
    },
    pullDownRefreshObj: function() {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        // Do not need to set stop value, but you can if you want
        // stop: parseInt(this.pullDownRefreshStop),
        txt: this.pullDownRefreshTxt
      } : false
    },
    pullUpLoadObj: function() {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: {
          more: this.pullUpLoadMoreTxt,
          noMore: this.pullUpLoadNoMoreTxt
        }
      } : false
    }
  },
  methods: {
    onPullingDown() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(_foods[1]);
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 1000);
    },
    onPullingUp() {
      // 更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = _foods.slice(0, 5);
          this.items = this.items.concat(newPage);
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.scroll-list-wrap {
  // height: 400px;
  .foods-wrapper {
    .food-item {
      display: flex;
      padding: 18px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      &:last-child {
        border: 0;
        margin-bottom: 0;
      }
      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }
      .food-content {
        flex: 1;
        text-align: left;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .description, .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .description {
          line-height: 12px;
          margin-bottom: 8px;
        }
        .extra {
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
          
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>