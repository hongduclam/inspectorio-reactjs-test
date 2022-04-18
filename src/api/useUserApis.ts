import useFetch, {State} from "../utils/useFetch";

const USER_API_URL = `https://api.github.com/users`

export interface UserModel {
  id: number,
  avatar_url: string,
  name: string,
  login: string,
  location: string
}

export function useGetAllUsers(): State<UserModel[]> {
  return useFetch(USER_API_URL)
}

export function useGetUserDetail(userId: string): State<UserModel>{
  return useFetch(`${USER_API_URL}/${userId}`)
}
