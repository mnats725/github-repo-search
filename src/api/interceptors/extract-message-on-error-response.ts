import type { AxiosError } from "axios";

import type { ServiceError } from "../../types/service-error.type";

// Функция для извлечения сообщения из ошибки ответа
export const extractMessageOnErrorResponse = async (
  error: AxiosError<ServiceError>
): Promise<AxiosError<ServiceError>> => {
  const { response } = error;

  // Если в ошибке есть ответ
  if (response) {
    // Извлекаем сообщение, удаляя всё до последнего двоеточия
    const extractedMessage = response.data.message.split(":").at(-1)?.trim() || "";

    // Создаем новый объект ошибки с извлеченным сообщением
    const errorWithExtractedMessage = {
      ...response.data,
      message: extractedMessage,
    };

    // Возвращаем ошибку с новым сообщением
    return Promise.reject(errorWithExtractedMessage);
  }

  // Если ответа нет, возвращаем исходную ошибку
  return Promise.reject(error);
};
