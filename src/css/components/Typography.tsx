import * as React from 'react'

import Code from 'common/components/Code'
import Tag from 'common/components/Tag'


export default class Typography extends React.Component<{}, {}> {

    render() {
        return (
            <section id="typography" className="section">
                <div className="container">
                    <div className="text-center mb-70">
                        <span className="text-default text-uppercase">Writing power</span>
                        <h2 className="text-center text-primary mt-20">Typography</h2>
                        <p className="font-18">Use the following tags and classes for text styling</p>
                    </div>
                    <h3>Headings</h3>
                    <p>
                        All HTML headings, <span className="text-red">{'<h1>'}</span> through
                        <span className="text-red">{'<h6>'}</span>, are available.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<h1>h1 heading</h1>\n <h2>h2 heading</h2>\n' +
                                '<h3>h3 heading</h3>\n <h4>h4 heading</h4>\n <h5>h5 heading</h5>\n' +
                                '<h6>h6 heading</h6>'
                            }>
                                <Tag name="h1">h1 heading</Tag>
                                <Tag name="h2">h2 heading</Tag>
                                <Tag name="h3">h3 heading</Tag>
                                <Tag name="h4">h4 heading</Tag>
                                <Tag name="h5">h5 heading</Tag>
                                <Tag name="h6">h6 heading</Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <h1>h1 heading</h1>
                            <h2>h2 heading</h2>
                            <h3>h3 heading</h3>
                            <h4>h4 heading</h4>
                            <h5>h5 heading</h5>
                            <h6>h6 heading</h6>
                        </div>
                    </div>
                    <h3>Text colors</h3>
                    <p>Use follwoing contextual classes to change color of your text.</p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<p class="text-white bg-default">A paragraph with .text-white class</p>\n' +
                                '<p class="text-black">A paragraph with .text-black class</p>\n' +
                                '<p class="text-red">A paragraph with .text-red class</p>\n' +
                                '<p class="text-yellow">A paragraph with .text-yellow class</p>\n' +
                                '<p class="text-orange">A paragraph with .text-orange class</p>\n' +
                                '<p class="text-blue">A paragraph with .text-blue class</p>\n' +
                                '<p class="text-light-blue">A paragraph with .text-light-blue class</p>\n' +
                                '<p class="text-green">A paragraph with .text-green class</p>\n' +
                                '<p class="text-pink">A paragraph with .text-pink class</p>\n' +
                                '<p class="text-purple">A paragraph with .text-purple class</p>\n' +
                                '<p class="text-primary">A paragraph with .text-primary class</p>\n' +
                                '<p class="text-secondary">A paragraph with .text-secondary class</p>\n' +
                                '<p class="text-default">A paragraph with .text-default class</p>\n' +
                                '<p class="text-info">A paragraph with .text-info class</p>\n' +
                                '<p class="text-success">A paragraph with .text-success class</p>\n' +
                                '<p class="text-error">A paragraph with .text-error class</p>\n' +
                                '<p class="text-warning">A paragraph with .text-warning class</p>\n' +
                                '<p class="text-light-gray bg-default">A paragraph with .text-light-gray class</p>\n' +
                                '<p class="text-medium-gray">A paragraph with .text-medium-gray class</p>\n' +
                                '<p class="text-dark-gray">A paragraph with .text-dark-gray class</p>'
                            }>
                                <Tag name="p" className="text-white bg-default">A paragraph with .text-white class</Tag>
                                <Tag name="p" className="text-black">A paragraph with .text-black class</Tag>
                                <Tag name="p" className="text-red">A paragraph with .text-red class</Tag>
                                <Tag name="p" className="text-yellow">A paragraph with .text-yellow class</Tag>
                                <Tag name="p" className="text-orange">A paragraph with .text-orange class</Tag>
                                <Tag name="p" className="text-blue">A paragraph with .text-blue class</Tag>
                                <Tag name="p" className="text-light-blue">A paragraph with .text-light-blue class</Tag>
                                <Tag name="p" className="text-green">A paragraph with .text-green class</Tag>
                                <Tag name="p" className="text-pink">A paragraph with .text-pink class</Tag>
                                <Tag name="p" className="text-purple">A paragraph with .text-purple class</Tag>
                                <Tag name="p" className="text-primary">A paragraph with .text-primary class</Tag>
                                <Tag name="p" className="text-secondary">A paragraph with .text-secondary class</Tag>
                                <Tag name="p" className="text-default">A paragraph with .text-default class</Tag>
                                <Tag name="p" className="text-info">A paragraph with .text-info class</Tag>
                                <Tag name="p" className="text-success">A paragraph with .text-success class</Tag>
                                <Tag name="p" className="text-error">A paragraph with .text-error class</Tag>
                                <Tag name="p" className="text-warning">A paragraph with .text-warning class</Tag>
                                <Tag name="p" className="text-light-gray bg-default">A paragraph with .text-light-gray class</Tag>
                                <Tag name="p" className="text-medium-gray">A paragraph with .text-medium-gray class</Tag>
                                <Tag name="p" className="text-dark-gray">A paragraph with .text-dark-gray class</Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <p className="text-white bg-default mb-0">A paragraph with .text-white class</p>
                            <p className="text-black mb-0">A paragraph with .text-black class</p>
                            <p className="text-red mb-0">A paragraph with .text-red class</p>
                            <p className="text-yellow mb-0">A paragraph with .text-yellow class</p>
                            <p className="text-orange mb-0">A paragraph with .text-orange class</p>
                            <p className="text-blue mb-0">A paragraph with .text-blue class</p>
                            <p className="text-light-blue mb-0">A paragraph with .text-light-blue class</p>
                            <p className="text-green mb-0">A paragraph with .text-green class</p>
                            <p className="text-pink mb-0">A paragraph with .text-pink class</p>
                            <p className="text-purple mb-0">A paragraph with .text-purple class</p>
                            <p className="text-primary mb-0">A paragraph with .text-primary class</p>
                            <p className="text-secondary mb-0">A paragraph with .text-secondary class</p>
                            <p className="text-default mb-0">A paragraph with .text-default class</p>
                            <p className="text-info mb-0">A paragraph with .text-info class</p>
                            <p className="text-success mb-0">A paragraph with .text-success class</p>
                            <p className="text-error mb-0">A paragraph with .text-error class</p>
                            <p className="text-warning mb-0">A paragraph with .text-warning class</p>
                            <p className="text-light-gray bg-default mb-0">A paragraph with .text-light-gray class</p>
                            <p className="text-medium-gray mb-0">A paragraph with .text-medium-gray class</p>
                            <p className="text-dark-gray mb-0">A paragraph with .text-dark-gray class</p>
                        </div>
                    </div>
                    <h3>Font size</h3>
                    <p>
                        Use the <code className="code">.font-</code> class to set the font size. <br />
                        <strong>Available font sizes:</strong> 9 - 30, 32, 36, 38, 40, 42, 44, 46, 48, 54, 60, 64, 72, 78, 90, 100, 150, 200.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<p class="font-27">A paragraph with .font-27 class</p>\n' +
                                '<p class="font-20">A paragraph with .font-20 class</p>\n' +
                                '<p class="font-13">A paragraph with .font-13 class</p>'
                            }>
                                <Tag name="p" className="font-27">A paragraph with .font-27 class</Tag>
                                <Tag name="p" className="font-20">A paragraph with .font-20 class</Tag>
                                <Tag name="p" className="font-13">A paragraph with .font-13 class</Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <p className="font-27 mb-5">A paragraph with .font-27 class</p>
                            <p className="font-20 mb-5">A paragraph with .font-20 class</p>
                            <p className="font-13 mb-5">A paragraph with .font-13 class</p>
                        </div>
                    </div>
                    <h3>Font weight</h3>
                    <p>
                        Use the <code className="code">.font-weight-</code> class to set the font weight. <br />
                        <strong>Available font weights:</strong> 100 - 900.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<p class="font-weight-900">A paragraph with .font-weight-900 class</p>\n' +
                                '<p class="font-weight-700">A paragraph with .font-weight-700 class</p>\n' +
                                '<p class="font-weight-400">A paragraph with .font-weight-400 class</p>'
                            }>
                                <Tag name="p" className="font-weight-900">A paragraph with .font-weight-900 class</Tag>
                                <Tag name="p" className="font-weight-700">A paragraph with .font-weight-700 class</Tag>
                                <Tag name="p" className="font-weight-400">A paragraph with .font-weight-400 class</Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <p className="font-weight-900 mb-15">A paragraph with .font-weight-900 class</p>
                            <p className="font-weight-700 mb-15">A paragraph with .font-weight-700 class</p>
                            <p className="font-weight-400 mb-15">A paragraph with .font-weight-400 class</p>
                        </div>
                    </div>
                    <h3>Text align</h3>
                    <p>
                        There are classes for text alignment such as{' '}
                        <code className="code">.text-left</code>,{' '}
                        <code className="code">.text-center</code>,{' '}
                        <code className="code">.text-right</code>.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<p class="text-left">A paragraph with .text-left class</p>\n' +
                                '<p class="text-center">A paragraph with .text-center class</p>\n' +
                                '<p class="text-right">A paragraph with .text-right class</p>'
                            }>
                                <Tag name="p" className="text-left">A paragraph with .text-left class</Tag>
                                <Tag name="p" className="text-center">A paragraph with .text-center class</Tag>
                                <Tag name="p" className="text-right">A paragraph with .text-right class</Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <p className="text-left bg-white mb-15">A paragraph with .text-left class</p>
                            <p className="text-center bg-white mb-15">A paragraph with .text-center class</p>
                            <p className="text-right bg-white mb-15">A paragraph with .text-right class</p>
                        </div>
                    </div>
                    <h3>Text transform</h3>
                    <p>
                        for text transformation use{' '}
                        <code className="code">.text-lowercase</code>,{' '}
                        <code className="code">.text-uppercase</code>,{' '}
                        <code className="code">.text-capitalize</code>,{' '}
                        <code className="code">.text-transform-none</code>.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<p class="text-lowercase">A paragraph with .text-lowercase class</p>\n' +
                                '<p class="text-uppercase">A paragraph with .text-uppercase class</p>\n' +
                                '<p class="text-capitalize">A paragraph with .text-capitalize class</p>\n' +
                                '<p class="text-transform-none">A paragraph with .text-transform-none class</p>'
                            }>
                                <Tag name="p" className="text-lowercase">A paragraph with .text-lowercase class</Tag>
                                <Tag name="p" className="text-uppercase">A paragraph with .text-uppercase class</Tag>
                                <Tag name="p" className="text-capitalize">A paragraph with .text-capitalize class</Tag>
                                <Tag name="p" className="text-transform-none">A paragraph with .text-transform-none class</Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <p className="text-lowercase mb-5">A paragraph with .text-lowercase class</p>
                            <p className="text-uppercase mb-5">A paragraph with .text-uppercase class</p>
                            <p className="text-capitalize mb-5">A paragraph with .text-capitalize class</p>
                            <p className="text-transform-none mb-5">A paragraph with .text-transform-none class</p>
                        </div>
                    </div>
                    <h3>Text wrapping</h3>
                    <p>
                        It is possible to make that the text was not wrap on other line by means of a class{' '}
                        <code className="code">.text-nowrap</code> class.
                    </p>
                    <div className="row mb-30">
                        <div className="column xs-12 lg-8">
                            <Code copyCode={
                                '<div class="text-nowrap">This text is not carried over to the next line</div>'
                            }>
                                <Tag className="text-nowrap">
                                    This text is not carried over to the next line
                                </Tag>
                            </Code>
                        </div>
                        <div className="column xs-12 lg-4">
                            <div className="row">
                                <div className="column xs-6">
                                    <div className="p-10 text-nowrap border border-medium-gray bg-light-gray">
                                        This text is not carried over to the next line
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
