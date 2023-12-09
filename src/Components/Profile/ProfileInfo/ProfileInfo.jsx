import React from "react";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){return <Preloader/>}
    return (
        <div>
            <div>
                <img
                    src="https://10wallpaper.com/wallpaper/1920x1200/1803/Canada_banff_national_park_forest_lake_1920x1200.jpg"
                    alt="mailn-content"/>
            </div>
            <div>
                <img
                    src= {props.profile.photos.large}
                    alt="mailn-content"/>
            </div>
        </div>
    )
}

export default ProfileInfo