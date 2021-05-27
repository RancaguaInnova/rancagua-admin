import React from 'react'
import { TextField, DateField, Show, SimpleShowLayout, UrlField } from 'react-admin'

const HistoryShow = props => (
  <Show title='Mostrando Historia' {...props}>
    <SimpleShowLayout>
      <TextField source='date' label='Título' />
      <TextField source='cardTitle' label='Título' />
      <TextField source='cardSubtitle' label='Subtítulo' />
      <TextField source='cardDetailedText' label='Detalle' />

    </SimpleShowLayout>
  </Show>
)
export default HistoryShow
