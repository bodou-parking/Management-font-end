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
    const [park, parkItem] = useState(JSON.parse(localStorage.getItem('parking')))
    const [positions, positionsSet] = useState([])

    useEffect(() => {
        //获取当前是哪个停车场
        const msg = JSON.parse(localStorage.getItem('parking'))
        parkItem(msg)

        //这里先初始化一些数据，假装我是从api获取的某个停车场的车位
        positionsSet([
            { name: 1, user: 2, statue: 'empty' },
            { name: 2, user: 2, statue: 'used' },
            { name: 4, user: 2, statue: 'empty' }
        ])
    }, [])
    //获取停车场基本信息

    //用于增加停车位
    const addPos = item => {
        console.log('新增', item) //item即为传回的数据
        const newPositions = [...positions, item]
        positionsSet(newPositions)
    }
    //删除车位
    const delPos = index => {
        console.log(`正在试图删除${index}个车位`)
        const newPositions = [...positions.slice(0, index), ...positions.slice(index + 1)]
        positionsSet(newPositions)
    }
    //修改某个车位
    const updatePos = (index, item) => {
        console.log(`正在试图更新${index}个车位`)
        const newPositions = [...positions.slice(0, index), item, ...positions.slice(index + 1)]
        positionsSet(newPositions)
    }
    return (
        <Layout className='button animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['停车场管理', '整体信息']}></CustomBreadcrumb>
            </div>
            <div className='base-style' style={{ height: 300 }}>
                <h3>停车基本信息</h3>
                <Divider />
                <div style={{ float: 'left', marginLeft: 40 }}>
                    <div>停车场的名称为：{park.name}</div>
                    <div>停车场的使用人数为：{park.used}</div>
                    <div>停车场的总车位数目为：{park.capacity}</div>
                    <br />
                    <br />
                    <Draw addPos={addPos}></Draw>
                </div>
                <div style={{ float: 'right' }}>
                    <Pie proportion={[park.used, park.capacity - park.used]} />
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
                                    {item.name}
                                    <Divider />
                                    当前状态：
                                    {item.statue !== 'empty' ? (
                                        <Tag color={'red'}> {item.statue} </Tag>
                                    ) : (
                                        <Tag color={'green'}> {item.statue} </Tag>
                                    )}{' '}
                                    <br />
                                    使用者：{item.statue === 'empty' ? '无人使用' : item.user}
                                    <div>
                                        <Dialog info={item} addPos={addPos} updatePos={updatePos} index={index} />
                                        <Button onClick={() => delPos(index)} type='primary'>
                                            删除
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
