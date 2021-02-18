import React, { useEffect } from 'react';

const Users = () => {

    useEffect(() => {

    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Users

// import React, { useEffect } from 'react';
// import DataTable from 'react-data-table-component';
// import '../assets/styles/Users.scss';

// const columns = [
//     {
//         name: 'ID',
//         selector: 'id',
//         sortable: true,
//     },
//     {
//         name: 'Nombre',
//         selector: 'name',
//         sortable: true,
//     },
//     {
//         name: 'Username',
//         selector: 'username',
//         sortable: true,
//     },
//     {
//         name: 'Email',
//         selector: 'email',
//         sortable: true,
//     },
//     {
//         name: 'Cellphone',
//         selector: 'phone',
//         sortable: true,
//     },
//     {
//         name: 'Website',
//         selector: 'website',
//         sortable: true,
//     }
// ];

// const optionsPagination = {
//     selectAllRowsItem: true
// }

// const Users = (props) => {

//     useEffect(() => {

//     }, [])

//     return (
//         <div className='container'>
//             <div>                
//                 <div className="inputControlUsers">
//                     <label>Busqueda rapida</label>
//                     <input
//                         className="form-control"
//                         type="text"
//                         placeholder="Buscar..."
//                         name='searcher'
//                         value={query}
//                         onChange={handleChange}
//                     />
//                 </div>               
//             </div>

//             <DataTable
//                 columns={columns}
//                 data={filteredData}
//                 highlightOnHover={true}
//                 pagination
//                 paginationComponentOptions={optionsPagination}
//                 pointerOnHover={true}
//                 fixedHeader
//                 fixedHeaderScrollHeight="480px"
//                 noDataComponent='No se encontraron usuarios'
//                 onRowClicked={handleClick}
//             />
//         </div>
//     )
// }

// export default Users
