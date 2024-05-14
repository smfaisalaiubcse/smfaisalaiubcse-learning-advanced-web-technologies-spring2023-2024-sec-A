"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllUsersModule = void 0;
const common_1 = require("@nestjs/common");
const all_user_service_1 = require("./all-user.service");
const all_user_controller_1 = require("./all-user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const all_user_entity_1 = require("./entities/all-user.entity");
let AllUsersModule = class AllUsersModule {
};
exports.AllUsersModule = AllUsersModule;
exports.AllUsersModule = AllUsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([all_user_entity_1.AllUser])],
        controllers: [all_user_controller_1.AllUsersController],
        providers: [all_user_service_1.AllUsersService],
        exports: [all_user_service_1.AllUsersService]
    })
], AllUsersModule);
//# sourceMappingURL=all-user.module.js.map