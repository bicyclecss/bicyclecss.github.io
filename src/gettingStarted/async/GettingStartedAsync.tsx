import * as React from 'react'
const Loadable = require('react-loadable')

import PageLoader from 'common/components/PageLoader'


const GettingStarted = Loadable({
    loader: () => System.import('../components/GettingStarted'),
    loading: () => <PageLoader isShow />
})

export default class GettingStartedAsync extends React.Component<{}, {}> {

    render() {
        return <GettingStarted />
    }
}