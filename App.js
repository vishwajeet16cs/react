import Component1 from './component/Component1'
import Header from "./component/Header";
import Prop1 from './component/prop1';
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
  return (
     <div>
         <Header  />
         <a href="https://www.bing.com/images/search?view=detailV2&ccid=cffAp32H&id=9A6F6E4D8D73301782E8CCCE53F8BC0C6950A9A4&thid=OIP.cffAp32Hcr4W6Q4jtICtLgHaEK&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2fFiUqN7EyFis%2fmaxresdefault.jpg&exph=720&expw=1280&q=chutiya+ho+tum+&simid=608035359144886024&FORM=IRPRST&ck=0CCF0EAACCE64805640E4009A20AE086&selectedIndex=1&ajaxhist=0&ajaxserp=0" class="btn btn-primary btn-lg active" role="button" 
             aria-pressed="true">check who love you</a>
          <a href="#" class="btn btn-secondary btn-lg active" 
              role="button" aria-pressed="true">Link</a>
              <h1><h1>h1h1</h1><h2>h1h1</h2></h1>

         <h1 style={{ backgroundColor: "yellow" }}>Inline color change</h1>
         <Component1 />
          <pre>{}</pre>
         
         
     </div>
  );
}

export default App;
