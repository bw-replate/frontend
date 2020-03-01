import React from 'react';

const Profiles = props => {
    return(
        <div className="profile-list">
            {props.profiles.map(profile => (
                <div className="profile" key={profile.id}>
                    <h2>Business Profile</h2>
                    <p>{profile.username}</p>
                    <p>{profile.businessName}</p>
                    <p>{profile.businessAddress}</p>
                    <p>{profile.phoneNumber}</p>
                </div>
            ))}
        </div>
    )
}
export default Profiles;