import { session_expired } from "../constants/constants";
import { save_tokens_constant } from "../constants/constants";

export const exit_session = () => {
  localStorage.removeItem(save_tokens_constant);
  localStorage.setItem(session_expired, true);
  window.location.reload();
};
