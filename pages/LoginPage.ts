// pages/LoginPage.ts

import { type Page } from '@playwright/test'; // Importamos el tipo Page

export class LoginPage {
  // 1. Declaramos la variable 'page' de tipo Page para usarla en la clase.
  readonly page: Page; 

  // 2. Definimos los localizadores. 
  // ¡Playwright tiene excelentes locators! Usamos getByRole o getByPlaceholder.
  readonly usernameInput = this.page.getByPlaceholder('Username'); 
  readonly passwordInput = this.page.getByPlaceholder('Password');
  readonly loginButton = this.page.getByRole('button', { name: 'Log In' }); 
  
  // 3. El constructor recibe la instancia de la página desde la prueba.
  constructor(page: Page) {
    this.page = page;
  }

  // 4. Definimos las acciones (Action Methods)
  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}