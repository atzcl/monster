<template>
  <div class="app">
    <div class="zcl_box">
      <div class="zcl_404">
        <div class="pic-404">
          <img class="pic-404__parent" src="../../assets/images/404.png" alt="404">
          <img class="pic-404__child left" src="../../assets/images/404_1.png" alt="404">
          <img class="pic-404__child mid" src="../../assets/images/404_1.png" alt="404">
          <img class="pic-404__child right" src="../../assets/images/404_1.png" alt="404">
        </div>
        <div class="bullshit">
          <div class="bullshit__oops">Error</div>
          <div class="bullshit__headline">你迷路了嘛？ Σ( ° △ °|||)︴</div>
          <div class="bullshit__info">您可能输入了错误的网址，或者该网页已删除或移动</div>
          <a @click="$router.go(-1)" class="bullshit__return-home">返回上一级</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  'use strict'

  export default {
    name: 'error_404',
    created () {
      this.$store.commit('ZCL_VUEX_ERROR_404')
    }
  }
</script>
<style type="text/stylus" lang="stylus">
  .app {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    overflow: hidden;
    background: #fff;
    padding-top: 20vh;
  }

  .zcl_box {
    width: 100%;
    height: 490px;
    background: rgb(240, 242, 245);
  }

  .zcl_404 {
    position: relative;
    width: 900px;
    height: 490px;
    margin: 20px auto 60px;
    overflow: hidden;
    display: flex;

    .pic-404 {
      position: relative;
      width: 600px;
      padding: 150px 0;
      overflow: hidden;

      .pic-404__parent {
        margin-top: -70px;
        margin-left: 20px;
        width: 100%;
      }

      .pic-404__child {
        position: absolute;
      }

      .pic-404__child.left {
        width: 80px;
        top: 17px;
        left: 220px;
        opacity: 0;
        animation-name: cloudLeft;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }

      .pic-404__child.mid {
        width: 46px;
        top: 10px;
        left: 420px;
        opacity: 0;
        animation-name: cloudMid;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
      }

      .pic-404__child.right {
        width: 62px;
        top: 100px;
        left: 500px;
        opacity: 0;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }
    }

    .bullshit {
      position: relative;
      width: 300px;
      padding: 150px 0;
      overflow: hidden;

      .bullshit__oops {
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 20px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }

      .bullshit__info {
        font-size: 13px;
        line-height: 21px;
        color: grey;
        opacity: 0;
        margin-bottom: 30px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
      }

      .bullshit__headline {
        font-size: 20px;
        line-height: 24px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 10px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
      }

      .bullshit__return-home {
        display: block;
        width: 110px;
        height: 36px;
        background-color: rgba(20, 130, 240, 1);
        border-radius: 100px;
        text-align: center;
        color: #fff;
        opacity: 0;
        font-size: 14px;
        line-height: 36px;
        cursor: pointer;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;

        &:hover {
          background-color: rgba(20, 130, 240, 0.8);
        }
      }
    }
  }

  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(60px);
      transform: translateY(60px);
      opacity: 0;
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(60px);
      transform: translateY(60px);
      opacity: 0;
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes cloudLeft {
    0% {
      top: 17px;
      left: 220px;
      opacity: 0;
    }

    20% {
      top: 33px;
      left: 188px;
      opacity: 1;
    }

    80% {
      top: 81px;
      left: 92px;
      opacity: 1;
    }

    100% {
      top: 97px;
      left: 60px;
      opacity: 0;
    }
  }

  @keyframes cloudMid {
    0% {
      top: 10px;
      left: 420px;
      opacity: 0;
    }

    20% {
      top: 40px;
      left: 360px;
      opacity: 1;
    }

    70% {
      top: 130px;
      left: 180px;
      opacity: 1;
    }

    100% {
      top: 160px;
      left: 120px;
      opacity: 0;
    }
  }

  @keyframes cloudRight {
    0% {
      top: 100px;
      left: 500px;
      opacity: 0;
    }

    20% {
      top: 120px;
      left: 460px;
      opacity: 1;
    }

    80% {
      top: 180px;
      left: 340px;
      opacity: 1;
    }

    100% {
      top: 200px;
      left: 300px;
      opacity: 0;
    }
  }
</style>
