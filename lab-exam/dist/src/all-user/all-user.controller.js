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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllUsersController = void 0;
const common_1 = require("@nestjs/common");
const all_user_service_1 = require("./all-user.service");
const create_all_user_dto_1 = require("./dto/create-all-user.dto");
let AllUsersController = class AllUsersController {
    constructor(allUsersService) {
        this.allUsersService = allUsersService;
    }
    create(createAllUserDto) {
        return this.allUsersService.create(createAllUserDto);
    }
    async signUp(createAllUserDto) {
        return await this.allUsersService.create(createAllUserDto);
    }
    findAll() {
        return this.allUsersService.findAll();
    }
};
exports.AllUsersController = AllUsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_all_user_dto_1.CreateAllUserDto]),
    __metadata("design:returntype", void 0)
], AllUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('signup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_all_user_dto_1.CreateAllUserDto]),
    __metadata("design:returntype", Promise)
], AllUsersController.prototype, "signUp", null);
__decorate([
    (0, common_1.Get)('all-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AllUsersController.prototype, "findAll", null);
exports.AllUsersController = AllUsersController = __decorate([
    (0, common_1.Controller)('all-users'),
    __metadata("design:paramtypes", [all_user_service_1.AllUsersService])
], AllUsersController);
//# sourceMappingURL=all-user.controller.js.map