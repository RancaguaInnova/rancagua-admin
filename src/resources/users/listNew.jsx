

import React, { useState, useEffect } from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ApiUrl from "../../provider/url"

const Listado = () => {

  const [users, setusers] = useState([])
  const [columns, setcolumns] = useState([
    {
      dataField: 'id',
      text: 'id',
    },
    {
      dataField: 'identifier',
      text: 'Rut',
      filter: textFilter()
    },

    {
      dataField: 'name',
      text: 'Nombre',
      filter: textFilter()

    },
    {
      dataField: 'lastName',
      text: 'Apellido',
      filter: textFilter()

    },
    {
      dataField: 'email',
      text: 'Email',
      filter: textFilter()

    },
  ])
  const options = {

    page: 2,

    sizePerPageList: [{

      text: '5', value: 5

    }, {

      text: '10', value: 10

    }, 
    {

      text: '50', value: 50

    },
    {

      text: '100', value: 100

    },
    {

      text: '200', value: 200

    },
    {

      text: 'All', value: users.length

    }],

    sizePerPage: 50,
    pageStartIndex: 0,

    paginationSize: 3,

    prePage: 'Prev',

    nextPage: 'Next',

    firstPage: 'First',

    lastPage: 'Last',

    paginationPosition: 'top'

  };

  const GetUsersList = async () => {
    try {
      const request = new Request(ApiUrl + '/users', {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json', 'X-Origin': 'Admin' })
      })

      const response = await fetch(request)
      if (response.status === 200) {
        try {
          return await response.json()
        } catch (error) {
          return []
        }
      } else {
        return []
      }
    } catch (error) {
      return []
    }


  }

  useEffect(() => {
    async function getUsers() {
      let data = await GetUsersList()

      let dataform = data.map(function (item, i) {
        let user = {
          name: item &&  item.profile && item.profile.firstName ?item.profile.firstName:'' ,
          identifier: item &&  item.profile &&  item.profile.identifier ? item.profile.identifier:'' ,
          lastName:item &&  item.profile && item.profile.lastName ? item.profile.lastName:'',
          id:item._id,
          email:item && item.emails && item.emails[0] && item.emails[0].address ? item.emails[0].address:''
        }

        return user
      })

      console.log(dataform)
      setusers(dataform);
    }

    getUsers()
  }, []);


  //   componentDidMount() {    

  //     axios.get('http://localhost:51760/Api/Emp/employee').then(response => {    

  //       console.log(response.data);    

  //       this.setState({    

  //             products: response.data    

  //       });    

  //     });    

  //   }   



  return (

    <div className="container">
      <div className="hdr row">

        <div className="col-sm-12 btn btn-info">

          Busqueda de Usuarios

                         </div>

      </div>

      <div className="container" style={{ marginTop: 50 }}>

        <BootstrapTable

          striped

          hover

          keyField='id'
          data={users}

          columns={columns}

          filter={filterFactory()}

          pagination={paginationFactory(options)} />

      </div>

    </div>

  )



}


export default Listado 
