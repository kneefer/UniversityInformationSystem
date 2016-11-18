"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const shared_module_1 = require('../shared/shared.module');
const tablets_component_1 = require('./tablets/tablets.component');
const paneluser_service_1 = require('./paneluser.service');
let PanelUserModule = class PanelUserModule {
};
PanelUserModule = __decorate([
    core_1.NgModule({
        declarations: [
            tablets_component_1.PanelUserTabletsComponent
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'paneluser/tablets', component: tablets_component_1.PanelUserTabletsComponent },
                { path: 'paneluser', redirectTo: 'paneluser/tablets' },
            ])
        ],
        providers: [
            paneluser_service_1.PanelUserService
        ]
    }), 
    __metadata('design:paramtypes', [])
], PanelUserModule);
exports.PanelUserModule = PanelUserModule;
//# sourceMappingURL=paneluser.module.js.map