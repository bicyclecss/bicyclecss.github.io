import * as React from 'react'

const classNames = require('classnames/bind')

import Code from 'common/components/Code'
import Tag from 'common/components/Tag'

const cx = classNames.bind(require('../styles/helper.scss'))


export default class Helper extends React.Component<{}, {}> {

    render() {
        return (
            <section id="helper" className="section">
                <div className="container">
                    <div className="text-center mb-70">
                        <span className="text-default text-uppercase">Project-wide use</span>
                        <h2 className="text-center text-primary mt-20">Helper Classes</h2>
                        <p className="font-18">Some other helper classes</p>
                    </div>
                    <h3>Margin &amp; padding</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, eaque enim esse
                        exercitationem obcaecati placeat rem veniam vero. Adipisci exercitationem laudantium
                        mollitia reprehenderit sunt temporibus? <br />
                        <strong>Available values:</strong> 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150;
                    </p>
                    <div className="row">
                        <div className="column xs-12 lg-6">
                            <Code copyCode={
                                '$margins: (\n' +
                                '    m:  margin,\n' +
                                '    mt: margin-top,\n' +
                                '    ml: margin-left,\n' +
                                '    mr: margin-right,\n' +
                                '    mb: margin-bottom\n' +
                                ');'
                            }>
                                <div>
                                    <span className="text-red">$margins</span>
                                    <span className="text-default">: (</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">m</span>
                                    <span className="text-default">:  </span>
                                    <span className="text-purple">margin</span>
                                    <span className="text-red">,</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">mt</span>
                                    <span className="text-default">: </span>
                                    <span className="text-purple">margin-top</span>
                                    <span className="text-red">,</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">ml</span>
                                    <span className="text-default">: </span>
                                    <span className="text-purple">margin-left</span>
                                    <span className="text-red">,</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">mr</span>
                                    <span className="text-default">: </span>
                                    <span className="text-purple">margin-right</span>
                                    <span className="text-red">,</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">mb</span>
                                    <span className="text-default">: </span>
                                    <span className="text-purple">margin-bottom</span>
                                </div>
                                <div>
                                    <span className="text-default">)</span>
                                    <span className="text-red">;</span>
                                </div>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-6">
                            <Code copyCode={
                                '$paddings: (\n' +
                                '    p:  padding,\n' +
                                '    pt: padding-top,\n' +
                                '    pl: padding-left,\n' +
                                '    pr: padding-right,\n' +
                                '    pb: padding-bottom\n' +
                                ');'
                            }>
                                <div>
                                    <span className="text-red">$paddings</span>
                                    <span className="text-default">: (</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">p</span>
                                    <span className="text-default">:  </span>
                                    <span className="text-purple">padding</span>
                                    <span className="text-red">,</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">pt</span>
                                    <span className="text-default">: </span>
                                    <span className="text-purple">padding-top</span>
                                    <span className="text-red">,</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">pl</span>
                                    <span className="text-default">: </span>
                                    <span className="text-purple">padding-left</span>
                                    <span className="text-red">,</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">pr</span>
                                    <span className="text-default">: </span>
                                    <span className="text-purple">padding-right</span>
                                    <span className="text-red">,</span>
                                </div>
                                <div className="ml-30">
                                    <span className="text-red">pb</span>
                                    <span className="text-default">: </span>
                                    <span className="text-purple">padding-bottom</span>
                                </div>
                                <div>
                                    <span className="text-default">)</span>
                                    <span className="text-red">;</span>
                                </div>
                            </Code>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, incidunt.</p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<div class="p-10 mb-5 mb-md-15">.p-10.mb-5.mb-md-15</div>\n' +
                                '<div class="p-10">.p-10</div>'
                            }>
                                <Tag className="p-10 mb-5 mb-md-15">.p-10.mb-5.mb-md-15</Tag>
                                <Tag className="p-10">.p-10</Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <div className="p-10 mb-5 mb-md-15 bg-light-gray border border-medium-gray">.p-10.mb-5.mb-md-15</div>
                            <div className="p-10 bg-light-gray border border-medium-gray">.p-10</div>
                        </div>
                    </div>
                    <h3>Background color</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores earum
                        laboriosam molestias reiciendis.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<p class="bg-primary">A paragraph with .bg-primary class</p>\n' +
                                '<p class="bg-secondary">A paragraph with .bg-secondary class</p>'
                            }>
                                <Tag name="p" className="bg-primary">A paragraph with .bg-primary class</Tag>
                                <Tag name="p" className="bg-secondary">A paragraph with .bg-secondary class</Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <p className="bg-primary">A paragraph with .bg-primary class</p>
                            <p className="bg-secondary">A paragraph with .bg-secondary class</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className={cx('circle', 'bg-white', 'border')}>.bg-white</div>
                        <div className={cx('circle', 'bg-black', 'text-white')}>.bg-black</div>
                        <div className={cx('circle', 'bg-yellow')}>.bg-yellow</div>
                        <div className={cx('circle', 'bg-orange')}>.bg-orange</div>
                        <div className={cx('circle', 'bg-red')}>.bg-red</div>
                        <div className={cx('circle', 'bg-pink')}>.bg-pink</div>
                        <div className={cx('circle', 'bg-purple')}>.bg-purple</div>
                        <div className={cx('circle', 'bg-blue')}>.bg-blue</div>
                        <div className={cx('circle', 'bg-light-blue')}>.bg-light-blue</div>
                        <div className={cx('circle', 'bg-green')}>.bg-green</div>
                        <div className={cx('circle', 'bg-light-gray')}>.bg-light-gray</div>
                        <div className={cx('circle', 'bg-medium-gray')}>.bg-medium-gray</div>
                        <div className={cx('circle', 'bg-dark-gray')}>.bg-dark-gray</div>
                        <div className={cx('circle', 'bg-primary')}>.bg-primary</div>
                        <div className={cx('circle', 'bg-secondary')}>.bg-secondary</div>
                        <div className={cx('circle', 'bg-default')}>.bg-default</div>
                        <div className={cx('circle', 'bg-info')}>.bg-info</div>
                        <div className={cx('circle', 'bg-success')}>.bg-success</div>
                        <div className={cx('circle', 'bg-error')}>.bg-error</div>
                        <div className={cx('circle', 'bg-warning')}>.bg-warning</div>
                    </div>
                </div>
            </section>
        )
    }
}
