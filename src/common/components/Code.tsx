import * as React from 'react'

const classNames = require('classnames/bind')

import {copyToClipboard} from '../utils/copyToClipboard'
import Button from './Button'

const cx = classNames.bind(require('../styles/code.scss'))


interface Props {
    copyCode: string
}

export default class Code extends React.Component<Props, {}> {

    render() {
        const {copyCode} = this.props

        return (
            <pre className={cx('line-numbers')}>
                <code>
                    <Button
                        size="small"
                        color="pink-purple"
                        className={cx('copy')}
                        onClick={() => copyToClipboard(copyCode)}
                    >
                        <i className={cx('icon-copy')} />Copy
                    </Button>
                    {this.props.children}
                </code>
            </pre>
        )
    }
}