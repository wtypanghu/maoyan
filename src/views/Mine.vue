<template>
  <div>
      <header>
        <li class="tx"></li>
        <li><span class="login">立即登录</span></li>
      </header>
      <nav>
        <li>
          <i class="iconfont icon-youhuiquan" ></i>
          <span>电影订单</span>
        </li>
        <li>
          <i class="iconfont icon-dingdan"></i>
          <span>商品订单</span>
        </li>
      </nav>
      <section>
          <li>
            <i class="iconfont icon-card">  <span>卖座券</span></i>
            <i class="iconfont icon-youjiantou"></i>
          </li>
          <li>
            <i class="iconfont icon-iconfront-"><span>组合红包</span></i>
            <i class="iconfont icon-youjiantou"></i>
          </li>
          <li>
            <i class="iconfont icon-yue"><span>余额</span></i>
            <span class="zero">￥0</span>
            <i class="iconfont icon-youjiantou"></i>
          </li>
          <li>
            <i class="iconfont icon-shezhi"> <span>设置</span></i>
            <i class="iconfont icon-youjiantou"></i>
          </li>
      </section>
  </div>
</template>
<style scoped>
    header{
      height: 3.1rem;
      background: url(../assets/bg.png) no-repeat;
      background-size: cover;
      position: relative;
    }
    .tx{
      width: 1.26rem;
      height: 1.26rem;
      border-radius: 0.7rem;
      border: 0.04rem solid #fff;
      background: url(../assets/tx.png) no-repeat ;
      background-size: cover;
      position: absolute;
      top: 1.1rem;
      left: 0.4rem;
    }
    .login{
      font-size: 0.32rem;
      color: #fff;
      position: absolute;
      top: 1.6rem;
      left: 2.2rem;
    }
    nav{
      display: flex;
      height: 1.6rem;
      background: #fff;
    }
    nav li{
      display: flex;
       flex: 1;
       flex-direction: column;
       justify-content:center;
       align-items:center;
    }
    nav li span{
      color: #797d82
    }
     .icon-youhuiquan{
      color: #ffcb39
    }
     .icon-dingdan{
      color: #c6da5c
    }  
    section{
      height: 3.92rem;
      background: #fff;
      margin-top: 0.2rem
    }
    section li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 0.98rem;
      padding: 0rem 0.3rem;
      border-bottom: 0.02rem solid #ededed;
    }
     section li span{
      color: #2c3e50;
      font-size: 0.3rem;
      margin-left: 0.3rem;
    }
    .zero{
      margin-left: 4.3rem;
    }
      .icon-card{
      color:#ff9477
    }  
  .icon-iconfront-{
      color:#c9b596
    } 
    .icon-yue{
      color: #ffbe53
    } 
     .icon-shezhi{
      color: #c3d46c
    } 
 .icon-youjiantou{
      color: #e2e3e6
    }
</style>