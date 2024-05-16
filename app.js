"use strict";
//Text based adventure in Typescript and node js 
//This project is not GUI based. It is a console based game..
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
// Installation of inquirer.......npm install inquirer
var inquirer_1 = require("inquirer");
var Hero = /** @class */ (function () {
    function Hero(name) {
        this.health = 100;
        this.name = name;
    }
    Hero.prototype.decreaseHealth = function () {
        this.health -= 20;
    };
    Hero.prototype.increaseHealth = function () {
        this.health -= 100;
    };
    return Hero;
}());
//for enemy
var Enemy = /** @class */ (function () {
    function Enemy(name) {
        this.health = 100;
        this.name = name;
    }
    Enemy.prototype.decreaseHealth = function () {
        this.health -= 20;
    };
    Enemy.prototype.increaseHealth = function () {
        this.health -= 100;
    };
    return Enemy;
}());
//step 2
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var heroName, enemyType, hero, enemy, action, randomNum;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "input",
                            name: "heroName",
                            message: "Enter Your Hero Name:"
                        }
                    ])
                    //enemy object
                ];
                case 1:
                    heroName = (_a.sent()).heroName;
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "list",
                                name: "enemyType",
                                choices: ["alien", "witch", "zoombie"],
                                message: "select the enemy you fight with:"
                            }
                        ])
                        //step 3 battle field
                    ];
                case 2:
                    enemyType = (_a.sent()).enemyType;
                    hero = new Hero(heroName);
                    enemy = new Enemy(enemyType);
                    console.log("".concat(enemy.name, " v/s ").concat(hero.name));
                    _a.label = 3;
                case 3: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "list",
                            name: "action",
                            choices: ["attack", "defend", "rangetarget", "run"],
                            message: "choose the attack type to perform action ",
                        }
                    ])];
                case 4:
                    action = (_a.sent()).action;
                    _a.label = 5;
                case 5:
                    if () return [3 /*break*/, 3];
                    _a.label = 6;
                case 6:
                    //step 5 switch case
                    switch (action) {
                        case "Attack":
                            randomNum = Math.random();
                            if (randomNum > 0.5) {
                                hero.decreaseHealth();
                                console.log("".concat(heroName, "  health: ").concat(hero.health));
                                console.log("".concat(Enemy.name, " health: ").concat(enemy.health));
                                if (hero.health <= 0) {
                                    console.log("you loss! try again");
                                    return [2 /*return*/];
                                }
                            }
                            else {
                                //enemy health decrease
                                enemy.decreaseHealth();
                                hero.decreaseHealth();
                                console.log("".concat(heroName, "  health: ").concat(hero.health));
                                console.log("".concat(Enemy.name, " health: ").concat(enemy.health));
                                if (hero.health <= 0) {
                                    console.log("congratulation! you won");
                                    return [2 /*return*/];
                                }
                            }
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
while (true)
    ;
main();
