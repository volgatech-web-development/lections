const el = document.createElement('div');
el.className = 'alert alert_success';
el.innerHTML = '<strong>Ура!</strong> Вы прочитали это важное сообщение.';

const parentElem = document.body;
parentElem.appendChild(el);

// добавление элементу класса 'foo'
el.classList.add('foo');

// удаление класса 'bar'
el.classList.remove('bar');

// переключение класса 'foo'
el.classList.toggle('foo');

// возвращает true если у el есть класс 'foo', в противном случае false
console.log(el.classList.contains('foo'));

// добавление нескольких классов
el.classList.add( 'foo', 'bar' );