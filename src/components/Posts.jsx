import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComments, setToogle } from '../actions';
import Card from 'react-bootstrap/Card';
import '../assets/styles/Posts.scss';
import { ListGroup } from 'react-bootstrap';

const Posts = (props) => {

    const { id, title, body, commentsList, toogle, itemActive, handleClick } = props;

    // const handleClick = (e) => {
    //     props.getComments(id)
    //     props.setToogle();
    // }
    
    return (
        <div>
           <Card className='Post-item' style={{ width: '37rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Post # {id}</Card.Subtitle>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>                   
                    <button onClick={(e) => handleClick(id, e)} className="btn btn-primary">Mostrar comentarios</button>                    
                </Card.Body>                          
            </Card>
            {itemActive &&                                         
               <ListGroup>
                    {commentsList.map(comment => 
                    <ListGroup.Item className='col-12' key={comment.id}>
                        <strong>Comment ID:</strong> {comment?.id} <br/>
                        Name : {comment?.name} <br/>
                        Email: {comment?.email} <br/>
                        Body: {comment?.body} <br/>                                            
                    </ListGroup.Item>)  } 
               </ListGroup>  
            }  
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        commentsList: state.commentsList,
        toogle: state.toogle
    }
}

// const mapToDispatchToProps = {    
//     getComments,
//     setToogle
// }

export default connect (mapStateToProps, null) (Posts);