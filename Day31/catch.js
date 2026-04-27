//Handle promise using then and catch.

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible to vote");
    } else {
      reject("Not eligible to vote");
    }
  });
}

checkAge(16)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

 