import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import ParkingForm from './From'
const Draw = props => {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    const operation = (index, item) => {
        props.operation(item)
        onClose()
    }
    return (
        <>
            <Button type='primary' onClick={showDrawer}>
                {props.type ? '修改停车场' : '新增停车场'}
            </Button>
            <Drawer title='Basic Drawer' placement='right' width='40%' onClose={onClose} visible={open}>
                <ParkingForm operation={props.operation} item={props.item} index={props.index} type={props.type} />
            </Drawer>
        </>
    )
}
export default Draw
