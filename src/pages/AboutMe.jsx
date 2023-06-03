import { Container } from "react-bootstrap";
import gogi from "./../images/gogi.png"

export function AboutMe() {
    return (
        <Container>
            <img src={gogi} style={{maxWidth: '400px', width: '100%', float:'left', padding: '0 20px 20px 0'}} alt="Gogi"></img>
            <p>Добро пожаловать! Это небольшое приложение - тестовое задание, и на этой странице я хочу немного рассказать о себе.</p>
            <p>Меня зовут Авсаджанишвили Георгий (Гоги), я веб-разработчик, сейчас работаю в основном с фронтендом. </p>
            <p>С вебом я начал знакомиться еще в старшей школе, но делал небольшие сайты, использовал только HTML, CSS. </p>
            <p>В университете углубился в изучение программирования, сначала jQuery для фронта и PHP для бэка, SQL я тоже знаю, но чаще всего использовал ORM, ReadBeans для PHP. <a href="https://www.новая-иберия.рф/main.php" target="_blank"  rel="noreferrer">[проект]</a></p>
            <p>Я также работал на python, но больше для решения учебных задач. Из веба попробовал Django. <a href="https://stroy-penoplast.ru/shop/penopolistirol" target="_blank"  rel="noreferrer">[проект]</a></p>
            <p>С 3 курса я углублился в изучение Javascript, открыл для себя много нового, и изучил React, Redux. </p>
            <p>В 2022 году я закончил университет по направлению "прикладная математика и инфррматика", сейчас работаю веб-разработчиком с нативным Javascript. Свободное время я стараюсь изучать новые библиотеки и фреймворки, делать проекты с frontend mentor. </p> 
            
            <p>Сами проекты, которые я тут указал, я более детально описал в своем резюме, в разделе "Опыт работы". Помимо этих коммерческих, у меня есть pet-проекты:</p>
            <ul>
                <li><a href="https://george-avsa.github.io/fm-dictionary/" rel="noreferrer">Переводчик</a> - проект-челендж с платформы frontendmentor. Тут я использовал React, Redux и Thunk в качестве middleware для ассинхронных запросов.</li>
                <li><a href="https://github.com/george-avsa/fm-invoice-app" rel="noreferrer">Приложение для остлеживания счетов</a> - также проект-челендж с платформы frontendmentor. Сейчас проект находится в разработке.</li>
            </ul>
        </Container>
    );
}