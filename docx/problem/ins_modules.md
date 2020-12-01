# 安装mockJs报错

```javascript
Could not find a declaration file for module 'mockjs'. 'd:/project/myapp/node_modules/mockjs/dist/mock.js' implicitly has an 'any' type.
  Try `npm install @types/mockjs` if it exists or add a new declaration (.d.ts) file containing `declare module 'mockjs';`ts(7016)
```
解决办法:
1.npm install @types/mockjs -g
2.新建 declaration.d.ts,声明
```javascript
 declare module 'mockjs';
```
