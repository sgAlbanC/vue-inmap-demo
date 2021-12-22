<template>
  <div>
    <!-- 卡片视图 -->
    <el-card>
        <br> 
        <div id="allmap" style="width:100%;height:600px"> </div>
        
    </el-card>
  </div>
</template>

<script>
var Mock = require('mockjs')
import Datas from '../../datas/datas.js'
import inMap from 'inmap'
// import loadFile from '../datas/chongqing.txt'
export default {
  
data () {
    return { 
    count_datas:Object,
    inmap:Object,
    overlay:Object,
    datas : [
{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
},"properties":{"OBJECTID_1":0,"AD_CODE":"1","NAME":"海南","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"海南","count":0}
,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
},"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"上海","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"上海","count":0}
,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
},"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"北京","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"北京","count":0}
,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
},"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"湖北","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"湖北","count":0}
,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
},"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"福建","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"福建","count":0}
,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
},"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"广东","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"广东","count":0}
,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
},"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"广西","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"广西","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"重庆","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"重庆","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"江西","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"江西","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"湖南","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"湖南","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"浙江","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"浙江","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"贵州","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"贵州","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"河北","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"河北","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"河南","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"河南","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"江苏","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"江苏","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"辽宁","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"辽宁","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"内蒙古","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"内蒙古","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"宁夏","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"宁夏","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"山东","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"山东","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"四川","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"四川","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"云南","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"云南","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"安徽","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"安徽","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"青海","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"青海","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"甘肃","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"甘肃","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"黑龙江","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"黑龙江","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"吉林","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"吉林","count":0}
// ,{"type":"Feature","geometry":{"type":"Polygon","coordinates":[]
// },"properties":{"OBJECTID_1":1,"AD_CODE":"2","NAME":"陕西","Shape_Leng":0.752001510489,"Shape_Area":0.0154234421746},"name":"陕西","count":0},

]}},
  created(){
  },
  mounted(){

  var timer = setInterval(() => {
    this.changeCount()
  }, 1000); 
  setTimeout(() => {
    clearInterval(timer)
  }, 4000); 
  this.inmap = new inMap.Map({
       id: "allmap",
       skin: "Blueness",
       center: [108.03956, 29.063677],
        zoom: {
            value: 4.3,
            show: true,
            max: 6,
            min: 4.3
        },
     });
  this.overlay = new inMap.PolygonOverlay({
       tooltip: {
         show: true,
         formatter: "{name}+'的净增人数为'+{count}"
       },
       legend: {
         show: true,
         title: "人口净增长",
       },
       style: {
         normal: {
           borderWidth: 1.5,
           label: {
             show: true, // 是否显示
             font: "13px bold ",
             color: "#fff"
           }
         },
         mouseOver: {
           shadowColor: "rgba(0, 0, 0, 1)",
           shadowBlur: 10,
           borderWidth: 1.5,
           label: {
             color: "rgba(0, 0, 0, 1)"
           }
         },
         selected: {
           backgroundColor: "rgba(184,0,0,1)",
           borderColor: "rgba(255,255,255,1)",
           label: {
             color: "rgba(255,255,255,1)"
           }
         },
        splitList: [
                {
                  //设置区间颜色
                  start: -1000000,
                  end: -500000,
                  backgroundColor: "rgba(0,133,235,0.40)",
                  borderColor: "rgba(0,133,235,1)"
                },
                {
                  start: -500000,
                  end: 0,
                  backgroundColor: "rgba(0,184,255,0.40)",
                  borderColor: "rgba(0,184,255,1)"
                },
                {
                  start: 0,
                  end: 500000,
                  backgroundColor: "rgba(72,246,217,0.40)",
                  borderColor: "rgba(72,246,217,1)"
                },
                {
                  start: 500000,
                  end: 1000000,
                  backgroundColor: "rgba(252,196,95,0.40)",
                  borderColor: "rgba(252,196,95,1)"
                },
                {
                  start: 1000000,
                  backgroundColor: "rgba(210,105,30,0.40)",
                  borderColor: "rgba(255,127,80,1)"
                }
              ]
              }
      });

  //设置数据之前，把datas先从存储数据的js中获取到
  this.readjs()  
  },
 methods: {
   mockCount(){
     this.count_datas = Mock.mock({
          "hannan|-1000000-1500000":500000,
          "shanghai|-1000000-1500000":500000,
          "beijing|-1000000-1500000":500000,
          "hubei|-1000000-1500000":500000,
          "fujian|-1000000-1500000":500000,
          "guangdong|-1000000-1500000":500000,
          "guangxi|-1000000-1500000":500000,
          "chongqing|-1000000-1500000":500000,
          "jiangxi|-1000000-1500000":500000,
          "hunan|-1000000-1500000":500000,
          "zhejiang|-1000000-1500000":500000,
          "guizhou|-1000000-1500000":500000,
          "hebei|-1000000-1500000":500000,
          "jiangsu|-1000000-1500000":500000,
          "liaoning|-1000000-1500000":500000,
          "neimenggu|-1000000-1500000":500000,
          "ningxia|-1000000-1500000":500000,
          "shandong|-1000000-1500000":500000,
          "sichuan|-1000000-1500000":500000,
          "yunnan|-1000000-1500000":500000,
          "anhui|-1000000-1500000":500000,
          "gansu|-1000000-1500000":500000,
          "heilongjiang|-1000000-1500000":500000,
          "jiling|-1000000-1500000":500000,
          "shanxi|-1000000-1500000":500000,
          "shanxixi|-1000000-1500000":500000,
          "sh0nxixi|-1000000-1500000":500000,
          "sh0nxi8333i|-1000000-1500000":500000,
    })
   },

   readjs(){
     for(let i = 0;i<this.datas.length;i++){
       this.datas[i].geometry.coordinates = Datas.dd[i]
     }
      this.overlay.setData(this.datas);   
      this.inmap.add(this.overlay);
   },
   // 这个方法 会执行 4次，4秒1次，执行到16秒过后会停止执行
   changeCount(){
    // 随机生成各城市5年的净增长人数，然后转换成arr数组形式 
    this.mockCount()
    let arr = [];
    for (let j in this.count_datas) {
        arr.push(this.count_datas[j]);
    }
    for(let i=0;i<this.datas.length;i++){
       this.datas[i].count = arr[i]
    }

     // 重新加载数据 重新渲染数据
     this.overlay.setData(this.datas);
     this.inmap.add(this.overlay);
   }
 }
}
</script>

<style lang="less" scoped>
</style>
