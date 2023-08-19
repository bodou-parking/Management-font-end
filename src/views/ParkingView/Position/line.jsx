import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class Line extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('line'))
        myChart.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['当日赚取总收入', '11', '22']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '当日赚取总收入',
                    type: 'line',
                    data: [500, 532, 501, 534, 590, 530, 510]
                },
                {
                    name: '11',
                    type: 'line',
                    data: [420, 482, 491, 434, 490, 430, 410]
                },
                {
                    name: '22',
                    type: 'line',
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
            ]
        })
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    }
    render() {
        return <div id='line' style={{ height: 200, width: 600 }}></div>
    }
}

export default Line
