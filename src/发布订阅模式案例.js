class Message {
  constructor() {
    this.eventList = {} // 模拟 $emit,$on
    this.onceList = {} // 模拟 $emit,$once
  }

  on(eventName = '', fun) {
    if(eventName in this.eventList) {
      this.eventList[eventName].push(fun)
    } else {
      this.eventList[eventName] = [fun]
    }
  }

  once(eventName = '', fun) {
    if(eventName in this.onceList) {
      this.onceList[eventName].push(fun)
    } else {
      this.onceList[eventName] = [fun]
    }
  }

  emit(eventName = '', val) {
    const funArr = this.eventList[eventName] || []
    if(funArr.length) {
      funArr.forEach(fun => {
        fun.call(this, val)
      });
    }
    
    // 遍历 once 注册事件
    const onceFunArr = this.onceList[eventName] || []
    if(onceFunArr.length) {
      onceFunArr.forEach(fun => {
        fun.call(this, val)

        // 清除注册的事件
        this.clearEvent(this.onceList, eventName, fun)
      });
    }
  }

  off(eventName = '', fun) {

    // 清除对应的fun
    if (!!eventName && !!fun) {
      this.clearEvent(this.eventList, eventName, fun)
    }

    // 清除全部
    if (!!eventName && !fun) {
      this.clearEvent(this.eventList, eventName)
    }
  }

  clearEvent(arr = [], eventName, fun) {
    const nameArr = arr[eventName] || []

    // 清除该name下的所有注册的事件
    if (nameArr.length && !fun) {
      nameArr.length = 0
    }

    // 清除对应的fun事件
    if (nameArr.length && !!fun) {
      // console.log(nameArr.indexOf(fun), nameArr);
      nameArr.splice(nameArr.indexOf(fun), 1)
    }
  }
}

const meobj = new Message()

meobj.on('two', val => {
  console.log('----two: ', val);
})
meobj.on('one', val => {
  console.log('----one: ', val);
})
meobj.once('three', val => {
  console.log('----three: ', val);
})
meobj.once('three', val => {
  console.log('----four: ', val);
})

meobj.emit('one', 'one222')
setTimeout(() => {
  meobj.emit('one', 'one111')
  // meobj.off('two')
  meobj.emit('two', 'two333')
}, 1000);

// once
// meobj.emit('three', 'three111')
// meobj.emit('three', 'three222')