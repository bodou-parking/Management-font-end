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
        newPos.category = e.target.elements[0].value
        newPos.charging_type = e.target.elements[1].value
        newPos.level = e.target.elements[2].value
        newPos.location = e.target.elements[3].value
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
                <p>车位编号：{props.info.category}</p>
                <p>车位状态：{props.info.charging_type}</p>
                <p>消费类型：{props.info.level}</p>
                <p>车位位置：{props.info.location}</p>
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
                        label='分类'
                        name='category'
                        rules={[
                            {
                                required: true,
                                message: '请输入该停车位的分类!'
                            }
                        ]}>
                        <Input defaultValue={props.info.category} />
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
                        <Input defaultValue={props.info.charging_type} />
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
                        <Input defaultValue={props.info.level} />
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
                        <Input defaultValue={props.info.location} />
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
