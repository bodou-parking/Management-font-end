// eslint-disable-next-line
import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon, Layout, Avatar, Badge } from 'antd'

const { Header } = Layout

const AppHeader = props => {
    let { menuClick, avatar, menuToggle, loginOut } = props
    const menu = (
        <Menu>
            <Menu.ItemGroup title='用户设置'>
                <Menu.Divider />

                <Menu.Item>
                    <Icon type='heart' theme='twoTone' twoToneColor='#eb2f96' />
                    建议使用新一点的版本，比如react18
                </Menu.Item>
                <Menu.Item>
                    <Icon type='heart' theme='twoTone' twoToneColor='#eb2f96' />
                    找了一下午才发现node17+不行了
                </Menu.Item>
            </Menu.ItemGroup>

            <Menu.Divider />

            <Menu.Item>
                <span onClick={loginOut}>
                    <Icon type='logout' /> 退出登录
                </span>
            </Menu.Item>
        </Menu>
    )
    return (
        <Header className='header'>
            <div className='left' style={{ padding: 20 }}>
                <Icon
                    style={{ fontSize: '4rem' }}
                    onClick={menuClick}
                    type={menuToggle ? 'menu-unfold' : 'menu-fold'}
                />
            </div>
            <div className='right' style={{ paddingRight: 60 }}>
                <div>
                    <Dropdown overlay={menu} overlayStyle={{ width: '20rem' }}>
                        <div className='ant-dropdown-link'>
                            <Avatar
                                icon='user'
                                src={avatar}
                                alt='avatar'
                                style={{ height: 50, width: 50, cursor: 'pointer' }}
                            />
                            <span style={{ fontSize: 20, paddingLeft: 30 }}>管理员</span>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Header>
    )
}

AppHeader.propTypes = {
    menuClick: PropTypes.func,
    avatar: PropTypes.string,
    menuToggle: PropTypes.bool,
    loginOut: PropTypes.func
}

export default React.memo(AppHeader)
