import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Divider } from 'antd'
import screenfull from 'screenfull'
import '@/style/view-style/index.scss'

import BarEcharts from './bar.jsx'
import PieEcharts from './pie.jsx'
import LineEcharts from './line.jsx'
import ScatterEcharts from './scatter.jsx'
import PictorialBarEcharts from './pictorialBar.jsx'
import UserInformation from './UserInformation'
import Information from './Information'

class Index extends Component {
    fullToggle = () => {
        if (screenfull.isEnabled) {
            screenfull.request(document.getElementById('bar'))
        }
    }
    render() {
        return (
            <Layout className='index animated fadeIn'>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <div className='bar-header'>
                                <div>济南冷炫网路科技</div>
                            </div>
                            <Divider />
                            <UserInformation />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <div className='bar-header'>
                                <div>信息推送</div>
                            </div>
                            <Divider />
                            <Information />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <div className='bar-header'>
                                <div>近一周内停车情况</div>
                            </div>
                            <Divider />
                            <LineEcharts />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <div className='bar-header'>
                                <div>本日停车位置情况</div>
                            </div>
                            <Divider />
                            <PieEcharts />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='base-style'>
                            <div className='bar-header'>
                                <div>今日收支情况分析</div>
                                <Icon type='fullscreen' style={{ cursor: 'pointer' }} onClick={this.fullToggle} />
                            </div>
                            <Divider />
                            <BarEcharts />
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Index
