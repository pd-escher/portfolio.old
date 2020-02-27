import React from 'react'
import 'axios';

const AppCard = ({ appname, appinfo }) => {
    var href = '/apk/' + appname
    return (
        <div className="app-card">
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <h1 className="app-card-title">{appname.charAt(0).toUpperCase() + appname.substring(1)}</h1>
            <p className="app-card-text">{appinfo}</p>
            <a href={href} className="app-card-btn">Download APK</a>
        </div>
    )
}

export default AppCard
