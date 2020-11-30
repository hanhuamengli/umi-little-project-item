import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  //约定式路由无需配置routes
  // routes: [
  //   { path: '/', component: '@/layouts/index' },
  // ],
});
