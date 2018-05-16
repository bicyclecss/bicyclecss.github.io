import * as React from 'react'

import Code from 'common/components/Code'


export default class QuickStart extends React.Component<{}, {}> {

    render() {
        return (
            <section id="quickStart" className="section">
                <div className="container">
                    <div className="text-center mb-70">
                        <span className="text-default text-uppercase">Lorem ipsum dolor</span>
                        <h2 className="text-center text-primary mt-20">Quick Start</h2>
                        <p className="font-18">Now it's time to start editing some lines of code</p>
                    </div>
                    If you want to use the css version,
                    connect it to the <span className="text-red">{'<head>'}</span> tag
                    <Code copyCode={'<link href="bicycle/css/bicycle.min.css" rel="stylesheet">'}>
                        <div>
                            <span className="text-red">{'<link '}</span>
                            <span className="text-blue">href</span>
                            <span className="text-default">="</span>
                            <span className="text-purple">bicycle/css/bicycle.min.css</span>
                            <span className="text-default">" </span>
                            <span className="text-blue">rel</span>
                            <span className="text-default">="</span>
                            <span className="text-purple">stylesheet</span>
                            <span className="text-default">"</span>
                            <span className="text-red">{'>'}</span>
                        </div>
                    </Code>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at consequatur corporis culpa eum
                    ipsum laboriosam minima numquam quasi repellat! Asperiores consectetur fugiat magni modi quia
                    rerum velit vero voluptatibus!
                    <Code copyCode={'@import "your-variables";\n@import "bicycle/scss/bicycle";'}>
                        <div>
                            <span className="text-red">@import </span>
                            <span className="text-default">"</span>
                            <span className="text-purple">your-variables</span>
                            <span className="text-default">"</span>
                            <span className="text-red">;</span>
                        </div>
                        <div>
                            <span className="text-red">@import </span>
                            <span className="text-default">"</span>
                            <span className="text-purple">bicycle/scss/bicycle</span>
                            <span className="text-default">"</span>
                            <span className="text-red">;</span>
                        </div>
                    </Code>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto dolores facilis minus mollitia possimus quia?
                    <Code copyCode={'{\n loader: \'sass-loader\',\n options: {\n sourceMap: true,\n' +
                    'data: \'@import "bicycle/scss/common/variables";@import "bicycle/scss/common/mixins";\',\n' +
                    'includePaths: [\n path.resolve(__dirname, \'./src\')\n]\n}\n}'}>
                        <div className="text-default">{'{'}</div>
                        <div>
                            <div className="ml-30">
                                <span className="text-red">loader</span>
                                <span className="text-default">: </span>
                                <span className="text-purple">'css-loader'</span>
                                <span className="text-red">,</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-default">{'}'}</span>
                            <span className="text-red">, </span>
                            <span className="text-default">{'{'}</span>
                        </div>
                        <div>
                            <div className="ml-30">
                                <span className="text-red">loader</span>
                                <span className="text-default">: </span>
                                <span className="text-purple">'autoprefixer-loader'</span>
                                <span className="text-red">,</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-default">{'}'}</span>
                            <span className="text-red">, </span>
                            <span className="text-default">{'{'}</span>
                        </div>
                        <div>
                            <div className="ml-30">
                                <span className="text-red">loader</span>
                                <span className="text-default">: </span>
                                <span className="text-purple">'sass-loader'</span>
                                <span className="text-red">,</span>
                            </div>
                        </div>
                        <div>
                            <div className="ml-30">
                                <span className="text-red">options</span>
                                <span className="text-default">: </span>
                                <span className="text-default">{'{'}</span>
                            </div>
                        </div>
                        <div>
                            <div className="ml-60">
                                <span className="text-red">sourceMap</span>
                                <span className="text-default">: </span>
                                <span className="text-purple">true</span>
                                <span className="text-red">,</span>
                            </div>
                        </div>
                        <div>
                            <div className="ml-60">
                                <span className="text-red">data</span>
                                <span className="text-default">: </span>
                                <span className="text-purple">'@import "bicycle/scss/common/variables"; @import "bicycle/scss/common/mixins";'</span>
                                <span className="text-red">,</span>
                            </div>
                        </div>
                        <div>
                            <div className="ml-60">
                                <span className="text-red">includePaths</span>
                                <span className="text-default">: </span>
                                <span className="text-default">{'['}</span>
                            </div>
                        </div>
                        <div>
                            <div className="ml-90">
                                <span className="text-default">path.</span>
                                <span className="text-blue">resolve</span>
                                <span className="text-default">(__dirname</span>
                                <span className="text-red">, </span>
                                <span className="text-purple">'./src'</span>
                                <span className="text-default">)</span>
                            </div>
                        </div>
                        <div>
                            <span className="ml-60 text-default">{']'}</span>
                        </div>
                        <div>
                            <span className="ml-30 text-default">{'}'}</span>
                        </div>
                        <div className="text-default">{'}'}</div>
                    </Code>
                </div>
            </section>
        )
    }
}
