import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../styles/tag.scss'))


interface Props {
    name?: string
    className?: string
}

export default class Tag extends React.Component<Props, {}> {

    static defaultProps = {
        name: 'div'
    }

    render() {
        const {name, className} = this.props

        return (
            <div>
                <span className="text-red">{'<'}{name}</span>
                {!!className && <span className="text-blue">{' class'}</span>}
                {!!className &&
                    <span>
                        <span className="text-default">="</span>
                        <span className="text-purple">{className}</span>
                        <span className="text-default">"</span>
                    </span>
                }
                <span className="text-red">{'>'}</span>
                {!!this.props.children && (
                    typeof this.props.children == 'string'
                        ? this.props.children
                        : <blockquote>{this.props.children}</blockquote>
                )}
                <span className="text-red">{'</'}{name}{'>'}</span>
            </div>
        )
    }
}
