"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileInput = exports.UpdateProfileOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const user_entity_1 = require("../entities/user.entity");
let UpdateProfileOutput = class UpdateProfileOutput extends core_entity_1.CoreOutput {
};
UpdateProfileOutput = __decorate([
    graphql_1.ObjectType()
], UpdateProfileOutput);
exports.UpdateProfileOutput = UpdateProfileOutput;
let UpdateProfileInput = class UpdateProfileInput extends graphql_1.PartialType(graphql_1.PickType(user_entity_1.User, ['email', 'password'])) {
};
UpdateProfileInput = __decorate([
    graphql_1.InputType()
], UpdateProfileInput);
exports.UpdateProfileInput = UpdateProfileInput;
//# sourceMappingURL=update-profile.dto.js.map