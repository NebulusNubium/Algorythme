for (let i = 0; i <= 9; i++) {
    let line = '';
    for (let j = 0; j <= 9; j++) {
        line += j * i + ' ';
    }
    console.log(line);
}