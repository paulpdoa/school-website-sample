import React from 'react'
import { Helmet } from 'react-helmet';
import Announcements from './Announcements';

import Banner from './Banner'
import Schedule from './Schedule';
import Message from './Message';
import Welcome from './Welcome'
import Counts from './Counts';
import Services from './Services';
import Inquiries from './Inquiries';

const Main = ({headTitle}) => {
    return (
        <>
        <Helmet>
            <title>{headTitle} | Home</title>
        </Helmet>
            <> {/* Main Container */}
                <Banner />
                <Welcome />
                <Message />
                <Announcements />
                <Schedule />
                <Counts />
                <Services />
                <Inquiries />
            </>
        </>
    )
}

export default Main
