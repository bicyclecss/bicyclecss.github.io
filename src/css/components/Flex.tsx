import * as React from 'react'

import Code from 'common/components/Code'
import Tag from 'common/components/Tag'


export default class Flex extends React.Component<{}, {}> {

    render() {
        return (
            <section id="flexbox" className="section">
                <div className="container">
                    <div className="text-center mb-70">
                        <span className="text-default text-uppercase">Flexbox</span>
                        <h2 className="text-center text-primary mt-20">Flexbox</h2>
                        <p className="font-18">Some other responsive classes</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto debitis
                        dolores impedit iure iusto libero magni neque obcaecati suscipit <code className="code">.flex</code>
                    </p>
                    <h3>Flex direction</h3>
                    <p>
                        Lorem ipsum dolor sit amet
                        <code className="code">.flex-direction-row</code>, <code className="code">.flex-direction-column</code>,
                        <code className="code">.flex-direction-row-reverse</code>, <code className="code">.flex-direction-column-reverse</code>.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<div class="flex flex-direction-column-reverse">\n' +
                                '    <div>Flex Item 1</div>\n' +
                                '    <div>Flex Item 2</div>\n' +
                                '</div>'
                            }>
                                <Tag className="flex flex-direction-column-reverse">
                                    <Tag>Flex Item 1</Tag>
                                    <Tag>Flex Item 2</Tag>
                                </Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <div className="flex flex-direction-column-reverse border border-medium-gray p-15">
                                <div className="p-10 border border-medium-gray bg-light-gray text-center">
                                    Flex Item 1
                                </div>
                                <div className="p-10 border border-medium-gray bg-light-gray text-center">
                                    Flex Item 2
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Flex wrap</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quo
                        <code className="code">.flex-wrap</code>, <code className="code">.flex-nowrap</code>,
                        <code className="code">.flex-wrap-reverse</code>
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<div class="flex flex-wrap">\n' +
                                '    <div>Flex Item 1</div>\n' +
                                '    <div>Flex Item 2</div>\n' +
                                '</div>'
                            }>
                                <Tag className="flex flex-wrap">
                                    <Tag>Flex Item 1</Tag>
                                    <Tag>Flex Item 2</Tag>
                                </Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <div className="flex flex-wrap border border-medium-gray p-15">
                                <div className="pt-10 pb-10 pl-30 pr-30 border border-medium-gray bg-light-gray text-center text-nowrap">
                                    Flex Item 1
                                </div>
                                <div className="pt-10 pb-10 pl-30 pr-30 border border-medium-gray bg-light-gray text-center text-nowrap">
                                    Flex Item 2
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Flex order</h3>
                    <p>
                        Lorem ipsum dolor sit amet
                        <code className="code">.flex-order-0</code>, <code className="code">.flex-order-1</code>,
                        ... , <code className="code">.flex-order-9</code>, <code className="code">.flex-order-10</code>.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<div class="flex flex-direction-column">\n' +
                                '    <div class="flex-order-2">Flex Item 1</div>\n' +
                                '    <div class="flex-order-3">Flex Item 2</div>\n' +
                                '    <div class="flex-order-">Flex Item 3</div>\n' +
                                '</div>'
                            }>
                                <Tag className="flex flex-direction-column">
                                    <Tag className="flex-order-2">Flex Item 1</Tag>
                                    <Tag className="flex-order-3">Flex Item 2</Tag>
                                    <Tag className="flex-order-1">Flex Item 3</Tag>
                                </Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <div className="flex flex-direction-column border border-medium-gray p-15">
                                <div className="flex-order-2 p-10 border border-medium-gray bg-light-gray text-center">
                                    Flex Item 1
                                </div>
                                <div className="flex-order-3 p-10 border border-medium-gray bg-light-gray text-center">
                                    Flex Item 2
                                </div>
                                <div className="flex-order-1 p-10 border border-medium-gray bg-light-gray text-center">
                                    Flex Item 3
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Flex grow</h3>
                    <p>
                        Lorem ipsum dolor sit amet
                        <code className="code">.flex-grow-0</code>, <code className="code">.flex-grow-1</code>,
                        ... , <code className="code">.flex-grow-9</code>, <code className="code">.flex-grow-10</code>.

                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<div class="flex">\n' +
                                '    <div class="flex-grow-3">Flex Item 1</div>\n' +
                                '    <div class="flex-grow-1">Flex Item 2</div>\n' +
                                '</div>'
                            }>
                                <Tag className="flex">
                                    <Tag className="flex-grow-3">
                                        Flex Item 1
                                    </Tag>
                                    <Tag className="flex-grow-1">
                                        Flex Item 2
                                    </Tag>
                                </Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <div className="flex border border-medium-gray p-15">
                                <div className="flex-grow-3 p-10 border border-medium-gray bg-light-gray text-center">
                                    Flex Item 1
                                </div>
                                <div className="flex-grow-1 p-10 border border-medium-gray bg-light-gray text-center">
                                    Flex Item 2
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Alignment</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, totam
                        <code className="code">.justify-content-</code>, <code className="code">.align-content-</code>,
                        <code className="code">.align-items-</code>, <code className="code">.align-self-</code>.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-3">
                            <ul>
                                <li><code className="code">.justify-content-start</code></li>
                                <li><code className="code">.justify-content-end</code></li>
                                <li><code className="code">.justify-content-center</code></li>
                                <li><code className="code">.justify-content-between</code></li>
                                <li><code className="code">.justify-content-around</code></li>
                            </ul>
                        </div>
                        <div className="column xs-12 lg-3">
                            <ul>
                                <li><code className="code">.align-content-start</code></li>
                                <li><code className="code">.align-content-end</code></li>
                                <li><code className="code">.align-content-center</code></li>
                                <li><code className="code">.align-content-between</code></li>
                                <li><code className="code">.align-content-around</code></li>
                            </ul>
                        </div>
                        <div className="column xs-12 lg-3">
                            <ul>
                                <li><code className="code">.align-items-start</code></li>
                                <li><code className="code">.align-items-end</code></li>
                                <li><code className="code">.align-items-center</code></li>
                                <li><code className="code">.align-items-between</code></li>
                                <li><code className="code">.align-items-around</code></li>
                            </ul>
                        </div>
                        <div className="column xs-12 lg-3">
                            <ul>
                                <li><code className="code">.align-self-start</code></li>
                                <li><code className="code">.align-self-end</code></li>
                                <li><code className="code">.align-self-center</code></li>
                                <li><code className="code">.align-self-between</code></li>
                                <li><code className="code">.align-self-around</code></li>
                            </ul>
                        </div>
                    </div>
                    <Code copyCode={
                        '<div class="flex justify-content-around">\n' +
                        '    <div>Flex Item 1</div>\n' +
                        '    <div>Flex Item 2</div>\n' +
                        '    <div>Flex Item 3</div>\n' +
                        '</div>'
                    }>
                        <Tag className="flex justify-content-around">
                            <Tag>Flex Item 1</Tag>
                            <Tag>Flex Item 2</Tag>
                            <Tag>Flex Item 3</Tag>
                        </Tag>
                    </Code>
                    <div className="flex justify-content-around border border-medium-gray p-15 mb-30">
                        <div className="pt-10 pb-10 pl-30 pr-30 border border-medium-gray bg-light-gray text-center">
                            Flex Item 1
                        </div>
                        <div className="pt-10 pb-10 pl-30 pr-30 border border-medium-gray bg-light-gray text-center">
                            Flex Item 2
                        </div>
                        <div className="pt-10 pb-10 pl-30 pr-30 border border-medium-gray bg-light-gray text-center">
                            Flex Item 3
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptatem <a href="">link</a>.
                    </p>
                    <Code copyCode={
                        '<div class="flex flex-direction-column flex-direction-md-row">\n' +
                        '    <div class="flex-grow-1">Flex item 1</div>\n' +
                        '    <div>Flex item 2</div>\n' +
                        '</div>\n' +
                        '<div class="flex justify-content-between align-items-center flex-direction-column flex-direction-md-row">\n' +
                        '    <div class="flex-order-3">Flex item 1</div>\n' +
                        '    <div class="flex-order-2">Flex item 2</div>\n' +
                        '    <div class="flex-order-1">Flex item 3</div>\n' +
                        '</div>'
                    }>
                        <Tag className="flex flex-direction-column flex-direction-md-row">
                            <Tag className="flex-grow-1">Flex item 1</Tag>
                            <Tag>Flex item 2</Tag>
                        </Tag>
                        <Tag className="flex justify-content-between align-items-center flex-direction-column flex-direction-md-row">
                            <Tag className="flex-order-3">Flex item 1</Tag>
                            <Tag className="flex-order-2">Flex item 2</Tag>
                            <Tag className="flex-order-1">Flex item 3</Tag>
                        </Tag>
                    </Code>
                    <div className="flex flex-direction-column flex-direction-md-row border border-medium-gray mb-15">
                        <div className="pt-10 pb-10 pl-50 pr-50 border border-medium-gray bg-light-gray m-15 flex-grow-1">
                            Flex item 1
                        </div>
                        <div className="pt-10 pb-10 pl-50 pr-50 border border-medium-gray bg-light-gray m-15">
                            Flex item 2
                        </div>
                    </div>
                    <div className="flex flex-direction-column flex-direction-md-row justify-content-between align-items-center border border-medium-gray mb-15">
                        <div className="pt-10 pb-10 pl-50 pr-50 border border-medium-gray bg-light-gray m-15 flex-order-3">
                            Flex item 1
                        </div>
                        <div className="p-50 border border-medium-gray bg-light-gray m-15 flex-order-2">
                            Flex item 2
                        </div>
                        <div className="pt-10 pb-10 pl-50 pr-50 border border-medium-gray bg-light-gray m-15 flex-order-1">
                            Flex item 3
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
