import * as React from 'react'

import Banner from 'common/layout/components/Banner'

import Typography from './Typography'
import Grid from './Grid'
import Flex from './Flex'
import Helper from './Helper'
import Responsive from './Responsive'
import Mixins from './Mixins'


export default class Css extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <Banner title="CSS, Basic styling" color="purple">
                    Global CSS settings, fundamental HTML elements, and most reuse-able
                    elements are styled and enhanced with extensible classes.
                </Banner>
                <Typography />
                <Grid />
                <Flex />
                <Helper />
                <Responsive />
                <Mixins />
            </div>
        )
    }
}
