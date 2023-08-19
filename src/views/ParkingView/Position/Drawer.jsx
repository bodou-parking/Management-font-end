import React, { useState } from 'react'
import { Button, Drawer, Form, Input } from 'antd'
const Draw = props => {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    const addPos = e => {
        props.addPos({
            parking_id: e.target.elements[0].value,
            category: e.target.elements[1].value,
            charging_type: e.target.elements[2].value,
            level: e.target.elements[3].value,
            location: e.target.elements[4].value
        })
        onClose()
    }
    return (
        <>
            <Button type='primary' onClick={showDrawer}>
                新增停车位
            </Button>
            <Drawer title='Basic Drawer' placement='right' width='40%' onClose={onClose} visible={open}>
                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onSubmit={addPos}
                    autoComplete='off'>
                    <Form.Item
                        label='分类'
                        name='category'
                        rules={[
                            {
                                required: true,
                                message: '请输入该停车位的分类!'
                            }
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='收费类型'
                        name='charging_type'
                        rules={[
                            {
                                required: true,
                                message: '请输入收费类型!'
                            }
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='等级'
                        name='level'
                        rules={[
                            {
                                required: true,
                                message: '请属于预设置等级!'
                            }
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='地址'
                        name='location'
                        rules={[
                            {
                                required: true,
                                message: '请输入停车位的地址!'
                            }
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit'>
                            新增
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}
export default Draw
