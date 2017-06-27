{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    // 除了name属性，其它都不能被修改
    set(target, key, value) {
      if (key === 'name') {
        return target[key] = value;
      } else {
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target, key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      } else {
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  });

  console.log('get', monitor.time); // '2018-03-11'

  monitor.time = '2019';
  monitor.name = 'mukewang';
  console.log('set', monitor.time, monitor); // '2018-03-11'  {time: "2017-03-11", name: "mukewang", _r: 123}

  console.log('has', 'name' in monitor, 'time' in monitor); // true false

  // delete monitor.time;
  // console.log('delete',monitor);  // {time: "2017-03-11", name: "mukewang", _r: 123}
  //
  // delete monitor._r;
  // console.log('delete',monitor);  // {time: "2017-03-11", name: "mukewang"}
  console.log('ownKeys', Object.keys(monitor)); // ["name", "_r"]

}

{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  console.log('Reflect get', Reflect.get(obj, 'time')); // '2017-03-11'
  Reflect.set(obj, 'name', 'mukewang');
  console.log(obj); // {time: "2017-03-11", name: "mukewang", _r: 123}
  console.log('has', Reflect.has(obj, 'name')); // true
}


{
  // 使用场景： 用proxy代理来进行数据校验
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${key}到${value}`)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val > 18
    },
    mobile(val) {
      return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(val)
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.mobile = '';
      return validator(this, personValidators)
    }
  }

  const person = new Person('lilei', 30);

  console.info(person); // {name: "lilei", age: 30, mobile: ""}

  person.name = 'Han mei mei';
  // person.mobile = '111' // Uncaught Error: 不能设置mobile到111
  person.mobile = '13378788787'

  console.info(person); // {name: "Han mei mei", age: 30, mobile: "13378788787"}
}