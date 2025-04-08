let user = 5
let user2 = 5
for (let i = 0; i <= user; i++) {
    let line = '';
    for (let j = 0; j <= user2; j++) {
        if (i % 2 !==0){
            line += '⬛ ⬜ ','\t';
        } else {
            line += '⬜ ⬛ ','\t';
        }
    }
    console.log(line);
}