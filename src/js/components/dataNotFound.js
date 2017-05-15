export default function dataNotFound() {
    const divElem = document.createElement('div');

    divElem.textContent = 'Нет данных для отображения';

    return divElem;
}