public with sharing class ContactController {
<<<<<<< HEAD
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
=======
    
@AuraEnabled
public static void createCon(String lname, String phone) 
{
    Contact con = new Contact(
        LastName = lname,
        Phone = phone 
    );
    insert con;
}
>>>>>>> 711d42c3ac9c553b989693cbedf921986e50b710
}