import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class Pie extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('pie'))
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['正常停车', '预约未使用', '暂时停用', '空闲']
            },
            series: [
                {
                    name: '具体情况',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '正常停车' },
                        { value: 310, name: '预约未使用' },
                        { value: 234, name: '暂时停用' },
                        { value: 135, name: '空闲' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    }
    render() {
        return <div id='pie' style={{ height: 300 }}></div>
    }
}

export default Pie
