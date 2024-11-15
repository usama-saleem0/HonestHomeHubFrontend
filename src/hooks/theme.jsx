import { useSelector } from "react-redux";

const useTheme = () => {
  const themeSlice = useSelector((store) => store.theme);
  //   console.log({ themeSlice });
  return themeSlice[themeSlice.theme];
};
export default useTheme;
