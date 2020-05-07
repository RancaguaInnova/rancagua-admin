import React from 'react'
import { TextInput, DateInput, SimpleForm, Create } from 'react-admin'

const NewsCreate = props => (<Create title='Crear Noticias' {...props}>
  <SimpleForm >
    <TextInput source='title' label='Titulo' />
    <TextInput source='subtitle' label='Subtítulo' />
    <TextInput source='body' label='Cuerpo' />
    <DateInput source='publicationDate' label='Fecha de publicación' />
    <TextInput source='tags' label='Tags' />
    <TextInput source='imageUrl' label='Image Url' type='url' />
    <TextInput source='externalUrl' label='External Url ' type='url' />
  </SimpleForm>
</Create>)
export default NewsCreate
