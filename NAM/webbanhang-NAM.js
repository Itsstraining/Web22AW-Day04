function kiemTraTamGia(a,b,c){
    if(a == b || b == c || a == c){
        console.log("day la tam giac can")
    }
    else if(a*a == b*b + c*c || c*c == a*a + b*b || b*b == a*a + c*c){
        console.log("day la tam giac vuong")
    }
    else if(a == b == c){
        console.log("Day la tam giac deu")
    }
    else if((a*a == b*b + c*c && b == c) || (b*b == a*a + c*c && a == c) || (c*c == b*b + a*a && b == a)){
        console.log("Day la tam giac vuong can")
    }
    else if ((a + b > c) || (c + b > a)  || (c + a > b) ){
        console.log("Day la tam giac thuong")
    }
    else{
        console.log("Day k phai la tam giac")
    }

}
kiemTraTamGia(3,4,5)