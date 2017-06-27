{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log(a, b); // 1 2
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest); // 1 2 [3,4,5,6]
}

{
  let a, b;
  ({
    a,
    b
  } = {
    a: 1,
    b: 2
  })
  console.log(a, b); // 1 2
}

{
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2];
  console.log(a, b, c); // 1 2 3
}

{
  let a, b, c, rest;
  [a, b, c] = [1, 2];
  console.log(a, b, c); // 1 2 undefined
}

// 使用场景： 变量交换
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b); // 2 1
}

// 使用场景： 接收返回数组结果的函数运行结果
{
  function f() {
    return [1, 2]
  }
  let a, b;
  [a, b] = f();
  console.log(a, b); // 1 2
}

// 使用场景： 选择性地接收函数返回的数组结果
{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, , , b] = f();
  console.log(a, b); // 1 4
}

// 使用场景： 不确定返回的数组结果的长度时，可能只关心数组的第一个值
{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, , ...b] = f();
  console.log(a, b); // 1 [3,4,5]
}

{
  let o = {
    p: 42,
    q: true
  };
  let {
    p,
    q
  } = o;
  console.log(p, q); // 42 true
}

{
  let {
    a = 10, b = 5
  } = {
    a: 3
  };
  console.log(a, b); // 3 5
}

{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  let {
    title: esTitle,
    test: [{
      title: cnTitle
    }]
  } = metaData;
  console.log(esTitle, cnTitle); // 'abc' 'test'
}