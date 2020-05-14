const gameContainer = document.getElementById("gameContainer");

class Player {
  constructor() {
    this.div = Player.display();
    this.move();
  }

  // logica de miscare
  move() {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === 40) {
        const oldTop = parseInt(this.div.style.top);

        this.div.style.top = `${oldTop + 20}px`;
      }
      if (event.keyCode === 37) {
        const oldLeft = parseInt(this.div.style.left);
        this.div.style.left = `${oldLeft - 20}px`;
      }
      if (event.keyCode === 39) {
        const oldRight = parseInt(this.div.style.left);
        this.div.style.left = `${oldRight + 20}px`;
      }
      if (event.keyCode === 38) {
        const oldDown = parseInt(this.div.style.top);
        this.div.style.top = `${oldDown - 20}px`;
      }
    });
  }

  static display() {
    const div = document.createElement("div");
    console.log(div);
    const { style } = div;
    style.width = "25px";
    style.height = "25px";
    style.backgroundColor = "red";
    style.position = "absolute";
    style.top = "20px";
    style.left = "30px";
    document.body.appendChild(div);

    return div;
  }
}

const player1 = new Player();
