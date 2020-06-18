import React from 'react'
import { TextInput, DateInput, SimpleForm, Create } from 'react-admin'
import EmailEditor from 'react-email-editor'


const exportHtml = () => {
  this.editor.exportHtml(data => {
    const { design, html } = data
    console.log('exportHtml', html)
  })
}
const MailsCreate = props => (<Create title='Crear campaña de mail' {...props}>
  <SimpleForm >
    <TextInput source='subject' label='Asunto' />
    <TextInput source='gender' label='Genero' />
    <TextInput source='ages' label='Edad' />
    <EmailEditor
        ref={editor => this.editor = editor}
      />
  </SimpleForm>
</Create>)
export default MailsCreate
