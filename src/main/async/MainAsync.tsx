import * as React from 'react'
import {RouteProps} from 'react-router'
const Loadable = require('react-loadable')

import PageLoader from 'common/components/PageLoader'


const Main = Loadable({
    loader: () => System.import('../components/Main'),
    loading: () => <PageLoader isShow />
})

export default class MainAsync extends React.Component<RouteProps, {}> {

    render() {
        return <Main {...this.props} />
    }
}