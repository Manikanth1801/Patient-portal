import React, { Component } from 'react';

class BillingDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log('props are',this.props)
        return (
            <div>
                <h1>This is patient Billing Details page</h1>
            </div>
        )
    }
}

export default BillingDetails