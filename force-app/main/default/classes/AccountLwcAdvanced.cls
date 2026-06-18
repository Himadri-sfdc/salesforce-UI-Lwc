public with sharing class AccountLwcAdvanced {

     @AuraEnabled(cacheable=true)          
     public static List<Account> getAccounts(String searchKey,Integer pageSize,Integer offsetSize){
        return[
            SELECT Id,Name FROM Account
            WHERE Name LIKE : ('%' + searchKey + '%')
            LIMIT : pageSize
            OFFSET : offsetSize
        ];
    }
}
