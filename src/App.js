//import './coba'
import Car from './coba';

const demo = new Car();

function App(){
  <p id="app"></p>
  document.getElementById("app").innerHTML = demo.cetak;
}
//<p>Mobil saya mereknya {mobil}</p>
export default App;