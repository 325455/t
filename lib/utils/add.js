const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const add = (addType, name) => {
  let templatePath = path.resolve(__dirname, `../template/${addType}.ejs`);
  let writePath;
  if (addType === "controller") {
    writePath = `src/controllers/${name}.controller.ts`;
  } else if (addType === 'service') {
    writePath = `src/services/${name}.service.ts`;
  } else if (addType === 'router') {
    writePath = `src/routers/modules/${name}.router.ts`;
  }

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { name }, (err, res) => {
      if (err) {
        reject("模板编译失败");
      }
      //如果文件已经存在
      if (fs.existsSync(writePath)) {
        reject(`${addType} has exists!`);
      }
      //创建文件并写入
      fs.writeFileSync(writePath, res);
      resolve(`${addType}添加成功`);
    });
  });
};

module.exports = add;
