import React from 'react'
import { Layout, Divider, Button } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import Axios from 'axios'

function t() {
    var axios = require('axios')
    var config = {
        method: 'get',
        url: 'https://mock.apifox.cn/m1/3070667-0-default/user/test/hello?apifoxApiId=98567730',
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
            console.log(JSON.stringify(response.data), '测试成')
        })
        .catch(function(error) {
            console.log(error)
        })
}

const AboutView = () => (
    <Layout>
        <div>
            <CustomBreadcrumb arr={['关于']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>关于作者</h3>
            <Divider />
            <p>这个人很懒，什么都没有留下……(测试界面)</p>
            <Button onClick={t}>测试</Button>
        </div>
    </Layout>
)
export default AboutView
