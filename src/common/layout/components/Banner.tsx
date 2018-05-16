import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../styles/banner.scss'))


interface Props {
    title: string
    color: string
}

export default class Banner extends React.Component<Props, {}> {

    render() {
        const {title, color} = this.props

        return (
            <section className={cx('banner', `bg-${color}`)}>
                <div className="container">
                    <h1 className="text-white">{title}</h1>
                    <p className="font-22 text-white">{this.props.children}</p>
                </div>
            </section>
        )
    }
}