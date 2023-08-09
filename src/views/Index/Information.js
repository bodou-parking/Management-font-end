import './ind.css'
import React from 'react'
import { Button, Divider, Table, Tag } from 'antd'

const columns = [
    {
        title: '事件名称',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: '紧急等级',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'yellow' : 'red'
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </span>
        )
    }
]

const data = []
for (let i = 0; i < 7; i++) {
    data.push({
        key: i,
        name: `用户反馈`,
        address: `济南`,
        tags: [i % 2 ? 'error' : 'warning']
    })
}

const Table1 = () => <Table columns={columns} dataSource={data} />

class Information extends React.Component {
    render() {
        return (
            <div className={'root'} style={{ overflow: 'auto' }}>
                <Table1 />
            </div>
        )
    }
}

export default Information
