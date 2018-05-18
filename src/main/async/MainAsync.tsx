import * as React from 'react'
const Loadable = require('react-loadable')

import PageLoader from 'common/components/PageLoader'


const Main = Loadable({
    loader: () => System.import('../components/Main'),
    loading: () => <PageLoader isShow />
})

export default class MainAsync extends React.Component<{}, {}> {

    render() {
        return <Main />
    }
}