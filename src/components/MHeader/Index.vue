<template>
  <div class="m-header">
    <div class="m-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <a class="m-header-back" v-show="_leftOptions.showBack" @click.prevent="onClickBack">
            {{ typeof _leftOptions.backText === 'undefined' ? '' : _leftOptions.backText}}
          </a>
        </transition>
        <transition :name="transition">
          <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
        </transition>
      </slot>
      <slot name="left"></slot>
    </div>
    <h1 class="m-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="m-header-title-area" v-if="shouldOverWriteTitle">
      <slot name="overwrite-title"></slot>
    </div>
    <div class="m-header-right">
      <a class="m-header-more" @click.prevent="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import objectAssign from 'object-assign';

export default {
  name: 'm-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default() {
        return {
          showMore: false
        };
      }
    }
  },
  beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true;
    }
  },
  computed: {
    _leftOptions() {
      return objectAssign({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {});
    }
  },
  methods: {
    onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back');
      } else {
        this.$router ? this.$router.back() : window.history.back();
        this.$store.commit('CHANGE_HEADER_RIGHT', { show: false, url: '/' })
      }
    }
  },
  data() {
    return {
      shouldOverWriteTitle: false
    };
  }
};
</script>

<style lang="less">
@header-background-color: #e85453;
@header-title-color: #fff;
@header-text-color: #fff;
@header-arrow-color: #fff;

.m-header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: @header-background-color;
  z-index: 999;
}
.m-header .m-header-title {
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: @header-title-color;
}
.m-header-title-area, .m-header .m-header-title {
  margin: 0 88px;
  height: 40px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.m-header .m-header-title > span {
  display: inline-block;
}
.m-header .m-header-left, .m-header .m-header-right {
  position: absolute;
  top: 14px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: @header-text-color;
}
.m-header .m-header-left a, .m-header .m-header-left button, .m-header .m-header-right a, .m-header .m-header-right button {
  float: left;
  margin-right: 8px;
  color: @header-text-color;
}
.m-header .m-header-left a:active, .m-header .m-header-left button:active, .m-header .m-header-right a:active, .m-header .m-header-right button:active {
  opacity: .5;
}
.m-header .m-header-left {
  left: 18px;
}
.m-header .m-header-left .m-header-back {
  padding-left: 16px;
}
.m-header .m-header-left .left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid @header-arrow-color;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
}
.m-header .m-header-right {
  right: 15px;
}
.m-header .m-header-right a, .m-header .m-header-right button {
  margin-left: 8px;
  margin-right: 0;
}
.m-header .m-header-right .m-header-more:after {
  content: '\2022\0020\2022\0020\2022\0020';
  font-size: 14px;
}
.m-header-fade-in-right-enter-active {
  animation: fadeinR .5s;
}
.m-header-fade-in-left-enter-active {
  animation: fadeinL .5s;
}
@keyframes fadeinR {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeinL {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
