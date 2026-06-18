import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountControllerWire.getAccounts';

const COLUMNS = [
    {
        label: 'Name',
        fieldName: 'Name',
        sortable: true
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
        sortable: true
    },
    {
        label: 'Industry',
        fieldName: 'Industry',
        sortable: true
    }
];

export default class WireWithSorting extends LightningElement {

    columns = COLUMNS;
    accList = [];

    sortedBy;
    sortDirection = 'asc';

    @wire(getAccounts)
    wiredAccounts({ data, error }) {
        if (data) {
            this.accList = data;
        } else if (error) {
            console.error('Error:', error);
        }
    }

    handleSort(event) {
        const { fieldName, sortDirection } = event.detail;

        this.sortedBy = fieldName;
        this.sortDirection = sortDirection;

        const reverse = sortDirection === 'asc' ? 1 : -1;

        this.accList = [...this.accList].sort((a, b) => {
            const val1 = a[fieldName] || '';
            const val2 = b[fieldName] || '';

            return reverse * ((val1 > val2) - (val1 < val2));
        });
    }
}