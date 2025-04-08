for (let i = 0; i <= 5; i++) {
    let line = '';
    for (let j = 0; j <= 5; j++) {
        if (i % 2 !==0){
            line += '⬛ ⬜ ','\t';
        } else {
            line += '⬜ ⬛ ','\t';
        }
    }
    console.log(line);
}