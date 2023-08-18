import React from 'react'
import { Button, Form, Input } from 'antd'
const ParkingForm = props => {
    const onFinish = e => {
        props.operation(props.index, {
            name: e.target.elements[0].value,
            type: e.target.elements[1].value,
            status: e.target.elements[2].value,
            capacity: e.target.elements[3].value,
            longitude: e.target.elements[4].value,
            latitude: e.target.elements[5].value,
            address: e.target.elements[6].value,
            description: e.target.elements[7].value
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
                        message: '请输入停车场名称'
                    }
                ]}>
                <Input defaultValue={props.type ? props.item.name : ''} />
            </Form.Item>

            <Form.Item
                label='类型'
                name='type'
                rules={[
                    {
                        required: true,
                        message: '请输入停车场类型!'
                    }
                ]}>
                <Input defaultValue={props.type ? props.item.type : ''} />
            </Form.Item>

            <Form.Item
                label='状态'
                name='status'
                rules={[
                    {
                        required: true,
                        message: '请输入状态!'
                    }
                ]}>
                <Input defaultValue={props.type ? props.item.status : ''} />
            </Form.Item>

            <Form.Item
                label='容量'
                name='capacity'
                rules={[
                    {
                        required: true,
                        message: '请输入停车场容量!'
                    }
                ]}>
                <Input defaultValue={props.type ? props.item.capacity : ''} />
            </Form.Item>

            <Form.Item
                label='经度'
                name='latitude'
                rules={[
                    {
                        required: true,
                        message: '请输入精度!'
                    }
                ]}>
                <Input defaultValue={props.type ? props.item.Item : ''} />
            </Form.Item>

            <Form.Item
                label='维度'
                name='longtitude'
                rules={[
                    {
                        required: true,
                        message: '请输入维度!'
                    }
                ]}>
                <Input defaultValue={props.type ? props.item.longitude : ''} />
            </Form.Item>

            <Form.Item
                label='地址'
                name='address'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    }
                ]}>
                <Input defaultValue={props.type ? props.item.address : ''} />
            </Form.Item>

            <Form.Item
                label='描述'
                name='descripion'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    }
                ]}>
                <Input defaultValue={props.type ? props.item.description : ''} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    {props.type ? '修改' : '新增'}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default ParkingForm
