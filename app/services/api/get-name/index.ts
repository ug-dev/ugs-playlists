import ApiInstance from '../api';
import { Slug } from '../api-slug';
import * as Types from '../api.types';

export interface GetNameSuccessResponse extends Types.ApiOkResponse {
  uid: string;
  firstName: string;
}

export type GetNameResult = GetNameSuccessResponse | Types.GeneralApiProblem;

export async function getName(): Promise<GetNameResult> {
  const result = await ApiInstance.get<GetNameResult>({
    slug: Slug.getName,
  });
  return result;
}
