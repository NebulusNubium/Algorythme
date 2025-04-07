let result = 0
for(i=1; i <= 20; i++) {
    result = i + result
    if (i % 2 !==0){
        console.log('Nombre pair')
    } else {
        console.log(result)
    }
}

