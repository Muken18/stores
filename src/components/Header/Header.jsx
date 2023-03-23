import React from 'react';
import styles from './Header.module.css'
import stores from '../../img/Logo.png'
import man1 from '../../img/man1.png'
import love1 from '../../img/love1.png'
import korzina1 from '../../img/korzina1.png'
import bish from '../../img/bish1.png'
import apple from '../../img/img_ap.png'
import apple2 from '../../img/img_ap2.png'
import search from '../../img/Search.png'








const Header = () => {
    return (
        <header>
            <div className={styles.background}>
                <img className={styles.apple} src={apple} alt="" />
                <h1 className={styles.apple_h1}>Iphone 14 pro max</h1>
                <img className={styles.apple2} src={apple2} alt="" />
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <img width={150} className={styles.stores_company} src={stores} alt="" />
                    <div className={styles.lower}>
                        <img src={bish} alt="" />
                        <div>
                            <p className={styles.bish_p}>г.Бишкек</p>
                            <p className={styles.location}>ул.Токтогула 187</p>
                        </div>
                    </div>
                    <button className={styles.btn_directory}>
                        <img src={search} alt="" />
                        Каталог</button>


                    <div class={styles.input_group}>
                        <input type="email" class={styles.input} id="Email" name="Email" placeholder="Поиск товаров" autocomplete="off" />
                        <input class={styles.button_submit} value="Поиск" type="submit" />
                    </div>

                    <select className={styles.select}>
                        <option className={styles.option}>RU</option>
                        <option className={styles.option}>ENG</option>
                    </select>

                    <div>
                        <div className={styles.menu}>
                            <img src={man1} alt="" />
                            <img src={love1} alt="" />
                            <img src={korzina1} alt="" />
                        </div>

                        <div className={styles.menu1}>
                            <p className={styles.menu_p}>Войти</p>
                            <p className={styles.menu_p}>Избранное</p>
                            <p className={styles.menu_p}>Корзина</p>
                        </div>

                    </div>

                </div>

                <div className={styles.container_lower}>
                    <li className={styles.menu_li}>Акции и Скидки</li>
                    <li className={styles.menu_li}>Кэшбек</li>
                    <li className={styles.menu_li}>Электроника</li>
                    <li className={styles.menu_li}>Одежда</li>
                    <li className={styles.menu_li}>Спортивные товары</li>
                    <li className={styles.menu_li}>Умный дом</li>
                </div>
            </div>
        </header>
    );
};

export default Header;