"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 5001;
app.use(express_1.default.static('dist'));
app.get('/api/welcome', (req, res) => {
    res.status(200).send({ msg: 'Server Connected!' });
});
app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});
