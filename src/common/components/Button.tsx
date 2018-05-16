import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../styles/button.scss'))


interface Props {
    color?: string
    size?: string
    className?: string
    onClick?: () => void
}

export default class Button extends React.Component<Props, {}> {

    render() {
        const {color, size, className, onClick} = this.props

        return (
            <button className={cx('button', color, size, className)} onClick={onClick}>
                {this.props.children}
            </button>
        )
    }
}
