let user = 5
let user2 = 5

for (let i = 1; i <= user; i++) {
    let line = '';
    for (let j = 1; j <= user2; j++) {
        if (i == 1 || i == user || j == 1 || j == user2) {
            line += '⬛','\t';
        } else {
            line += '⬜','\t';
        }
    }
    console.log(line);
}