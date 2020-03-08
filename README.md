# tabEvent

Небольшой модуль для организации показа табов на сайте одностраничнике.
При инициализации устанавливает всем табам, кроме первого, класс отвечающий 
за скрытие элемента на странице.
При нажатии кнопки - заголовка таба устанавливает класс, отвечающий за скрытие 
элемента активному табу и активирует выбранный таб.

## Installation

Для установки скопируйте файл в каталог с проектом, например "./static/js/"
Для подключения к проекту используйте динамический импорт, например:
  ```js
  import('../js/tabEvent.js')
    .then(module => {
      module.tabEvent();
    })
    .catch(err => {
      console.log(err.message);
    });
  ```

## Usage

1. Необходимо в верстке установить классы для:
- контейнера заголовков (кнопок) табов;
- кнопок табов;
- контента табов;

2. Создать стили для классов show и hide реализующие функционал
проявления и скрытия контента табов соответственно.
Пример:
```css
  .hide {
    display: none;
  }
  .show {
    display: flex;
  }
  ```

3. В модуле в разделе INIT CONSTANTS прописать наименования классов
созданные в п.1 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

v. 1.0.0

## License

MIT
