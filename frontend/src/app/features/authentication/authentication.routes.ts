import { Routes } from "@angular/router";
import { LoginPage } from "./pages/login-page/login-page.component";

export const AUTHENTICATION_ROUTES: Routes = [
    {
        path: '',
        component: LoginPage
    }
];