import React, {useState} from 'react';
import { setNestedObjectValues } from 'formik';

const ProfileForm = props => {
    const [profile, setProfile] = useState({
        username: '',
        businessName: '',
        businessAddress: '',
        phoneNumber: ''
    })
    const handleChanges = e => {
        setProfile({...profile, [e.target.name]: e.target.value});
    };
    const submitForm = e => {
        e.preventDefault();
        props.addProfile(profile);
    };
    return(
        <form onSubmit={submitForm}>
            <label htmlFor="username">Username</label>
            <input
                onChange = {handleChanges}
                id="username"
                type="text"
                name="username"
                value={profile.username} 
            />
            <label htmlFor="businessName">Business</label>
            <input
                onChange = {handleChanges}
                id="businessName"
                type="text"
                name="businessName"
                value={profile.businessName}
            />
            <label htmlFor="businessAddress">Address</label>
            <input
                onChange = {handleChanges}
                id="businessAddress"
                type="text"
                name="businessAddress"
                value={profile.businessAddress}
            />
            <label htmlFor="phoneNumber">Number</label>
            <input 
                onChange = {handleChanges}
                id="phoneNumber"
                type="number"
                name="phoneNumber"
                value={profile.phoneNumber}
            />
            <button type="submit">Add Profile</button>
        </form>
    )
}
export default ProfileForm;