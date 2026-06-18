
public with sharing class AccountController {

    @AuraEnabled
    public static void createAccount(String name,String phone){
        insert new Account(Name = name,Phone = phone);
    }
    @AuraEnabled
    public static void updateAccount(String id,String name,String phone){
        update new Account(Id = id,Name = name,Phone = phone);
    }
    @AuraEnabled
    public static void deleteAccount(String id){
        delete new Account(Id = id);
    }
}