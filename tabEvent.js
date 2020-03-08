export function tabEvent() {
  
    /* 
    Модуль для работы блока с табами. При старте скрипта скрывает все tabContent кроме самого первого
    Перед использованием необходимо выполнить настройки:
    1. Установить константы (classTabContHide, classTabContShow) классов 
    отвечающих в вашей верстке за скрытие/расскрытие tabContent
    2. Установить константы (classTabContainer, classTab, classTabContent) классов
    соответствующих в вашей верстке следующим элементам:     
     - tabContainer - Контейнер для Табов (tab), на него вешается event click
     - tab - собственно сами Табы. 
     Количество и порядок tab должен соответствовать количеству и порядку tabContent!
     - tabContent - контент который показывается при клике на tab. 
    Внимание! модуль не работает с динанамическим контентом!
    */

    // INIT CONSTANTS
    const classTabContHide = 'hide',  //Класс для скрытия блока контента
        classTabContShow = 'show',    //Класс для показа блока контента
        classTabContainer = 'info-header', //Класс для tabContainer
        classTab = 'info-header-tab', //Класс для tab
        classTabContent = 'info-tabcontent'; //Класс для tabContent
    //END INIT CONSTANTS

    const tabContainer = document.querySelector(`.${classTabContainer}`),
        tab = document.querySelectorAll(`.${classTab}`),
        tabContent = document.querySelectorAll(`.${classTabContent}`);
            
    //Удаляем при наличии класс hide и устанавливаем при отсутствии класс show 
    function onShow(element) {
        if (element.classList.contains(classTabContHide)) {
            element.classList.remove(classTabContHide);
        }
        if (!element.classList.contains(classTabContShow)) {
            element.classList.add(classTabContShow);
        }
    }

    //Удаляем при наличии класс show и устанавливаем при отсутствии класс hide 
    function onHide(element) {
        if (element.classList.contains(classTabContShow)) {
            element.classList.remove(classTabContShow);
        }
        if (!element.classList.contains(classTabContHide)) {
            element.classList.add(classTabContHide);
        }
    }

    //Обработчик события click по tab. 
    tabContainer.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target && target.classList.contains(classTab)) {
            const activTabContent = document.querySelector(`.${classTabContent}.${classTabContShow}`);
            
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    if (activTabContent !== tabContent[i]) { 
                        onHide(activTabContent);
                        onShow(tabContent[i]);
                    }
                      break;                 
                } 
            }
        }
    });

    //Инициализируем tabContent при старте скрипта
    (() => {
        for (let i = 1; i < tabContent.length; i++) {
            onHide(tabContent[i]);    
        }
        onShow(tabContent[0]);
    })();
}