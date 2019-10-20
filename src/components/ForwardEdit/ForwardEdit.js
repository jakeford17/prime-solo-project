import React, { Component } from 'react';
import { connect } from 'react-redux';

class ForwardEdit extends Component {
    // Setting up a state that will be eventuallt be sent to PUT request in Redux Store
    // state = {
    //     movieEdit: {
    //         newTitle: '',
    //         newDescription: '',
    //         id: this.props.match.params.id
    //     }
    // }

    // // Changes the values of movie's title/description base on user input
    // handleChange = (event, propertyName) => {
    //     this.setState({
    //         movieEdit: {
    //             ...this.state.movieEdit,
    //             [propertyName]: event.target.value,
    //         }
    //     })
    // }

    // Function that sends the user back to this movie's Details page
    // Will eventually run whether the user clicks Save or Back
    handleDetails = () => {
        console.log("HANDLE DETAILS")
        // this.props.history.push(`/details/${this.props.match.params.id}`)
    }

    // Dipatches state with new movie details to Redux Store in order to make PUT
    handleSave = () => {
        console.log("HANDLE SAVE")
        // this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movieEdit });
        // this.handleDetails();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDetails}>Cancel</button><br />
                <button onClick={this.handleSave}>Save Changes</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    forwardProfile: state.forwardProfile
})

export default connect(mapStateToProps)(ForwardEdit);