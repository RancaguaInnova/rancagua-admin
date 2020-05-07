import React from 'react'
import { Edit as ReactAdminEdit } from 'react-admin'
import EditActions from './EditActions'

const Edit = ReactAdminEdit

Edit.defaultProps = {
  undoable: false,
  actions: <EditActions />
}

export default Edit
