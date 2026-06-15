public with sharing class AccountLwcAdvanced {
    
     public static List<Account> getAccounts(String searchKey,Integer limitsize,Integer offsetSize){
        return[
            SELECT Id,Name FROM Account
            WHERE Name LIKE : ('%' + searchKey + '%')
            LIMIT : limitsize
            OFFSET : offsetsize
        ];
    }
}
