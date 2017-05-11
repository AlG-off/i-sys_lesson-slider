export default function DataNotFound() {
    const divElem = document.createElement('div');

    divElem.textContent = 'Нет данных для отображения';

    return divElem;
}