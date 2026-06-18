public with sharing class AccountControllerWire {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Id, Name, Phone, Industry
            FROM Account
            LIMIT 15
        ];
    }
}
