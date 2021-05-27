import React from "react";
import {
  TextInput,
  DateInput,
  SimpleForm,
  Edit,
  ImageInput,
  ImageField,
  required,
  maxLength,
  minLength,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const validateTitle = [required(), minLength(2), maxLength(200)];
const validateCardSubtitle = [required(), minLength(2), maxLength(200)];
const validateCardDetailedText = [required(), minLength(2), maxLength(300)];

const HistoryEdit = (props) => (
  <Edit {...props} title="Editando Historia">
    <SimpleForm>
      <DateInput source="date" label="Fecha" />
      <TextInput
        source="cardTitle"
        label="Titulo"
        fullWidth={true}
        validate={validateTitle}
      />
      <ImageInput source="media" label="Imagenes" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <RichTextInput
        source="cardSubtitle"
        label="Subtitulo"
        fullWidth={true}
        multiline={true}
        validate={validateCardSubtitle}
      />
      <RichTextInput
        source="cardDetailedText"
        label="Detalle"
        validate={validateCardDetailedText}
        fullWidth={true}
        multiline={true}
      />
    </SimpleForm>
  </Edit>
);
export default HistoryEdit;
