
/* 
let Num = 21;

for(var i = 2;i <= Num;i++)
{
    if(Num % i == 0)
    {
        break;
    }
}
if(Num == i)
{
    console.log("Given Number is Prime");
}
else
{
    console.log("Given Number is Not Prime");
} */
function findPrimes(arr)
{
    let PrimeArray=[];notprime=[];
    arr.forEach((num)=>{let factor=0;
    
    for(let i=0;i<=num;i++)
        {
            if((num%i)===0)
            {
                factor++
            }
        }
        if(factor==2)
        {
            PrimeArray.push(num)
        }
        else
        {
            notprime.push(num);
        }
    })
    console.log(`prime no is= ${[PrimeArray]}`);
    
    console.log(`Not prime no is= ${[notprime]}`);
}

findPrimes([0,1,2,3,4,5,6,7,8,9,10])