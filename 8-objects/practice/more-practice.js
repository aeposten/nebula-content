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

for (let prop in family) {
  console.log(prop)
  for(let key in family[prop]) {
    console.log(`${key}: ${family[prop][key]}` )
  }
}