
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createCon  from '@salesforce/apex/ContactController.createCon';
import updateCon  from '@salesforce/apex/ContactController.updateCon';
import deleteCon  from '@salesforce/apex/ContactController.deleteCon';

export default class HtmlToDataBase extends LightningElement {
    contactId = '';
    name      = '';
    phone     = '';

    handleId(e)    { this.contactId = e.target.value; }
    handleName(e)  { this.name      = e.target.value; }
    handlePhone(e) { this.phone     = e.target.value; }

    // ── helper ──────────────────────────────────────────
    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }

    // ── CREATE ──────────────────────────────────────────
    async saveContact() {
        try {
            await createCon({ lname: this.name, phone: this.phone });
            this.showToast('Success', 'Contact saved!', 'success');
        } catch (e) {
            this.showToast('Error', e.body.message, 'error');
        }
    }

    // ── UPDATE ──────────────────────────────────────────
    async updateContact() {
        try {
            await updateCon({ id: this.contactId, lname: this.name, phone: this.phone });
            this.showToast('Success', 'Contact updated!', 'success');
        } catch (e) {
            this.showToast('Error', e.body.message, 'error');
        }
    }

    // ── DELETE ──────────────────────────────────────────
    async deleteContact() {
        try {
            await deleteCon({ id: this.contactId });
            this.showToast('Success', 'Contact deleted!', 'success');
            this.contactId = '';
        } catch (e) {
            this.showToast('Error', e.body.message, 'error');
        }
    }
}