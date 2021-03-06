import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ErrorsComponent } from 'app/shared/errors';

import { EditorsComponent } from './editors.component';
import { CanDeactivateEditor } from './editors.guards';
import { AuthorEditorComponent } from './authors';
import { SynapseEditorComponent } from './synapses';
import { _ } from 'i18n';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    EditorsComponent,
    AuthorEditorComponent,
    SynapseEditorComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: EditorsComponent,
    children: [{
        path: 'authors/:id',
        component: AuthorEditorComponent,
        canDeactivate: [ CanDeactivateEditor ],
        data: { title: _('Author editor') }
    }, {
        path: 'synapses/:id',
        component: SynapseEditorComponent,
        canDeactivate: [ CanDeactivateEditor ],
        data: { title: _('Synapse editor') }
    }, {
        path: '',
        component: ErrorsComponent
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ],
    providers: [ CanDeactivateEditor ]
})
export class EditorsRoutes {}
