export function test_guess(text) {
  if (text.length == 4) {
    let isUnique = true;
    let copy = text.slice();
    let i, j;
    for (i = 0; i < 4; i++) {
      for (j = i + 1; j < 4; j++) {
        if (copy[i] === text[j]) {
          isUnique = false;
        }
      }
    }
    if (isUnique) {
      return true;
    }
    else {
      alert("Your four-digit guess must have four unique digits!");
      return false;
    }
  }
  else {
    alert("Your guess must be a four-digit number!");
    return false;
  }
}