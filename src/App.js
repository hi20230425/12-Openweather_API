import axios from 'axios'; 
import {useState} from 'react'; 

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
    <div>
        <input placeholder='도시명을 영문으로 입력 하세요'
          type='text'
          value = {location}
          onChange = { (e) => {setLocation(e.target.value)}}
          onKeyDown = {searchWeather}
        />




    </div>
  );
}

export default App;
