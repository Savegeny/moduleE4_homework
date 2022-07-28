function getInfo(obj){
  console.log(Object.keys(obj));
  console.log(Object.values(obj))
}

const newObj = {
  Name: "myName",
  FullName: "myFullName"
}

getInfo(newObj)