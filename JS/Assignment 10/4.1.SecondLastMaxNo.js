const Num = [12, 58, 65, 85, 35, 75, 6, 24];

let max=Num[0],second_max;
for(i=0;i<Num.length;i++)
{
    if(max<Num[i])
    {
        second_max=max;
        max=Num[i];
    }
    if(Num[i]>second_max && Num[i]<max)
    {
        second_max=Num[i];
    }
}
console.log(second_max);