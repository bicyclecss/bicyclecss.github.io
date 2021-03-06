import * as React from 'react'
import {NavLink} from 'react-router-dom'

const classNames = require('classnames/bind')

import Button from 'common/components/Button'

const cx = classNames.bind(require('../styles/navigation.scss'))


interface Props {
    style?: string
    isShowInnerMenu?: boolean
    innerMenu?: innerMenuItem[]
    activeLink?: string
}

interface innerMenuItem {
    link: string
    title: string
    active: boolean
}

interface State {
    isShowMenu: boolean
}

export default class Navigation extends React.Component<Props, State> {

    state = {
        isShowMenu: false
    }

    render() {
        const {style, isShowInnerMenu, innerMenu, activeLink} = this.props
        const {isShowMenu} = this.state

        return (
            <div>
                <nav className={cx('nav', {'small': isShowInnerMenu}, style)}>
                    <div className={cx('container', 'nav-content')}>
                        <NavLink to="/" className={cx('logo')}>
                            <div className={cx('logo-img')} />
                            Bicycle
                        </NavLink>
                        <button className={cx('menu-button')} onClick={this.handleToggleMenu} />
                        <ul className={cx('nav-menu', {'active': isShowMenu})}>
                            <li>
                                <NavLink exact to="/" activeClassName={cx('active')}>Overview</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/getting-started" activeClassName={cx('active')}>Getting started</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/css" activeClassName={cx('active')}>CSS</NavLink>
                            </li>
                            <li>
                                <Button
                                    color="pink-orange"
                                    size="small"
                                    className={cx('nav-button')}
                                    onClick={() => window.open('https://github.com/bicyclecss/bicycle', '_blank')}
                                >
                                    Download
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
                {!!innerMenu && !!innerMenu.length &&
                    <div className={cx('inner-menu')}>
                        <div className="container">
                            <ul className={cx('inner-nav-menu')}>
                                {innerMenu.map((item: innerMenuItem, index: number) => (
                                    <li key={index}>
                                        <NavLink
                                            exact
                                            to={item.link}
                                            className={cx({'active': activeLink == item.link})}
                                        >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        )
    }

    private handleToggleMenu = () => {
        this.setState({
            isShowMenu: !this.state.isShowMenu
        })
    }
}
