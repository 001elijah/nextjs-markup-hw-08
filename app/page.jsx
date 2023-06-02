"use client";

import Image from 'next/image'
import {useAppContext} from './layout'

const Home = () => {
    const { toggleModal } = useAppContext();
  return (
    <>
      <section className="hero">
            <div className="container">
                <h1 className="hero__title">Ефективні рішення для вашого бізнесу</h1>
                  <button onClick={() => toggleModal()} className="hero__button" type="button" data-modal-open>Замовити послугу</button>
            </div>
        </section>
        <section className="pros">
            <div className="container">
                <h2 className="heading--hide">Наші переваги</h2>
                <ul className="list--reset pros__list">
                    <li>
                        <div className="pros__thumb">
                            <svg className="pros__icon">
                                <use href="./images/icons.svg#icon-antenna"></use>
                            </svg>
                        </div>
                        <h3 className="pros__title">Увага до деталей</h3>
                        <p className="pros__text">Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.</p>
                    </li>
                    <li>
                        <div className="pros__thumb">
                            <svg className="pros__icon">
                                <use href="./images/icons.svg#icon-clock"></use>
                            </svg>
                        </div>
                        <h3 className="pros__title">Пунктуальність</h3>
                        <p className="pros__text">Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.</p>
                    </li>
                    <li>
                        <div className="pros__thumb">
                            <svg className="pros__icon">
                                <use href="./images/icons.svg#icon-diagram"></use>
                            </svg>
                        </div>
                        <h3 className="pros__title">Планування</h3>
                        <p className="pros__text">Так само консультація з широким активом значною мірою зумовлює.</p>
                    </li>
                    <li>
                        <div className="pros__thumb">
                            <svg className="pros__icon">
                                <use href="./images/icons.svg#icon-astronaut"></use>
                            </svg>
                        </div>
                        <h3 className="pros__title">Сучасні технології</h3>
                        <p className="pros__text">Значимість цих проблем настільки очевидна, що реалізація планових завдань.</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="activity">
            <div className="container">
                <h2 className="activity__title">Чим ми займаємося</h2>
                <ul className="list--reset activity__list">
                    <li className="activity__item">
                        <Image className="activity__image" src="/images/box1.jpg" alt="Activity Picture" width="370" height="294"/>
                        <div className="activity__wrap">
                            <p className="activity__label">
                                Десктопні додатки
                            </p>
                        </div>
                    </li>
                    <li className="activity__item">
                        <Image className="activity__image" src="/images/box2.jpg" alt="Activity Picture" width="370" height="294"/>
                        <div className="activity__wrap">
                            <p className="activity__label">
                                Мобільні додатки
                            </p>
                        </div>
                    </li>
                    <li className="activity__item">
                        <Image className="activity__image" src="/images/box3.jpg" alt="Activity Picture" width="370" height="294"/>
                        <div className="activity__wrap">
                            <p className="activity__label">
                                Дизайнерські рішення
                            </p>
                        </div>
                    </li>
                </ul>  
            </div>  
        </section>
        <section className="team">
            <div className="container">
                <h2 className="team__title team__title--big">Наша команда</h2>
                <ul className="list--reset team__list">
                    <li className="team__card">
                        <picture>
                            <source
                                srcSet="
                                ./images/ihor.jpg 1x,
                                ./images/ihor-2x.jpg 2x
                            "
                            media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                                ./images/ihor-tab.jpg 1x,
                                ./images/ihor-tab-2x.jpg 2x
                            "
                            media="(min-width: 768px)"
                            />
                            <source
                                srcSet="
                                ./images/ihor-mob.jpg 1x,
                                ./images/ihor-mob-2x.jpg 2x
                            "
                            media="(max-width: 767px)"
                            />
                            <img
                            className="team__member-photo"
                            src="images/ihor-mob.jpg"
                            alt="Photo of Ihor D."
                            width="450"
                            />
                        </picture>
                        <div className="team__card-wrap">
                            <h3 className="team__member-name">Ігор Дем'яненко</h3>
                            <p className="team__member-position">Product Designer</p>
                            <ul className="list--reset team__member-socials">
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="instagram">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-instagram"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="twitter">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-twitter"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="facebook">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-facebook"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="linkedin">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-linkedin"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="team__card">
                        <picture>
                            <source
                                srcSet="
                                ./images/olha.jpg 1x,
                                ./images/olha-2x.jpg 2x
                            "
                            media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                                ./images/olha-tab.jpg 1x,
                                ./images/olha-tab-2x.jpg 2x
                            "
                            media="(min-width: 768px)"
                            />
                            <source
                                srcSet="
                                ./images/olha-mob.jpg 1x,
                                ./images/olha-mob-2x.jpg 2x
                            "
                            media="(max-width: 767px)"
                            />
                            <img
                            className="team__member-photo"
                            src="images/olha-mob.jpg"
                            alt="Photo of Olha R."
                            width="450"
                            />
                        </picture>
                        <div className="team__card-wrap">
                            <h3 className="team__member-name">Ольга Рєпіна</h3>
                            <p className="team__member-position">Frontend Developer</p>
                            <ul className="list--reset team__member-socials">
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="instagram">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-instagram"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="twitter">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-twitter"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="facebook">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-facebook"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="linkedin">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-linkedin"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="team__card">
                        <picture>
                            <source
                                srcSet="
                                ./images/mykola.jpg 1x,
                                ./images/mykola-2x.jpg 2x
                            "
                            media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                                ./images/mykola-tab.jpg 1x,
                                ./images/mykola-tab-2x.jpg 2x
                            "
                            media="(min-width: 768px)"
                            />
                            <source
                                srcSet="
                                ./images/mykola-mob.jpg 1x,
                                ./images/mykola-mob-2x.jpg 2x
                            "
                            media="(max-width: 767px)"
                            />
                            <img
                            className="team__member-photo"
                            src="images/mykola-mob.jpg"
                            alt="Photo of Mykola T."
                            width="450"
                            />
                        </picture>
                        <div className="team__card-wrap">
                            <h3 className="team__member-name">Микола Тарасов</h3>
                            <p className="team__member-position">Marketing</p>
                            <ul className="list--reset team__member-socials">
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="instagram">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-instagram"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="twitter">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-twitter"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="facebook">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-facebook"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="linkedin">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-linkedin"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="team__card">
                        <picture>
                            <source
                                srcSet="
                                ./images/mykhailo.jpg 1x,
                                ./images/mykhailo-2x.jpg 2x
                            "
                            media="(min-width: 1200px)"
                            />
                            <source
                                srcSet="
                                ./images/mykhailo-tab.jpg 1x,
                                ./images/mykhailo-tab-2x.jpg 2x
                            "
                            media="(min-width: 768px)"
                            />
                            <source
                                srcSet="
                                ./images/mykhailo-mob.jpg 1x,
                                ./images/mykhailo-mob-2x.jpg 2x
                            "
                            media="(max-width: 767px)"
                            />
                            <img
                            className="team__member-photo"
                            src="images/mykhailo-mob.jpg"
                            alt="Photo of Mykhailo Y."
                            width="450"
                            />
                        </picture>
                        <div className="team__card-wrap">
                            <h3 className="team__member-name">Михайло Єрмаков</h3>
                            <p className="team__member-position">UI Designer</p>
                            <ul className="list--reset team__member-socials">
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="instagram">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-instagram"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="twitter">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-twitter"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="facebook">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-facebook"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li className="team__member-social">
                                    <a className="team__social-link" href="" aria-label="linkedin">
                                        <svg className="team__social-icon" width="20px" height="20px">
                                            <use href="./images/icons.svg#icon-linkedin"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section className="customers">
            <div className="container">
                <h2 className="customers__title customers__title--big">Постійні клієнти</h2>
                <ul className="list--reset customers__list">
                    <li>
                        <a className="customers__card" href="">
                            <svg className="customers__logo" width="41px" height="46.7px">
                                <use href="./images/icons.svg#icon-company1"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="customers__card" href="">
                            <svg className="customers__logo" width="40px" height="52px">
                                <use href="./images/icons.svg#icon-company2"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="customers__card" href="">
                            <svg className="customers__logo" width="43.46px" height="41.18px">
                                <use href="./images/icons.svg#icon-company3"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="customers__card" href="">
                            <svg className="customers__logo" width="84.44px" height="40.62px">
                                <use href="./images/icons.svg#icon-company4"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="customers__card" href="">
                            <svg className="customers__logo" width="62.54px" height="45.43px">
                                <use href="./images/icons.svg#icon-company5"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="customers__card" href="">
                            <svg className="customers__logo" width="93.79px" height="43.93px">
                                <use href="./images/icons.svg#icon-company6"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </>
  )
}
export default Home