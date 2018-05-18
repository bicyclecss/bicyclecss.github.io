import * as React from 'react'
import Transition from 'react-transition-group/Transition'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../styles/pageLoader.scss'))


interface Props {
    isShow: boolean
}

export default class PageLoader extends React.Component<Props, {}> {

    render() {
        const {isShow} = this.props

        return (
            <Transition in={isShow} timeout={500} unmountOnExit>
                {(state: string) => (
                    <div className={cx('wrap', state)}>
                        <div className={cx('loader')} />
                    </div>
                )}
            </Transition>
        )
    }
}