// 
/*
if(condition){
    break;
}

*/
for (let index = 0; index < array.length; index++) {
    if(index == 1){
        break;
    }
}
// Wrong : 
// if(1==1){
//             break;
// }
// console.log("ed")
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if(j==1){
            continue;
        }
        console.log(i,j);
    }
}

/*
0   0
0   1
0   2
1   0
1   1
1   2
2   0
2   1
2   2
*/
/*
break : 

i==j
1   0
2   0
2   1



i==1
0   1
0   1
0   2
2   0
2   1
2   2


j==1
0   0
1   0
2   0


continue : 
i==1
0   0
0   1
0   2
2   0
2   1
2   2

j==1
0 0
0 2
1 0
1 2
2 0
2 2
*/