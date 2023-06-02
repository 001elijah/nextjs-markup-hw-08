import Image from 'next/image'

// localhost:3000/portfolio

const Portfolio = () => {
  return (
    <section className="portfolio">
        <div className="container">
            <h1 className="heading--hide">Роботи</h1>
            <ul className="list--reset portfolio__filter">
                <li className="portfolio__filter-item">
                    <button className="portfolio__filter-button" type="button">
                        Усі
                    </button>
                </li>
                <li className="portfolio__filter-item">
                    <button className="portfolio__filter-button" type="button">
                        Веб-сайти
                    </button>
                </li>
                <li className="portfolio__filter-item">
                    <button className="portfolio__filter-button" type="button">
                        Додатки
                    </button>
                </li>
                <li className="portfolio__filter-item">
                    <button className="portfolio__filter-button" type="button">
                        Дизайн
                    </button>
                </li>
                <li className="portfolio__filter-item">
                    <button className="portfolio__filter-button" type="button">
                        Маркетинг
                    </button>
                </li>
            </ul>
        
            {/* <!-- Роботи --> */}
            <ul className="list--reset portfolio__works-list">
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/technokryak.jpg 1x,
                                    ./images/technokryak-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/technokryak-tab.jpg 1x,
                                    ./images/technokryak-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/technokryak-mob.jpg 1x,
                                    ./images/technokryak-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/technokryak-mob.jpg"
                                alt="Technokryak."
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Технокряк
                            </h2>
                            <p className="portfolio__card-type">
                                Веб-сайт
                            </p>
                        </div>
                    </a>
                </li>
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/neworlean.jpg 1x,
                                    ./images/neworlean-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/neworlean-tab.jpg 1x,
                                    ./images/neworlean-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/neworlean-mob.jpg 1x,
                                    ./images/neworlean-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/neworlean-mob.jpg"
                                alt="постер"
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Постер New Orlean vs Golden 
                            </h2>
                            <p className="portfolio__card-type">
                                Дизайн
                            </p>
                        </div>
                    </a>
                </li>
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/seafood.jpg 1x,
                                    ./images/seafood-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/seafood-tab.jpg 1x,
                                    ./images/seafood-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/seafood-mob.jpg 1x,
                                    ./images/seafood-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/seafood-mob.jpg"
                                alt="лого додатку seafood"
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Ресторан Seafood
                            </h2>
                            <p className="portfolio__card-type">
                                Додаток
                            </p>
                        </div>
                    </a>
                </li>
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/prime.jpg 1x,
                                    ./images/prime-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/prime-tab.jpg 1x,
                                    ./images/prime-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/prime-mob.jpg 1x,
                                    ./images/prime-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/prime-mob.jpg"
                                alt="логотип prime"
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Проект Prime
                            </h2>
                            <p className="portfolio__card-type">
                                Маркетинг
                            </p>
                        </div>
                    </a>
                </li>
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/boxes.jpg 1x,
                                    ./images/boxes-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/boxes-tab.jpg 1x,
                                    ./images/boxes-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/boxes-mob.jpg 1x,
                                    ./images/boxes-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/boxes-mob.jpg"
                                alt="логотип boxes"
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Проект Boxes
                            </h2>
                            <p className="portfolio__card-type">
                                Додаток
                            </p>
                        </div>
                    </a>
                </li>
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/inspiration.jpg 1x,
                                    ./images/inspiration-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/inspiration-tab.jpg 1x,
                                    ./images/inspiration-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/inspiration-mob.jpg 1x,
                                    ./images/inspiration-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/inspiration-mob.jpg"
                                alt="макет веб-сайту"
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Inspiration has no Borders
                            </h2>
                            <p className="portfolio__card-type">
                                Веб-сайт
                            </p>
                        </div>
                    </a>
                </li>
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/limited.jpg 1x,
                                    ./images/limited-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/limited-tab.jpg 1x,
                                    ./images/limited-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/limited-mob.jpg 1x,
                                    ./images/limited-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/limited-mob.jpg"
                                alt="макет видання"
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Видання Limited Edition
                            </h2>
                            <p className="portfolio__card-type">
                                Дизайн
                            </p>
                        </div>
                    </a>
                </li>
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/projectlab.jpg 1x,
                                    ./images/projectlab-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/projectlab-tab.jpg 1x,
                                    ./images/projectlab-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/projectlab-mob.jpg 1x,
                                    ./images/projectlab-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/projectlab-mob.jpg"
                                alt="логотип проект LAB"
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Проєкт LAB
                            </h2>
                            <p className="portfolio__card-type">
                                Маркетинг
                            </p>
                        </div>
                    </a>
                </li>
                <li className="portfolio__card">
                    <a className="portfolio__link" href="" >
                        <div className="portfolio__card-thumb">
                            <picture>
                                <source
                                    srcSet="
                                    ./images/business.jpg 1x,
                                    ./images/business-2x.jpg 2x
                                "
                                media="(min-width: 1200px)"
                                />
                                <source
                                    srcSet="
                                    ./images/business-tab.jpg 1x,
                                    ./images/business-tab-2x.jpg 2x
                                "
                                media="(min-width: 768px)"
                                />
                                <source
                                    srcSet="
                                    ./images/business-mob.jpg 1x,
                                    ./images/business-mob-2x.jpg 2x
                                "
                                media="(max-width: 767px)"
                                />
                                <Image
                                className="portfolio__card-image"
                                src="/images/business-mob.jpg"
                                alt="макет Growing Business"
                                width="450"
                                height="294"
                                />
                            </picture>
                            <p className="portfolio__card-descr">
                                Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.
                            </p>
                        </div>
                        <div className="portfolio__card-border">
                            <h2 className="portfolio__card-title">
                                Growing Business
                            </h2>
                            <p className="portfolio__card-type">
                                Додаток
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Portfolio