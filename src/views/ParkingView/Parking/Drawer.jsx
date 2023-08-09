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
    const addParking = item => {
        props.addParking(item)
        onClose()
    }
    return (
        <>
            <Button type='primary' onClick={showDrawer}>
                新增停车场
            </Button>
            <Drawer title='Basic Drawer' placement='right' width='40%' onClose={onClose} visible={open}>
                <ParkingForm addParking={addParking} />
            </Drawer>
        </>
    )
}
export default Draw
