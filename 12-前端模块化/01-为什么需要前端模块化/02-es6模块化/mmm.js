// 方式1：ES5 接收对象
var {flag, sum} = moduleA

if (flag) {
  console.log('using mmm.js');
}


// 方式2：commonjs模块导入 （需要node.js帮助）
// var {flag, sum} = requie("./aaa.js")