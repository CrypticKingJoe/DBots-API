"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_wrapper_1 = __importDefault(require("./db-wrapper"));
var bot_token_1 = require("./models/bot-token");
var command_utils_1 = require("../utils/command-utils");
var BotTokens = /** @class */ (function (_super) {
    __extends(BotTokens, _super);
    function BotTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BotTokens.prototype.getOrCreate = function (id) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, bot_token_1.SavedBotToken.findById(id)];
                    case 1:
                        if (!((_a = _c.sent()) !== null && _a !== void 0)) return [3 /*break*/, 2];
                        _b = _a;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.create(id)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/, _b];
                }
            });
        });
    };
    BotTokens.prototype.create = function (id) {
        return new bot_token_1.SavedBotToken({ _id: id, token: command_utils_1.createUUID() }).save();
    };
    BotTokens.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bot_token_1.SavedBotToken.findByIdAndDelete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BotTokens.prototype.validate = function (botId, value) {
        return __awaiter(this, void 0, void 0, function () {
            var savedToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bot_token_1.SavedBotToken.findById(botId)];
                    case 1:
                        savedToken = _a.sent();
                        if (savedToken.token !== value)
                            throw new TypeError('Invalid token.');
                        return [2 /*return*/];
                }
            });
        });
    };
    return BotTokens;
}(db_wrapper_1.default));
exports.default = BotTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LXRva2Vucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL2JvdC10b2tlbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXFDO0FBQ3JDLGdEQUFxRTtBQUNyRSx3REFBb0Q7QUFFcEQ7SUFBdUMsNkJBQW1DO0lBQTFFOztJQWtCQSxDQUFDO0lBakJtQiwrQkFBVyxHQUEzQixVQUE0QixFQUFVOzs7Ozs7NEJBQzNCLHFCQUFNLHlCQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFBOztvQ0FBaEMsU0FBZ0M7Ozs0QkFBSSxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBckIsS0FBQSxTQUFxQixDQUFBOzs0QkFBaEUsMEJBQWlFOzs7O0tBQ3BFO0lBRVMsMEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixPQUFPLElBQUkseUJBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLDBCQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQUVLLDBCQUFNLEdBQVosVUFBYSxFQUFVOzs7OzRCQUNaLHFCQUFNLHlCQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUE7NEJBQWhELHNCQUFPLFNBQXlDLEVBQUM7Ozs7S0FDcEQ7SUFFSyw0QkFBUSxHQUFkLFVBQWUsS0FBYSxFQUFFLEtBQWE7Ozs7OzRCQUNwQixxQkFBTSx5QkFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQWhELFVBQVUsR0FBRyxTQUFtQzt3QkFDdEQsSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLEtBQUs7NEJBQzFCLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7S0FDN0M7SUFDTCxnQkFBQztBQUFELENBQUMsQUFsQkQsQ0FBdUMsb0JBQVMsR0FrQi9DIn0=