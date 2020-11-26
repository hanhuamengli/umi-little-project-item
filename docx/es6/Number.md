# es6 数值的扩展

## 1.Number.isFinite()和Number.isNaN()
es6在之前基础上新提供Number.isFinite()和Number.isNaN()两种方法。
Number.isFinite()判断是否有限,仅对数值有效。参数非数值返回false。
Number.isNaN()判断一个值是否为NaN,仅对数值有效。参数非NaN返回false。
```javascript
Number.isFinite('0'); //false
Number.isFinite(0); //true
Number.isFinite([]); //false
Number.isFinite({}); //false
Number.isFinite(NaN); //false
```
```javascript
Number.isNaN('0'); //false
Number.isNaN(''); //false
Number.isNaN(0); //false
Number.isNaN([]); //false
Number.isNaN({}); //false
Number.isNaN(NaN); //true
Number.isNaN(NaN/8); //true
```
## 2.Number.parseInt()和Number.parseFloat()
parseInt()和parseFloat()完全移植于Number.parseInt()和Number.parseFloat()，功能不变。
## 3.Number.isInteger()
Number.isInteger()判断数值是否为整数，仅对数值有效，非数值返回false。
```javascript
Number.isInteger('0'); //false
Number.isInteger(24); //true
Number.isInteger(24.0); //true
Number.isInteger([24.0]); //false
```
## 4.Math的扩展
仅作常用讲解，Math.sign()判断数值符号（正、反、0），Math.trunc()返回数值的整数部分。
```javascript
Math.sign(-5); //-1
Math.sign(5); //1
Math.sign(-0); //-0
Math.sign(0); //0
Math.trunc(-30); //-30
Math.trunc(-30.345); //-30
```
## 5.进制表示法
二进制表示法，以0b/oB开头
八进制表示法，以0o/0O开头