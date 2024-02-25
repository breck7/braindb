#!/usr/bin/env node

const path = require("path");
const { Utils } = require("jtree/products/Utils.js");
const { TrueBaseServer } = require("truebase/server/TrueBaseServer.js");

const Server = new TrueBaseServer(path.join(__dirname, "braindb.truebase"));
Server.pushOnCommit = false;
module.exports = { Server };

if (!module.parent) Utils.runCommand(Server, process.argv[2], process.argv[3]);
