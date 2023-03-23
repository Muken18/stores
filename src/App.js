import React from 'react';
import Main from './components/Main/Main';
import './App.css'
import Google from './img/Googleplay.png'
import ApStore from './img/appStore.png'
import phone from './img/phone.png'
import QR from './img/QR.png'
import Footer from './components/Footer/Footer';




const App = () => {
    return (
        <div>
            <Main />
            <div className='footer'>
                <div className='container'>
                    <div className='section1'>
                        <h1 className='cashback'>Кэшбек на все товары
                            в новом приложении Stores</h1>
                        <div className='container1'>
                            <img src={ApStore} alt="" />
                            <img src={Google} alt="" />
                        </div>
                    </div>

                    <div className='section2'>
                        <img src={phone} alt="" />
                    </div>

                    <div className='section3'>
                        <img className='section3_img' src={QR} alt="" />
                        <p className='p'>Наведите камеру
                            на QR-код, чтобы
                            скачать</p>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    );
};

export default App;