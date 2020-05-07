import React from 'react'
import { TextInput, DateInput, SimpleForm } from 'react-admin'
import Edit from '../../components/actions/Edit'
const validateNewsEdit = values => {
  const errors = {}
  if (!values.title) {
    errors.title = ['El titulo de la noticia es requerido']
  }
  if (!values.subtitle) {
    errors.subtitle = ['El sub titulo de la noticia es requerido']
  }
  if (!values.publicationDate) {
    errors.publicationDate = ['La fecha de publicación es requerida']
  }
  if (!values.body) {
    errors.body = ['El cuerpo de la noticia es requerido']
  }
  if (!values.imageUrl) {
    errors.imageUrl = ['La url de la imagen es requerida']
  }
  return errors
}
const NewsEdit = props => (
  <Edit {...props} title='Editando Noticia'>
    <SimpleForm className='simpleForm' validate={validateNewsEdit}>
      <TextInput source='title' label='Título' />
      <TextInput source='subtitle' label='Subtítulo' />
      <DateInput source='publicationDate' label='Fecha de publicación' />
      <TextInput source='body' label='Cuerpo' />
      <TextInput source='tags' label='Tags' />
      <TextInput source='imageUrl' label='Url Imagen' type='url' />
      <TextInput source='externalUrl' label='Url Externa' type='url' />
    </SimpleForm>
  </Edit>
)
export default NewsEdit
