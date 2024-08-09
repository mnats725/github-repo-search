export const formatDate = (date: Date | null): string => {
  // Проверяем, если date равен null
  if (!date) return "Не указана";

  // Извлекаем день, месяц и год из объекта Date
  const day = date.getDate(); // Получаем день месяца (1-31)
  const month = date.getMonth() + 1; // Получаем месяц (0-11), добавляем 1 для получения формата 1-12
  const year = date.getFullYear(); // Получаем полный год (например, 2024)

  // Форматируем дату в строку формата 'D.M.YYYY'
  return `${day}.${month}.${year}`;
};
