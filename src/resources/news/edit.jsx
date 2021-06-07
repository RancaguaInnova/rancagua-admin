import React from "react"
import {
  TextInput,
  DateInput,
  SimpleForm,
  SelectArrayInput,
  Edit,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
} from "react-admin"
const NewsEdit = (props) => (
  <Edit {...props} title="Editando Noticia">
    <SimpleForm>
      <TextInput
        source="title"
        label="Titulo"
        fullWidth={true}
        required={true}
      />
      <TextInput source="subtitle" label="Subtítulo" fullWidth={true} />
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
  </Edit>
)
export default NewsEdit
