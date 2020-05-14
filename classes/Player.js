class Player {
  constructor() {
    this.div = Player.display();
    this.move();
    this.wall();
  }

  move() {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === 40) {
        const oldTop = parseInt(this.div.style.top);
        this.div.style.top = `${oldTop + 20}px`;
      } else if (event.keyCode === 39) {
        const oldLeft = parseInt(this.div.style.left);
        this.div.style.left = `${oldLeft + 20}px`;
      } else if (event.keyCode === 37) {
        const oldRight = parseInt(this.div.style.left);
        this.div.style.left = `${oldRight - 20}px`;
      } else if (event.keyCode === 38) {
        const oldDown = parseInt(this.div.style.top);
        this.div.style.top = `${oldDown - 20}px`;
      }
      this.wall();
    });
  }

  static display() {
    const gameContainer = document.querySelector("#gameContainer");
    let div = document.createElement("div");
    let { style } = div;
    style.width = "20px";
    style.height = "20px";
    style.backgroundColor = "black";
    style.position = "absolute";
    style.top = "20px";
    style.left = "20px";

    gameContainer.appendChild(div);
    return div;
  }

  wall() {
    if (parseInt(this.div.style.top) === gameContainer.offsetHeight) {
      alert("You died :(");
    } else if (parseInt(this.div.style.top) === -20) {
      alert("You died :(");
    } else if (parseInt(this.div.style.left) === -20) {
      alert("You died :(");
    } else if (parseInt(this.div.style.left) === gameContainer.offsetWidth) {
      alert("You died :(");
    }
  }
}

const player1 = new Player();
player1.wall();
