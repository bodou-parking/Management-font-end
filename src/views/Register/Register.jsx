import React, { Component } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
import '@/style/view-style/login.scss'
import Password from 'antd/lib/input/Password'

class Register extends Component {
    state = {
        loading: false
    }

    enterLoading = () => {
        this.setState({
            loading: true
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.password !== values.repassword) {
                    alert('两次输入密码不一致')
                } else {
                    var axios = require('axios')
                    var config = {
                        method: 'post',
                        url: `https://mock.apifox.cn/m1/3070667-0-default/auth/register?phone=${'15149186688'}&pwd=${
                            values.password
                        }`,
                        headers: {
                            'User-Agent': 'BodouParking/1.0.1',
                            Version: '1.0.1',
                            Token: '{{TOKEN}}',
                            Timestamp: '{{TIMESTAMP}}',
                            Signature: '{{SIGN}}'
                        }
                    }
                    axios(config)
                        .then(function(response) {
                            console.log(JSON.stringify(response.data))
                            message.success('注册成功!')
                        })
                        .catch(function(error) {
                            message.success('注册失败，但还是先跳转回到初始界面了!')
                            console.log(error)
                        })
                    this.enterLoading()
                    this.props.history.push('/')
                }
            }
        })
    }

    componentDidMount() {
        notification.open({
            message: '欢迎注册',
            duration: null,
            description: '目前仅开放物业注册'
        })
    }

    componentWillUnmount() {
        notification.destroy()
        this.timer && clearTimeout(this.timer)
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className='login-form'>
                        <h3>后台管理系统</h3>
                        <Divider />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名/电话号码!' }]
                                })(
                                    <Input
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='用户名'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(
                                    <Input
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type='password'
                                        placeholder='密码'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('repassword', {
                                    rules: [{ required: true, message: '请确认密码' }]
                                })(
                                    <Input
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type='password'
                                        placeholder='确认密码'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'
                                    loading={this.state.loading}>
                                    注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Form.create()(Register))
