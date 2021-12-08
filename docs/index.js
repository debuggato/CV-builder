"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _render = _interopRequireDefault(require("../src/server/controllers/render.controller"));

var app = (0, _express["default"])();
var corsOptions = {
  //origin: app.get('env') === "development" ? 'http://localhost:8080' : 'https://cv-builder.stormkit.dev',
  origin: 'https://ivanlori.github.io/CV-builder/',
  optionsSuccessStatus: 200,
  methods: 'POST'
};
app.use(_express["default"].urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(_express["default"].json({
  limit: '50mb',
  extended: true
}));
app.use((0, _cors["default"])(corsOptions));
app.use(_express["default"]["static"]('public'));
app.use('/render', _render["default"]);
app.listen(process.env.PORT || 5000);
module.exports = app;