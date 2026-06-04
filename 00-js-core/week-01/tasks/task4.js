// Получаем элементы DOM
const form = document.getElementById('addItemForm');
const input = document.getElementById('itemInput');
const container = document.getElementById('itemsContainer');

// WHY: вешаем обработчик события submit на форму
form.addEventListener('submit', function(event) {
  // WHY: предотвращаем стандартное поведение формы (перезагрузку страницы)
  event.preventDefault();

  // Получаем значение из input
  const text = input.value.trim();

  // WHY: проверяем, что текст не пустой (после trim())
  if (text === '') {
        alert('Вы ничего не написали(')
    return;
  }

  // TODO: создай новый элемент <p>
  const newParagraph = document.createElement('p');
  
  // TODO: установи текст для нового элемента
  newParagraph.textContent = text;
  
  // TODO: добавь новый элемент в контейнер
  container.appendChild(newParagraph);
  
  // TODO: очисти input после добавления
  input.value = '';
});