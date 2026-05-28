import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createCon from '@salesforce/apex/ContactController.createCon';

export default class HtmlToDataBase extends LightningElement {

    name = '';
    phone = '';

    handleName(event){
        this.name = event.target.value;
    }

    handlePhone(event){
    this.phone = event.target.value;
}

    saveContact(){
        createCon({lname : this.name,phone : this.phone})
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact saved successfully!',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }

}