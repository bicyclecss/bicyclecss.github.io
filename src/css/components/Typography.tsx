import * as React from 'react'

import Tag from 'common/components/Tag'


export default class Typography extends React.Component<{}, {}> {

    render() {
        return (
            <section className="pt-30 pb-30">
                <h2>Типография</h2>
                <div className="row mb-30">
                    <div className="column md-6">
                        <h1>h1 Заголовок</h1>
                        <h2>h2 Заголовок</h2>
                        <h3>h3 Заголовок</h3>
                        <h4>h4 Заголовок</h4>
                        <h5>h5 Заголовок</h5>
                        <h6>h6 Заголовок</h6>
                    </div>
                    <div className="column md-6">
                        <Tag name="h1">h1 Заголовок</Tag>
                        <Tag name="h2">h2 Заголовок</Tag>
                        <Tag name="h3">h3 Заголовок</Tag>
                        <Tag name="h4">h4 Заголовок</Tag>
                        <Tag name="h5">h5 Заголовок</Tag>
                        <Tag name="h6">h6 Заголовок</Tag>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="column md-6">
                        <p className="font-40">Размер шрифта 40</p>
                        <p className="font-32">Размер шрифта 32</p>
                        <p className="font-27">Размер шрифта 27</p>
                        <p className="font-20">Размер шрифта 20</p>
                        <p className="font-13">Размер шрифта 13</p>
                    </div>
                    <div className="column md-6">
                        <div className="mt-10 mb-20">
                            <Tag name="p" className="font-40">Размер шрифта 40</Tag>
                            <Tag name="p" className="font-32">Размер шрифта 32</Tag>
                            <Tag name="p" className="font-27">Размер шрифта 27</Tag>
                            <Tag name="p" className="font-20">Размер шрифта 20</Tag>
                            <Tag name="p" className="font-13">Размер шрифта 13</Tag>
                        </div>
                        <h4>Доступные размеры:</h4>
                        9 - 30, 32, 36, 38, 40, 42, 44, 46, 48, 54, 60, 64, 72, 78, 90, 100, 150, 200.
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="column md-6">
                        <p className="text-left bg-white border p-15">.text-left</p>
                        <p className="text-center bg-white border p-15">.text-center</p>
                        <p className="text-right bg-white border p-15">.text-right</p>
                    </div>
                    <div className="column md-6">
                        <Tag name="p" className="text-left">.text-left</Tag>
                        <Tag name="p" className="text-center">.text-center</Tag>
                        <Tag name="p" className="text-right">.text-right</Tag>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="column md-6">
                        <p className="text-lowercase">Текст в нижнем регистре</p>
                        <p className="text-uppercase">Текст в верхнем регистре</p>
                        <p className="text-capitalize">Текст капитализированный</p>
                        <p className="text-transform-none">Текст без трансформации</p>
                    </div>
                    <div className="column md-6">
                        <Tag name="p" className="text-lowercase">Текст в нижнем регистре</Tag>
                        <Tag name="p" className="text-uppercase">Текст в верхнем регистре</Tag>
                        <Tag name="p" className="text-capitalize">Текст капитализированный</Tag>
                        <Tag name="p" className="text-transform-none">Текст без трансформации</Tag>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="column md-6">
                        <p className="font-weight-900">.font-weight-900</p>
                        <p className="font-weight-600">.font-weight-600</p>
                        <p className="font-weight-400">.font-weight-400</p>
                    </div>
                    <div className="column md-6">
                        <div className="mb-20">
                            <Tag name="p" className="font-weight-900">.font-weight-900</Tag>
                            <Tag name="p" className="font-weight-600">.font-weight-600</Tag>
                            <Tag name="p" className="font-weight-400">.font-weight-400</Tag>
                        </div>
                        <h4>Доступные параметры:</h4>
                        100 - 900
                    </div>
                </div>
                <div className="row">
                    <div className="column md-4">
                        <div className="row">
                            <div className="column md-6">
                                <p className="text-white bg-default">.text-white</p>
                                <p className="text-black">.text-black</p>
                                <p className="text-red">.text-red</p>
                                <p className="text-yellow">.text-yellow</p>
                                <p className="text-orange">.text-orange</p>
                                <p className="text-blue">.text-blue</p>
                                <p className="text-light-blue">.text-light-blue</p>
                                <p className="text-green">.text-green</p>
                                <p className="text-pink">.text-pink</p>
                                <p className="text-purple">.text-purple</p>
                            </div>
                            <div className="column md-6">
                                <p className="text-primary">.text-primary</p>
                                <p className="text-secondary">.text-secondary</p>
                                <p className="text-default">.text-default</p>
                                <p className="text-info">.text-info</p>
                                <p className="text-success">.text-success</p>
                                <p className="text-error">.text-error</p>
                                <p className="text-warning">.text-warning</p>
                                <p className="text-light-gray bg-default">.text-light-gray</p>
                                <p className="text-medium-gray">.text-medium-gray</p>
                                <p className="text-dark-gray">.text-dark-gray</p>
                            </div>
                        </div>
                    </div>
                    <div className="column md-8">
                        <div className="row">
                            <div className="column md-5">
                                <Tag name="p" className="text-white bg-default">.text-white</Tag>
                                <Tag name="p" className="text-black">.text-black</Tag>
                                <Tag name="p" className="text-red">.text-red</Tag>
                                <Tag name="p" className="text-yellow">.text-yellow</Tag>
                                <Tag name="p" className="text-orange">.text-orange</Tag>
                                <Tag name="p" className="text-blue">.text-blue</Tag>
                                <Tag name="p" className="text-light-blue">.text-light-blue</Tag>
                                <Tag name="p" className="text-green">.text-green</Tag>
                                <Tag name="p" className="text-pink">.text-pink</Tag>
                                <Tag name="p" className="text-purple">.text-purple</Tag>
                            </div>
                            <div className="column md-7">
                                <Tag name="p" className="text-primary">.text-primary</Tag>
                                <Tag name="p" className="text-secondary">.text-secondary</Tag>
                                <Tag name="p" className="text-default">.text-default</Tag>
                                <Tag name="p" className="text-info">.text-info</Tag>
                                <Tag name="p" className="text-success">.text-success</Tag>
                                <Tag name="p" className="text-error">.text-error</Tag>
                                <Tag name="p" className="text-warning">.text-warning</Tag>
                                <Tag name="p" className="text-light-gray bg-default">.text-light-gray</Tag>
                                <Tag name="p" className="text-medium-gray">.text-medium-gray</Tag>
                                <Tag name="p" className="text-dark-gray">.text-dark-gray</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
