import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../styles/footer.scss'))


export default class Footer extends React.Component<{}, {}> {

    render() {
        return (
            <footer className={cx('footer')}>
                <div className="container">
                    <h3 className="text-white">Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, placeat.</p>
                </div>
                <div className={cx('copyright')}>
                    &copy; 2018 <a href="http://fandikova.ru" className="text-white">Olga Fandikova</a>
                </div>
            </footer>
        )
    }
}
