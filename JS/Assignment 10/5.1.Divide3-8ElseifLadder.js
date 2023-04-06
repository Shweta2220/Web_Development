const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];
for(let i=0;i<InputtedNumbers.length;i++)
{
    if(InputtedNumbers[i]%3===0 && InputtedNumbers[i]%8===0)
    {
        console.log(InputtedNumbers[i],"is Divisible both 3 and 8");
    }
    else if(InputtedNumbers[i]%3===0)
    {
        console.log(InputtedNumbers[i],"is Divisible by 3 ");
    }
    else if(InputtedNumbers[i]%8===0)
    {
        console.log(InputtedNumbers[i],"is Divisible by 8");
    }
    else
    {
        console.log(InputtedNumbers[i],"is not divisible by 3 and 8");
    }
}