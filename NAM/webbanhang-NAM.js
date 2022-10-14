var leapYear = function(year){
    if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
    return year + " la nam nhuan.";
    } else{
    return year + " la nam khong nhuan.";
    }
    };
    var input = prompt("Input year: ");
    leapYear(input);