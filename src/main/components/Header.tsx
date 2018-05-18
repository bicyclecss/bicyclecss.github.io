import * as React from 'react'

const classNames = require('classnames/bind')
import * as H from 'history'

import Button from 'common/components/Button'
import Navigation from 'common/layout/components/Navigation'

const cx = classNames.bind(require('../styles/header.scss'))


interface Props {
    navStyle: string
    history: H.History
}

export default class Header extends React.Component<Props, {}> {

    render() {
        const {navStyle, history} = this.props

        return (
            <header className={cx('header')}>
                <Navigation style={navStyle} />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="column xs-12 md-6 pt-50 pt-lg-0">
                            <h1 className="text-white">Bicycle</h1>
                            <p className="mb-30">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci expedita quod rem
                                repellendus? A ad architecto assumenda atque autem consectetur consequatur culpa delectus
                                dolor doloribus, ducimus ea, enim esse itaque minima molestiae mollitia nemo nobis placeat,
                                porro possimus quae reiciendis repellat reprehenderit sapiente unde velit vitae!
                                Doloribus enim impedit officia.
                            </p>
                            <Button color="pink-orange" className="mr-15 mb-15">Download</Button>
                            <Button color="pink-purple" onClick={() => history.push('/getting-started')}>Getting started</Button>
                        </div>
                        <div className="column xs-12 md-6">
                            <img className={cx('img')} src={require('common/img/bicycle.svg')} alt=""/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
