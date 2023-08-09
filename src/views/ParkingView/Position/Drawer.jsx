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
            name: e.target.elements[0].value,
            statue: e.target.elements[1].value
        })
        onClose()
    }
    return (
        <>
            <Button type='primary' onClick={showDrawer}>
                新增
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
                        label='Name'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='statue'
                        name='statue'
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
                            新增
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}
export default Draw
