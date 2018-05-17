import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './common/layout/components/Layout'
import Main from './main/components/Main'
import GettingStarted from './gettingStarted/components/GettingStarted'
import Css from './css/components/Css'

import './common/styles/base'


class Content extends React.Component<{}, {}> {

    render() {
        return (
            <Router>
                <div>
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
}

ReactDOM.render(
    <Content />,
    document.getElementById('content')
)
