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
        // console.log("in books",this.state.books)
        return(
            
            <div className='books'>
                {this.state.books.map((item, index)=>{
                    const {id,name,isbn}=item;
                    return(
                        <Link className='link' to={{pathname:`book-detail/${id}`}}>
                            <Bookfront data={item}/>
                        </Link>
                    )
                })}
            </div>
        )
    }

}

export default Books