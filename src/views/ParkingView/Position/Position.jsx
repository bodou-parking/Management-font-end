import React, { useEffect, useState } from 'react'
import { Layout, Row, Col, Button, Divider, Icon, Tag } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/icon.scss'
import '@/style/view-style/button.scss'
import './index.scss'
import Dialog from './dialog'
import Draw from './Drawer'
import Pie from './pie'
import Line from './line'

function Position() {
    const [park, parkItem] = useState({})
    const [positions, positionsSet] = useState([])

    useEffect(() => {
        //获取当前是哪个停车场
        const hash = window.location.hash
        const queryString = hash.substring(hash.indexOf('?') + 1)
        const urlParams = new URLSearchParams(queryString)
        //获取停车场基本信息
        parkItem({
            id: urlParams.get('Id'),
            name: urlParams.get('name'),
            capacity: urlParams.get('capacity'),
            address: urlParams.get('address')
        })
        //这里先初始化一些数据，假装我是从api获取的某个停车场的车位
        positionsSet([
            {
                id: 0,
                parking_id: 0,
                status: 'string',
                category: 'string',
                charging_type: 'string',
                level: 0,
                location: 'string'
            }
        ])
        getPos()
    }, [])

    //获取停车场列表
    const getPos = () => {
        var axios = require('axios')
        var config = {
            method: 'get',
            url: `https://mock.apifox.cn/m1/3070667-0-default/space/select?parkingId=${park.id}&limit=10&offset=10`,
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
                positionsSet(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    //用于增加停车位
    const addPos = item => {
        console.log('新增', item) //item即为传回的数据
        const newPositions = [...positions, item]
        positionsSet(newPositions)

        var axios = require('axios')
        var data = item

        var config = {
            method: 'post',
            url: 'https://mock.apifox.cn/m1/3070667-0-default/space/add',
            headers: {
                userId: '<userId>',
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
                console.log('成功添加', JSON.stringify(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
    //删除车位
    const delPos = (index, item) => {
        //减少api调用次数
        console.log(`正在试图删除${index}个车位`)
        const newPositions = [...positions.slice(0, index), ...positions.slice(index + 1)]
        positionsSet(newPositions)
        var axios = require('axios')
        //网络层面的请求
        var config = {
            method: 'post',
            url: 'https://mock.apifox.cn/m1/3070667-0-default/space/delete?spaceId=' + item.id,
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
                console.log('成功删除', JSON.stringify(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
    //修改某个车位
    const updatePos = (index, item) => {
        console.log(`正在试图更新${index}个车位`)
        const newPositions = [...positions.slice(0, index), item, ...positions.slice(index + 1)]
        positionsSet(newPositions)

        var axios = require('axios')
        var data = item

        var config = {
            method: 'post',
            url: 'https://mock.apifox.cn/m1/3070667-0-default/space/update?spaceId=' + item.id,
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
                console.log('更新成功', JSON.stringify(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
    const bindPos = item => {
        var axios = require('axios')

        var config = {
            method: 'post',
            url: 'https://mock.apifox.cn/m1/3070667-0-default/space/bindspaceId=' + item.id,
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
                console.log(JSON.stringify(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
    const unBindPos = item => {
        var axios = require('axios')

        var config = {
            method: 'post',
            url: 'https://mock.apifox.cn/m1/3070667-0-default/space/unbind?spaceId=' + item.id,
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
                console.log(JSON.stringify(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Layout className='button animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['停车场管理', '整体信息']}></CustomBreadcrumb>
            </div>
            <div className='base-style' style={{ height: 300 }}>
                <h3>停车场基本信息</h3>
                <Divider />
                <div style={{ float: 'left', marginLeft: 40 }}>
                    <br />
                    <div>停车场的名称为：{park.name}</div>
                    <div>停车场的地址为：{park.address}</div>
                    <div>停车场的总车位数目为：{park.capacity}</div>
                    <br />
                    <br />
                    <Draw addPos={addPos} parkingId={park.id}></Draw>
                </div>
                <div style={{ float: 'right' }}>
                    <Pie proportion={[20, park.capacity]} />
                </div>
                <div style={{ float: 'right' }}>
                    <Line />
                </div>
            </div>
            <div>
                <Row gutter={8}>
                    {positions.map((item, index, arr) => {
                        return (
                            <Col span={6} key={index}>
                                <div className='base-style bigger'>
                                    {item.id}
                                    <Divider />
                                    当前状态：
                                    {item.statue !== 'empty' ? (
                                        <Tag color={'red'}> {item.status} </Tag>
                                    ) : (
                                        <Tag color={'green'}> {item.status} </Tag>
                                    )}{' '}
                                    <br />
                                    位置：{item.location}
                                    <br />
                                    <div>
                                        <Dialog info={item} updatePos={updatePos} index={index} />
                                        <Button onClick={() => delPos(index, item)} type='primary'>
                                            删除
                                        </Button>
                                        <Button onClick={bindPos(item)} type='primary'>
                                            绑定
                                        </Button>
                                        <Button onClick={unBindPos(item)} type='primary'>
                                            解除绑定
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </Layout>
    )
}

export default Position
