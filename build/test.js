"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circuitBreaker_1 = require("./circuitBreaker");
const circuitBreaker = new circuitBreaker_1.CircuitBreaker({
    method: "get",
    url: "http://localhost:3050",
});
setInterval(() => {
    circuitBreaker.exec().then(console.log).catch(console.error);
}, 1000);
//# sourceMappingURL=test.js.map