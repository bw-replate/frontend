import React, { useState } from 'react';
import ProfileForm from './BusinessProfile/ProfileForm';
import Profiles from './BusinessProfile/Profiles';

function BusinessProfile() {
    const [profiles, setProfiles] = useState([
        {
            username: '',
            businessName: '',
            businessAddress: '',
            phoneNumber: ''
        }
    ]);
    const addProfile = profile => {
        const newProfile = {
            id: Date.now(),
            username: profile.username,
            businessName: profile.businessName,
            businessAddress: profile.businessAddress,
            phoneNumber: profile.phoneNumber
        }
        setProfiles([...profiles, newProfile])
    }
    return (
        <div>
            <h1>Profile</h1>
            <ProfileForm addProfile={addProfile} />
            <Profiles profiles={profiles} />
        </div>
    )
}
export default BusinessProfile;