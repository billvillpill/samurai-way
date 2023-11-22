import React from 'react';

import girl from '../asset/images/girl.png';

export const Profile = () => {
    return (
        <>
            {/*<div className="content"> /!* 3 *!/*/}

            {/*</div>*/}
            <div className="ava"> {/* 4 */}
                <img src={girl} alt={'avatar of a beautiful drawn girl'}/> {/*автарка*/}
            </div>
            <div className="description"> {/* 5 */}
                Описание профиля
            </div>
            <div className="myPost"> {/* 6 */}
                My post
                <div>
                    <p>
                        Привет! Меня зовут Мария, и я - байкер. Но не просто байкер, а байкер с большой буквы. Я обожаю
                        скорость, ветер, свободу. Мне нравится чувствовать, как мой мотоцикл несет меня по дороге, как я
                        сливаюсь с ним в одно целое.
                    </p>
                    <p>
                        Моя страсть к мотоциклам началась еще в детстве, когда я впервые увидела своего отца за рулем его
                        железного коня. Он был настоящим байкером, и я всегда хотела быть похожей на него.
                    </p>
                    <p>
                        Теперь я - профессиональный гонщик, участвующий в различных соревнованиях по всему миру. Я уже успела
                        побывать в Европе, Азии и даже в Австралии. Но моя страсть к мотоциклам не ограничивается только
                        гонками. Я также люблю путешествовать на своем мотоцикле и исследовать новые места.
                    </p>
                    <p>
                        Помимо мотоциклов, у меня есть еще одна страсть - это чтение. Я обожаю книги и могу читать их часами.
                        Моя любимая книга - “Над пропастью во ржи” Дж.Д. Сэлинджера. Также я люблю рисовать и петь. Иногда я
                        устраиваю концерты для своих друзей и близких.
                    </p>
                    <p>
                        Жизнь байкера - это не только скорость и адреналин, но и множество приключений и интересных знакомств.
                    </p>
                </div>
            </div>
            <div className="savePosts"> {/* 7 */}
                <div>post1</div>
                <div>post2</div>
                <div>post3</div>
            </div>
        </>
    );
};