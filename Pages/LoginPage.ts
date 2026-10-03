import {Locator, Page} from '@playwright/test'



export class LoginPage {

    readonly page:Page;
    readonly Loginbtn:Locator;
    readonly Uname:Locator;
    readonly pswd:Locator;
    readonly submit:Locator;

    constructor(page:Page)
        {
            this.page =page;
            this.Loginbtn = page.getByRole('link',{name: 'Log in'});
            this.Uname= page.locator("#loginusername");
            this.pswd= page.locator("#loginpassword")
            this.submit= page.getByRole('button',{name: 'Log in'});
        }
    

   async  Login( Username:string, password:string){
    await this.page.goto("https://www.demoblaze.com/");
    await this.Loginbtn.click();
    await this.Uname.fill(Username);
    await this.pswd.fill(password);
    await this.submit.click();
    }


}