//계산 기능을 하는 파일
//내보내기 기능을 사용하는 방법 => 모듈을 사용하면 된다. 

const add = (a,b) => a+b ;
const sub =(a,b) => a-b


module.exports ={ //module.exports로 내보낼 수 있다.
    moduleName : "calc module",
    add:add,
    sub:sub,
}