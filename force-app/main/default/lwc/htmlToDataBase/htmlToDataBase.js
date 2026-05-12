import { LightningElement } from 'lwc';
import createCon from '@salesforce/apex/ContactController.createCon';
export default class HtmlToDataBase extends LightningElement {

    name = '';
    handleName(event){
        this.name = event.target.value;
    }
    saveContact(){
        createCon({lname : this.name});
    }
}