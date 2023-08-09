import React, { useState } from 'react'
import { Button, Modal, Form, Input } from 'antd'
function Dialog(props) {
    const [isModalOpen, setIsModalOpen] = useState(0)
    const showModal = () => {
        setIsModalOpen(1)
    }
    const closeInfoModal = () => {
        setIsModalOpen(0)
    }
    const showVise = () => {
        setIsModalOpen(2)
    }
    const updatePos = e => {
        //更新对象
        const newPos = { ...props.info }
        newPos.name = e.target.elements[0].value
        newPos.statue = e.target.elements[1].value
        props.updatePos(props.index, newPos)
        //回到之前的窗口
        showModal()
    }
    return (
        <>
            <Button type='primary' onClick={showModal}>
                更多信息
            </Button>
            <Modal title='基本信息' visible={isModalOpen === 1} onOk={closeInfoModal} onCancel={closeInfoModal}>
                <p>车位编号：{props.info.name}</p>
                <p>使用人：{props.info.user}</p>
                <p>车位状态：{props.info.statue}</p>
                <Button onClick={showVise}>编辑</Button>
            </Modal>
            <Modal title='编辑' visible={isModalOpen === 2} onOk={closeInfoModal} onCancel={closeInfoModal}>
                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onSubmit={updatePos}
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
                        <Input defaultValue={props.info.name} />
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
                        <Input defaultValue={props.info.statue} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit'>
                            提交修改
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default Dialog
