import './App.css';
import Hello from './component/hello';
/*import styles from "./app_module.css" 
className = {styles.box} 이런식도 됨*/


function App() {
  const name = "tom";
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  };
  return (
    <div className="App">
      <h1 style={{
        color: "#f3bdbd",
        backgroundColor: "#bffad3"
      }}>hello yeahyeah {name} </h1>
      <a href={naver.url} className='naver_bar'>{naver.name}</a>
      <Hello />
    </div>
  );
}

export default App;
