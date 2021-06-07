import React from "react"
import {
  TextInput,
  DateInput,
  SimpleForm,
  Create,
  SelectArrayInput,
  required,
  minLength,
  maxLength,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
} from "react-admin"
const validateTitle = [required(), minLength(2), maxLength(15)]

const NewsCreate = (props) => (
  <Create title="Crear Noticias" {...props}>
    <SimpleForm>
      <TextInput
        source="title"
        label="Titulo"
        fullWidth={true}
        validate={validateTitle}
      />
      <TextInput
        source="subtitle"
        label="Subtítulo"
        fullWidth={true}
        required
      />
      <TextInput
        source="description"
        label="descripcion"
        fullWidth={true}
        multiline={true}
      />
      <DateInput source="publicationDate" label="Fecha de publicación" />
      <SelectArrayInput
        label="Dominios"
        source="domain"
        fullWidth={true}
        choices={[
          { id: "cdir", name: "CDIR" },
          { id: "rancagua", name: "Rancagua Cl" },
        ]}
      />
      <ImageInput source="images" label="Imagenes" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <FileInput
        source="documents"
        label="Documentos"
        accept="application/pdf"
        multiple
      >
        <FileField source="src" title="title" />
      </FileInput>
      <TextInput source="externalUrl" label="External Url " type="url" />
    </SimpleForm>
  </Create>
)
export default NewsCreate
