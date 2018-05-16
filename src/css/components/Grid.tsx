import * as React from 'react'

const classNames = require('classnames/bind')

import Code from 'common/components/Code'
import Tag from 'common/components/Tag'

const cx = classNames.bind(require('../styles/grid.scss'))


export default class Grid extends React.Component<{}, {}> {

    render() {
        return (
            <section id="grid" className="section">
                <div className="container">
                    <div className="text-center mb-70">
                        <span className="text-default text-uppercase">Lorem ipsum</span>
                        <h2 className="text-center text-primary mt-20">Grid</h2>
                        <p className="font-18">Use the following tags and classes to write a better documentation</p>
                    </div>
                    <h3>Grid system</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut cum,
                        fugit ipsam maiores minima quasi quibusdam reprehenderit voluptatem.
                    </p>
                    <div className="mb-30">
                        <Code copyCode={
                            '<div class="container">\n' +
                            '    <div class="row">\n' +
                            '        <div class="column md-6 sm-3"></div>\n' +
                            '        <div class="column md-6 sm-3"></div>\n' +
                            '    </div>\n' +
                            '    <div class="row">\n' +
                            '        <div class="column"></div>\n' +
                            '        <div class="column"></div>\n' +
                            '        <div class="column"></div>\n' +
                            '    </div>\n' +
                            '</div>'
                        }>
                            <Tag className="container">
                                <Tag className="row">
                                    <Tag className="column xs-12 md-6 sm-3">.column.xs-12.md-6.sm-3</Tag>
                                    <Tag className="column xs-12 md-6 sm-3">.column.xs-12.md-6.sm-3</Tag>
                                </Tag>
                                <Tag className="row">
                                    <Tag className="column">.column</Tag>
                                    <Tag className="column">.column</Tag>
                                    <Tag className="column">.column</Tag>
                                </Tag>
                            </Tag>
                        </Code>
                    </div>
                    <div className="row mb-30">
                        <div className="column xs-12 md-6 sm-3">
                            <div className="border border-medium-gray bg-light-gray p-20">.column.xs-12.md-6.sm-3</div>
                        </div>
                        <div className="column xs-12 md-6 sm-3">
                            <div className="border border-medium-gray bg-light-gray p-20">.column.xs-12.md-6.sm-3</div>
                        </div>
                    </div>
                    <div className="row mb-30">
                        <div className="column">
                            <div className="border border-medium-gray bg-light-gray p-20">.column</div>
                        </div>
                        <div className="column">
                            <div className="border border-medium-gray bg-light-gray p-20">.column</div>
                        </div>
                        <div className="column">
                            <div className="border border-medium-gray bg-light-gray p-20">.column</div>
                        </div>
                    </div>
                    <h3>Breakpoints</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem cum debitis et ex
                        nisi possimus repellendus veritatis! Aliquam dolorum eum, maiores minima sapiente tempore.
                    </p>
                    <div className="row">
                        <div className="column xs-12 lg-6">
                            <Code copyCode={
                                '$gutter:      15 !default;\n' +
                                '$columns:     12 !default;\n' +
                                ' \n' +
                                '$screen-sizes: (\n' +
                                '    xs: 0,\n' +
                                '    sm: 557,\n' +
                                '    md: 768,\n' +
                                '    lg: 1230,\n' +
                                ') !default;'
                            }>
                                <div>
                                    <span className="text-red">$gutter</span>
                                    <span className="text-default">:      </span>
                                    <span className="text-purple">15 </span>
                                    <span className="text-blue">!default</span>
                                    <span className="text-red">;</span>
                                </div>
                                <div>
                                    <span className="text-red">$columns</span>
                                    <span className="text-default">:     </span>
                                    <span className="text-purple">12 </span>
                                    <span className="text-blue">!default</span>
                                    <span className="text-red">;</span>
                                </div>
                                <div>&nbsp;</div>
                                <div>
                                    <span className="text-red">$screen-sizes</span>
                                    <span className="text-default">: (</span>
                                </div>
                                <div className="ml-30">
                                    <div>
                                        <span className="text-red">xs</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">0</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-red">sm</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">557</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-red">md</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">768</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-red">lg</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">1230</span>
                                        <span className="text-red">,</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-default">) </span>
                                    <span className="text-blue">!default</span>
                                    <span className="text-red">;</span>
                                </div>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-6">
                            <table className={cx('table')}>
                                <thead>
                                <tr>
                                    <th>Extra small <br /> {'<'} 557px</th>
                                    <th>Small <br /> {'>='} 557px</th>
                                    <th>Medium <br /> {'>='} 768px</th>
                                    <th>Large <br /> {'>='} 1230px</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><code className="text-red bg-light-gray pl-5 pr-5">.xs-</code></td>
                                    <td><code className="text-red bg-light-gray pl-5 pr-5">.sm-</code></td>
                                    <td><code className="text-red bg-light-gray pl-5 pr-5">.md-</code></td>
                                    <td><code className="text-red bg-light-gray pl-5 pr-5">.lg-</code></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
