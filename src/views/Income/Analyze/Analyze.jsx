import React, { useEffect, useState } from 'react'
import { Layout, Row, Col, Button, Divider, Icon } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/icon.scss'
import '@/style/view-style/button.scss'
import './index.scss'
import Line from './line'

function Analyze() {
    useEffect(() => {
        //可以选择性地获取一部分评论
    }, [])
    return (
        <Layout className='button animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['收入', '收入分析']}></CustomBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>收入分析</h3>
                <Divider />
                <div style={{ float: 'left', width: 600 }}>
                    本周收入情况分析
                    <Line />
                </div>
                <div style={{ float: 'right', width: 700 }}>
                    本月收入情况：
                    <Divider />
                    本年收入情况：
                </div>
            </div>
        </Layout>
    )
}

export default Analyze
