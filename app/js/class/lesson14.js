{
  let arr = ['hello', 'world'];
  let map = arr[Symbol.iterator]();
  console.log(map.next()); // {done: false, value: 'hello'}
  console.log(map.next()); // {done: false, value: 'world'}
  console.log(map.next()); // {done: true, value: undefined}
}

{
  // 自定义iterator接口
  let obj = {
    start: [1, 3, 2],
    end: [7, 9, 8],
    [Symbol.iterator]() {
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      return {
        next() {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            }
          } else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }
  for (let key of obj) {
    console.log(key); // 1 3 2 7 9 8
  }
}

{
  // 有了iterator接口就能使用for of遍历，内置的array,string,map,set都有已经实现的iterator接口
  let arr = ['hello', 'world'];
  for (let value of arr) {
    console.log('value', value); // 'value' 'hello' 'value' 'world'
  }

  let str = 'hello';
  for (let letter of str) {
    console.log(letter); // 'h' 'e' 'l' 'l' 'o'
  }
}