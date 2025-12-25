export function fetchUsersApi() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка загрузки пользователей');
      }
      return response.json();
    });
}
