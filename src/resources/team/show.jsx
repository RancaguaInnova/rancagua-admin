import React from 'react'
import { TextField, DateField, Show, SimpleShowLayout, UrlField } from 'react-admin'

const NewsShow = props => (
  <Show title='Mostrando Noticia' {...props}>
    <SimpleShowLayout>
      <TextField source='title' label='Título' />
      <TextField source='subtitle' label='Subtítulo' />
      <TextField source='body' label='Cuerpo de la noticia' />
      <DateField source='publicationDate' label='Fecha de publicación' />
      <TextField source='tags' label='Tags' />
      <UrlField source='imageUrl' label='Url Imagen' />
      <UrlField source='externalUrl' label='Url Externa' />
      <TextField source='id' />
    </SimpleShowLayout>
  </Show>
)
export default NewsShow
