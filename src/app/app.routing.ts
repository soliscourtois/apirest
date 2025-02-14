import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { CreateComponent } from "./components/create/create.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ErrorComponent } from "./components/error/error.component";
import { DetailComponent } from "./components/detail/detail.component";
import { EditComponent } from "./components/edit/edit.component";

//import path from "path";

const appRoutes: Routes = [
    {path: '', component: AboutComponent, pathMatch: 'full'},
    {path: 'sobre-mi', component: AboutComponent},
    {path: 'crear-proyecto', component: CreateComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'proyecto/:id', component: DetailComponent},
    {path: 'editar-proyecto/:id', component: EditComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);