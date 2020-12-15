// 小明
// 方式1：es5 使用对象接受匿名函数返回的对象
var moduleA = (function () {
  var obj = {};

  var flag = true;

  function sum(num1, num2) {
    return num1 + num2
  }

  if (flag) {
    console.log('using aaa.js');
  }

  console.log("sum = " + sum(10,20));

  // 给对象赋值
  obj.flag = flag;
  obj.sum = sum;

  return obj;
})()


// // 方式2：commomjs模块的导出
// var flag = true;

// function sum(num1, num2) {
//   return num1 + num2
// }

// if (flag) {
//   console.log('using aaa.js');
// }

// // 需要node.js才能实现模块导出
// moduleA.exports = {
//   flag: flag,
//   sum: sum
// }
