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
    componentDidMount() {
        this.getAllParkings()
    }

    //获取停车场列表（好像每次获取de数据都不一样）
    getAllParkings = () => {
        var axios = require('axios')
        var config = {
            method: 'get',
            url:
                'https://mock.apifox.cn/m1/3070667-0-default/parking/list?longitude=0&latitude=0&radius=0&limit=0&offset=0',
            headers: {
                'User-Agent': 'BodouParking/1.0.1',
                Version: '1.0.1',
                Token: '{{TOKEN}}',
                Timestamp: '{{TIMESTAMP}}',
                Signature: '{{SIGN}}'
            }
        }
        axios(config)
            .then(response => {
                console.log(response.data.data)
                const parkingArr = response.data.data
                const newState = { ...this.state }
                newState.parkings = parkingArr
                this.setState(newState)
            })
            .catch(error => {
                console.log(error)
            })
    }
    //下面这俩是加载内容
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
        //减少api交互次数，这里做一个简单de存储
        console.log('新增', item)
        const newState = { ...this.state }
        newState.parkings = [...newState.parkings, item]
        this.setState(newState)
        var axios = require('axios')
        var data = item

        var config = {
            method: 'post',
            url: 'https://mock.apifox.cn/m1/3070667-0-default/parking/add',
            headers: {
                'User-Agent': 'BodouParking/1.0.1',
                Version: '1.0.1',
                Token: '{{TOKEN}}',
                Timestamp: '{{TIMESTAMP}}',
                Signature: '{{SIGN}}',
                'Content-Type': 'application/json'
            },
            data: data
        }

        axios(config)
            .then(response => {
                console.log(JSON.stringify(response.data), '成功存储')
            })
            .catch(error => {
                console.log(error)
            })
    }

    //删除停车场
    delParking = (index, item) => {
        console.log(`正在试图删除${item.name}停车场`)
        //减少api交互，
        const newState = { ...this.state }
        newState.parkings = [...newState.parkings.slice(0, index), ...newState.parkings.slice(index + 1)]
        this.setState(newState)
        var axios = require('axios')

        var config = {
            method: 'post',
            url: 'https://mock.apifox.cn/m1/3070667-0-default/parking/delete?id=' + item.id,
            headers: {
                'User-Agent': 'BodouParking/1.0.1',
                Version: '1.0.1',
                Token: '{{TOKEN}}',
                Timestamp: '{{TIMESTAMP}}',
                Signature: '{{SIGN}}'
            }
        }

        axios(config)
            .then(function(response) {
                console.log('已经删除', JSON.stringify(response.data))
            })
            .catch(function(error) {
                console.log(error)
            })
    }
    //注意一下这两个参数来自其他组件de反馈
    changeParking = (index, item) => {
        console.log(`正在试图修改${item.name}停车场`)
        //减少api交互，
        const newState = { ...this.state }
        newState.parkings[index] = item
        this.setState(newState)
        //交互
        var axios = require('axios')
        var data = item
        var config = {
            method: 'post',
            url: 'https://mock.apifox.cn/m1/3070667-0-default/parking/update?id=' + item.id,
            headers: {
                'User-Agent': 'BodouParking/1.0.1',
                Version: '1.0.1',
                Token: '{{TOKEN}}',
                Timestamp: '{{TIMESTAMP}}',
                Signature: '{{SIGN}}',
                'Content-Type': 'application/json'
            },
            data: data
        }

        axios(config)
            .then(function(response) {
                console.log('修改成功', JSON.stringify(response.data))
            })
            .catch(function(error) {
                console.log(error)
            })
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
                        <Draw operation={this.addParking} type={0} />
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
                                            总容量：{item.capacity}
                                            <div style={{ marginTop: 20 }}>
                                                <Button onClick={() => this.handleClick(item)}>基本信息</Button>
                                                <Draw
                                                    operation={this.changeParking}
                                                    item={item}
                                                    index={index}
                                                    type={1}
                                                />
                                                <Button onClick={() => this.delParking(index, item)} type='primary'>
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
