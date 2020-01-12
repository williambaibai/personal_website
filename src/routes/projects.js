import React from 'react'
import * as Navi from 'navi'
import NavMenu from '../components/NavMenu'
import { Media } from 'react-bootstrap';

export default Navi.route({
    title: "Projects",
    getView: () => {return(
        <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
            <NavMenu></NavMenu>
            <br/>
            <h1> Projects </h1>
            <br/>
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src='https://raw.githubusercontent.com/williambaibai/personal_website_asset/master/logo/uplift.png'
                    alt="Uplift"
                />
                <Media.Body>
                    <h5>This Site</h5>
                    <p>
                        This site is my personal website, which displays my blog, photographies, and other projects. This website is written using React, and initialized with 
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jamesknelson/create-react-blog"> create-react-blog</a>.
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/williambaibai/personal_website">GitHub Repo</a>
                </Media.Body>
            </Media>
            <br/>
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src='https://raw.githubusercontent.com/williambaibai/personal_website_asset/master/logo/uplift.png'
                    alt="Uplift"
                />
                <Media.Body>
                    <h5>Uplift</h5>
                    <p>
                        Uplift is an App developed by Cornell Appdev. With uplift, you can 
                        <li>Check gym hours and occupancy</li>
                        <li>Explore fitness classes and add them to your calendar</li>
                        <li>Bookmark your favorite classes to stay updated</li>
                        Our vision is to provide the best college fitness and wellness resource for the Cornell community.
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/uplift-cornell-fitness/id1439374374">App Store Link</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/cuappdev/uplift-backend">Backend Repo</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/cuappdev/uplift-ios">iOS Repo</a>
                </Media.Body>
            </Media>
        </div>
    );}
})
