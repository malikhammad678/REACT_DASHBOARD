import React from 'react'
import SettingSection from './SettingSection'
import { User } from 'lucide-react'
const Profile = () => {
  return <SettingSection icon={User} title="Profile" >

  <div className='flex flex-col sm:flex-row items-center mb-6'>
    <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/0338c420781efcb8259cad423b07570b-1720892620622/5f40f346-bd12-4ae1-8382-e2c1ca3c84a1.png" alt=""  className='rounded-full w-20 h-20 object-cover mr-4'/>
    <div>
        <h3 className='text-lg font-semibold text-gray-100'>Malik Hammad</h3>
        <p className='text-gray-400'>hammadahmed20004@gmail.com</p>
    </div>
    
  </div>
  <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
        Edit Profile
    </button>
  </SettingSection>
}

export default Profile
