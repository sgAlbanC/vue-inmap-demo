<template>
  <div>
    <!-- 卡片视图 -->
    <el-card>
        
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="起点">
                <el-input v-model="formInline.start" placeholder="县级以上城市"></el-input>
            </el-form-item>
            <el-form-item label="终点">
                <el-input v-model="formInline.end" placeholder="县级以上城市"></el-input>
            </el-form-item>
            <el-form-item label="人数">
                <el-input v-model="formInline.number" placeholder="流动人口数"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button plain type="primary" @click="onSubmit">添加</el-button>
            </el-form-item>
        </el-form>
        <br>
        <div id="allmap" style="width:100%;height:520px"> </div>
    </el-card>
  </div>
</template>

<script>
import inMap from 'inmap'
export default {
  
data () {
    return {     
        inmap:Object,
        start_lng_and_lat:[],
        end_lng_and_lat:[],
        formInline:{
          start: '',
          end: '',
          number:''
        },
        datas:[{"from":{"name":"铜梁","coordinates":[106.551538,29.850509]},"to":{"name":"衡山","coordinates":[112.612787,27.317599]},"count":1,"number":100},
            {"from":{"name":"广州","coordinates":[113.270793,23.135308]},"to":{"name":"北京","coordinates":[116.413554,39.911013]},"count":20,"number":300},
            {"from":{"name":"广州","coordinates":[113.270793,23.135308]},"to":{"name":"三亚","coordinates":[109.518646,18.258217]},"count":3,"number":400},
            {"from":{"name":"广州","coordinates":[113.270793,23.135308]},"to":{"name":"上海","coordinates":[121.480237,31.236305]},"count":4,"number":700},
            {"from":{"name":"广州","coordinates":[113.270793,23.135308]},"to":{"name":"韶关","coordinates":[113.603757,24.816174]},"count":5,"number":500}] 
        }
  },
  create(){
  },
  mounted(){
    this.inmap = new inMap.Map({
        id: 'allmap',
        skin: "Blueness",
        center: [108.03956, 29.063677],
        zoom: {
            value: 4.3,
            show: true,
            max: 6,
            min: 4.3
        },
      });
    this.draw()
  },
 methods: {
    draw(){
        var overlay = new inMap.MoveLineOverlay({
            style: {
                point: { //散点配置
                    tooltip: {
                        show: true,
                        formatter: "{name}"
                    },
                    style: {
                        normal: {
                            backgroundColor: 'rgba(200, 200, 50, 1)',
                            borderWidth: 1,
                            borderColor: "rgba(255,255,255,1)",
                            size: 6,
                            label: {
                                show: true,
                                color: 'rgba(255,255,255,1)'

                            },
                        },
                        mouseOver: {
                            backgroundColor: 'rgba(200, 200, 200, 1)',
                            borderColor: "rgba(255,255,255,1)",
                            borderWidth: 4,
                        },
                        selected: {
                            backgroundColor: 'rgba(184,0,0,1)',
                            borderColor: "rgba(255,255,255,1)"
                        },
                    },
                    event: {
                        onMouseClick: function (item) {
                            console.log('点击城市')
                        }
                    }
                },
                line: { //线的配置
                    style: {
                        normal: {
                            borderColor: 'rgba(200, 200, 50, 1)',
                            borderWidth: 1,
                            // shadowColor: 'rgba(255, 250, 50, 1)',
                            // shadowBlur: 20,
                            lineOrCurive: "curve"
                        }
                    }
                },
                lineAnimation: {
                    style: {
                        size: 2,
                        //移动点颜色
                        fillColor: '#fff',
                        //移动点阴影颜色
                        shadowColor: '#fff',
                        //移动点阴影大小
                        shadowBlur: 10,
                        lineOrCurve: 'curve',
                    }

                },
            },
            data : this.datas,
        });
        this.inmap.add(overlay);
    },
    onSubmit() {
        // console.log(this.formInline.start)
        this.getCoordinates()
     },
     async getCoordinates(){
         const {data:start} = await this.$http.get('/'+this.formInline.start)
         const {data:end} = await this.$http.get('/'+this.formInline.end)
        //  console.log(start.result.location.lat)
        let start_lng = start.result.location.lng
        let start_lat = start.result.location.lat

        let end_lng = end.result.location.lng
        let end_lat = end.result.location.lat
        this.start_lng_and_lat = [start_lng,start_lat]
        this.end_lng_and_lat = [end_lng,end_lat]
        // 对象转数组
        let arr1 = [];
          for (let i in this.start_lng_and_lat) {
            arr1.push(this.start_lng_and_lat[i]);
        }
        let arr2 = [];
          for (let i in this.end_lng_and_lat) {
            arr2.push(this.end_lng_and_lat[i]);
        }
        this.datas.push({"from":{"name":this.formInline.start,"coordinates":arr1},"to":{"name":this.formInline.end,"coordinates":arr2},"count":1,"number":this.number})
        this.draw()
     }
  },

}
</script>

<style lang="less" scoped>
</style>
