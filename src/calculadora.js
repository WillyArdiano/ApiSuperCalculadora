function calcular(opr1,opr2,opr){
    if(opr==1){
        return opr1+opr2;
    }else if(opr==2){
        return opr1-opr2;
    }else if(opr==3){
        return opr1*opr2;
    }else if(opr==4){
        return opr1/opr2;
    }else if(opr==5){
        return Math.pow(opr1,opr2);
    }
}

module.exports = {calcular}