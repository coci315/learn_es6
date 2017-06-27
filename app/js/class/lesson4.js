{
  console.log('a', `\u0061`); // a a
  // 码值大于0FFFF的unicode字符不能正常显示
  console.log('s', `\u20BB7`); // s ₻7
  // 用{}包起来，则可以正常显示
  console.log('s', `\u{20BB7}`); // s 𠮷


}


{
  let s = '𠮷';
  console.log('length', s.length); // 2
  console.log('0', s.charAt(0)); // �
  console.log('1', s.charAt(1)); // �
  console.log('at0', s.charCodeAt(0)); // 55362
  console.log('at1', s.charCodeAt(1)); // 57271

  let s1 = '𠮷a';
  console.log('length', s1.length); // 3
  console.log('code0', s1.codePointAt(0)); // 134071
  console.log('code0', s1.codePointAt(0).toString(16)); // 20bb7
  console.log('code1', s1.codePointAt(1)); // 57271
  console.log('code2', s1.codePointAt(2)); // 97
}

{
  console.log(String.fromCharCode("0x20bb7")); // ஷ
  console.log(String.fromCodePoint("0x20bb7")); // 𠮷
}

{
  let str = '\u{20bb7}abc';
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }
  // es5 �
  // es5 �
  // es5 a
  // es5 b
  // es5 c
  for (let code of str) {
    console.log('es6', code);
  } // 使用 let of遍历接口，可以正常处理大于0FFFF的unicode字符
  // es6 𠮷
  // es6 a
  // es6 b
  // es6 c
}

{
  let str = "string";
  console.log('includes', str.includes("c")); // false
  console.log('start', str.startsWith('str')); // true
  console.log('end', str.endsWith('ng')); // true
}

{
  let str = "abc";
  console.log(str.repeat(2)); // 'abcabc'
}

{
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m); // 'i am list,hello world'
}

{
  console.log('1'.padStart(2, '0')); // '01'
  console.log('1'.padEnd(2, '0')); // '10'
}

{
  let user = {
    name: 'list',
    info: 'hello world'
  };
  console.log(abc `i am ${user.name},${user.info}`); // i am ,,,listhello world

  function abc(s, v1, v2) {
    console.log(s); // ["i am ", ",", "", raw: Array(3)]
    console.log(v1); // 'list'
    console.log(v2); // 'hello world'
    return s + v1 + v2
  }
}

{
  console.log(String.raw `Hi\n${1+2}`); // 'Hi\n3'
  console.log(`Hi\n${1+2}`); // 'Hi'
  // '3'
}