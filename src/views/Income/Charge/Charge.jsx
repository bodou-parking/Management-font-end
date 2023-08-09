import React, { useEffect, useState } from 'react'
import { Layout, Row, Col, Button, Divider, Icon } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/icon.scss'
import '@/style/view-style/button.scss'
import './index.scss'
import { set } from 'nprogress'
import { Input, Form } from 'antd'

function Charge() {
    const [show, setShow] = useState(false)
    const [toll, setToll] = useState([1.5, 1.0, 0.5])
    useEffect(() => {}, [])
    const vise = () => {
        setShow(true)
    }
    const save = () => {
        setShow(false)
    }
    const viseToll = e => {
        const newArr = [e.target.elements[0].value, e.target.elements[1].value, e.target.elements[2].value]
        console.log(newArr)
        save()
    }
    return (
        <Layout className='button animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['收支管理', '收费管理']}></CustomBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>收费管理</h3>
                <Divider />
                {!show && (
                    <div>
                        <p>A类车位：{toll[0]}/h</p>
                        <p>B类车位：{toll[1]}/h</p>
                        <p>C类车位：{toll[2]}/h</p>
                        <Button onClick={vise}>修改</Button>
                    </div>
                )}
                {show && (
                    <div>
                        <Form
                            name='basic'
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            onSubmit={viseToll}
                            autoComplete='off'>
                            <Form.Item
                                label='a'
                                name='a'
                                rules={[
                                    {
                                        required: true,
                                        message: '输入定价'
                                    }
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='b'
                                name='b'
                                rules={[
                                    {
                                        required: true,
                                        message: '输入定价'
                                    }
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='c'
                                name='c'
                                rules={[
                                    {
                                        required: true,
                                        message: '输入定价'
                                    }
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type='primary' htmlType='submit'>
                                    保存
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Charge
