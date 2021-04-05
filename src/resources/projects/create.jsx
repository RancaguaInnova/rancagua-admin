import React from 'react'
import { TextInput, DateInput, SimpleForm, Create,SelectArrayInput, required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  regex,
  email,
  choices,FileInput,ImageInput,ImageField,FileField
} from 'react-admin'
const validateTitle = [required(), minLength(2), maxLength(15)];

const ProjectCreate = props => (<Create title='Crear Proyectos' {...props}>
  <SimpleForm >
    <TextInput source='title' label='Titulo' fullWidth={true}   validate={validateTitle} />
    <TextInput source='subtitle' label='Subtítulo'  fullWidth={true} required/>
    <TextInput source='description' label='descripcion' fullWidth={true}  multiline={true}/>
    <DateInput source='publicationDate' label='Fecha de publicación' />
    <ImageInput source='images' label='Imagenes' accept='image/*'>
      <ImageField source='src' title='title' />
    </ImageInput>
    <FileInput source='documents' label='Documentos' accept='application/pdf' multiple>
      <FileField source='src' title='title' />
    </FileInput>
    <TextInput source='externalUrl' label='External Url ' type='url' />
  </SimpleForm>
</Create>)
export default ProjectCreate
