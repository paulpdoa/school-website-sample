import React from 'react'
import { Helmet } from 'react-helmet';

import Announcements from './Announcements';
import Banner from './Banner'
import Schedule from './Schedule';
import Message from './Message';
import Welcome from './Welcome'
// import Counts from './Counts';
import Services from './Services';
import Inquiries from './Inquiries';
import NewsEvents from './NewsEvents';

const Main = ({headTitle}) => {
    return (
        <>
        <Helmet>
            <title>Home | {headTitle}</title>
            <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Helmet>
            <> {/* Main Container */}
                <Banner />
                <Welcome />
                <Message />
                <Announcements />
                <NewsEvents />
                <Schedule />
                <Services />
                <Inquiries />
            </>
        </>
    )
}

export default Main
