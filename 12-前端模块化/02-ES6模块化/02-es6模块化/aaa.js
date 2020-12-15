var name = "小明"
var height = 180
var flag = true
var gender = 'male'

// 1.导出对象
export {name, height, flag}

// 2.直接用export定义变量
export var age = 18

// 3.导出函数或类
export function sum(num1, num2) {
  return num1 + num2
}
export class Student{
  id = 2020;
  study(){
    console.log("studying...");
  }
}

// 4.默认导出，其他文件可以重名这个变量，默认导出只能有一个
export default gender
