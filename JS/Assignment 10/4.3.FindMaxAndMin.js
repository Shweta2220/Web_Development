const Num = [12, 58, 65, 85, 35, 75, 6, 24];
let min=Num[0],max=Num[0],second_max;
for(let i=1;i<=Num.length;i++)
{
    if(Num[i]>max)
    {
        second_max=max;
        max=Num[i];
    }
    if(Num[i]<min)
    {
        min=Num[i];
    }
    if(Num[i]>second_max && Num[i]<max)
    {
        second_max=Num[i];
    }
}
console.log("Max No in Given Array List=",max);
console.log("Scond Max No in Given Array List=",second_max);
console.log("Mini No in Given Array List=",min);