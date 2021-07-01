package gov.keis.openapi.client.crypto.test;

import gov.keis.openapi.client.crypto.EgovARIACryptoService;
import gov.keis.openapi.client.crypto.impl.EgovARIACryptoServiceImpl;
import java.io.PrintStream;
import java.io.UnsupportedEncodingException;

public class CryptoTest
{
  public static void main(String[] args)
  {
    System.out.println("*********************************************");
    System.out.println("CryptoTest Start ");
    
    String schoolID = "U0116";
    String studentID = "1701257";
    
    String password = "WNGXVGIDR0JK75CY4TFRV2VRETJ";
    
    System.out.println("학교코드     value --> " + schoolID);
    System.out.println("학번코드     value --> " + studentID);
    System.out.println("password value --> " + password);
    
    EgovARIACryptoService egovARIACryptoService = new EgovARIACryptoServiceImpl();
    
    String encryptUrlData = "";
    String encryptData = "";
    try
    {
      encryptData = egovARIACryptoService.encrypt(schoolID, password);

      encryptUrlData = egovARIACryptoService.encryptURL(schoolID, password);
      System.out.println("encryptUrlData value --> " + encryptUrlData);
      System.out.println("encryptData    value --> " + encryptData);
    }
    catch (UnsupportedEncodingException e)
    {
      e.printStackTrace();
    }
    String decryptData = "";
    
    decryptData = egovARIACryptoService.decrypt(encryptData, password);
    System.out.println("decryptData value --> " + decryptData);
    
    System.out.println("CryptoTest End ");
    System.out.println("*********************************************");
  }
}
