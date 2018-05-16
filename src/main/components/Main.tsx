import * as React from 'react'

const classNames = require('classnames/bind')

import Footer from 'common/layout/components/Footer'

import Header from './Header'

const cx = classNames.bind(require('../styles/main.scss'))


interface State {
    navStyle: string
}

export default class Main extends React.Component<{}, State> {

    state = {
        navStyle: 'transparent'
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollWindow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollWindow)
    }

    render() {
        return (
            <main>
                <Header navStyle={this.state.navStyle} />
                <section className="section">
                    <div className="container">
                        <h2 className="text-center text-primary">Lorem ipsum dolor</h2>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem, dolorum
                            eum fuga hic labore magni nobis numquam sunt totam?
                        </p>
                        <div className="row mt-90">
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'blue')}>
                                    <img src={require('../img/cube.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Simple to Use</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quas.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'green')}>
                                    <img src={require('../img/cubes.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>The most necessary styles</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quas.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'purple')}>
                                    <img src={require('../img/file.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Using SCSS</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quas.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'orange')}>
                                    <img src={require('../img/monitor.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Responsive design</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quas.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'light-blue')}>
                                    <img src={require('../img/settings.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Easily customizable</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quas.</p>
                                </div>
                            </div>
                            <div className="column xs-12 md-6 lg-4 flex mb-30">
                                <div className={cx('icon', 'red')}>
                                    <img src={require('../img/like.svg')} alt="" />
                                </div>
                                <div>
                                    <h4>Made with love</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quas.</p>
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
