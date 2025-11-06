import{Page} from '@playwright/test'

export class GooglePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
    
    async navegar(){
        await this.page.goto('https://www.google.com');
    }

    async buscar(texto: string){
       await this.page.fill('textarea[name="q"]', texto);
       await this.page.keyboard.press('Enter');
    }
}


