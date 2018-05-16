import * as React from 'react'


export default class Helper extends React.Component<{}, {}> {

    render() {
        return (
            <section className="pt-30 pb-30">
                <h2>Вспомогательные классы</h2>
                <h3>Цвета</h3>
                <div className="row mb-20">
                    <div className="column md-6">
                        <div className="bg-white p-15 mb-15">.bg-white</div>
                        <div className="bg-black p-15 mb-15 text-white">.bg-black</div>
                        <div className="bg-yellow p-15 mb-15">.bg-yellow</div>
                        <div className="bg-orange p-15 mb-15">.bg-orange</div>
                        <div className="bg-red p-15 mb-15">.bg-red</div>
                        <div className="bg-pink p-15 mb-15">.bg-pink</div>
                        <div className="bg-purple p-15 mb-15">.bg-purple</div>
                        <div className="bg-blue p-15 mb-15">.bg-blue</div>
                        <div className="bg-light-blue p-15 mb-15">.bg-light-blue</div>
                        <div className="bg-green p-15 mb-15">.bg-green</div>
                    </div>
                    <div className="column md-6">
                        <div className="bg-light-gray p-15 mb-15">.bg-light-gray</div>
                        <div className="bg-medium-gray p-15 mb-15">.bg-medium-gray</div>
                        <div className="bg-dark-gray p-15 mb-15 text-white">.bg-dark-gray</div>
                        <div className="bg-primary p-15 mb-15">.bg-primary</div>
                        <div className="bg-secondary p-15 mb-15">.bg-secondary</div>
                        <div className="bg-default p-15 mb-15">.bg-default</div>
                        <div className="bg-info p-15 mb-15">.bg-info</div>
                        <div className="bg-success p-15 mb-15">.bg-success</div>
                        <div className="bg-error p-15 mb-15">.bg-error</div>
                        <div className="bg-warning p-15 mb-15">.bg-warning</div>
                    </div>
                </div>
            </section>
        )
    }
}
