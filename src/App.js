import axios from 'axios'; 
import {useState} from 'react'; 
import styled from 'styled-components'

function App() {
  // state 생성 : 변수의 값이 바뀌면 자동 랜더링 
  // 지역 정보를 담는 변수 
  const [location , setLocation] = useState(''); 
  // REST API를 사용해서 요청한 정보를 받아와서 저장하는 변수 : JSON 
  const [result , setResult] = useState({});  

  // API Key 를 저장하는 변수 
  const API_KEY = '6bedce92f708cdeb65b084ee01b825c0'; 

  // API 요청 URL 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`; 

  //location 을 받아서 API 요청 ===> JSON 값을 받아서 처리 
  // axios 를 사용해서 API 서버와 비동기통신 ===> JSON을 받아서 
  // API 요청 : 
        // 비동기 통신 : 요청에 대한 결과에 상관 없이 다음작업이 수행 될 수 있다. 
        //   동기 통신 : 요청에 대한 반환값을 받고 다음 작업을 수행 
  const searchWeather = async(e) => {
    if (e.key === 'Enter') {
      try {
        const data = await axios ({
          method : 'get', 
          url : url ,  
        })
        setResult(data);    
        console.log(data); 
      }catch (err) {
        alert(err)
      }

    }
  }





  return (
    <AppWap>

    <div className = 'appContentWrap'>
        <input placeholder='도시명을 영문으로 입력 하세요'
          type='text'
          value = {location}
          onChange = { (e) => {setLocation(e.target.value)}}
          onKeyDown = {searchWeather}
        />

      {/* result 값이 존재 할때 출력, 아니면 오류 발생  */}

      {
        Object.keys(result).length !== 0 && (
          <div> 
            <div> 도시명 : {result.data.name} </div> 
            <div> 기온 : { Math.round( (result.data.main.temp - 237.15 ) *10 ) / 10 }  도(c) </div> 
            <div> 날씨 : { result.data.weather[0].main} </div> 

          </div>

        )

      }

    </div>

    </AppWap>
  );
}

export default App;

const AppWap = styled.div`
  width : 100vW; 
  height : 100vh; 

  .appContentWrap {
    left: 50%; 
    top : 50%; 
    position : absolute; 
    padding : 20px; 
    transform: translate(-50%, -50%); 
  }

  input {
    padding : 16px; 
    border: 2px block solid; 
    border-radius: 16px; 
  }

`


