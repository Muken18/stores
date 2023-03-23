import React from 'react';
import styles from './Section1.module.css'
import frame1 from '../../img/Frame5.png'
import frame6 from '../../img/frame6.png'
import span from '../../img/span.png'
import span1 from '../../img/span1.png'
import span2 from '../../img/span2.png'
import span3 from '../../img/span3.png'
import sale from '../../img/sale.png'
import money2 from '../../img/999.png'
import zv from '../../img/zv.png'
import basket from '../../img/basket.png'







const Section1 = () => {
    return (
        <div className={styles.container}>

            <div className={styles.section1}>
                <div className={styles.display_flex}>
                    <div>
                        <img width={250} src={frame1} alt="" />
                    </div>
                    <div>
                        <h1 className={styles.iphone13}>Iphone 13 Pro Max 2020</h1>
                        <div className={styles.f123}>
                            <img className={styles.frame6} src={frame6} alt="" />
                            <p className={styles.phone_p}>123</p>
                        </div>
                        <p className={styles.aboutus}>экран: 6.43" (2400x1080) AMOLED 60 Гц</p>
                        <p className={styles.aboutus}>память: встроенная 128 ГБ, оперативная 4 ГБ</p>
                        <p className={styles.aboutus}>фото: 4 камеры, основная 64 МП</p>
                        <p className={styles.aboutus}>аккумулятор: 5000 мА·ч</p>
                        <div className={styles.span}>
                            <img src={span} alt="" />
                            <img src={span1} alt="" />
                            <img src={span2} alt="" />
                            <img src={span3} alt="" />
                        </div>

                    </div>
                </div>

                <div className={styles.container_main}>
                    <div className={styles.container_price}>
                        <p>88,699c</p>
                        <img className={styles.price} src={money2} alt="" />
                        <img className={styles.price} src={sale} alt="" />
                    </div>

                    <div className={styles.container_zv}>
                        <img className={styles.zv} src={zv} alt="" />
                        <p className={styles.zv_p}>321</p>
                    </div>
                    <p className={styles.inStock}>в наличии (23)</p>

                    <div className={styles.softech}>
                        <p className={styles.softech_p}>Продавец:</p>
                        <p className={styles.softech_p1}>Softech.kg</p>
                    </div>
                    <p className={styles.delivery}>Бесплатная доставка</p>
                    <button className={styles.btn_basket}>
                        <img className={styles.btn_img} src={basket} alt="" />
                        В Корзину
                    </button>
                </div>
            </div>


            <div className={styles.section1}>
                <div className={styles.display_flex}>
                    <div>
                        <img width={250} src={frame1} alt="" />
                    </div>
                    <div>
                        <h1 className={styles.iphone13}>Iphone 13 Pro Max 2020</h1>
                        <div className={styles.f123}>
                            <img className={styles.frame6} src={frame6} alt="" />
                            <p className={styles.phone_p}>123</p>
                        </div>
                        <p className={styles.aboutus}>экран: 6.43" (2400x1080) AMOLED 60 Гц</p>
                        <p className={styles.aboutus}>память: встроенная 128 ГБ, оперативная 4 ГБ</p>
                        <p className={styles.aboutus}>фото: 4 камеры, основная 64 МП</p>
                        <p className={styles.aboutus}>аккумулятор: 5000 мА·ч</p>
                        <div className={styles.span}>
                            <img src={span} alt="" />
                            <img src={span1} alt="" />
                            <img src={span2} alt="" />
                            <img src={span3} alt="" />
                        </div>

                    </div>
                </div>

                <div className={styles.container_main}>
                    <div className={styles.container_price}>
                        <p>88,699c</p>
                        <img className={styles.price} src={money2} alt="" />
                        <img className={styles.price} src={sale} alt="" />
                    </div>

                    <div className={styles.container_zv}>
                        <img className={styles.zv} src={zv} alt="" />
                        <p className={styles.zv_p}>321</p>
                    </div>
                    <div>
                        <p className={styles.inStock}>в наличии (23)</p>
                    </div>

                    <div className={styles.softech}>
                        <p className={styles.softech_p}>Продавец:</p>
                        <p className={styles.softech_p1}>Softech.kg</p>
                    </div>
                    <div>
                        <p className={styles.delivery}>Бесплатная доставка</p>
                    </div>
                    <button className={styles.btn_basket}>
                        <img className={styles.btn_img} src={basket} alt="" />
                        В Корзину
                    </button>
                </div>
            </div>



            <div className={styles.section1}>
                <div className={styles.display_flex}>
                    <div>
                        <img width={250} src={frame1} alt="" />
                    </div>
                    <div>
                        <h1 className={styles.iphone13}>Iphone 13 Pro Max 2020</h1>
                        <div className={styles.f123}>
                            <img className={styles.frame6} src={frame6} alt="" />
                            <p className={styles.phone_p}>123</p>
                        </div>
                        <p className={styles.aboutus}>экран: 6.43" (2400x1080) AMOLED 60 Гц</p>
                        <p className={styles.aboutus}>память: встроенная 128 ГБ, оперативная 4 ГБ</p>
                        <p className={styles.aboutus}>фото: 4 камеры, основная 64 МП</p>
                        <p className={styles.aboutus}>аккумулятор: 5000 мА·ч</p>
                        <div className={styles.span}>
                            <img src={span} alt="" />
                            <img src={span1} alt="" />
                            <img src={span2} alt="" />
                            <img src={span3} alt="" />
                        </div>

                    </div>
                </div>

                <div className={styles.container_main}>
                    <div className={styles.container_price}>
                        <p>88,699c</p>
                        <img className={styles.price} src={money2} alt="" />
                        <img className={styles.price} src={sale} alt="" />
                    </div>

                    <div className={styles.container_zv}>
                        <img className={styles.zv} src={zv} alt="" />
                        <p className={styles.zv_p}>321</p>
                    </div>
                    <p className={styles.inStock}>в наличии (23)</p>

                    <div className={styles.softech}>
                        <p className={styles.softech_p}>Продавец:</p>
                        <p className={styles.softech_p1}>Softech.kg</p>
                    </div>
                    <p className={styles.delivery}>Бесплатная доставка</p>
                    <button className={styles.btn_basket}>
                        <img className={styles.btn_img} src={basket} alt="" />
                        В Корзину
                    </button>
                </div>
            </div>



            <div className={styles.section1}>
                <div className={styles.display_flex}>
                    <div>
                        <img width={250} src={frame1} alt="" />
                    </div>
                    <div>
                        <h1 className={styles.iphone13}>Iphone 13 Pro Max 2020</h1>
                        <div className={styles.f123}>
                            <img className={styles.frame6} src={frame6} alt="" />
                            <p className={styles.phone_p}>123</p>
                        </div>
                        <p className={styles.aboutus}>экран: 6.43" (2400x1080) AMOLED 60 Гц</p>
                        <p className={styles.aboutus}>память: встроенная 128 ГБ, оперативная 4 ГБ</p>
                        <p className={styles.aboutus}>фото: 4 камеры, основная 64 МП</p>
                        <p className={styles.aboutus}>аккумулятор: 5000 мА·ч</p>
                        <div className={styles.span}>
                            <img src={span} alt="" />
                            <img src={span1} alt="" />
                            <img src={span2} alt="" />
                            <img src={span3} alt="" />
                        </div>

                    </div>
                </div>

                <div className={styles.container_main}>
                    <div className={styles.container_price}>
                        <p>88,699c</p>
                        <img className={styles.price} src={money2} alt="" />
                        <img className={styles.price} src={sale} alt="" />
                    </div>

                    <div className={styles.container_zv}>
                        <img className={styles.zv} src={zv} alt="" />
                        <p className={styles.zv_p}>321</p>
                    </div>
                    <p className={styles.inStock}>в наличии (23)</p>

                    <div className={styles.softech}>
                        <p className={styles.softech_p}>Продавец:</p>
                        <p className={styles.softech_p1}>Softech.kg</p>
                    </div>
                    <p className={styles.delivery}>Бесплатная доставка</p>
                    <button className={styles.btn_basket}>
                        <img className={styles.btn_img} src={basket} alt="" />
                        В Корзину
                    </button>
                </div>
            </div>



            <div className={styles.section1}>
                <div className={styles.display_flex}>
                    <div>
                        <img width={250} src={frame1} alt="" />
                    </div>
                    <div>
                        <h1 className={styles.iphone13}>Iphone 13 Pro Max 2020</h1>
                        <div className={styles.f123}>
                            <img className={styles.frame6} src={frame6} alt="" />
                            <p className={styles.phone_p}>123</p>
                        </div>
                        <p className={styles.aboutus}>экран: 6.43" (2400x1080) AMOLED 60 Гц</p>
                        <p className={styles.aboutus}>память: встроенная 128 ГБ, оперативная 4 ГБ</p>
                        <p className={styles.aboutus}>фото: 4 камеры, основная 64 МП</p>
                        <p className={styles.aboutus}>аккумулятор: 5000 мА·ч</p>
                        <div className={styles.span}>
                            <img src={span} alt="" />
                            <img src={span1} alt="" />
                            <img src={span2} alt="" />
                            <img src={span3} alt="" />
                        </div>

                    </div>
                </div>

                <div className={styles.container_main}>
                    <div className={styles.container_price}>
                        <p>88,699c</p>
                        <img className={styles.price} src={money2} alt="" />
                        <img className={styles.price} src={sale} alt="" />
                    </div>

                    <div className={styles.container_zv}>
                        <img className={styles.zv} src={zv} alt="" />
                        <p className={styles.zv_p}>321</p>
                    </div>
                    <p className={styles.inStock}>в наличии (23)</p>

                    <div className={styles.softech}>
                        <p className={styles.softech_p}>Продавец:</p>
                        <p className={styles.softech_p1}>Softech.kg</p>
                    </div>
                    <p className={styles.delivery}>Бесплатная доставка</p>
                    <button className={styles.btn_basket}>
                        <img className={styles.btn_img} src={basket} alt="" />
                        В Корзину
                    </button>
                </div>
            </div>



            <div className={styles.section1}>
                <div className={styles.display_flex}>
                    <div>
                        <img width={250} src={frame1} alt="" />
                    </div>
                    <div>
                        <h1 className={styles.iphone13}>Iphone 13 Pro Max 2020</h1>
                        <div className={styles.f123}>
                            <img className={styles.frame6} src={frame6} alt="" />
                            <p className={styles.phone_p}>123</p>
                        </div>
                        <p className={styles.aboutus}>экран: 6.43" (2400x1080) AMOLED 60 Гц</p>
                        <p className={styles.aboutus}>память: встроенная 128 ГБ, оперативная 4 ГБ</p>
                        <p className={styles.aboutus}>фото: 4 камеры, основная 64 МП</p>
                        <p className={styles.aboutus}>аккумулятор: 5000 мА·ч</p>
                        <div className={styles.span}>
                            <img src={span} alt="" />
                            <img src={span1} alt="" />
                            <img src={span2} alt="" />
                            <img src={span3} alt="" />
                        </div>

                    </div>
                </div>

                <div className={styles.container_main}>
                    <div className={styles.container_price}>
                        <p>88,699c</p>
                        <img className={styles.price} src={money2} alt="" />
                        <img className={styles.price} src={sale} alt="" />
                    </div>

                    <div className={styles.container_zv}>
                        <img className={styles.zv} src={zv} alt="" />
                        <p className={styles.zv_p}>321</p>
                    </div>
                    <p className={styles.inStock}>в наличии (23)</p>

                    <div className={styles.softech}>
                        <p className={styles.softech_p}>Продавец:</p>
                        <p className={styles.softech_p1}>Softech.kg</p>
                    </div>
                    <p className={styles.delivery}>Бесплатная доставка</p>
                    <button className={styles.btn_basket}>
                        <img className={styles.btn_img} src={basket} alt="" />
                        В Корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section1;