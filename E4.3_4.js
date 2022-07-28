function Electro(type, name){
  this.type = type;
  this.name = name
}

Electro.prototype.OnOff = function(OnOff){
  if (OnOff){
    console.log('The appliance is plugged in')
  } else {
          console.log('The appliance is not plugged in')
          }
}

function Power(type, name, volt, amper){
  this.type = type;
  this.name = name
}

Power.prototype = new Electro()

Power.prototype.getPower = function(volt, amper){
  console.log(`Power is ${volt * amper} watt`)
}

const lamp = new Power('Table lamp', 'LG', 220, 0.2);
const laptop = new Power('Сomputers', 'ASUS', 220, 0.5);
const printer = new Power('Printers', 'HP')

lamp.getPower(220, 0.2)
laptop.getPower(220, 0.5)
console.log(laptop)
printer.OnOff(false)
console.log(printer)