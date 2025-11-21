/* Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска) */


const musicCollection = {
    albums: [
        { title: "VII", artist: "[AMATORY]", year: "2008" },
        { title: "All Hope Is Gone (10th Anniversary)", artist: "Slipknot", year: "2008" },
        { title: "Bohemian Psycho", artist: "REDZED", year: "2019" },
        { title: "Как в старой сказке", artist: "Король и Шут", year: "2001" }
    ],
    [Symbol.iterator]() {
        const albums = this.albums; 
        let index = 0;
        return {
            next() {
                if (index < albums.length) { 
                    const album = albums[index];
                    index++;
                    return { value: album, done: false };
                }
                return { done: true };
            }
        };
    }
};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}