#! /usr/bin/env node
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
import * as readline from "node:readline";
import * as fs from "fs/promises";
import { DSCommander } from "dscom";
import { DivineStarData } from "dsdata";
var dsCom = new DSCommander(readline);
var dsData = new DivineStarData(fs);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var doing, path, data, jsonData, newPath, error_1, data, dataRaw, newPath, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                doing = "";
                path = "";
                dsCom
                    .defineProgramTitle("[ Divine Star Data Tool ]")
                    .defineHelpText("This is a cli for compressing and de-compressing json data.")
                    .addParam({
                    name: "compress",
                    flag: "c",
                    desc: "Compress a json file.",
                    type: "string",
                    required: false,
                })
                    .addParam({
                    name: "de-compress",
                    flag: "d",
                    desc: "Decompress a json file.",
                    type: "string",
                    required: false,
                });
                return [4 /*yield*/, dsCom.initProgramInput()];
            case 1:
                (_a.sent())
                    .ifParamIsset("d", function (value, args) {
                    doing = "decompressing";
                    path = value;
                })
                    .ifParamIsset("c", function (value, args) {
                    doing = "compressing";
                    path = value;
                });
                if (!(doing == "compressing" && path != "")) return [3 /*break*/, 6];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                return [4 /*yield*/, fs.readFile(path, { encoding: "utf-8" })];
            case 3:
                data = _a.sent();
                jsonData = JSON.parse(data);
                newPath = path.replace(".json", ".dsd");
                return [4 /*yield*/, dsData.write(newPath, jsonData)];
            case 4:
                _a.sent();
                dsCom.BR.G.logSleep("Compression was successful.");
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                dsCom.log(error_1);
                return [3 /*break*/, 6];
            case 6:
                if (!(doing == "decompressing" && path != "")) return [3 /*break*/, 11];
                _a.label = 7;
            case 7:
                _a.trys.push([7, 10, , 11]);
                return [4 /*yield*/, dsData.read(path)];
            case 8:
                data = _a.sent();
                dataRaw = JSON.stringify(data, undefined, 1);
                newPath = path.replace(".dsd", "-new.json");
                return [4 /*yield*/, fs.writeFile(newPath, dataRaw)];
            case 9:
                _a.sent();
                dsCom.BR.G.logSleep("De-compression was successful.");
                return [3 /*break*/, 11];
            case 10:
                error_2 = _a.sent();
                dsCom.log(error_2);
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); })();
