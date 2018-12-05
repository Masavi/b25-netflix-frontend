import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_MOVIES = gql`
    {
        allMovies {
            _id
            name
            director
        }
    }
`

class BrowseComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <Query query={GET_MOVIES}>
                {
                    ({loading, error, data}) => {
                        if (loading) return console.log("Loading...");
                        if (error) return console.log(`Error! ${error}`);
                        return (
                            <div>
                                <h1>Catálogo</h1>
                                {console.log(data)}
                            </div>
                        );
                    }
                }
            </Query>
        );
    }
}
    
export default BrowseComponent;
