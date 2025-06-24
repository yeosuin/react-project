// async
// 어떤 함수를 비동기 함수로 만들어 주는 키워드
// 함수가 프로미스를 반호나하도록 변환해 주는 그런 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: '이정환',
        id: 'winterlood',
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

function printData() {
  getData().then((result) => {
    console.log(result);
  })
}

// then을 안 쓰고

async function printData1() {
  const data = await getData();
  console.log(data);
}

printData1();