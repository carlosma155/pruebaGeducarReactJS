import React from 'react';
import { Link } from 'react-router-dom';
import homePicture from '../assets/static/homePicture.jpg';
import '../assets/styles/Home.scss';

const Home = () => {
    return (
        <div id='Home'>
            <div id='picture'>
                <img src={homePicture} alt='Home picture' />
            </div>
            <div className='overlay'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 offset-md-1">
                            <p>Haciendo click en el siguiente boton <br></br>podras obtener la lista de usuarios, <br></br>que estas esperando?</p>
                            <Link className='btn btn-primary' to='/users'>Ver usuarios</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
