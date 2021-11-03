import { Injectable } from '@angular/core';
 
@Injectable()
export class AuthService { 
    isLoggedIn = false;

    constructor() {
        this.isLoggedIn=false;
    }
 
    isUserLoggedIn(): boolean {
        return Boolean(localStorage.getItem('isAuthenticated'));
    }
} 