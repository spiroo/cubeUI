<template>
  <div class="header">
    <cube-index-list
      :data="cityData"
      :title="title"
      @title-click="clickTitle"
      :style="{ height: wrapHeight + 'px', textAlign: 'left' }"
    >
      <cube-index-list-group
        v-for="(group, index) in cityData"
        :key="index"
        :group="group">
        <cube-index-list-item
          v-for="(item, index) in group.items"
          :key="index"
          :item="item"
          @select="selectItem">
          <div class="custom-item">我是自定义 {{item.name}}</div>
        </cube-index-list-item>
      </cube-index-list-group>
    </cube-index-list>
  </div>
</template>

<script>
const cityData = [
  {
    "name": "★Hot City",
    "items": [
      {
        "name": "BEIJING",
        "value": 1
      },
      {
        "name": "SHANGHAI",
        "value": 2
      }
    ]
  },
  {
    "name": "A",
    "items": [
      {
        "name": "ANSHAN",
        "value": 3
      },
      {
        "name": "ANQING",
        "value": 4
      }
    ]
  },
  {
    "name": "B",
    "items": [
      {
        "name": "BSKDFSJF",
        "value": 5
      },
      {
        "name": "BDSSFF",
        "value": 6
      }
    ]
  },
  {
    "name": "C",
    "items": [
      {
        "name": "CKJSDFD",
        "value": 7
      },
      {
        "name": "CERTE",
        "value": 8
      },
      {
        "name": "陈旭",
        "value": 11
      },
      {
        "name": "陈述",
        "value": 12
      }
    ]
  },
  {
    "name": "D",
    "items": [
      {
        "name": "DMMNNVJ",
        "value": 9
      },
      {
        "name": "DIUYJ",
        "value": 10
      }
    ]
  },
  {
    "name": "G",
    "items": [
      {
        "name": "GSDF",
        "value": 13
      },
      {
        "name": "高山",
        "value": 14
      }
    ]
  }
];

export default {
  name: 'x-header',
  data() {
    return {
      title: 'Current City: BEIJING',
      cityData: cityData,
      wrapHeight: 400
    }
  },
  mounted() {
    this.wrapHeight = this.$calcWrapHeight();
  },
  methods: {
    selectItem(item) {
      console.log(item.name);
    },
    clickTitle(title) {
      console.log(title);
    }
  }
};
</script>

<style lang="less" scoped>
// 自定义项的样式
.custom-item {
  position: relative;
  height: 70px;
  line-height: 70px;
  padding: 0 16px;
  font-size: 16px;
}

// 用自定义样式，覆写内置的默认样式
.cube-index-list-content {
  background-color: #222;
  color: #909090;
}
  
.cube-index-list-anchor {
  background-color: #333;
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 20px;
}
  
.cube-index-list-nav {
  padding: 20px 0;
  border-radius: 10px;
  background: rgba(0,0,0,.3);

  > ul {
    > li {
      padding: 3px;
      font-size: 12px;
      color: #909090;

      &.active {
        color: #ffcd32;
      }
    }
  }
}
</style>

