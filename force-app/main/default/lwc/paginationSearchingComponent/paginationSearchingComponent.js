import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAccounts from '@salesforce/apex/AccountLwcAdvanced.getAccounts';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    {
        type: 'action',
        typeAttributes: {
            rowActions: [
                { label: 'View', name: 'view' },
                { label: 'Edit', name: 'edit' }
            ]
        }
    }
];

export default class AccountList extends NavigationMixin(LightningElement) {

    columns = COLUMNS;

    @track accounts = [];

    searchKey = '';
    pageSize = 5;
    pageNumber = 1;

    connectedCallback() {
        this.loadAccounts();
    }

    handleSearch(event) {
        this.searchKey = event.target.value;
        this.pageNumber = 1;
        this.loadAccounts();
    }

    loadAccounts() {
        getAccounts({
            searchKey: this.searchKey,
            pageSize: this.pageSize,
            offsetSize: (this.pageNumber - 1) * this.pageSize
        })
        .then(result => {
            this.accounts = result;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    handleNext() {
        this.pageNumber++;
        this.loadAccounts();
    }

    handlePrevious() {
        if (this.pageNumber > 1) {
            this.pageNumber--;
            this.loadAccounts();
        }
    }

    handleRowAction(event) {

        const actionName = event.detail.action.name;
        const row = event.detail.row;

        switch (actionName) {

            case 'view':
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        objectApiName: 'Account',
                        actionName: 'view'
                    }
                });
                break;

            case 'edit':
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        objectApiName: 'Account',
                        actionName: 'edit'
                    }
                });
                break;

            default:
                break;
        }
    }
}