import React from 'react';
import { List, Edit, Create, Filter, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

var faker = require('faker');


const PulseFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="uid" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PulseList = (props) => (
    <List {...props} filters={<PulseFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="User" source="uid" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="time" />
            <TextField source="value" />
            <EditButton />
        </Datagrid>
    </List>
);

const PulseTitle = ({ record }) => {
    return <span>Pulse {record ? `"${record.title}"` : ''}</span>;
};

export const PulseEdit = (props) => (
    <Edit title={<PulseTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="User" source="uid" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="time" />
            <TextInput source="value" />
        </SimpleForm>
    </Edit>
);

export const PulseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="uid" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <TextInput source="time" />
            <TextInput source="value" />



        </SimpleForm>
    </Create>
);
