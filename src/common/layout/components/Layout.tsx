import * as React from 'react'
import {RouteProps} from 'react-router'

const SmoothScroll = require('smooth-scroll')

import Navigation from './Navigation'
import Footer from './Footer'


interface State {
    isShowInnerMenu: boolean
}

const innerMenu = {
    '/getting-started': [
        {link: '/getting-started#whatsIncluded', title: 'What\'s Included'},
        {link: '/getting-started#quickStart', title: 'Quick Start'}
    ]
}

export default class Layout extends React.Component<RouteProps, State> {

    state = {
        isShowInnerMenu: false
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        window.addEventListener('scroll', this.handleScrollWindow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollWindow)
    }

    componentDidUpdate(prevProps: RouteProps) {
        if (this.props.location !== prevProps.location) {
            if (this.props.location.hash) {
                this.handleScrollTo(this.props.location.hash)
            } else {
                window.scrollTo(0, 0)
            }
        }
    }

    render() {
        const {location} = this.props
        const {isShowInnerMenu} = this.state

        return (
            <main>
                <Navigation
                    isShowInnerMenu={isShowInnerMenu}
                    location={location}
                    innerMenu={(innerMenu as any)[location.pathname]}
                />
                {this.props.children}
                <Footer />
            </main>
        )
    }

    private handleScrollTo = (anchor: string) => {
        const scroll = new SmoothScroll()
        const top = (document.querySelector(anchor) as any).offsetTop - 80

        scroll.animateScroll(top, {easing: 'easeInOutQuart'})
    }

    private handleScrollWindow = () => {
        const scrollTop = window.scrollY

        this.setState({
            isShowInnerMenu: scrollTop > 100
        })
    }
}
