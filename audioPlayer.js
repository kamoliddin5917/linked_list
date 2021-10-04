class Audio {
  duration;
  next;
  prev;
  constructor(value) {
    this.duration = value;
  }
}

class Player {
  head;
  tail;
  #size = 0;
  insert(value) {
    const audioPlayer = new Audio(value * 60000);
    this.#size++;
    if (!this.head) {
      this.head = audioPlayer;
      this.tail = audioPlayer;

      this.head.next = this.tail;
      this.head.prev = this.tail;

      this.tail.next = this.head;
      this.tail.prev = this.head;
    } else {
      this.tail.next = audioPlayer;
      audioPlayer.prev = this.tail;
      this.tail = audioPlayer;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
  }
  play() {
    let head = this.head;
    const arr = [];
    let i = 0;
    while (i < this.#size) {
      arr.push({ duration: head.duration });
      head = head.next;
      i++;
    }

    for (let j = 0; j < arr.length; j++) {
      setTimeout(() => {
        console.log(arr[j]);
      }, arr[j].duration);
    }
  }
}
const play = new Player();
play.insert(1);
play.insert(2);
play.insert(3);
play.insert(4);
play.insert(5);
play.insert(6);
play.play();
// console.log(play.head.next.next.next.next.next.duration);
