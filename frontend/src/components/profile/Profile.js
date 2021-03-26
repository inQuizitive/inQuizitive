import React from 'react';
import Section from '../home/HomeSection';


function ProfilePage() {
    return (
        <div className="profile-container">
            <div className="svg-container">
                <h1 className="profile-header">Profile Page</h1>
            </div>
            


            <Section heading="User details"
                text="User details"
                text="User details"
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
    )
}

export default ProfilePage;
