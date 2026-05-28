public with sharing class ContactController {
    @AuraEnabled
    public static void createCon(String lname, String phone) {
        insert new Contact(LastName = lname, Phone = phone);
    }

    @AuraEnabled
    public static void updateCon(String id, String lname, String phone) {
        update new Contact(Id = id, LastName = lname, Phone = phone);
    }

    @AuraEnabled
    public static void deleteCon(String id) {
        delete new Contact(Id = id);
    }
}