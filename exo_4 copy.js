let line = '';
for (let i = 1; i <= 25; i++) {
    for (let j = 1; j <= i; j++) {
        line += `$(i)`;
    }
    console.log(line);
}