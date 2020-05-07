import React from 'react'
import { CardActions, ListButton, ShowButton } from 'react-admin'

const EditActions = ({ basePath, className, data, hasList, hasShow, resource }) => (
  <CardActions className={className}>
    {hasList && <ListButton basePath={basePath} />}
    {hasShow && <ShowButton basePath={basePath} record={data} />}
  </CardActions>
)
export default EditActions
