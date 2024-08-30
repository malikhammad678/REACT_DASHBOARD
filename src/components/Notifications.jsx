import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { Bell } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Notifications = () => {
    const [Notifications, setNotifications] = useState({
        push:true,
        email:true,
        sms:false
    })
  return <SettingSection icon={Bell} title="Notifications">
    <ToggleSwitch
    Label={"Push Notification"}
    isOn={Notifications.push}
    onToggle={() =>  setNotifications({...Notifications, push: !Notifications.push})}
    />
    <ToggleSwitch
    Label={"Email Notification"}
    isOn={Notifications.email}
    onToggle={() =>  setNotifications({...Notifications, email: !Notifications.email})}
    />
    <ToggleSwitch
    Label={"SMS Notification"}
    isOn={Notifications.sms}
    onToggle={() =>  setNotifications({...Notifications, sms: !Notifications.sms})}
    />

  </SettingSection>
}

export default Notifications
