let user = 10
let user2 = 10
let cross = false

for (let i = 1; i <= user; i++) {
    let line = '';
    for (let j = 1; j <= user2; j++) {
        if (cross == false) {
            if (i == 1 || i == user || j == 1 || j == user2 || j >2 && j < user-1 && i >2 && i<user-1 ) {
                line += '⬛','\t';
            } else {
                line += '⬜','\t';
            }
        } else {
            if (i == 1 || i == user || j == 1 || j == user2) {
                line += '⬛','\t';
            } else {
                line += '⬜','\t';
            }
        }
    }
    console.log(line);
}