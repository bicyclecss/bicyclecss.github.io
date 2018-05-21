import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('../styles/inclusion.scss'))


export default class Inclusion extends React.Component<{}, {}> {

    render() {
        return (
            <section id="whatsIncluded" className="section">
                <div className="container">
                    <div className="text-center mb-70">
                        <span className="text-default text-uppercase">Unboxing</span>
                        <h2 className="text-center text-primary mt-20">What's Included</h2>
                        <p className="font-18">Files that you'll see upon downloading</p>
                    </div>
                    <p>
                        Once you download the template, you can see a folder with several files and sub folders.
                        You can read description of some important files in continue.
                    </p>
                    <ul className={cx('file-tree')}>
                        <li className={cx('is-folder', 'open')}>
                            <span>bicycle</span>
                            <ul>
                                <li className={cx('is-folder', 'open')}>
                                    <span>scss</span>
                                    <ul>
                                        <li className={cx('is-folder', 'open')}>
                                            <span>common</span>
                                            <ul>
                                                <li className={cx('is-file')}>
                                                    <span>_common.scss</span>
                                                    <i>Styles for some html tags</i>
                                                </li>
                                                <li className={cx('is-file')}>
                                                    <span>_mixins.scss</span>
                                                    <i>A set of mixins</i>
                                                </li>
                                                <li className={cx('is-file')}>
                                                    <span>_normalize.scss</span>
                                                    <i>Reset styles</i>
                                                </li>
                                                <li className={cx('is-file')}>
                                                    <span>_variables.scss</span>
                                                    <i>Variables for defining key styles</i>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={cx('is-folder')}>
                                            <span>flex</span>
                                        </li>
                                        <li className={cx('is-folder')}>
                                            <span>grid</span>
                                        </li>
                                        <li className={cx('is-folder')}>
                                            <span>helper</span>
                                        </li>
                                        <li className={cx('is-folder')}>
                                            <span>typography</span>
                                        </li>
                                        <li className={cx('is-file')}>
                                            <span>bicycle.scss</span>
                                            <i>Main SCSS file</i>
                                        </li>
                                    </ul>
                                </li>
                                <li className={cx('is-folder', 'open')}>
                                    <span>css</span>
                                    <ul>
                                        <li className={cx('is-file')}>
                                            <span>bicycle.css</span>
                                            <i>Main CSS file</i>
                                        </li>
                                        <li className={cx('is-file')}>
                                            <span>bicycle.min.css</span>
                                            <i>Minified version of all required CSS file</i>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}