// reslove 성공
// reject 실패
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(() => {
      if(typeof  num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  })

  return promise;
}
// then은 미동기 코드를 작성하는데 사용되는 Promise의 메서드

add10(0).then((result) => {
  console.log(result);
  return add10(result);
}).then((result) => {
  console.log(result);
  return add10(undefined);
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
})

/*const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  setTimeout(() => {
    const num = 10;
    if(typeof  num === 'number') {
      resolve(num + 100);
    } else {
      reject('num이 숫자가 아닙니다');
    }
  }, 2000);
})

// then 메서드
// -> 그 이후에
// 성공했을 때만 실행됨
promise.then((value) => {
  console.log(value)
})

//promoise chaning
//promise 똑같은 개체라서 같이 써 줘도 됨
promise.then((value) => {
  console.log(value)
}).catch((error) => {
  console.log(error);
})

// catch 메서드
// 실패했을 때 실행됨
promise.catch((error) => {
  console.log(error);
})*/
