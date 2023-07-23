const promise = new Promise(function (resolve, reject) {
  // db tasks
  // fetching tasks etc
  setTimeout(() => {
    console.log("Called ");
    resolve();
  }, 1000);
});
promise.then((res) => {
  console.log("Promise resolved");
});

// other way
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I have been resolved");
    resolve();
  }, 1000);
}).then((res) => {
  console.log("called 2");
});

// 3rd promise
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "New Promise 3",
      password: "Bruh ",
    });
  }, 1000);
});

promiseThree.then((res) => {
  console.log(res);
});

// 4th promise
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let x = false;
    if (!x) {
      resolve({
        username: "Promise 4",
        password: "promise4hu",
      });
    } else {
      reject("ERROR : NO USER FOUND");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.password;
  })
  .then((password) => {
    console.log(password);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally done");
  });

// Promise fifth
const promiseFifth = new Promise((resolve, reject) => {
  setTimeout(() => {
    let x = false;
    if (!x) {
      resolve({
        username: "Promise 5",
        password: "promise5hu",
      });
    } else {
      reject("ERROR : NO PROMISE FOUND");
    }
  }, 1000);
});

async function promisefive() {
  try {
    const res = await promiseFifth;
    console.log("Async mei hu \n" + JSON.stringify(res));
  } catch (error) {
    console.log(error);
  }
}

promisefive();

//fetch with async
async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// fetch with .then
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally fetched ");
  });
