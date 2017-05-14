alGSlider.js
========

Простой слайдер на JS.

## Instructions
Включите `alGSlider.js` где-нибудь внизу html страницы после содержимого в теле body.

```html
<script type="text/javascript" src="/alGSlider.js"></script>
```

## HTML
alGSlider.js работает с любыми элементами `inline`, `inline-block` или `block`.
К допустимым слайдам относятся любые дочерние элементы первого уровня. Например:

```html
<ul id="slidreUl" style="display: inline">
  <li>apple</li>
  <li>banana</li>
  <li>coconut</li>
</ul>

<div id="sliderImg" style="display: inline-block">
  <img src="/static/images/apple.png"/>
  <img src="/static/images/banana.png"/>
  <img src="/static/images/coconut.png"/>
</div>

<div id="sliderDiv" style="dislay: block">
  <div>apple</div>
  <div>banana</div>
  <div>coconut</div>
</div>
```
любые допустимые html-разметки для создания трех разных слайдеров. 

## Javascript
После подключения `alGSlider.js` глобальный объект `alGSlider` доступен для вызова. Самый быстрый способ создания слайдера:

```javascript
alGSlider('sliderId');
```

`alGSlider('sliderId')` вторым необязательным параметром принимает объект настройки. Вызов со всеми настройками выглядит так:

```javascript
alGSlider('sliderId', {
  urls: [
      "/static/images/apple.png",
      "/static/images/banana.png",
      "/static/images/coconut.png"
  ],
  breadcrumbs: true,
  controls: true,
  delay: 2000,
  transition: 'zoomInOut'
});
```

### Settings
Полный перечень доступных настроек:

| Parameter     | Type      | Default    | Description                                                                   |
| ------------- |:---------:|:----------:| -----------------------------------------------------------------------------:|
| `urls`        | _array_   | no-op      | Массив с url на картинку. На их основе создаются слайды с картинкамию.        | 
| `breadcrumbs` | _bool_    | true       | Показать или скрыть breadcrumbs. `true` or `false`.                           |
| `controls`    | _bool_    | true       | Показать или скрыть элементы управления(стрелки).`true` or `false`.           |
| `delay`       | _number_  | 0          | Задержка автопокрутки сайдов в ms. Если `0` автопрокрутка тключена            |
| `transition`  | _string_  | none       | Эффект перехода слайда. `none`, `fadeOut`, `bounceIn`, or `zoomInOut`.        |

## License

This software is free to use under the MIT license.