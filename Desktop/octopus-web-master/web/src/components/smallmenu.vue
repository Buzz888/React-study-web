<template>

<div  class="menu" style="width:100%; height:90vh;" v-bar>
    <div style="width:100%; height:100%;">
        <ul v-for="(item,j) in list" :key="j" >
            <li>
                <div :class="j==cur?'active':''" class="flex ai-center text-center" @click="add(j)">
                    <div class="title  size-3 ">{{item.title}}</div>
                    <i :class="j==cur?'up':'down'" class="iconfont ml-4 icon-left"></i>
                </div>
                <transition name="slide-fade" mode="out-in">
                   <ul class="item"  v-show="j==cur">
                       <router-link  tag="li" class="pt-2 color-hui3 size-2 " :class="i==flag?'active':''"  v-for="(item,i) in item.item" :key='i' :to="{path:`/list/${item.router}`,query:{index:i}}" @click="flag=i">{{item.name}}</router-link>               
                </ul>
                </transition>
            </li>
            
        </ul>
    </div>
</div>
</template>
<style  scoped>
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-80px);
  opacity: 0;
}
.menu{
     cursor:pointer;
    background: #f5f5f5;
    position: fixed !important;   
    
}
.title:hover{
color: #ed2945; 
  cursor:pointer;
}
.name{
    transition: all ease 5s;
}
.name:hover{
    color: #ed2945; 
      cursor:pointer;
}

.iconfont{
font-size: 0.8rem; 
transition: all ease .5s;
}
.active{
    color: #ed2945;
   
}
.up{
    transform: rotate(-90deg)
}
.dow{
    transform: rotate(0)
}
.none{
    display: none
}
.block{
    display: block
}

</style>
<script>
import Vue from "vue";
import EasyBar from "easy-bar";
Vue.use(EasyBar);
export default {
    props:['list'],
    data(){
        return{
            
            cur:null,
            flag:null,        
    }},
    methods:{
        add(j){
            this.flag =null
           this.cur=j        
        },
    },
    watch: {
    '$route' (to) {
     this.flag=to.query.index;
     
  }
}}
</script>
