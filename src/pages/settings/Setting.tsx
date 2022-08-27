import React from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import SettingMap from './settingmap/SettingMap'
import Settings from './Settings'
import SettingsLink from './settingsLink/SettingsLink'
import { SettingStyle } from './SettingStyle'

export default function Setting() {
  return (
    <SettingStyle>
        <section className='navbar--setting'>
            <div>
                <p><Link to={"/settings"}>Settings Text ture</Link></p>
            </div>
            <div>
                <p><Link to={"/settingmap"}>Settings Map</Link></p>
            </div>
            <div>
                <p><Link to={"/settingslink"}>Settings Link</Link></p>
            </div>
        </section>

        {/* <Routes>
            <Route path='settings' element={<Settings/>}/>
            <Route path='settingmap' element={<SettingMap/>}/>
            <Route path='settinglink' element={<SettingsLink/>}/>
        </Routes> */}
    </SettingStyle>
  )
}
