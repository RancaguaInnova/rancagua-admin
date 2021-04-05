import React from 'react'
import { TextField, DateField, Show, SimpleShowLayout, UrlField,ArrayField,Datagrid } from 'react-admin'
import ImageViewerField from '../../helpers/fields/ImageViewerField'
import PdfFileField from '../../helpers/fields/PdfFileField'

const ProjectShow = props => (
  <Show title='Mostrando Noticia' {...props}>
    <SimpleShowLayout>
      <TextField source='title' label='Título' />
      <TextField source='subtitle' label='Subtítulo' />
      <TextField source='body' label='Cuerpo de la noticia' />
      <DateField source='publicationDate' label='Fecha de publicación' />
      <ImageViewerField source='images' label='Imagenes'/>
      <ArrayField source='documents' label='Documentos'>
        <Datagrid>
          <PdfFileField source='src' label='Listado de documentos' />
        </Datagrid>
      </ArrayField>

      <UrlField source='externalUrl' label='Url Externa' />
      <TextField source='id' />
    </SimpleShowLayout>
  </Show>
)
export default ProjectShow
