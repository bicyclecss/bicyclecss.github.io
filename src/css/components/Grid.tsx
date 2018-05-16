import * as React from 'react'

const classNames = require('classnames/bind')

import Tag from 'common/components/Tag'

const cx = classNames.bind(require('../styles/grid.scss'))


export default class Grid extends React.Component<{}, {}> {

    render() {
        return (
            <section className="pt-30 pb-30">
                <h2>Сетка</h2>
                <div className="row align-items-center mb-20">
                    <div className="column md-6 sm-3">
                        <div className="border bg-light-gray p-20">.column .md-6 .sm-3</div>
                    </div>
                    <div className="column md-6 sm-3">
                        <div className="border bg-light-gray p-20">.column .md-6 .sm-3</div>
                    </div>
                </div>
                <div className="row align-items-center mb-20">
                    <div className="column">
                        <div className="border bg-light-gray p-20">.column</div>
                    </div>
                    <div className="column">
                        <div className="border bg-light-gray p-20">.column</div>
                    </div>
                    <div className="column">
                        <div className="border bg-light-gray p-20">.column</div>
                    </div>
                </div>
                <pre>
                    <code>
                        <Tag className="container">
                            <Tag className="row">
                                <Tag className="column md-6 sm-3" />
                                <Tag className="column md-6 sm-3" />
                            </Tag>
                            <Tag className="row">
                                <Tag className="column" />
                                <Tag className="column" />
                                <Tag className="column" />
                            </Tag>
                        </Tag>
                    </code>
                </pre>
                <table className={cx('table')}>
                    <thead>
                    <tr>
                        <th>Очень маленькие {'<'} 557px</th>
                        <th>Маленькие {'>='} 557px</th>
                        <th>Средние {'>='} 768px</th>
                        <th>Большие {'>='} 1230px</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>.xs-</td>
                        <td>.sm-</td>
                        <td>.md-</td>
                        <td>.lg-</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}
