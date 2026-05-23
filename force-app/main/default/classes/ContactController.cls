public with sharing class ContactController {
    
@AuraEnabled
public static void createCon(String lname, String phone) 
{
    Contact con = new Contact(
        LastName = lname,
        Phone = phone 
    );
    insert con;
}
}