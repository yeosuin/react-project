// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  /*const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');*/

  /*const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  }

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  }

  const onChangeBio = (e) => {
    setBio(e.target.value);
  }
*/

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  })

  const onChang = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    })
  }

  /*const onChangeName = (e) => {
    setInput({
      ...input,
      name : e.target.value,
    })
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth : e.target.value,
    })
  }

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country : e.target.value,
    })
  }

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio : e.target.value,
    })
  }*/

  return (
      <div>
        <div>
          <input name='name' value={input.name} onChange={onChang} placeholder={'이름'}/>
        </div>
        <div>
          <input name='birth' value={input.birth} type="date" onChange={onChang}/>
        </div>
        <div>
          <select name='country' value={input.country} onChange={onChang}>
            <option value=''></option>
            <option value='kr'>한국</option>
            <option value='us'>미국</option>
            <option value='uk'>영국</option>
          </select>
        </div>

        <div>
          <textarea name='bio' value={input.bio} onChange={onChang} />
        </div>

      </div>
  )
      ;
};

import {use, useState} from 'react';

export default Register;