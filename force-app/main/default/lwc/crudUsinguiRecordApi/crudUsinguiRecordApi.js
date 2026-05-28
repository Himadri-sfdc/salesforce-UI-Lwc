
import { LightningElement, api } from 'lwc';

import {
    createRecord,
    updateRecord,
    deleteRecord
} from 'lightning/uiRecordApi';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ContactCrud extends LightningElement {

    @api recordId;

    name = '';

    handleName(event) {
        this.name = event.target.value;
    }

    get fields() {
        return {
            Id: this.recordId,
            LastName: this.name
        };
    }

    createCon() {

        createRecord({
            apiName: CONTACT_OBJECT.objectApiName,
            fields: this.fields
        })
        .then(result => {
            this.recordId = result.id;
            console.log('Created');
        })
        .catch(console.error);
    }

    updateCon() {

        updateRecord({
            fields: this.fields
        })
        .then(() => {
            console.log('Updated');
        })
        .catch(console.error);
    }

    deleteCon() {

        deleteRecord(this.recordId)
            .then(() => {
                console.log('Deleted');
            })
            .catch(console.error);
    }
}