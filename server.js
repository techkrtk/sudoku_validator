const fs = require('fs');

let input = fs.readFileSync('app.txt', 'utf-8');

let rows = input.split('\r\n');
rows.pop();
console.log(rows);
let temp=[];
let rowcheck; //ensures entire row has all 9 numbers
let columncheck; //ensures entire columns has all 9 numbers
let boxcheck; //ensures entire 3x3 boxes has all 9 numbers
let i,j,k;
let sum = 0;


//checking all rows for 1-9 numbers
for(i=0;i<9;i++)
{
    temp = rows[i];
   
    for(j=0;j<11;j++){
    if(temp[j] == ' ')
    continue;
    sum += parseInt(temp[j]);
        
}
   
    if (sum === 45){
     rowcheck = true;
     sum=0;
     continue;
    }
    else{
     rowcheck = false;
     break;
    }
   
}

//checking all columns for 1-9 numbers
sum=0;
let temp1;
let cols = [];

for(i=0;i<11;i++){
    sum=0;
    for(j=0;j<9;j++){
       
    temp1 = rows[j]
   
    if(temp1[i] == ' '){continue;}
    cols[j] = parseInt(temp1[i]);

}

for(k=0;k<9;k++)
sum += cols[k]



if (sum === 45){
    columncheck = true;
    continue;
   } else {
    columncheck = false;
    break;
   }


}

//checking 3x3 boxes for 1 to 9 numbers
sum=0;
let temp2= []
let box = [];

for(j=0;j<9;j++)
    temp2.push(rows[j].split(' '));

   

    box[0] = temp2[0][0] + temp2[1][0] + temp2[2][0];
    box[1] = temp2[0][1] + temp2[1][1] + temp2[2][1];
    box[2] = temp2[0][2] + temp2[1][2] + temp2[2][2];

    box[3] = temp2[3][0] + temp2[4][0] + temp2[5][0];
    box[4] = temp2[3][1] + temp2[4][1] + temp2[5][1];
    box[5] = temp2[3][2] + temp2[4][2] + temp2[5][2];

    box[6] = temp2[6][0] + temp2[7][0] + temp2[8][0];
    box[7] = temp2[6][1] + temp2[7][1] + temp2[8][1];
    box[8] = temp2[6][2] + temp2[7][2] + temp2[8][2];
    
    for(i=0;i<9;i++) {
        sum=0;
        for(j=0;j<9;j++){
            sum += parseInt(box[i][j]);
            
        }
        
        if (sum === 45){
            boxcheck = true;
            continue;
           } else {
            boxcheck = false;
            break;
           }
    }




if (rowcheck && columncheck && boxcheck)
console.log("\n *******************\nCongrats!! Your solution" + "\n" + input  + "is Valid Solution \n*******************");
