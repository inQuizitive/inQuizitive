import React from 'react';
import DeleteAccount from '../deleteAccount/DeleteAccount';


function ProfilePage() {
    return (
        <div className="profile-container">
            <div className="svg-container">
                <h2 className="profile-page">Profile Page</h2>
            </div>

            <h1 className="delete-acc-text">Delete your account?</h1>
            <DeleteAccount />

            <h1 className="user-history">User History</h1>
            <h1 className="leader-board">Leader Board</h1>
        </div>
    )
}

export default ProfilePage;
