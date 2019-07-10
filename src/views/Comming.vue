<template>
  <div id="list">
    <ul>
      <li v-for="item in filmlist.films" :key="item.id">
        <div class="pic"><img :src="item.poster" alt=""></div>
        <div class="details">
            <div class="top"><p>{{item.name}}</p><span>{{item.filmType.name}}</span></div>
            <!-- <div class="center"><span>观众评分</span><span>{{item.grade}}</span></div> -->
            <div class="middle"><span>主演：</span>
            <span v-for="item2 in item.actors" :key="item2.id">{{item2.name}}</span>
            </div>
            <div class="bottom"><span>上映日期: 周五 7月12日</span></div>
        </div>
         <div class="buy">预购</div>
        </li>
    </ul>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  created() {
      this["filmlist/getFilm"]();
  },
  computed: {
    ...mapState(["filmlist","films"])
  },
  methods: {
    ...mapActions(["filmlist/getFilm"])
  },
}
</script>
<style scoped>
 
    #list{
    width:100%;
    overflow: hidden;
}
h6,p{
    margin:0;
    padding:0;
}
ul{
        list-style: none;
        width: 100%;
        margin:0;
        padding: 0;
        overflow: hidden;
        background: #fff
}
li{
    width:100%;
    float: left;
    padding:0.3rem;
    border-bottom: 0.02rem solid #f8f8f8;
    }
    a{
        display: block;
        text-decoration: none;
        width: 100%;
        height: 1.8rem;
        
    }
    .pic{
        width: 1.32rem;
        height: 1.8rem;
        float:left;
    }
    .pic img{
        width: 1.32rem;
        height:1.8rem;
        
    }
    .details{
        font-size: 0.26rem;
        color:#797d82;
        font-weight: 100;
        float:left;
        text-align: left;
        width: 4.2rem;
        margin-left: 0.3rem
    }
    .details div{
        margin-top:0.12rem;
    }
    .details .top p{
        display:inline-block;
        font-weight: 600;
        color:#000;
    }
    .details  .top span{
font-size: 0.18rem;
    color: #fff;
    background-color: #d2d6dc;
    height:0.28rem;
    line-height: 0.28rem;
    padding: 0 0.04rem;
    border-radius: 0.04rem;
    margin-left:0.1rem;
    }
    .details .middle{
        width:100%;
        height:0.34rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .buy{
        float:left;
        line-height: 0.5rem;
        height: 0.5rem;
        width: 1rem;
        color: #ff5f16;
        font-size: 0.26rem;
        text-align: center;
        border-radius: 0.04rem;
        border:0.02rem solid #ff5f16;
        border-radius: 0.08rem;
        margin-top: 0.63rem;
    }
</style>