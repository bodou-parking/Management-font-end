import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class Bar extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('bar'))
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['车位数', '预约数', '剩余数', '已占用']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '1%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '车位数',
                    type: 'bar',
                    data: [300, 300, 300, 300, 300, 300, 300]
                },
                {
                    name: '预约数',
                    type: 'bar',
                    stack: '广告',
                    data: [100, 100, 100, 50, 90, 200, 170]
                },
                {
                    name: '剩余数',
                    type: 'bar',
                    stack: '广告',
                    data: [20, 180, 100, 100, 100, 100, 30]
                },
                {
                    name: '已占用',
                    type: 'bar',
                    stack: '广告',
                    data: [180, 20, 100, 150, 110, 0, 100]
                }
            ]
        })
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    }
    render() {
        return <div id='bar' style={{ height: 500, background: '#fff' }}></div>
    }
}

export default Bar
