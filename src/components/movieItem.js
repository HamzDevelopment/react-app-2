import React, { Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class MovieItem extends Component
{
    render(){
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.movie.Poster} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.Title}</Card.Title>
                        <Card.Text>
                            {this.props.movie.Year}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>   
        );
    }
}
export default MovieItem;