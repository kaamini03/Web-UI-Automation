import  test from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import testdata from '../../data/testdata.json'

test("Login TC1" ,async({page})=>{

   const LoginPageobj =new LoginPage(page);    
   await LoginPageobj.Login(testdata.users[0].Username,testdata.users[0].password);

})
