<template>
  <div id="th">
   <i class="iconfont icon-zuojiantou" @click="go"></i>
   <span>特惠</span>
  </div>
</template>
<script>
export default {
  methods:{
    go(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
#th{
  height: 0.88rem;
 background: #fff;
}
i{
  text-align: center;
  line-height: 0.88rem;
  margin-left: 0.2rem;
}
#th span{
  font-size: 0.35rem;
  text-align: center
}
</style>