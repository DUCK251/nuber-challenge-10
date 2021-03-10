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
exports.JwtMiddleware = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const jwt_constants_1 = require("./jwt.constants");
const jwt_service_1 = require("./jwt.service");
let JwtMiddleware = class JwtMiddleware {
    constructor(options, jwtService, usersService) {
        this.options = options;
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    async use(req, res, next) {
        if (this.options.tokenType in req.headers) {
            const token = req.headers[this.options.tokenType];
            try {
                const payload = this.jwtService.getPayload(token);
                const user = await this.usersService.findById(payload['id']);
                req['user'] = user;
            }
            catch (e) { }
        }
        next();
    }
};
JwtMiddleware = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(jwt_constants_1.CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object, jwt_service_1.JwtService,
        users_service_1.UsersService])
], JwtMiddleware);
exports.JwtMiddleware = JwtMiddleware;
//# sourceMappingURL=jwt.middleware.js.map