import React from 'react'
import { TextInput, Edit, BooleanInput, ArrayInput, SimpleFormIterator, FormTab, TabbedForm } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles';

export const styles = {
    name: { display: 'inline-block', width: 544 },
    description: { display: 'inline-block', marginLeft: 32 },
    input: { width: 544 },
    address: { maxWidth: 544 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const useStyles = makeStyles(styles);

const ApplicationEdit = props => {
    const classes = useStyles();
    return (
        <Edit {...props}>
            <TabbedForm>
                <FormTab label="Información Aplicación">
                    <TextInput source="name" label="Nombre" formClassName={classes.name} fullWidth={true}></TextInput>
                    <TextInput source="description" label="Descripción" formClassName={classes.input} fullWidth={true} />
                    <TextInput source="applicationURL" label="Url de aplicación" formClassName={classes.input} fullWidth={true} />
                    <BooleanInput source="approved" label="Aplicación aprovada" formClassName="TextInput" fullWidth={true} />
                    <BooleanInput source="isPrivate" label="Es Privada" formClassName="TextInput" fullWidth={true} />
                    <TextInput source="appToken" label="Token Aplicación" formClassName={classes.input} fullWidth={true} />
                </FormTab>
                <FormTab label="Desarrollador">
                    <TextInput source="developerInfo.address.streetName" label="Calle" formClassName={classes.input} fullWidth={true} />
                    <TextInput source="developerInfo.address.streetNumber" label="Numero" />
                    <TextInput source="developerInfo.address.formatted_address" label="Google Dirección" formClassName={classes.input} fullWidth={true} />
                    <TextInput source="developerInfo.address.place_id" label="Google Lugar Id" formClassName={classes.input} fullWidth={true} />
                    <TextInput source="developerInfo.address.latitude" label="Latitud" formClassName={classes.input} fullWidth={true} />
                    <TextInput source="developerInfo.address.longitude" label="Longitud" formClassName={classes.input} fullWidth={true} />

                    <ArrayInput source="userFields" label="Agregar Campos de usuario usados por la aplicación" fullWidth={true} formClassName={classes.input}>
                        <SimpleFormIterator>
                            <TextInput label='Campo de usuario' />
                        </SimpleFormIterator>
                    </ArrayInput>

                </FormTab>
                <FormTab label="Aplicación Movil">

                    <BooleanInput source="appMovil" label="Es aplicación movil" formClassName="TextInput" />
                    <TextInput source="appName" label="Nombre de la aplicación" formClassName="TextInput" />
                    <TextInput source="appStoreId" label="Id App Strore" formClassName="TextInput"></TextInput>
                    <TextInput source="appStoreLocale" label="Región App Store" formClassName="TextInput" />
                    <TextInput source="playStoreId" label="Id Play Store" formClassName="TextInput" ></TextInput>
                    <TextInput source="urlApp" label="Url App" formClassName="TextInput" fullWidth={true} />
                </FormTab>
            </TabbedForm>
        </Edit>
    )

}
export default ApplicationEdit

/*
<TabbedForm>
    <FormTab label="resources.customers.tabs.identity">
        <TextInput
            autoFocus
            source="first_name"
            formClassName={classes.first_name}
        />
        <TextInput
            source="last_name"
            formClassName={classes.last_name}
        />
        <TextInput
            type="email"
            source="email"
            validation={{ email: true }}
            fullWidth={true}
            formClassName={classes.email}
        />
        <DateInput source="birthday" />
    </FormTab>
    <FormTab
        label="resources.customers.tabs.address"
        path="address"
    >
        <TextInput
            source="address"
            formClassName={classes.address}
            multiline={true}
            fullWidth={true}
        />
        <TextInput
            source="zipcode"
            formClassName={classes.zipcode}
        />
        <TextInput source="city" formClassName={classes.city} />
    </FormTab>
</TabbedForm>
*/