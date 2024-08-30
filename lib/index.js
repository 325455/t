#!/usr/bin/env node
const { program } = require("commander");
const helpOptions = require("./core/help-options");
const { createProject, addRouter } = require("./core/actions");

helpOptions();

program
  .command("create")
  .argument("<project>")
  .description("创建项目")
  .action(createProject);

program
  .command("add router")
  .arguments("<routerName> [only]")
  // .argument("[only]", "仅添加路由")
  .description("添加路由")
  .action((x, routerName, only) => addRouter(routerName, only));

program.parse(process.argv);
