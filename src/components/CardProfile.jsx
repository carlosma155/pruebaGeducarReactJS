import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import profilePicture from '../assets/static/profilePicture.jpg';
import '../assets/styles/CardProfile.scss';


const CardProfile = ({ user }) => {

    const { id, name, email, username, phone, address, website, company } = user;
    
    return (
        <div className='Card-item'>
            <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src={profilePicture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span>Id: {id}</span><br/>
                        <span>Email: {email}</span><br/>
                        <span>Nombre de usuario: {username}</span><br/>
                        <span>Telefono: {phone}</span><br/>
                        <span>Dirección: {address?.street} {' '} {address?.suite}</span><br/>
                        <span>Codigo postal: {address?.zipcode}</span><br/>
                        <span>Sitio web: {website}</span><br/>
                        <span>Empresa: {company?.name} </span>
                    </Card.Text>
                    <Link className='btn btn-primary' to='/users'>Regresar</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardProfile
