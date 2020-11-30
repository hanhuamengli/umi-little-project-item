# 安装
npm install cgr -g --registry=https://registry-cnpm.dayu.work/

# 添加CBD源
cgr add cbd https://registry-cnpm.dayu.work/

# 切换CBD源
cgr use cbd

# 查看当前源
cgr ls

# 全局安装cbd-cli
npm i @ali-whale/cbd-cli -g
# 创建自身项目
cbd init your-project-name
# 进入项目
cd your-project-name
# 若cnpm 未安装，则
 npm install -g cnpm --registry=https://registry.npm.taobao.org
# 设置镜像源
cnpm set registry https://registry-cnpm.dayu.work/
# 安装依赖
cnpm i
# 删除依赖
rm -rf node_modules
# 启动项目
npm/cnpm/yarn start

