public with sharing class ContactController {
    
    @AuraEnabled
    public static void createCon(String lname)
    {
        Contact con = new Contact(

            LastName = lname
        );
        insert con;
    }
}