const Num = [12, 58, 65, 85, 35, 75, 6, 24];
let max=Num[0];
for(let i=1;i<=Num.length;i++)
{
    if(Num[i]>max)
    {
        max=Num[i];
    }
}
console.log(max);