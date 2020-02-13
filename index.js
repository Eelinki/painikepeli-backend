const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { origins: '*:*' });

app.use(express.static('build'));

let counter = 0;

const getPoints = () => {
  if(counter % 500 === 0) { return 250; }
  if(counter % 100 === 0) { return 40; }
  if(counter % 10 === 0)  { return 5; }

  return 0;
};

const nextWin = () => {
  return Math.ceil(counter / 10) * 10 - counter || 10;
};

// Player connects
io.on('connection', (socket) => {
  console.log(`Player ${socket.id} connected`);

  const player = {
    score: 20,
    nextWin: nextWin(),
    won: false
  };

  // Player with previous score returns
  socket.on('return', (score) => {
    player.score = score;
    socket.emit('update', player);

    console.log(`Player ${socket.id} returned with a score of ${score}`);
  });

  // Player clicks the button
  socket.on('click', () => {
    counter++;

    player.score--;
    player.score += getPoints();
    player.nextWin = nextWin();
    player.won = null;

    if(getPoints() > 0) {
      player.won = getPoints();
    }

    socket.emit('update', player);

    console.log(`Player ${socket.id} clicked, score ${player.score}`);
  });

  // Player lost and starts over
  socket.on('restart', () => {
    player.score = 20;
    socket.emit('update', player);

    console.log(`Player ${socket.id} started over`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT);