import React, { useEffect, useState } from 'react'
import { Layout, Row, Col, Button, Divider, Icon } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/icon.scss'
import '@/style/view-style/button.scss'
import './index.scss'
import { set } from 'nprogress'
import { Input, Form } from 'antd'
const { Search } = Input

function UserInfo() {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({ name: '张三', info: '基本信息' })
    const [info, setInfo] = useState({ info: '基本信息' })
    useEffect(() => {
        //发送dom请求并且获取到一些信息
    }, [])
    const showmodel = e => {
        console.log(e.target.elements[0].value)
        setShow(true)
    }
    return (
        <Layout className='button animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['用户', '用户信息']}></CustomBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>用户查询</h3>
                <Divider />
                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onSubmit={showmodel}
                    autoComplete='off'>
                    <Form.Item
                        label='id'
                        name='id'
                        rules={[
                            {
                                required: true,
                                message: '请输入你要查询的号码!'
                            }
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit'>
                            查询
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            {show && (
                <div>
                    <Row gutter={24}>
                        <Col span={12}>
                            <div className='base-style '>
                                用户：王唔
                                <Divider />
                                用户的基本信息
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='base-style '>
                                用户使用记录
                                <Divider />
                                展示用户的使用情况
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </Layout>
    )
}

export default UserInfo
