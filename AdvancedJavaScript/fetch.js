// fetch using then/catch/finally
fetch("https://dummyjson.com/users")
  .then((req) => {
    return req.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// fetch using async/ await
async function data() {
  // you need to do a try/catch
  try {
    const res = await fetch("https://dummyjson.com/todo");
    const data = await res.json();
    if (res.status === 200) {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

data();
