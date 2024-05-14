"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const all_user_entity_1 = require("./src/all-user/entities/all-user.entity");
const config = {
    type: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    entities: [all_user_entity_1.AllUser],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map