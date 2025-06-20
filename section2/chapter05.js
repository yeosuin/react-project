//원시타입 = 불변값
// 원시타입의 경우, 변수에 값을 할당할 때마다 값 자체가 복사됩니다.
// 즉, p1과 p2는 각각의 메모리 공간에 독립적으로 값을 가지고 있습니다.
// 따라서 p2 = 2로 재할당하면 p1이 가리키는 값 1은 여전히 메모리에 남아 있습니다.
// 다만, 더 이상 p2는 그 값을 참조하지 않습니다.
// 이 때, 가비지 컬렉터가 1을 참조하는 변수가 없다는 것을 확인하면 해당 메모리를 회수할 수 있습니다.
let p1 = 1;
let p2 = p1;
p2 = 2;


// 객체타입
// 반면, 객체타입은 변수에 참조값(메모리 주소)를 저장하며, 이 때문에 동일한 객체를 여러 변수가 참조할 수 있습니다.
// 하나의 변수에서 객체 내부의 값을 변경하면 해당 객체를 참조하는 다른 변수들에서도 변경사항이 반영됩니다.
// 객체를 깊은 복사으로 새로운 메모리 공간에 독립적으로 저장하고 싶다면 스프레드 연산자(…)를 사용합니다.
// 의도치 않게 값이 수정될 수 있음으로 얕은 복사 말고 깊은 복사를 해야 한다.
// 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.
// 배열과 함수도 사실 객체이다.
let o1 = {name: '이정환'};
let o2 = o1;
let o3 = {...o1};

console.log(o1 === o2); // true
console.log(o1 === o3); // false

console.log(
    JSON.stringify(o1) === JSON.stringify(o3)); // True
//JSON.stringfy() 자바스크립트 내장 함수, 객체를 문자열로 변환하는 기능

