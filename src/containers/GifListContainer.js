import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    handleSubmit = (query) => {
        
        let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=zn3eqvCbF6FqW5VBH1n9CParO8Rz8U9g`
        fetch(url)
        .then(r => r.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map(gif => gif.images.original.url)
            })
        })
    }
    render() { 
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch onHandleSubmit={this.handleSubmit} />
            </div>
        )
    }

    componentDidMount() {
        this.handleSubmit()
    }
} 