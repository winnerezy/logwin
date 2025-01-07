"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logwin;
function logwin(req, res, next) {
    var errorCodes = [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511];
    var start = new Date().getTime();
    res.on("finish", function () {
        var finish = new Date().getTime();
        console.log({
            route: req.url,
            method: req.method,
            statusCode: res.statusCode,
            duration: `${finish} - ${start} "ms"`,
            time: new Date(),
            ip: req.ip,
            "user-agent": req.header("user-agent"),
            error: errorCodes.includes(res.statusCode) ? res.statusMessage : null
        });
    });
    next && next();
}
