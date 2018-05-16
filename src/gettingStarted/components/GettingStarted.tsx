import * as React from 'react'

import Banner from 'common/layout/components/Banner'

import Inclusion from './Inclusion'
import QuickStart from './QuickStart'


export default class GettingStarted extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <Banner title="Getting started" color="success">
                    An introduction to Bicycle, meet starter page,
                    quickly start developing your documentation, and more.
                </Banner>
                <Inclusion />
                <QuickStart />
            </div>
        )
    }
}