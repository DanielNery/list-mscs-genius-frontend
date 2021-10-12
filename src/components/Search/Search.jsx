import './Search.css';
import React, { Component } from "react";
import axios from 'axios';

const baseUrl = 'http://52.90.187.143'

const initialState = {
    search: '',
    list: []
}

export default class Search extends Component {

    /* Refatorar Separando em outros componentes  */

    state = { ...initialState }

    searchTopMusics(song){

        const artist_id = song.primary_artist.id
        const artist_name = song.primary_artist.name

        const method = 'get'
        const url = `${baseUrl}/artist/${artist_id}/${artist_name}`

        axios[method](url)
        .then(resp => {
            const list = resp.data.response.songs
            this.setState({ search:  initialState.search, list})
        })

    }

    searchArtist(event){
        const search = this.state.search
        const method = 'get'
        const url = `${baseUrl}/search/${search}`
        
        axios[method](url)
        .then(resp => {
            const list = resp.data.response.hits.map(song => {
                return song.result
            })
            this.setState({ search:  initialState.search, list})
        })
    }

    updateState(event){
        this.setState({ search: event.target.value })
    }

    renderRows(){
        return this.state.list.map(song => {
            return (
                <tr key={song.id} className="line-row" onClick={() => this.searchTopMusics(song)} >
                    <td ><img src={song.header_image_thumbnail_url} alt="Music Thumb" /></td>
                    <td >{song.title_with_featured}</td>
                    <td >{song.primary_artist.name}</td>
                    <td >{song.stats.pageviews}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>

                <div className="form p-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="mb-2">Nome</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.search}
                                    onChange={e => this.updateState(e)}
                                    placeholder="Digite um nome de um(a) artista ou banda..."
                                />
                            </div>
                        </div>
                    </div>
                    
                    <hr />
        
                    <div className="row">
                        <div className="col-12 d-flex-justify-contet-end">
                            <button 
                                className="btn btn-outline-dark"
                                onClick={e => this.searchArtist(e)}
                            >
                                Procurar
                            </button>
                        </div>
                    </div>

                </div>

                <div className="table-responsive m-5">

                    <table className="table table-light align-middle">
                        <thead className="thead-dark">
                            <tr>
                                <th>Imagem</th>
                                <th>Nome</th>
                                <th>Artistas</th>
                                <th>Visualizações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>

                </div>

            </div>
            
            
        )    
    }

}
