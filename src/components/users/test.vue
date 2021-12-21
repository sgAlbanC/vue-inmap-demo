<template>
  <div>
    <!-- 卡片视图 -->
    <el-card>

        
    </el-card>
  </div>
</template>

<script>
import inMap from 'inmap'
// import loadFile from '../datas/chongqing.txt'
export default {
  
data () {
    return {     
    inmap:Object,
    overlay:Object,
    }},
  created(){
    this.getdatas()
  },
  mounted(){
  
  },
 methods: {
   getdatas() {
        //  更新数据devInfo.txt文件接口      
        let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
        xhr.open('GET', '../../datas/hainan.txt', false);// 文件路径
        xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
        // xhr.send(null);
        console.log(xhr); //打印文件信息
        console.log(xhr.responseText); //打印文件信息
    }
 }
}
</script>

<style lang="less" scoped>
</style>
