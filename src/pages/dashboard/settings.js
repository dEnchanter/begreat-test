import React from 'react'
import AdminDashBoard from '../../../components/AdminDashBoard'
import SettingComp from '../../../components/modules/DashBoardHome/SettingComp'

export default function Settings() {
  return (
    <AdminDashBoard change bgDark={'#121013'}>
        <SettingComp/>
    </AdminDashBoard>
  )
}
