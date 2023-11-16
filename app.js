let a = [];
let value = 10;
for(let i=0;i<value;i++){
    let col = [];
    for(let j=0;j<value;j++){
        col.push(i*j);
    }
    a.push(col);
}
console.table(a);