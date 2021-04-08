const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['wpn1', 'wpn2', 'wpn3'],
  attack: function () {
    console.log(this.name + 'Fight...');
  },
};

const player2 = {
  name: 'SubZero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['wpn1', 'wpn2', 'wpn3'],
  attack: function () {
    console.log(this.name + 'Fight...');
  },
};

function createPlayer(player, person) {
  const $player = document.createElement('div');
  $player.classList.add(player);

  const $pb = document.createElement('div');
  $pb.classList.add('progressbar');
  $player.appendChild($pb);

  const $char = document.createElement('div');
  $char.classList.add('character');
  $player.appendChild($char);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '100%';
  $pb.appendChild($life);

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = person.name;
  $pb.appendChild($name);

  const $img = document.createElement('img');
  $img.src = person.img;
  $char.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);
}

createPlayer('player1', player1); //?
createPlayer('player2', player2);
