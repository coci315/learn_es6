{
  // 二进制以0b或0B开头，八进制以0o或0O开头
  console.log('B', 0B111110111); // 503
  console.log(0o767); // 503
}

{
  // 判断是否是有尽的
  console.log('15', Number.isFinite(15)); // true
  console.log('NaN', Number.isFinite(NaN)); // false
  console.log('1/0', Number.isFinite('true' / 0)); // false
  // 判断是不是NaN
  console.log('NaN', Number.isNaN(NaN)); // true
  console.log('0', Number.isNaN(0)); // false

}

{
  // 判断是不是整数，字符串一律返回false
  console.log('25', Number.isInteger(25)); // true
  console.log('25.0', Number.isInteger(25.0)); // true
  console.log('25.1', Number.isInteger(25.1)); // false
  console.log('25.1', Number.isInteger('25')); // false
}

{
  // 最大值常量与最小值常量
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); // 9007199254740991 -9007199254740991
  // 判断是否是安全数，即是否在最大值常量与最小值常量之间，字符串一律返回false
  console.log('10', Number.isSafeInteger(10)); // true
  console.log('a', Number.isSafeInteger('a')); // false
  console.log('20', Number.isSafeInteger('20')); // false
}

{
  // 返回小数的整数部分
  console.log(4.1, Math.trunc(4.1)); // 4
  console.log(4.9, Math.trunc(4.9)); // 4
}

{
  // 判断正负数和零，可以转成数字的字符串会先转成数字
  console.log('-5', Math.sign(-5)); // -1
  console.log('0', Math.sign(0)); // 0
  console.log('5', Math.sign(5)); // 1
  console.log('50', Math.sign('50')); // 1
  console.log('foo', Math.sign('foo')); // NaN
}


{
  // 开立方根
  console.log('-1', Math.cbrt(-1)); // -1
  console.log('8', Math.cbrt(8)); // 2
}