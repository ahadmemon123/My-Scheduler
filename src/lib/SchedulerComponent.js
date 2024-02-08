import React from 'react'
import StoreProvider from './store/provider'
import MainWarpper from './ui/MainWarpper/MainWarpper'
import Day from './view/Day'

const SchedulerComponent = () => {
    return (
        <MainWarpper>
            <Day/>
        </MainWarpper>
    )
}

export default SchedulerComponent