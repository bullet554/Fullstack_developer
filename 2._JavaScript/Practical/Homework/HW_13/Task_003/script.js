/* Задание №3
Рекурсивный поиск элемента по классу
Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в 
качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

Подсказка: Функция findElementByClass рекурсивно обходит дерево DOM, начиная с корневого элемента. Она проверяет каждый 
элемент на наличие указанного класса и, если находит совпадение, возвращает его. Если элемент с нужным классом не
найден, функция возвращает null.

Пример использования
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); // Ожидаемый вывод: элемент с классом 'my-class', если найден
 */


/**
 * Рекурсивно ищет первый элемент с указанным классом в дереве DOM.
 * @param {Element|null} root — корневой элемент для поиска
 * @param {string} className — имя класса для поиска
 * @returns {Element|null} — найденный элемент или null, если не найден
 */
function findElementByClass(root, className) {
    // Защита от null/undefined
    if (!root) {
        return null;
    }

    // Проверяем текущий элемент
    if (root.classList && root.classList.contains(className)) {
        return root;
    }

    // Рекурсивно проверяем дочерние элементы
    for (const child of root.children) {
        const found = findElementByClass(child, className);
        if (found) {
            return found; // Возвращаем первый найденный элемент
        }
    }

    return null; // Элемент не найден
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); // Ожидаемый вывод: элемент с классом 'my-class', если найден