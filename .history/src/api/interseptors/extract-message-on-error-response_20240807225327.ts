import type { AxiosError } from "axios";

import type { ServiceError

export const extractMessageOnErrorResponse = async (
  error: AxiosError<ServiceError>,
  getErrorMessage: (errorMessage: string) => string | undefined
): Promise<AxiosError<ServiceError>> => {
  const { response } = error;

  if (response) {
    const extractedMessage = response.data.message.split(":").at(-1)?.trim() || "";
    const errorWithExtractedMessage = {
      ...response.data,
      message: getErrorMessage(extractedMessage),
    };

    return Promise.reject(errorWithExtractedMessage);
  }

  return Promise.reject(error);
};
