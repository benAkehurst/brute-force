const code = 999;

function tryCode(number) {
  if (code === number) {
    return `Code correct - ${number}`;
  } else {
    return false;
  }
}

function brute() {
  for (let i = 0; i < 1000; i++) {
    let result = tryCode(i);
    if (result === `Code correct - ${i}`) {
      console.log('Code broken. The code is: ', i);
    }
  }
}

brute();
