function dig(obj, target) {
    target in obj
    ? console.log(obj[target])
    : Object.values(obj).reduce(function (acc,val){
            if (acc !== undefined) return acc
            if (typeof val === 'object') return dig(val,target)
        },undefined); 
}

var data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
}

dig(data, 'level2') // { level3: 'some data' }
dig(data, 'level3') // 'some data'
dig(data, 'level4') // undefined