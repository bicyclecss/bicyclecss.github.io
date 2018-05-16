import * as React from 'react'
import * as ReactDOM from 'react-dom'

const classNames = require('classnames/bind')

import {copyToClipboard} from '../utils/copyToClipboard'
import Button from './Button'

const cx = classNames.bind(require('../styles/code.scss'))


interface Props {
    copyCode: string
}

interface State {
    linesNumber: number
}

export default class Code extends React.Component<Props, State> {

    private code: any

    state = {
        linesNumber: 0
    }

    componentDidMount() {
        const elem = ReactDOM.findDOMNode(this.code) as any
        const rowHeight = 20

        this.setState({
            linesNumber: Math.ceil(elem.getBoundingClientRect().height / rowHeight)
        })
    }

    render() {
        const {copyCode} = this.props
        const {linesNumber} = this.state

        return (
            <div className="position-relative">
                <Button
                    size="small"
                    color="pink-purple"
                    className={cx('copy')}
                    onClick={() => copyToClipboard(copyCode)}
                >
                    <i className={cx('icon-copy')} />Copy
                </Button>
                <pre className={cx('line-numbers')}>
                <code ref={node => this.code = node}>
                    {this.props.children}
                    <span className={cx('numbers')}>
                        {Array.from(new Array(linesNumber), (el: any, index: number) => (
                            <span key={index} className={cx('number')}>{index + 1}</span>
                        ))}
                    </span>
                </code>
            </pre>
            </div>
        )
    }
}