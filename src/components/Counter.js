import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../actions';

class Counter extends Component {
    style = {
        fontSize: '70px'
    }
    render() {
        const { count, incrementCount, decrementCount, resetCount } = this.props
        return (
            <main className="container-fluid counter mt-5 py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3 border border-blue p-5">
                        <p className="text-center" style={this.style}>{count.count}</p>
                        <div className="controls text-center mt-5">
                            <input type="button"
                                className="btn btn-success mx-3"
                                value="Increment"
                                onClick={incrementCount}
                            />
                            <input type="button"
                                className="btn btn-warning mx-3"
                                value="Decrement"
                                onClick={decrementCount}
                            />
                            <input type="button"
                                className="btn btn-danger mx-3"
                                value="Reset"
                                onClick={resetCount}
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.count,
    }
}

export default connect(mapStateToProps, {
    incrementCount,
    decrementCount,
    resetCount
})(Counter);