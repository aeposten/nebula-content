
  // height and width between 25 - 200px
  // x 0 -1000px
  // y 0 - 700px
  // random color
  class Enemy {
    constructor(
      color,
      weapon,
      motive,
      height,
      width,
      x,
      y,
      health,
      borderRadius,
      opacity
    ) {
      this.color = color;
      this.weapon = weapon;
      this.motive = motive;
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
      this.health = health;
      this.borderRadius = borderRadius;
      this.opacity = opacity;
    }

    appendEnemy = function() {
      // create a div
      const newEnemyElement = document.createElement("div");
      newEnemyElement.style.height = this.height;
      newEnemyElement.style.width = this.width;
      newEnemyElement.style.backgroundColor = `#${this.color}`;
      // set the attribues / styles
      // left and top properties (x,y)

      newEnemyElement.style.left = this.x;
      newEnemyElement.style.top = this.y;
      newEnemyElement.style.borderRadius = `${this.borderRadius}vw`
      newEnemyElement.style.opacity = this.opacity
      // postion
      newEnemyElement.style.position = "absolute";
      // append to the document
      document.body.appendChild(newEnemyElement);
    }
  }


  function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  for (let i = 0; i < 10; i++) {
    // height and width between 25 - 200px
    // x 0 -1000px
    // y 0 - 700px
    // random color

    const colorSelection = generateRandom(0, 16777216).toString(16);
    const randomHeight = `${generateRandom(5, 25)}vw`;
    const randomWidth = `${generateRandom(5, 25)}vw`;
    const randomX = `${generateRandom(20, 80)}%`;
    const randomY = `${generateRandom(20, 80)}%`;
    const randomRadius = `${generateRandom(0, 10)}`
    const randomOpacity = `${generateRandom(20, 100)}%`
    const newEnemy = new Enemy(
      colorSelection,
      "sword",
      "angry",
      randomHeight,
      randomWidth,
      randomX,
      randomY,
      randomRadius,
      100,
      randomOpacity
    );
    console.log(newEnemy)
    newEnemy.appendEnemy();
  }

