import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query }  from 'react-apollo';
import Card from './CardComponent';

const ALLMOVIES = gql`
    query{
        allMovies{
            _id,
            name,
            director
        }
    }
`

export default class BrowseComponent extends Component {

  render() {
    return (
        <div className="container">
            <div className="row">

                <Query query={ALLMOVIES}>
                    {
                        ({data, error, loading}) => {
                            if(error) return <h4 className='center-align white-text'>{"Hubo un Error !! :("}</h4>
                            if (loading) return <h4 className='center-align white-text'>Cargando ...</h4>

                            const movies = data.allMovies.map( (movie,index) => (
                                <div className="col s4" key={index}>
                                    <Card 
                                    title = {movie.name}
                                    director = {movie.director}
                                    />
                                </div>
                            ))   
                            return(
                                <React.Fragment>
                                    {movies}
                                </React.Fragment>
                            )
                        }
                    }
                </Query>
            </div>
        </div>
    )
  }
}