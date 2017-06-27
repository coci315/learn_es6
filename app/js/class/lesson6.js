{
  let arr = Array.of(3, 4, 7, 9, 11);
  console.log('arr=', arr); // [3, 4, 7, 9, 11]

  let empty = Array.of();
  console.log('empty', empty); // []
}

{
  // 页面上的html是  <p>aa</p><p>bb</p><p>cc</p>
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(function (item) {
    console.log(item.textContent); // 'aa' 'bb' 'cc'
  });

  console.log(Array.from([1, 3, 5], function (item) {
    return item * 2
  })); // [2,6,10]
}

{
  // 第二个参数为开始填充的位置，第三个参数为结束填充的位置
  console.log('fill-7', [1, 'a', undefined].fill(7)); // [7,7,7]
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); // ['a',7,7]
}

{
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys', index); // 0 1 2
  }
  for (let value of ['1', 'c', 'ks'].values()) {
    console.log('values', value); // '1' 'c' 'ks'
  }
  for (let [index, value] of ['1', 'c', 'ks'].entries()) {
    console.log('values', index, value); // 0 '1' 1 'c' 2 'ks'
  }
}

{
  // 第一个参数是替换的起始位置，第二个参数为复制的起始位置，第三个参数为复制的截止位置
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4,2,3,4,5]
}

{
  // 返回符合条件的第一个值
  console.log([1, 2, 3, 4, 5, 6].find(function (item) {
    return item > 3
  })); // 4
  // 返回符合条件的第一个值的索引
  console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) {
    return item > 3
  })); // 3
}

{
  console.log('number', [1, 2, NaN].includes(1)); // true
  console.log('number', [1, 2, NaN].includes(NaN)); // true
}