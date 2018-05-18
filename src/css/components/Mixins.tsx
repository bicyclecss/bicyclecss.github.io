import * as React from 'react'

const classNames = require('classnames/bind')

import Code from 'common/components/Code'

const cx = classNames.bind(require('../styles/mixins.scss'))


export default class Mixins extends React.Component<{}, {}> {

    render() {
        return (
            <section id="mixins" className="section">
                <div className="container">
                    <div className="text-center mb-70">
                        <span className="text-default text-uppercase">Project-wide use</span>
                        <h2 className="text-center text-primary mt-20">Mixins</h2>
                        <p className="font-18">Some other mixins</p>
                    </div>
                    <h3>
                        Responsive mixins
                    </h3>
                    <p>
                        You can user responsive mixins such as{' '}
                        <code className="code text-nowrap">
                            @mixin
                            <span className="text-blue"> min-width</span>
                            <span className="text-default">(</span>
                            <span className="text-purple">$number</span>
                            <span className="text-default">)</span>
                        </code>,{' '}
                        <code className="code text-nowrap">
                            @mixin
                            <span className="text-blue"> max-width</span>
                            <span className="text-default">(</span>
                            <span className="text-purple">$number</span>
                            <span className="text-default">)</span>
                        </code>,{' '}
                        <code className="code text-nowrap">
                            @mixin
                            <span className="text-blue"> min-height</span>
                            <span className="text-default">(</span>
                            <span className="text-purple">$number</span>
                            <span className="text-default">)</span>
                        </code>,{' '}
                        <code className="code text-nowrap">
                            @mixin
                            <span className="text-blue"> max-height</span>
                            <span className="text-default">(</span>
                            <span className="text-purple">$number</span>
                            <span className="text-default">)</span>
                        </code>
                        {' and '}
                        <code className="code text-nowrap">
                            @mixin
                            <span className="text-blue"> from-screen-size</span>
                            <span className="text-default">(</span>
                            <span className="text-purple">$screen</span>
                            <span className="text-default">)</span>
                        </code>, <br/>
                        <span className="text-purple">$screen</span>: xs, sm, md, lg.
                    </p>
                    <Code copyCode={
                        '/* Usage */\n' +
                        '.element {\n' +
                        '    @include min-width(900) {\n' +
                        '        height: 200px;\n' +
                        '    }\n' +
                        '}\n' +
                        ' \n' +
                        '/* Result */\n' +
                        '@media screen and (min-width: 900px) {\n' +
                        '    .element {\n' +
                        '        height: 200px;\n' +
                        '    }\n' +
                        '}'
                    }>
                        <div className="text-default">/* Usage */</div>
                        <div>
                            <span className="text-purple">.element </span>
                            <span className="text-default">{'{'}</span>
                        </div>
                        <blockquote>
                            <div>
                                <span className="text-red">@include </span>
                                <span className="text-blue">min-width</span>
                                <span className="text-default">(</span>
                                <span className="text-purple">900</span>
                                <span className="text-default">) {'{'}</span>
                            </div>
                            <blockquote>
                                <span className="text-red">height</span>
                                <span className="text-default">: </span>
                                <span className="text-purple">200</span>
                                <span className="text-blue">px</span>
                                <span className="text-red">;</span>
                            </blockquote>
                            <div className="text-default">{'}'}</div>
                        </blockquote>
                        <div className="text-default">{'}'}</div>
                        <div>&nbsp;</div>
                        <div className="text-default">/* Result */</div>
                        <div>
                            <span className="text-red">@media </span>
                            <span className="text-blue">screen </span>
                            <span className="text-default">and (</span>
                            <span className="text-red">min-width</span>
                            <span className="text-default">: </span>
                            <span className="text-purple">900</span>
                            <span className="text-blue">px</span>
                            <span className="text-default">) {'{'}</span>
                        </div>
                        <blockquote>
                            <div>
                                <span className="text-purple">.element </span>
                                <span className="text-default">{'{'}</span>
                            </div>
                            <blockquote>
                                <span className="text-red">height</span>
                                <span className="text-default">: </span>
                                <span className="text-purple">200</span>
                                <span className="text-blue">px</span>
                                <span className="text-red">;</span>
                            </blockquote>
                            <div className="text-default">{'}'}</div>
                        </blockquote>
                        <div className="text-default">{'}'}</div>
                    </Code>
                    <h3>Arrow</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, aut, mollitia?
                        Accusantium modi obcaecati vitae. {' '}
                        <code className="code">
                            @mixin
                            <span className="text-blue"> arrow</span>
                            <span className="text-default">(</span>
                            <span className="text-purple">$width</span>
                            <span className="text-default">, </span>
                            <span className="text-purple">$height</span>
                            <span className="text-default">, </span>
                            <span className="text-purple">$bg</span>
                            <span className="text-default">, </span>
                            <span className="text-purple">$direction</span>
                            <span className="text-default">)</span>
                        </code>. <br/>
                        <span className="text-purple">$direction</span>: t, r, b, l, tl, tr, br, bl.
                    </p>
                    <div className="row">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '.arrow-top {\n' +
                                '    @include arrow(20, 10, $primary, t);\n' +
                                '}\n' +
                                ' \n' +
                                '.arrow-right {\n' +
                                '    @include arrow(10, 20, $secondary, r);\n' +
                                '}'
                            }>
                                <span className="text-purple">.arrow-top </span>
                                <span className="text-default">{'{'}</span>
                                <blockquote>
                                    <span className="text-red">@include </span>
                                    <span className="text-blue">arrow</span>
                                    <span className="text-default">(</span>
                                    <span className="text-purple">20</span>
                                    <span className="text-default">, </span>
                                    <span className="text-purple">10</span>
                                    <span className="text-default">, </span>
                                    <span className="text-purple">$primary</span>
                                    <span className="text-default">, </span>
                                    <span className="text-purple">t</span>
                                    <span className="text-default">)</span>
                                    <span className="text-red">;</span>
                                </blockquote>
                                <div className="text-default">{'}'}</div>
                                <div>&nbsp;</div>
                                <span className="text-purple">.arrow-right </span>
                                <span className="text-default">{'{'}</span>
                                <blockquote>
                                    <span className="text-red">@include </span>
                                    <span className="text-blue">arrow</span>
                                    <span className="text-default">(</span>
                                    <span className="text-purple">10</span>
                                    <span className="text-default">, </span>
                                    <span className="text-purple">20</span>
                                    <span className="text-default">, </span>
                                    <span className="text-purple">$secondary</span>
                                    <span className="text-default">, </span>
                                    <span className="text-purple">r</span>
                                    <span className="text-default">)</span>
                                    <span className="text-red">;</span>
                                </blockquote>
                                <div className="text-default">{'}'}</div>
                                <div>&nbsp;</div>
                                <div className="text-default">...</div>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <div className="flex flex-wrap justify-content-between align-items-center pt-20 pb-20">
                                <div className={cx('arrow-top')} />
                                <div className={cx('arrow-right')} />
                                <div className={cx('arrow-bottom')} />
                                <div className={cx('arrow-left')} />
                                <div className={cx('arrow-top-left')} />
                                <div className={cx('arrow-top-right')} />
                                <div className={cx('arrow-bottom-right')} />
                                <div className={cx('arrow-bottom-left')} />
                            </div>
                        </div>
                    </div>
                    <h3>Placeholder</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, rem!{' '}
                        <code className="code text-nowrap">
                            @mixin
                            <span className="text-blue"> placeholder</span>
                            <span className="text-default">()</span>
                        </code>.
                    </p>
                    <div className="row">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '.input {\n' +
                                '    color: $black;\n' +
                                ' \n' +
                                '    @include placeholder() {\n' +
                                '        color: $default;\n' +
                                '        font-size: 15px;\n' +
                                '    }\n' +
                                '}'
                            }>
                                <span className="text-purple">.input </span>
                                <span className="text-default">{'{'}</span>
                                <blockquote>
                                    <div>
                                        <span className="text-red">color</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">$black</span>
                                        <span className="text-red">;</span>
                                    </div>
                                    <div>&nbsp;</div>
                                    <div>
                                        <span className="text-red">@include </span>
                                        <span className="text-blue">placeholder</span>
                                        <span className="text-default">()</span>
                                        <span className="text-default"> {'{'}</span>
                                    </div>
                                    <blockquote>
                                        <div>
                                            <span className="text-red">color</span>
                                            <span className="text-default">: </span>
                                            <span className="text-purple">$default</span>
                                            <span className="text-red">;</span>
                                        </div>
                                        <div>
                                            <span className="text-red">font-size</span>
                                            <span className="text-default">: </span>
                                            <span className="text-purple">15</span>
                                            <span className="text-blue">px</span>
                                            <span className="text-red">;</span>
                                        </div>
                                    </blockquote>
                                    <div className="text-default">{'}'}</div>
                                </blockquote>
                                <div className="text-default">{'}'}</div>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <input type="text" className={cx('input')} placeholder="Enter text" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
