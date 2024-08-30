const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const add = require('../utils/add')

//创建项目
const createProject = async (project) => {
  try {
    await download(
      "direct:git@gitee.com:guigui_sh/koa_demo.git#master",
      project,
      { clone: true }
    );
    console.log('项目创建成功');
    console.log(`cd ${project}  进入项目`);
  } catch (err) {
    console.log("远程仓库连接失败");
  }
};

//添加路由
const addRouter = async (routerName, isOnly) => {
  if (!!isOnly) {
    try {
      await add('router', routerName)
      console.log(`路由添加成功，创建了${routerName}.router.ts文件`);
      return
    } catch (err) {
      console.log(err);
      return
    }
  }
  else {
    try {
      await add('controller', routerName)
      await add('service', routerName)
      await add('router', routerName)
      console.log(`路由添加成功，创建了${routerName}.router.ts、${routerName}.controller.ts、${routerName}.service.ts文件`);
      return
    } catch (err) {
      console.log(err);
      return
    }
  }
};

module.exports = {
  createProject,
  addRouter,
};
