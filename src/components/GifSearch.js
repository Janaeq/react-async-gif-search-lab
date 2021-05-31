import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""
    }

    handleChange = e => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onHandleSubmit(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        )
    }
}