<template>
  <div class="headerPic">
    <div>
      <p class="imgTitle">{{recommendTitle}}</p>
      <a href="baidu.com"><img src="图片地址" class="headerImg"></a>
      
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.headerPic{
    height: 300px;
    width: 100%;
    background-color: antiquewhite;
}
.headerImg{
    height: 300px;
    width: 100%;
}
.imgTitle{
    z-index: 2;
    padding-left: 45%;
    padding-top: 230px;
    position: absolute;
    color: #fff;
    font-size: 20px;
}
</style>
