"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAllUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_all_user_dto_1 = require("./create-all-user.dto");
class UpdateAllUserDto extends (0, mapped_types_1.PartialType)(create_all_user_dto_1.CreateAllUserDto) {
}
exports.UpdateAllUserDto = UpdateAllUserDto;
//# sourceMappingURL=update-all-user.dto.js.map