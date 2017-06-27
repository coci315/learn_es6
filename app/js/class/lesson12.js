{
  // 基本定义和生成实例
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }
  let v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent); // {name: "v"}
}

{
  // 继承
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {

  }

  console.log('继承', new Child()); // {name: "mukewang"}
}

{
  // 继承传递参数
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      super(name);
      this.type = 'child';
    }
  }

  console.log('继承传递参数', new Child('hello')); // {name: "hello", type: "child"}
}

{
  // getter,setter
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
    //longName是属性，设置一个getter
    get longName() {
      return 'mk' + this.name
    }
    // 设置一个setter
    set longName(value) {
      this.name = value;
    }
  }

  let v = new Parent();
  console.log('getter', v.longName); // 'mkmukewang'
  v.longName = 'hello';
  console.log('setter', v.longName); // 'mkhello'
}

{
  // 静态方法，使用关键字static
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.tell(); // 'tell'

}

{
  // 静态属性，直接在class上定义属性
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.type = 'test';

  console.log('静态属性', Parent.type); // 'test'


}