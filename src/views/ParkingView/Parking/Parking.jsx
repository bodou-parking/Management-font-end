import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/button.scss'
import './index.scss'
import { Layout, Row, Col, Button, Divider, Icon, Drawer } from 'antd'
import Draw from './Drawer'
import Pie from './pie'

class Parking extends Component {
    state = {
        loading: false,
        iconLoading: false,
        parkings: [
            { name: '停车场1', capacity: 27, used: 15 },
            { name: '停车场2', capacity: 272, used: 15 },
            { name: '停车场3', capacity: 271, used: 15 },
            { name: '停车场4', capacity: 274, used: 15 }
        ]
    }

    //这里可以执行一些dom操作和请求
    componentDidMount() {}

    enterLoading = () => {
        const newState = { ...this.state }
        newState.loading = true
        this.setState(newState)
    }

    enterIconLoading = () => {
        const newState = { ...this.state }
        newState.iconLoading = true
        this.setState(newState)
    }

    //跳转到停车场具体路由
    handleClick = item => {
        // 存入车位信息到localStorage中
        localStorage.setItem('parking', JSON.stringify(item))
        // 进行导航操作
        this.props.history.push('/parkingView/position')
    }

    //用于增加停车场的方法，该方法会传递给子组件draw，子组件中的表单会收集一些信息
    addParking = item => {
        console.log('新增', item) //item即为传回的数据
        const newState = { ...this.state }
        newState.parkings = [...newState.parkings, item]
        this.setState(newState)
    }

    //删除停车场
    delParking = index => {
        console.log(`正在试图删除${index}个停车场`) //删除某个停车场
        const newState = { ...this.state }
        newState.parkings = [...newState.parkings.slice(0, index), ...newState.parkings.slice(index + 1)]
        this.setState(newState)
    }

    render() {
        console.log(this.state)
        return (
            <Layout className='button animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['停车场管理', '整体信息']}></CustomBreadcrumb>
                </div>
                <div className='base-style' style={{ height: 300 }}>
                    <h3>停车场信息</h3>
                    <Divider />
                    <div style={{ float: 'left' }}>
                        <p>这部分是您管理的所有的停车场的基本信息</p>
                        <Draw addParking={this.addParking} />
                    </div>
                    <div style={{ float: 'right' }}>
                        <Pie proportion={[723, 345]} />
                    </div>
                </div>
                <div>
                    <Row gutter={8}>
                        {this.state.parkings.map((item, index, arr) => {
                            return (
                                <Col span={6} key={index}>
                                    <div style={{ height: 200 }} className='base-style bigger'>
                                        {item.name}
                                        <Divider />
                                        <div style={{ float: 'left' }}>
                                            当前使用人数：{item.used}/{item.capacity}
                                            <div style={{ marginTop: 20 }}>
                                                <Button onClick={() => this.handleClick(item)}>基本信息</Button>
                                                <Button onClick={() => this.delParking(index)} type='primary'>
                                                    删除
                                                </Button>
                                            </div>
                                        </div>
                                        <div style={{ float: 'right' }}></div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Layout>
        )
    }
}

export default Parking
