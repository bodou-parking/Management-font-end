import React from 'react'
import { Button, Form, Input } from 'antd'
const ParkingForm = props => {
    const onFinish = e => {
        //这样获取表单数据
        props.addParking({
            name: e.target.elements[0].value,
            used: e.target.elements[1].value,
            capacity: e.target.elements[2].value
        })
    }
    return (
        <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onSubmit={onFinish}
            autoComplete='off'>
            <Form.Item
                label='停车场名称'
                name='name'
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!'
                    }
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label='使用人数'
                name='userNum'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    }
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label='总容量'
                name='capacity'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    }
                ]}>
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default ParkingForm
