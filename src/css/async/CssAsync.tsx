import * as React from 'react'
const Loadable = require('react-loadable')

import PageLoader from 'common/components/PageLoader'


const Css = Loadable({
    loader: () => System.import('../components/Css'),
    loading: () => <PageLoader isShow />
})

export default class CssAsync extends React.Component<{}, {}> {

    render() {
        return <Css />
    }
}