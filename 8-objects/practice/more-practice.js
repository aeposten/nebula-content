const family = {
    dad: {
        name: "Jeff",
        age: 55,
        occupation: ["Banker", "Driver"],
        isMarried: true    },
    mom: {
        name: "Mary",
        age: 45,
        occupation: "Banker",
        isMarried: true    }
}

for (let member in family) {
  console.log(member)
  for(let characteristic in family[member]) {
    console.log(`${characteristic}: ${family[member][characteristic]}` )
  }
}