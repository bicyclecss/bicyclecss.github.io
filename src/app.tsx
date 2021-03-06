import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PageLoader from './common/components/PageLoader'
import Layout from './common/layout/components/Layout'
import Main from './main/async/MainAsync'
import GettingStarted from './gettingStarted/async/GettingStartedAsync'
import Css from './css/async/CssAsync'

import './common/styles/base'


interface State {
    isShowPageLoader: boolean
}

class Content extends React.Component<{}, State> {

    state = {
        isShowPageLoader: true
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoadWindow)
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoadWindow)
    }

    render() {
        const {isShowPageLoader} = this.state

        return (
            <Router>
                <div>
                    <PageLoader isShow={isShowPageLoader} />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Layout>
                            <Route path="/getting-started" component={GettingStarted} />
                            <Route path="/css" component={Css} />
                        </Layout>
                    </Switch>
                </div>
            </Router>
        )
    }

    private handleLoadWindow = () => {
        this.setState({
            isShowPageLoader: false
        })
    }
}

declare global {
    interface System {
        import (request: string): Promise<any>
    }
    const System: System
}

ReactDOM.render(
    <Content />,
    document.getElementById('content')
)
