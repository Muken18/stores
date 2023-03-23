import React from 'react';
import styles from './Body.module.css'
import frame1 from '../../img/Frame1.png'
import frame2 from '../../img/Frame2.png'
import frame3 from '../../img/Frame3.png'
import frame4 from '../../img/Frame4.png'
import frame5 from '../../img/Frame5.png'
import zv from '../../img/zv.png'
import basket from '../../img/basket.png'
import money from '../../img/99.png'
import sale from '../../img/sale.png'
import money2 from '../../img/999.png'
import tick from '../../img/tick.png'
import nan from '../../img/nan.png'
import circle from '../../img/circle.png'
import nocircle from '../../img/nocircle.png'
import zV from '../../img/zv.png'
import super_fast from '../../img/super_fast.png'
import phone from '../../img/img_ap.png'
import ipad from '../../img/ipad.png'
import aple_monitor from '../../img/aple_monitor.png'
import applewatch from '../../img/applewatch.png'
import airpods from '../../img/airpods.png'
import apple from '../../img/apple.png'



import Section1 from './Section1';






const Body = () => {

    return (
        <div className={styles.container}>
            <div className={styles.price}>
                <div>
                    <div>
                        <h2 className={styles.electronicss}>Электроника</h2>
                        <h3 className={styles.electronics1} >Смартфоны (234)</h3>
                    </div>
                    <div>
                        <h2 className={styles.electronics}>Цена, С</h2>
                        <div>
                            <input className={styles.price_inp} type="text" placeholder='от 10 000' />
                            <input className={styles.price_inp} type="text" placeholder='до 199 999' />
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.electronics}>Срок доставки</h2>
                        <div>
                            <div className={styles.tick_container}>
                                <img src={circle} alt="" />
                                <img src={super_fast} alt="" />
                                <li className={styles.electronics_li}>1-2 часа</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>Сегодня</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>Сегодня или завтра</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>До 5 дней</li>
                            </div >
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>Любой</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>Можно оплатить частями</li>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.electronics}>Производитель</h2>
                        <div>
                            <div className={styles.tick_container}>
                                <img src={tick} alt="" />
                                <li className={styles.electronics_li}>Apple</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>Xiaomi</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>Samsung</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>Realme</li>
                            </div >
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>Любой</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>HONOR</li>
                            </div>
                            <div>
                                <select className={styles.select1} name="" id="">
                                    <option value="">Показать все</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.electronics}>Скидки и акции</h2>
                        <div>
                            <div className={styles.tick_container}>
                                <img src={tick} alt="" />
                                <li className={styles.electronics_li}>скидки</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>промокоды</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>подарки</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>Realme</li>
                            </div >
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>есть комплект</li>
                            </div>

                            <div>
                                <select className={styles.select1} name="" id="">
                                    <option value="">Показать все</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.electronics}>Состояние товара</h2>
                        <div className={styles.tick_container}>
                            <img src={tick} alt="" />
                            <li className={styles.electronics_li}>Новый</li>
                        </div>
                        <div className={styles.tick_container}>
                            <img src={nan} alt="" />
                            <li className={styles.electronics_li}>Ресейл</li>
                        </div>

                    </div>

                    <div>
                        <h2 className={styles.electronics}>Внешний вид</h2>
                        <div className={styles.tick_container}>
                            <img src={nan} alt="" />
                            <li className={styles.electronics_li}>Как новый</li>
                        </div>
                        <div className={styles.tick_container}>
                            <img src={nan} alt="" />
                            <li className={styles.electronics_li}>Отличный</li>
                        </div>
                        <div className={styles.tick_container}>
                            <img src={nan} alt="" />
                            <li className={styles.electronics_li}>Хороший</li>
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.electronics}>Линейка</h2>
                        <div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>Galaxy</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>Galaxy S</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>POCO</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nan} alt="" />
                                <li className={styles.electronics_li}>Redmi</li>
                            </div>
                            <div>
                                <select className={styles.select1} name="" id="">
                                    <option value="">Показать все</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.electronics}>Диагональ экрана (точно)</h2>
                        <div>
                            <input className={styles.price_inp} type="text" placeholder='от 4,1' />
                            <input className={styles.price_inp} type="text" placeholder='до 12,9' />
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.electronics}>Срок доставки</h2>
                        <div>
                            <div className={styles.tick_container}>
                                <img src={circle} alt="" />
                                <li className={styles.electronics_li}>Курьером</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>Самовывозом</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>Торговые залы</li>
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>Любой</li>
                            </div >
                        </div>
                    </div>

                    <div>
                        <h2 className={styles.electronics}>Рейтинг магазина</h2>
                        <div>

                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>От</li>
                                <img className={styles.zvezda} src={zV} alt="" />
                            </div>
                            <div className={styles.tick_container}>
                                <img src={nocircle} alt="" />
                                <li className={styles.electronics_li}>От</li>
                                <img className={styles.zvezda} src={zV} alt="" />
                            </div>
                            <div className={styles.tick_container}>
                                <img src={circle} alt="" />
                                <li className={styles.electronics_li}>Не важно</li>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.electronics}>Цвет</h2>
                        <div className={styles.background}>
                            <div className={styles.border_radius1}></div>
                            <div className={styles.border_radius2}></div>
                            <div className={styles.border_radius3}></div>
                            <div className={styles.border_radius4}></div>
                            <div className={styles.border_radius5}></div>
                        </div>
                        <div className={styles.background2}>
                            <div className={styles.border_radius6}></div>
                            <div className={styles.border_radius7}></div>
                            <div className={styles.border_radius8}></div>
                            <div className={styles.border_radius9}></div>
                            <div className={styles.border_radius10}></div>
                        </div>
                        <div className={styles.background3}>
                            <div className={styles.border_radius11}></div>
                            <div className={styles.border_radius12}></div>
                            <div className={styles.border_radius13}></div>
                            <div className={styles.border_radius14}></div>
                            <div className={styles.border_radius15}></div>
                        </div>
                        <div className={styles.background4}>
                            <div className={styles.border_radius16}></div>
                            <div className={styles.border_radius17}></div>
                            <div className={styles.border_radius18}></div>
                            <div className={styles.border_radius18}></div>
                            <div className={styles.border_radius19}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========================================================================================= */}
            <div>
                <div className={styles.gen_li}>
                    <p className={styles.menu1}>Сортировать по:</p>
                    <li href='#li' className={styles.menu}>Популярности</li>
                    <li href='#li' className={styles.menu}>Возврастанию цены</li>
                    <li href='#li' className={styles.menu}>Убыванию цены</li>
                    <li href='#li' className={styles.menu}>Названию</li>
                    <li href='#li' className={styles.menu}>Новизне</li>
                </div>
                <div className={styles.gen_header}>
                    <h1 className={styles.h1}>Лучшие предложения</h1>
                    <p className={styles.menu}>Посмотреть все товары</p>
                </div>
                <div className={styles.section}>
                    <div className={styles.card}>
                        <img src={frame1} alt="" />
                        <div>
                            <p className={styles.card_p1}>65,999c</p>
                        </div>
                        <div>
                            <p className={styles.card_p2}>Ipad Air 2022</p>
                            <p className={styles.card_p3}>Желтый, M1, 512 GB</p>
                            <div className={styles.zv}>
                                <img className={styles.zv_img} src={zv} alt="" />
                                <p className={styles.card_p4}>321</p>
                            </div>
                            <p className={styles.inStock}>в наличии (23)</p>
                        </div>
                        <button id='#openModal' href="#openModal" className={styles.btn_basket}>
                            <img className={styles.btn_img} src={basket} alt="" />
                            <a className={styles.open_modal_a} href="#openModal1">В Корзину</a>
                        </button>


                        <div id="openModal1" class={styles.modal}>
                            <div class={styles.modal_dialog}>
                                <div class={styles.modal_content}>
                                    <div class={styles.modal_header}>
                                        <h3 class={styles.modal_title}>Товар успешно добавлен в корзину</h3>
                                        <a href="#close" title="Close" class={styles.close}>×</a>
                                    </div>
                                    <div class={styles.modal_body}>
                                        <div className={styles.modal_container}>
                                            <div className={styles.softech}>
                                                <div>
                                                    <img src={ipad} alt="" />
                                                </div>

                                                <div>
                                                    <h3 className={styles.h3}>Ipad Air 2022,Желтый, M1, 512 GB </h3>
                                                    <li className={styles.softech_li}>Продавец: Softech.kg</li>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className={styles.price_phone}>65,999c</h3>
                                            </div>
                                        </div>
                                        <div className={styles.modal_container2}>
                                            <div className={styles.btn_container}>
                                                <div>
                                                    <button className={styles.modal_btn1}>Купить сейчас</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Перейти в корзину</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Продолжить покупки</button>
                                                </div>
                                            </div>

                                            <div className={styles.supplement}>
                                                <p className={styles.btn_supplement}>-</p>
                                                <h1 className={styles.h1_supplement}>1</h1>
                                                <p className={styles.btn_supplement}>+</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.stripe}></div>

                                    <div className={styles.modal_content1}>
                                        <div className={styles.modal_body1}>
                                            <div className={styles.header_title}>
                                                <h1 className={styles.header_h1}>С этим товаром покупают</h1>
                                                <p className={styles.header_p}>Посмотреть все товары</p>
                                            </div>
                                            <div className={styles.container_5}>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame1} alt="" />
                                                        <div>
                                                            <p className={styles.card_p1}>65,999c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Ipad Air 2022</p>
                                                            <p className={styles.card_p3}>Желтый, M1, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame2} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>100,500c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Монитов</p>
                                                            <p className={styles.card_p3}>4,5К разрешение</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame3} alt="" />
                                                        <div>
                                                            <p className={styles.card_p1}>80,000c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Watch ULTRA</p>
                                                            <p className={styles.card_p3}>Желтые, спортивные</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame4} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>56,699c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Airpods Max </p>
                                                            <p className={styles.card_p3}>H1 Чип</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            <a className={styles.open_modal_a} href="#openModal3">В Корзину</a>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame5} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>88,699c</p>
                                                            <img src={money2} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Iphone 13 Pro Max </p>
                                                            <p className={styles.card_p3}>Небесный Синий, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =================================================================================== */}

                    <div className={styles.card}>
                        <img src={frame2} alt="" />
                        <div className={styles.sale}>
                            <p className={styles.card_p1}>100,500c</p>
                            <img className={styles.img_sale} src={money} alt="" />
                            <img className={styles.img_sale} src={sale} alt="" />
                        </div>
                        <div>
                            <p className={styles.card_p2}>Apple Монитов</p>
                            <p className={styles.card_p3}>4,5К разрешение</p>
                            <div className={styles.zv}>
                                <img className={styles.zv_img} src={zv} alt="" />
                                <p className={styles.card_p4}>321</p>
                            </div>
                            <p className={styles.inStock}>в наличии (23)</p>
                        </div>
                        <button className={styles.btn_basket}>
                            <img className={styles.btn_img} src={basket} alt="" />
                            <a className={styles.open_modal_a} href="#openModal">В Корзину</a>
                        </button>

                        <div id="openModal" class={styles.modal}>
                            <div class={styles.modal_dialog}>
                                <div class={styles.modal_content}>
                                    <div class={styles.modal_header}>
                                        <h3 class={styles.modal_title}>Товар успешно добавлен в корзину</h3>
                                        <a href="#close" title="Close" class={styles.close}>×</a>
                                    </div>
                                    <div class={styles.modal_body}>
                                        <div className={styles.modal_container}>
                                            <div className={styles.softech}>
                                                <div>
                                                    <img src={aple_monitor} alt="" />
                                                </div>

                                                <div>
                                                    <h3 className={styles.h3}>Apple Монитор 4,5К разрешение</h3>
                                                    <li className={styles.softech_li}>Продавец: Softech.kg</li>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className={styles.price_phone}>100,500c</h3>
                                            </div>
                                        </div>
                                        <div className={styles.modal_container2}>
                                            <div className={styles.btn_container}>
                                                <div>
                                                    <button className={styles.modal_btn1}>Купить сейчас</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Перейти в корзину</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Продолжить покупки</button>
                                                </div>
                                            </div>

                                            <div className={styles.supplement}>
                                                <p className={styles.btn_supplement}>-</p>
                                                <h1 className={styles.h1_supplement}>1</h1>
                                                <p className={styles.btn_supplement}>+</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.stripe}></div>

                                    <div className={styles.modal_content1}>
                                        <div className={styles.modal_body1}>
                                            <div className={styles.container_5}>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame1} alt="" />
                                                        <div    >
                                                            <p className={styles.card_p1}>65,999c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Ipad Air 2022</p>
                                                            <p className={styles.card_p3}>Желтый, M1, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame2} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>100,500c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Монитов</p>
                                                            <p className={styles.card_p3}>4,5К разрешение</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame3} alt="" />
                                                        <div>
                                                            <p className={styles.card_p1}>80,000c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Watch ULTRA</p>
                                                            <p className={styles.card_p3}>Желтые, спортивные</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame4} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>56,699c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Airpods Max </p>
                                                            <p className={styles.card_p3}>H1 Чип</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            <a className={styles.open_modal_a} href="#openModal3">В Корзину</a>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame5} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>88,699c</p>
                                                            <img src={money2} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Iphone 13 Pro Max </p>
                                                            <p className={styles.card_p3}>Небесный Синий, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =================================================================================== */}
                    <div className={styles.card}>
                        <img src={frame3} alt="" />
                        <div>
                            <p className={styles.card_p1}>80,000c</p>
                        </div>
                        <div>
                            <p className={styles.card_p2}>Apple Watch ULTRA</p>
                            <p className={styles.card_p3}>Желтые, спортивные</p>
                            <div className={styles.zv}>
                                <img className={styles.zv_img} src={zv} alt="" />
                                <p className={styles.card_p4}>321</p>
                            </div>
                            <p className={styles.inStock}>в наличии (23)</p>
                        </div>
                        <button className={styles.btn_basket}>
                            <img className={styles.btn_img} src={basket} alt="" />
                            <a className={styles.open_modal_a} href='#openModal2'>В Корзину</a>
                        </button>


                        <div id="openModal2" class={styles.modal}>
                            <div class={styles.modal_dialog}>
                                <div class={styles.modal_content}>
                                    <div class={styles.modal_header}>
                                        <h3 class={styles.modal_title}>Товар успешно добавлен в корзину</h3>
                                        <a href="#close" title="Close" class={styles.close}>×</a>
                                    </div>
                                    <div class={styles.modal_body}>
                                        <div className={styles.modal_container}>
                                            <div className={styles.softech}>
                                                <div>
                                                    <img src={applewatch} alt="" />
                                                </div>

                                                <div>
                                                    <h3 className={styles.h3}>Apple Watch ULTRA,Желтые, спортивные</h3>
                                                    <li className={styles.softech_li}>Продавец: Softech.kg</li>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className={styles.price_phone}>80,000c</h3>
                                            </div>
                                        </div>
                                        <div className={styles.modal_container2}>
                                            <div className={styles.btn_container}>
                                                <div>
                                                    <button className={styles.modal_btn1}>Купить сейчас</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Перейти в корзину</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Продолжить покупки</button>
                                                </div>
                                            </div>

                                            <div className={styles.supplement}>
                                                <p className={styles.btn_supplement}>-</p>
                                                <h1 className={styles.h1_supplement}>1</h1>
                                                <p className={styles.btn_supplement}>+</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.stripe}></div>

                                    <div className={styles.modal_content1}>
                                        <div className={styles.modal_body1}>
                                            <div className={styles.container_5}>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame1} alt="" />
                                                        <div    >
                                                            <p className={styles.card_p1}>65,999c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Ipad Air 2022</p>
                                                            <p className={styles.card_p3}>Желтый, M1, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame2} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>100,500c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Монитов</p>
                                                            <p className={styles.card_p3}>4,5К разрешение</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame3} alt="" />
                                                        <div>
                                                            <p className={styles.card_p1}>80,000c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Watch ULTRA</p>
                                                            <p className={styles.card_p3}>Желтые, спортивные</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame4} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>56,699c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Airpods Max </p>
                                                            <p className={styles.card_p3}>H1 Чип</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            <a className={styles.open_modal_a} href="#openModal3">В Корзину</a>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame5} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>88,699c</p>
                                                            <img src={money2} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Iphone 13 Pro Max </p>
                                                            <p className={styles.card_p3}>Небесный Синий, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =================================================================================== */}
                    <div className={styles.card}>
                        <img src={frame4} alt="" />
                        <div>
                            <p className={styles.card_p1}>56,699c</p>
                        </div>
                        <div>
                            <p className={styles.card_p2}>Airpods Max </p>
                            <p className={styles.card_p3}>H1 Чип</p>
                            <div className={styles.zv}>
                                <img className={styles.zv_img} src={zv} alt="" />
                                <p className={styles.card_p4}>321</p>
                            </div>
                            <p className={styles.inStock}>в наличии (23)</p>
                        </div>
                        <button className={styles.btn_basket}>
                            <img className={styles.btn_img} src={basket} alt="" />
                            <a className={styles.open_modal_a} href="#openModal3">В Корзину</a>
                        </button>

                        <div id="openModal3" class={styles.modal}>
                            <div class={styles.modal_dialog}>
                                <div class={styles.modal_content}>
                                    <div class={styles.modal_header}>
                                        <h3 class={styles.modal_title}>Товар успешно добавлен в корзину</h3>
                                        <a href="#close" title="Close" class={styles.close}>×</a>
                                    </div>
                                    <div class={styles.modal_body}>
                                        <div className={styles.modal_container}>
                                            <div className={styles.softech}>
                                                <div>
                                                    <img src={airpods} alt="" />
                                                </div>

                                                <div>
                                                    <h3 className={styles.h3}>Airpods Max </h3>
                                                    <li className={styles.softech_li}>Продавец: Softech.kg</li>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className={styles.price_phone}>56,699c</h3>
                                            </div>
                                        </div>
                                        <div className={styles.modal_container2}>
                                            <div className={styles.btn_container}>
                                                <div>
                                                    <button className={styles.modal_btn1}>Купить сейчас</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Перейти в корзину</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Продолжить покупки</button>
                                                </div>
                                            </div>

                                            <div className={styles.supplement}>
                                                <p className={styles.btn_supplement}>-</p>
                                                <h1 className={styles.h1_supplement}>1</h1>
                                                <p className={styles.btn_supplement}>+</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.stripe}></div>
                                    <div className={styles.modal_content1}>
                                        <div className={styles.modal_body1}>
                                            <div className={styles.container_5}>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame1} alt="" />
                                                        <div    >
                                                            <p className={styles.card_p1}>65,999c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Ipad Air 2022</p>
                                                            <p className={styles.card_p3}>Желтый, M1, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame2} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>100,500c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Монитов</p>
                                                            <p className={styles.card_p3}>4,5К разрешение</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame3} alt="" />
                                                        <div>
                                                            <p className={styles.card_p1}>80,000c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Watch ULTRA</p>
                                                            <p className={styles.card_p3}>Желтые, спортивные</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame4} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>56,699c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Airpods Max </p>
                                                            <p className={styles.card_p3}>H1 Чип</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            <a className={styles.open_modal_a} href="#openModal3">В Корзину</a>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame5} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>88,699c</p>
                                                            <img src={money2} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Iphone 13 Pro Max </p>
                                                            <p className={styles.card_p3}>Небесный Синий, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =================================================================================== */}

                    <div className={styles.card}>
                        <img src={frame5} alt="" />
                        <div className={styles.sale}>
                            <p className={styles.card_p1}>88,699c</p>
                            <img src={money2} alt="" />
                        </div>
                        <div>
                            <p className={styles.card_p2}>Iphone 13 Pro Max </p>
                            <p className={styles.card_p3}>Небесный Синий, 512 GB</p>
                            <div className={styles.zv}>
                                <img className={styles.zv_img} src={zv} alt="" />
                                <p className={styles.card_p4}>321</p>
                            </div>
                            <p className={styles.inStock}>в наличии (23)</p>
                        </div>
                        <button className={styles.btn_basket}>
                            <img className={styles.btn_img} src={basket} alt="" />
                            <a className={styles.open_modal_a} href="#openModal4">В Корзину</a>
                        </button>

                        <div id="openModal4" class={styles.modal}>
                            <div class={styles.modal_dialog}>
                                <div class={styles.modal_content}>
                                    <div class={styles.modal_header}>
                                        <h3 class={styles.modal_title}>Товар успешно добавлен в корзину</h3>
                                        <a href="#close" title="Close" class={styles.close}>×</a>
                                    </div>
                                    <div class={styles.modal_body}>
                                        <div className={styles.modal_container}>
                                            <div className={styles.softech}>
                                                <div>
                                                    <img src={apple} alt="" />
                                                </div>

                                                <div>
                                                    <h3 className={styles.h3}>Iphone 13 Pro Max  </h3>
                                                    <li className={styles.softech_li}>Продавец: Softech.kg</li>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className={styles.price_phone}>88,699c</h3>
                                            </div>
                                        </div>
                                        <div className={styles.modal_container2}>
                                            <div className={styles.btn_container}>
                                                <div>
                                                    <button className={styles.modal_btn1}>Купить сейчас</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Перейти в корзину</button>
                                                </div>
                                                <div>
                                                    <button className={styles.modal_btn}>Продолжить покупки</button>
                                                </div>
                                            </div>

                                            <div className={styles.supplement}>
                                                <p className={styles.btn_supplement}>-</p>
                                                <h1 className={styles.h1_supplement}>1</h1>
                                                <p className={styles.btn_supplement}>+</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.stripe}></div>

                                    <div className={styles.modal_content1}>
                                        <div className={styles.modal_body1}>
                                            <div className={styles.container_5}>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame1} alt="" />
                                                        <div    >
                                                            <p className={styles.card_p1}>65,999c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Ipad Air 2022</p>
                                                            <p className={styles.card_p3}>Желтый, M1, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame2} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>100,500c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Монитов</p>
                                                            <p className={styles.card_p3}>4,5К разрешение</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame3} alt="" />
                                                        <div>
                                                            <p className={styles.card_p1}>80,000c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Apple Watch ULTRA</p>
                                                            <p className={styles.card_p3}>Желтые, спортивные</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame4} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>56,699c</p>
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Airpods Max </p>
                                                            <p className={styles.card_p3}>H1 Чип</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            <a className={styles.open_modal_a} href="#openModal3">В Корзину</a>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles.card1}>
                                                        <img width={150} src={frame5} alt="" />
                                                        <div className={styles.sale}>
                                                            <p className={styles.card_p1}>88,699c</p>
                                                            <img src={money2} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className={styles.card_p2}>Iphone 13 Pro Max </p>
                                                            <p className={styles.card_p3}>Небесный Синий, 512 GB</p>
                                                            <div className={styles.zv}>
                                                                <img className={styles.zv_img} src={zv} alt="" />
                                                                <p className={styles.card_p4}>321</p>
                                                            </div>
                                                            <p className={styles.inStock}>в наличии (23)</p>
                                                        </div>
                                                        <button className={styles.btn_basket1}>
                                                            <img className={styles.btn_img} src={basket} alt="" />
                                                            В Корзину
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Section1 />
            </div>
        </div>
    );
};

export default Body;