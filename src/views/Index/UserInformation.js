import './ind.css'
import React from 'react'

class UserInformation extends React.Component {
    render() {
        return (
            <div className={'root cen'}>
                <div className={'userInfo'}>
                    <div>
                        经营停车场数目:
                        <p className={'fontBlue'}> 999 </p>
                    </div>
                    <div>
                        平台服务订购时间:
                        <p className={'fontGreen'}> 2021-3-4 </p>
                    </div>
                    <div>
                        平台服务截止时间:
                        <p className={'fontRed'}> 2022-3-4 </p>
                    </div>
                </div>
                <div className={'userImg'} />
            </div>
        )
    }
}

export default UserInformation
