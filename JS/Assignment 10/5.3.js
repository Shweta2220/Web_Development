const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];

var i = 0;
while(i <= InputtedNumbers.length-1)
{
    switch(true)
    {
        case InputtedNumbers[i] % 3 === 0 && InputtedNumbers[i] % 8 === 0:
            console.log(InputtedNumbers[i] ,"divisible by 3 And 8");
            break;
        case InputtedNumbers[i] % 3 === 0:
            console.log(InputtedNumbers[i] ,"divisible by 3");
            break;
        case InputtedNumbers[i] % 8 === 0:
            console.log(InputtedNumbers[i] , "divisible by 8");
            break;
        default:
            console.log(InputtedNumbers[i] ,"Not Divisible by 3 And 8");
            break;
    }
    i++;
}