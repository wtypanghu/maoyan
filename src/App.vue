<template>
  <div id="app">
      <keep-alive>
          <router-view />
      </keep-alive>
    <div id="nav">
      <router-link to="/" tag="li">
            <i class="iconfont icon-dianying" ></i>
            <span>电影</span> 
      </router-link>
      <router-link to="/Cinema" tag="li">
          <i class="iconfont icon-yingyuana" ></i>
         <span>影院</span> 
      </router-link>
       <router-link to="/Sale" tag="li">
          <i class="iconfont icon-youhui"></i>
          <span>特惠</span>
       </router-link>
      <router-link to="/Mine" tag="li">
          <i class="iconfont icon-wodexinxi" ></i>
          <span>我的</span>
      </router-link>
    </div>
   
  </div>
</template>
<script>

</script>
<style >
@import "./assets/reset.css";
/* #nav a {
    cursor: pointer;
    color: #191a1b;
}
#nav a.router-link-exact-active {
  color: #ff5f16;
} */
#NavTop a {
    display: inline-block;
    font-size: 0.28rem;
    cursor: pointer;
    line-height: 0.9rem;
    color: #191a1b;
}
#NavTop a.router-link-exact-active {
  color: #ff5f16;
  border-bottom: 0.02rem solid #ff5f16
}
body{
   background:#f4f4f4;
}
 #nav{
    width: 100%;
    height: 1rem;
    background: #ffffff;
    position: fixed;
    bottom: 0rem;
    display: flex;
    border-top:0.02rem solid #d3d3d3
}
 #nav li{
    flex:1;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
.iconfont{
    font-size: 0.46rem;
    color: #797d82;
    margin-bottom: 0.05rem;
}
#nav span{
    color: #797d82;
     font-size: 0.15rem;
    line-height: 0.23rem; 
 }   
</style>
