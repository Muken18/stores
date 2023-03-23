import React from 'react';
import './Footer.css'
import Google from '../../img/Googleplay.png'
import ApStore from '../../img/appStore.png'

const Footer = () => {
    return (
        <div className='color'>
            <div className='container_footer'>
                <div className='Footer'>
                    <div className='secttion1'>
                        <h2 className='h2'>
                            Маркетплейс</h2>
                        <p className='Footer_p'>О компании
                            Контакты
                            Вакансии
                            Реквизиты
                            Партнерская программа
                            Настоящий маркетплейс</p>

                    </div>

                    <div className='secttion2'>
                        <h2 className='h2'>Покупателю</h2>
                        <p className='Footer_p'>Помощь покупателю
                            Доставка
                            Примерка
                            Оплата
                            Возврат
                            Рассрочка
                            Акции</p>

                    </div>

                    <div className='secttion3'>
                        <h2 className='h2'>Магазинам</h2>
                        <p className='Footer_p'>Помощь магазинам
                            Приглашение к сотрудничеству
                            Вход в личный кабинет</p>

                    </div>

                    <div className='secttion4'>
                        <h2 className='h2'>Правовая информация</h2>
                        <p className='Footer_p'>Условия использования сайта
                            Политика обработки
                            персональных данных
                            Условия заказа и доставки.</p>

                    </div>

                    <div className='secttion5'>
                        <h2 className='h2'>Мобильное приложение</h2>
                        <div className='Google'>
                            <img src={Google} alt="" />
                            <img src={ApStore} alt="" />
                        </div>
                    </div>
                </div>

                <div className='footer2'>
                    <div>
                        <h2 className='h2'>© 2020 - 20∞ Stores.kg Все права защищены.</h2>
                    </div>

                    <div>
                        <h2 className='h2'>Мы принимаем:</h2>
                        <img alt="" />
                        <img alt="" />

                    </div>
                    <div>
                        <h2 className='h2'>Мы в соцсетях:</h2>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;