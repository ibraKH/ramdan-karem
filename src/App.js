import { useEffect, useState } from "react";
import * as qs from 'query-string';
import { TelegramShareButton, TwitterShareButton, WhatsappShareButton, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";
import "./App.css"

function App() {
  const [name , setName] = useState(null);
  const [url , setUrl] = useState("https://capable-speculoos-68b09a.netlify.app")
  const inputName = document.getElementById("inputName");
  const setNameDiv = document.getElementById("setName");

  const openDiv = () => {
    setNameDiv.classList.remove("hide");
  }

  const closeDiv = () => {
    setNameDiv.classList.add("hide");
  }

  const changeName = () => {
    let inputValue = inputName.value.split(" ").join("%20");
    let link = "https://capable-speculoos-68b09a.netlify.app/?name="
    link = link + inputValue;
    setUrl(link);
  }


  useEffect(() => {
    const parsed = qs.parse(window.location.search);
    setName(parsed.name)
    //const value = queryString.parse(this.props.location.search);
    //const token = value.token;
    //console.log('token',token)
  },[])
  return (
    <div id="app">
       <div id="setName" className="hide">
         <div id="close" onClick={closeDiv}>
           X
         </div>
         <input placeholder="أكتب أسمك" type={"text"} className="nameInput" dir="rtl" onChange={changeName} id="inputName"/>
         <div id="shareIcons">
         <TelegramShareButton url={url}>
          <TelegramIcon size={20}  className="icons"/>
         </TelegramShareButton>
         <TwitterShareButton url={url}>
          <TwitterIcon size={20} className="icons"/>
         </TwitterShareButton>
         <WhatsappShareButton url={url}>
          <WhatsappIcon size={20}  className="icons"/>
         </WhatsappShareButton>
         </div>
       </div>
       <div id="topContainer">
            <div id="ramdanGifContainer">
                <img src="moon.gif" alt="ramdan" className="ramdanGif gif" />
            </div>
        </div>
        <div id="bottomContainer">
            <div id="top">
                <div id="ramdanPngContainer">
                    <img src="ramdan.png" alt="ramdanCarem" className="ramdanPng png" /> 
                </div>
                <div id="textContainer">
                  <div>
                    <h5 className="arabicFont">مبارك عليكم الشهر</h5>
                    <h5 className="arabicFont">جعلنا الله و إياكم من صوامه وقوامه</h5>
                    <h5 className="arabicFont">وكل عام وانتم بخير</h5>
                  </div>
                  <div>
                    {typeof name != 'undefined' ? 
                    <h1 className="arabicFont name">{name}</h1> : 
                    <h1 className="arabicFont name">إبراهيم خالد الحارثي</h1>
                    }
                  </div> 
                </div>
            </div>
        </div>
        <div id="shareContainer">
          <div id="share" onClick={openDiv}>
            <img src="link.png" alt="link" />
            <h5 className="arabicFont shareText">أرسل تهنئة رمضان بأسمك</h5>
          </div>
        </div>
    </div>
  );
}

export default App;
