const Button = ({children, text, color = 'black'}) => {
  //props를 구조분해할당 문법으로 가지고 와야 함
  // 기본값을 위에 설정해 주면 됨

  const onClickButton = (e) => {
    console.log(e);
  }
  return (
      <button
          //이벤트 핸들러
          onClick={onClickButton}
          /*onMouseEnter={onClickButton}*/
          style={{ color: color}}>
    {text} - {color.toUpperCase()}
        {children}
  </button>
  )
}

export default Button;