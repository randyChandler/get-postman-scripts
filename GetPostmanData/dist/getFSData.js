"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var gfs = require("graceful-fs");
function OpenFile(filename) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var completeSuccess, filecontent;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            completeSuccess = true;
            filecontent = "";
            return [2 /*return*/, new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        try {
                            filecontent = gfs.readFileSync(filename, "utf8");
                            resolve(filecontent);
                        }
                        catch (err) {
                            reject(err);
                        }
                        return [2 /*return*/];
                    });
                }); })];
        });
    });
}
exports.OpenFile = OpenFile;
function SaveFile(filename, jsonData) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var success;
                    return tslib_1.__generator(this, function (_a) {
                        success = false;
                        try {
                            gfs.writeFile(filename, jsonData, function (err) {
                                if (err)
                                    throw err;
                                console.log('Saved!');
                                success = true;
                                resolve(success);
                            });
                        }
                        catch (e) {
                            reject(e);
                        }
                        return [2 /*return*/];
                    });
                }); })];
        });
    });
}
exports.SaveFile = SaveFile;
//# sourceMappingURL=getFSData.js.map