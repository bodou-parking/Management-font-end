import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import { Divider } from 'antd'
import './ind.css'

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
                data: ['停车费', '超时收取金额']
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
                    data: ['昨日', '今日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '停车费',
                    type: 'bar',
                    data: [120, 20]
                },
                {
                    name: '超时收取金额',
                    type: 'bar',
                    data: [220, 18]
                }
            ]
        })
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    }
    render() {
        return (
            <div style={{ height: 500 }}>
                <div id='bar' style={{ height: 500, width: 300, background: '#fff', float: 'left' }}></div>
                <div style={{ float: 'right', width: '65%' }}>
                    <div>
                        <div style={{ fontSize: '25px' }}>本日收入情况:</div>
                        <br />
                        <div>
                            完成支付订单:
                            <span className={'bigSize fontGold'}>11</span>
                        </div>
                        <div>
                            本日总收入为:
                            <span className={'bigSize fontGold'}>255</span>元
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <div style={{ fontSize: '25px' }}>本日车位使用率情况:</div>
                        <br />
                        <div>
                            总使用率:
                            <span className={'bigSize fontBlue'}>11</span>%
                        </div>
                        <div>
                            总剩余率:
                            <span className={'bigSize fontRed'}>11</span>%
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <div style={{ fontSize: '25px' }}>本日用户分析:</div>
                        <br />
                        <div>
                            日活用户数:
                            <span className={'bigSize fontGreen'}>1153</span>
                        </div>
                        <div>
                            使用频率最高的停车场:
                            <span className={'bigSize fontGreen'}>红浪漫休闲会所</span>
                        </div>
                        <div>
                            用户使用频率最多的时间段:
                            <span className={'bigSize fontGreen'}>16:00-18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bar
