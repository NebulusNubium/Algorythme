let user = 10
let user2 = 10
let cross = false

for (let i = 1; i <= user; i++) {
    let line = '';
    for (let j = 1; j <= user2; j++) {
        if (cross == true) {
            if (i == 1 || i == user || j == 1 || j == user2 || j==i || i==user-j+1 && j==user-i+1 ) {
                line += '⬛','\t';
            } else {
                line += '⬜','\t';
            }
        } else {
            if (i == 1 || i == user || j == 1 || j ==user2 || i==3 && j>2 && j<user2-1 || j==3 && i>2 && i<user2-1 || i==user-2 && j>2 && j<user2-1 || j==user-2 && i>2 && i<user2-1 || i>4 && i<7 && j>4 && j<7) {
                line += '⬛','\t';
            } else {
                line += '⬜','\t';
            }
        }
    }
    console.log(line);
}