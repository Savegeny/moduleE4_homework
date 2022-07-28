function getInfo(prope, obj){
  console.log(prope in obj)
}

const newPrope = 'Name'

const newObj = {
  Name: "myName",
  FullName: "myFullName"
}

getInfo(newPrope, newObj)