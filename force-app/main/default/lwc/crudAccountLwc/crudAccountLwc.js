import { LightningElement} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import createAccount from '@salesforce/apex/AccountController.createAccount';
import updateAccount from '@salesforce/apex/AccountController.updateAccount';
import deleteAccount from '@salesforce/apex/AccountController.deleteAccount';
export default class CrudAccountLwc extends LightningElement {
    
    accountId = ''; name = ''; phone = '';
    handleId(event) {this.accountId = event.target.value};
    handleName(event) {this.name = event.target.value};
    handlePhone(event) {this.phone = event.target.value};

    createAccount(){
        createAccount({name:this.name, phone : this.phone})
        .then(()=>{this.showToast('Success','Account Created Successfully','success');})
        .catch(error=>{this.showToast('Error',error.message,'error');})
    }
    updateAccount(){
        updateAccount({id:this.accountId, name:this.name, phone : this.phone})
        .then(()=>{this.showToast('Success','Account Updated Successfully','success');})
        .catch(error=>{this.showToast('Error',error.message,'error');})
    }
    deleteAccount(){
        deleteAccount({id:this.accountId})
        .then(()=>{this.showToast('Success','Account Deleted Successfully','success');})
        .catch(error=>{this.showToast('Error',error.message,'error');})
    }
    
    showToast(title, message, variant) {this.dispatchEvent(new ShowToastEvent({title,message,variant}));

}
}