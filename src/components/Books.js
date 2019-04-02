import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookfront from './Bookfront';
import books from '../books';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: books
        }
    }

    render(){
        return(
            <div>
                {this.state.books.map((item, index)=>{
                    const {id,name,isbn}=item;
                    return(
                        <Link to={{pathname:`book-detail/${id}/${name}`}} key={isbn}>
                            <Bookfront data={item}/>
                        </Link>
                    )
                })}
            </div>
        )
    }

}

export default Books