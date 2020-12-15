// 1.导入对象
import {name, height, flag} from "./aaa.js" 
console.log(name + " - " + height + " - " + flag);

// 2.导入变量
import age from "./aaa.js"
console.log("age = "+age);

// 3.导入函数或类
// 注意：导入函数或对象时，需要加{}
import {sum} from "./aaa.js"
import {Student} from "./aaa.js"
console.log("sum: "+sum(10,20));
let s = new Student
s.study()

// 4.导入默认值，import后跟新名字
import sex from "./aaa.js"
console.log("sex = "+sex);

// 5.导入全部，as后面跟新名字
import * as newname from "./aaa.js"
console.log(newname);
console.log(newname.name+" "+newname.age);