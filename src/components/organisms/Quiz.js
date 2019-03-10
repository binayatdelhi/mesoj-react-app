import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadQuiz } from '../../redux/actions/quizAction'


class Quiz extends Component {

    componentDidMount() {
        console.log('===========', this.props)
        let { actions } = this.props;
        actions.loadQuiz('elec', 2)
    }

    renderQuiz() {
        console.log('>>>>>>>> renderQuiz: props:', this.props);
        let { quiz } = this.props;
        return quiz.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    {/* <Product item={item} /> */}
                    Quiz title:: {item.title}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                hi
                {this.renderQuiz()}
                {/* <hr /> */}
                {/* <button className="btn btn-link" onClick={e => this.props.history.goBack()}>back</button> */}
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps

    quiz: state.quiz,
})

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ loadQuiz }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(Quiz);