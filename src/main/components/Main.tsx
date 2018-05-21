import * as React from 'react'
import {RouterProps} from 'react-router'

const classNames = require('classnames/bind')

import Footer from 'common/layout/components/Footer'

import Header from './Header'

const cx = classNames.bind(require('../styles/main.scss'))


interface State {
    navStyle: string
}

export default class Main extends React.Component<RouterProps, State> {

    state = {
        navStyle: 'transparent'
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        window.addEventListener('scroll', this.handleScrollWindow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollWindow)
    }

    render() {
        return (
            <main>
                <Header navStyle={this.state.navStyle} history={this.props.history} />
                <section className="section">
                    <div className="container">
                        <h2 className="text-center text-primary">Features</h2>
                        <p className="text-center">
                            If you need a set of helper classes, responsiveness and grid, then use a bicycle.
                            You can easily manage layout, text styles, colors, margins and paddings,
                            and quickly customize it for your own purposes.
                        </p>
                        <div className="row mt-90">
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'blue')}>
                                    <img src={require('../img/cube.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Simple to Use</h4>
                                    <p>Class names are intuitive and easy to remember.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'green')}>
                                    <img src={require('../img/cubes.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>The most necessary styles</h4>
                                    <p>This contains the styles that are used in each project.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'purple')}>
                                    <img src={require('../img/file.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Using SCSS</h4>
                                    <p>You can use the source scss files and mixins.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'orange')}>
                                    <img src={require('../img/monitor.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Responsive design</h4>
                                    <p>There are classes and mixins for responsive design.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'light-blue')}>
                                    <img src={require('../img/settings.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Easily customizable</h4>
                                    <p>You can override the variables for your project.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'red')}>
                                    <img src={require('../img/like.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Made with love</h4>
                                    <p>There is a part of the soul.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }

    private handleScrollWindow = () => {
        const scrollTop = window.scrollY

        this.setState({
            navStyle: scrollTop > 50 ? 'small' : 'transparent'
        })
    }
}
