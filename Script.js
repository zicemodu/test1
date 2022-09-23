function conv(str)
{
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arr_ENen = new Array();
    arr_ENen = arr_en + arr_EN;
    let arrStr = new Map();
    let i = 1;
    for(let j=0; j< arr_EN.length; j++)
    {
        arrStr.set(arr_EN[j], i);
        i++;
    }
    i=1;
    for(let j=0; j< arr_en.length; j++)
    {
        arrStr.set(arr_en[j], i);
        i++;
    }

    let arr1 = new Array();
    for(let j=0, i=0; j<str.length; j++)
    {
        if(arr_ENen.replace(/,/g, '').includes(str[j]))
        {
            arr1[i] = arrStr.get(str[j]);
            i++;
        }
    }

    let newStr = String(arr1);
    return newStr.replace(/,/g, ' ');
}
console.log(conv(',tn(-2y0'));
