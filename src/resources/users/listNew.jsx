

import React, { useState, useEffect } from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ApiUrl from "../../provider/url"
import { Button, Spinner } from 'react-bootstrap'

const Listado = () => {

  const [users, setusers] = useState([])
  const [loading, setLoading] = useState([])

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
      const request = new Request(ApiUrl + '/users/listUsers', {
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
        setLoading(false)
        return []
      }
    } catch (error) {
      setLoading(false)
      return []
    }


  }

  useEffect(() => {
    async function getUsers() {
      setLoading(true)
      try {


        let data = await GetUsersList()

        let dataform = data.map(function (item, i) {
          let user = {
            name: item && item.name ? item.name : '',
            identifier: item && item.identifier ? item.identifier : '',
            lastName: item && item.lastName ? item.lastName : '',
            id: item.id,
            email: item && item.email ? item.email : ''
          }
          setLoading(false)
          return user
        })

        setusers(dataform);
      } catch{
        setLoading(false)
      }
    }

    getUsers()
  }, []);


  return (

    <div className="container">
      <div className="hdr row">

        <div className="col-sm-12 btn ">

          Busqueda de Usuarios

                         </div>

      </div>

      <div className="container" style={{ marginTop: 50 }}>

        {loading ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>

        ) : (

            <BootstrapTable

              striped

              hover

              keyField='id'
              data={users}

              columns={columns}

              filter={filterFactory()}

              pagination={paginationFactory(options)} />


          )}

      </div>
    </div>

  )



}


export default Listado 
