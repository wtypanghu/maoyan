<template>
    <div id="list">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="'/detail/'+item.filmId">
                    <div class="pic"><img :src="list[index].poster" alt=""></div>
                    <div class="details">
                        <div class="top"><p>{{item.name}}</p><span>{{item.filmType.name}}</span></div>
                        <div class="center"><span>观众评分</span><span>{{item.grade}}</span></div>
                        <div class="middle"><span>主演：</span><span v-for="(item1,index1) in item.actors" :key="index1">{{item1.name}}</span></div>
                        <div class="bottom"><span>{{item.nation}}|{{item.runtime}}</span></div>
                    </div>
                    <div class="buy">购票</div>
                        
                    
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.$axios.get("http://localhost:3000/films").then((res)=>{
            this.list=res.data;
            console.log(this.list);
        })
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
}
li{
    width:100%;
    float: left;
    padding:15px;
    }
    a{
        display: block;
        text-decoration: none;
        width: 100%;
        height: 90px;
        
    }
    .pic{
        width: 66px;
        height: 90px;
        float:left;
    }
    .pic img{
        width: 66px;
        height: 90px;
        
    }
    .details{
        font-size: 13px;
        color:#797d82;
        font-weight: 100;
        float:left;
        text-align: left;
        width: 210px;
    }
    .details div{
        margin-top:6px;
    }
    .details .top p{
        display:inline-block;
        font-weight: 600;
        color:#000;
    }
    .details  .top span{
font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    margin-left:5px;
    }
    .details .middle{
        width:100%;
        height:17px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .details .center :nth-child(2){
        color:#ffb232;
        margin-left:5px;
        font-size:14px;
        font-weight: 100;
    }
    .buy{
        float:left;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        border: 1px solid #ff5f16;
        border-radius: 4px;
        margin-top: 31.5px;
    }
</style>