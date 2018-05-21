import * as React from 'react'

import Code from 'common/components/Code'


const screenSizes = ['xs', 'sm', 'md', 'lg']

export default class Responsive extends React.Component<{}, {}> {

    render() {
        return (
            <section id="responsive" className="section">
                <div className="container">
                    <div className="text-center mb-70">
                        <span className="text-default text-uppercase">Responsive classes</span>
                        <h2 className="text-center text-primary mt-20">Responsive</h2>
                        <p className="font-18">Some other responsive classes</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum facere fuga
                        mollitia porro quos voluptatem?{' '}
                        <code className="code">
                            @mixin
                            <span className="text-blue"> from-screen-size</span>
                            <span className="text-default">(</span>
                            <span className="text-purple">$screen</span>
                            <span className="text-default">)</span>
                        </code>
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '/* Usage */\n' +
                                '.element {\n' +
                                '    @include from-screen-size(md) {\n' +
                                '        color: red;\n' +
                                '    }\n' +
                                '}\n' +
                                ' \n' +
                                '/* Result */\n' +
                                '@media screen and (min-width: 768px) {\n' +
                                '    .element {\n' +
                                '        color: red;\n' +
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
                                        <span className="text-blue">from-screen-size</span>
                                        <span className="text-default">(</span>
                                        <span className="text-purple">md</span>
                                        <span className="text-default">) {'{'}</span>
                                    </div>
                                    <blockquote>
                                        <span className="text-red">color</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">red</span>
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
                                    <span className="text-purple">768</span>
                                    <span className="text-blue">px</span>
                                    <span className="text-default">) {'{'}</span>
                                </div>
                                <blockquote>
                                    <div>
                                        <span className="text-purple">.element </span>
                                        <span className="text-default">{'{'}</span>
                                    </div>
                                    <blockquote>
                                        <span className="text-red">color</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">red</span>
                                        <span className="text-red">;</span>
                                    </blockquote>
                                    <div className="text-default">{'}'}</div>
                                </blockquote>
                                <div className="text-default">{'}'}</div>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <Code copyCode={
                                '$screen-sizes: (\n' +
                                '    xs: 0,\n' +
                                '    sm: 557,\n' +
                                '    md: 768,\n' +
                                '    lg: 1230,\n' +
                                ') !default;'
                            }>
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
                    </div>
                    <h3>Classes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, quas?</p>
                    <p>
                        <span className="text-purple">$number</span>: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150;
                    </p>
                    <h4>Margin</h4>
                    <div className="row mb-30">
                        {screenSizes.map((screen: string, index: number) => (
                            <div key={index} className="column xs-12 md-3">
                                <ul>
                                    <li>
                                        <code className="code">
                                            .m-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .mt-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .mr-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .mb-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .ml-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <h4>Padding</h4>
                    <div className="row mb-30">
                        {screenSizes.map((screen: string, index: number) => (
                            <div key={index} className="column xs-12 md-3">
                                <ul>
                                    <li>
                                        <code className="code">
                                            .p-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .pt-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .pr-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .pb-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .pl-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <h4>Display</h4>
                    <div className="row mb-30">
                        {screenSizes.map((screen: string, index: number) => (
                            <div key={index} className="column xs-12 md-3">
                                <ul>
                                    <li><code className="code">.display-{screen}-inline</code></li>
                                    <li><code className="code">.display-{screen}-inline-block</code></li>
                                    <li><code className="code">.display-{screen}-block</code></li>
                                    <li><code className="code">.display-{screen}-table</code></li>
                                    <li><code className="code">.display-{screen}-table-cell</code></li>
                                    <li><code className="code">.display-{screen}-flex</code></li>
                                    <li><code className="code">.display-{screen}-inline-flex</code></li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <h4 id="flexResponsive">Flex</h4>
                    <p>
                        <span className="text-purple">$dir</span>: row, column, row-reverse, column-reverse. <br/>
                        <span className="text-purple">$align</span>: start, end, center, between, around. <br/>
                        <span className="text-purple">$number</span>: 0, 1, 2, ... , 9, 10.
                    </p>
                    <div className="row mb-30">
                        {screenSizes.map((screen: string, index: number) => (
                            <div key={index} className="column xs-12 md-3">
                                <ul>
                                    <li>
                                        <code className="code">
                                            .flex-direction-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$dir</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .justify-content-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$align</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .align-content-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$align</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .align-items-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$align</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .align-self-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">align</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .flex-order-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                    <li>
                                        <code className="code">
                                            .flex-grow-{screen}-
                                            <span className="text-default">#{'{'}</span>
                                            <span className="text-purple">$number</span>
                                            <span className="text-default">{'}'}</span>
                                        </code>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <h3>Headings</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, repellat.
                    </p>
                    <Code copyCode={
                        '$header-font-sizes: (\n' +
                        '    xs: (\n' +
                        '        h1: 40,\n' +
                        '        h2: 30,\n' +
                        '        h3: 24,\n' +
                        '        h4: 18,\n' +
                        '        h5: 17,\n' +
                        '        h6: 16\n' +
                        '    ),\n' +
                        '    sm: (\n' +
                        '        h1: 60,\n' +
                        '        h2: 48,\n' +
                        '        h3: 31,\n' +
                        '        h4: 25,\n' +
                        '        h5: 20,\n' +
                        '        h6: 16\n' +
                        '    )\n' +
                        ');'
                    }>
                        <span className="text-red">$header-font-sizes</span>
                        <span className="text-default">: (</span>
                        <blockquote>
                            <div>
                                <span className="text-blue">xs</span>
                                <span className="text-default">: (</span>
                                <blockquote>
                                    <div>
                                        <span className="text-blue">h1</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">40</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h2</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">30</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h3</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">24</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h4</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">18</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h5</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">17</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h6</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">16</span>
                                    </div>
                                </blockquote>
                                <span className="text-default">)</span>
                                <span className="text-red">,</span>
                            </div>
                            <div>
                                <span className="text-blue">sm</span>
                                <span className="text-default">: (</span>
                                <blockquote>
                                    <div>
                                        <span className="text-blue">h1</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">60</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h2</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">48</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h3</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">31</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h4</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">25</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h5</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">20</span>
                                        <span className="text-red">,</span>
                                    </div>
                                    <div>
                                        <span className="text-blue">h6</span>
                                        <span className="text-default">: </span>
                                        <span className="text-purple">16</span>
                                    </div>
                                </blockquote>
                                <span className="text-default">)</span>
                            </div>
                        </blockquote>
                        <span className="text-default">)</span>
                        <span className="text-red">;</span>
                    </Code>
                </div>
            </section>
        )
    }
}
