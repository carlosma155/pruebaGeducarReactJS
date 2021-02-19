import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import { useHistory } from 'react-router';
import { getUsers } from '../actions';
import '../assets/styles/Users.scss';

const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Nombre',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Username',
        selector: 'username',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Cellphone',
        selector: 'phone',
        sortable: true,
    },
    {
        name: 'Website',
        selector: 'website',
        sortable: true,
    }
];

const optionsPagination = {
    rowsPerPageText: 'Filas por Pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'todo'
}

const Users = (props) => {

    const { usersList } = props;

    useEffect(() => {
        props.getUsers()
    }, [])

    const history = useHistory()
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const filteredData = usersList && usersList.filter(item => `${item.name} ${item.username} ${item.email}`.toLowerCase().includes(query.toLowerCase()))

    const handleClick = (row) => {
        history.push(`/users/${row.id}`)
    }   

    return (
        
        <div className='ControlUsers_container'>
            <div>                
                <div className="inputControlUsers">
                    <label>Busqueda rapida</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Buscar..."
                        name='searcher'
                        value={query}
                        onChange={handleChange}
                    />
                </div>               
            </div>            
            
            <DataTable
                columns={columns}
                data={filteredData}
                highlightOnHover={true}
                pagination
                paginationComponentOptions={optionsPagination}
                pointerOnHover={true}
                fixedHeader
                fixedHeaderScrollHeight="480px"
                noDataComponent='No se encontraron usuarios'
                onRowClicked={handleClick}
            />
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList
    }
}

const mapToDispatchToProps = {
    getUsers    
}

export default connect(mapStateToProps, mapToDispatchToProps) (Users);
