import React, { Component } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
// import axios from '@/api'
// import { API } from '@/api/config'
import '@/style/view-style/login.scss'
import Password from 'antd/lib/input/Password'

class Login extends Component {
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
                // let { username, password } = values
                // axios
                //     .post(`${API}/login`, { username, password })
                //     .then(res => {
                //         if (res.data.code === 0) {
                //             localStorage.setItem('user', JSON.stringify(res.data.data.user))
                //             localStorage.setItem('token', res.data.data.token)
                //             this.props.history.push('/')
                //             message.success('登录成功!')
                //         } else {
                //             // 这里处理一些错误信息
                //         }
                //     })
                //     .catch(err => {})
                // 这里可以做权限校验 模拟接口返回用户权限标识
                var axios = require('axios')
                var config = {
                    method: 'post',
                    url: `https://mock.apifox.cn/m1/3070667-0-default/auth/login?apifoxApiId=102718099?phone=${'15149186688'}&pwd=${
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
                        values.auth = 0
                    })
                    .catch(function(error) {
                        alert('帐号或者密码错误，但是先给你登录上去了')
                        console.log(error)
                        values.auth = 1
                    })
                localStorage.setItem('user', JSON.stringify(values))
                this.enterLoading()
                this.timer = setTimeout(() => {
                    message.success('登录成功!')
                    this.props.history.push('/')
                }, 2000)
            }
        })
    }
    register = () => {
        this.props.history.push('/register')
    }

    componentDidMount() {
        notification.open({
            message: '欢迎使用泊豆泊车后台管理平台',
            duration: null,
            description: '测试账号随意,密码随意，反正接口有问题，无法处理传进去的数据'
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
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'
                                    loading={this.state.loading}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                            onClick={this.register}
                            loading={this.state.loading}>
                            注册
                        </Button>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Form.create()(Login))
