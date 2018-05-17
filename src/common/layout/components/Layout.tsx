import * as React from 'react'
import {RouteProps} from 'react-router'

const SmoothScroll = require('smooth-scroll')

import Navigation from './Navigation'
import Footer from './Footer'


interface State {
    isShowInnerMenu: boolean
    activeLink: string
}

interface InnerMenuItem {
    link: string
    title: string
}

const innerMenu = {
    '/getting-started': [
        {link: '/getting-started#whatsIncluded', title: 'What\'s Included'},
        {link: '/getting-started#quickStart', title: 'Quick Start'}
    ],
    '/css': [
        {link: '/css#typography', title: 'Typography'},
        {link: '/css#grid', title: 'Grid'},
        {link: '/css#flexbox', title: 'Flexbox'},
        {link: '/css#helper', title: 'Helper Classes'},
        {link: '/css#responsive', title: 'Responsive'}
    ]
}

export default class Layout extends React.Component<RouteProps, State> {

    state = {
        isShowInnerMenu: false,
        activeLink: ''
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
        const {isShowInnerMenu, activeLink} = this.state

        return (
            <main>
                <Navigation
                    isShowInnerMenu={isShowInnerMenu}
                    activeLink={activeLink}
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

        scroll.animateScroll(top, {
            easing: 'easeInOutQuart'
        })
    }

    private handleScrollWindow = () => {
        const scrollTop = window.scrollY
        const menu = (innerMenu as any)[this.props.location.pathname]

        if (menu) {
            this.handleSetActiveLink(scrollTop, menu)
        }

        this.setState({
            isShowInnerMenu: scrollTop > 100
        })
    }

    private handleSetActiveLink = (scrollTop: number, menu: InnerMenuItem[]) => {
        let activeLink: string = ''

        menu.map((item: InnerMenuItem) => {
            const hash = item.link.split('#')[1]
            const refElement = document.getElementById(hash)

            if (
                refElement.offsetTop <= scrollTop + 80 &&
                refElement.offsetTop + refElement.getBoundingClientRect().height > scrollTop + 80
            ) {
                activeLink = item.link
            }
        })

        this.setState({
            activeLink: activeLink
        })
    }
}
