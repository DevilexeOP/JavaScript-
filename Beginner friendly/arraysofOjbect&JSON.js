const tasks = [
  {
    id: 1,
    text: "Wake up",
    isComplete: true,
  },
  {
    id: 2,
    text: "brush teeth",
    isComplete: true,
  },
  {
    id: 3,
    text: "jogging",
    isComplete: false,
  },
];

console.log(tasks);

// JSon
const tasksJSON = JSON.stringify(tasks);
console.log(tasksJSON);

// printing using loop
for (let task of tasks) {
  console.log(task.text);
}

// forEach
tasks.forEach(function (task) {
  console.log(task.id);
});

// maps
const taskText = tasks.map(function (task) {
  return task.isComplete;
});
console.log(taskText);

// other use of maps
const todoDone = tasks
  .filter(function (task) {
    return task.isComplete === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoDone);

//  playing around with this
const objectPlayers = [
  {
    id: 1,
    playerName: "devil",
    playerStyle: "aggressive",
    favWeapons: ["vandal", "awp"],
  },
  {
    id: 2,
    playerName: "6ix9ine",
    playerStyle: "aggressive",
    favWeapons: ["phantom", "vandal"],
  },
  {
    id: 3,
    playerName: "parth",
    playerStyle: "defensive",
    favWeapons: ["phantom", "specter"],
  },
  {
    id: 4,
    playerName: "arcaddy",
    playerStyle: "aggressive",
    favWeapons: ["vandal", "awp"],
  },
  {
    id: 5,
    playerName: "flame",
    playerStyle: "bottomFrag",
    favWeapons: ["vandal", "phantom", "awp"],
  },
];

console.log(objectPlayers);
const parseJSON = JSON.stringify(objectPlayers);
console.log(parseJSON);

const players = objectPlayers.filter(function (objectPlayer) {
  return objectPlayer.favWeapons[2];
});

console.log(players);
