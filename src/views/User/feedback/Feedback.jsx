import React, { useEffect, useState } from 'react'
import { Layout, Row, Col, Button, Divider, Icon } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/icon.scss'
import '@/style/view-style/button.scss'
import './index.scss'
import Pie from './pie'

function Feedback() {
    const [feedbacks, feedbacksSet] = useState([0])
    useEffect(() => {
        //可以选择性地获取一部分评论
        feedbacksSet([
            { user: '1122', Comment: '牛哇牛哇' },
            { user: '1122', Comment: '日本生可乐' }
        ])
    }, [])
    return (
        <Layout className='button animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['用户', '用户反馈']}></CustomBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>用户反馈分析</h3>
                <Divider />
                <Pie />
            </div>
            <div>
                <Row gutter={8}>
                    {feedbacks.map((item, index) => {
                        return (
                            <Col span={8} key={index}>
                                <div className='base-style bigger'>
                                    用户：{item.user}
                                    <Divider />
                                    {item.Comment}
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </Layout>
    )
}

export default Feedback
