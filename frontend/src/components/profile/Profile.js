import React from 'react';
import Section from '../home/HomeSection';
import './Profile.css'


function ProfilePage() {
    return (
        <div className="profile-page">
            <div className="profile-title">
                <h1>Profile Page</h1>
            </div>
            <div className="profile-container">

                <Section heading="User details"
                    text={sessionStorage.getItem("username")}
                    button="Edit details" />

                <Section heading="Delete Account"
                    text="Delete Your Account"
                    link="/delete"
                    button="Delete Account" />

                <Section heading="User History"
                    text="User History"
                    link="/userhistory"
                    button="User History" />

                <Section heading="Leaderboard"
                    text="See the scores"
                    link="/leaderboard"
                    button="Leaderboard" />
            </div>

        </div>
    )
}

export default ProfilePage;
