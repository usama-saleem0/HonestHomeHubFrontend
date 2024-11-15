export const hideEmailMethod = (email) => {
  return email?.replace(
    /(.)(.*)(.@.*)/,
    (match, firstChar, middleChars, lastChars) => {
      const maskedMiddle = middleChars.replace(/./g, "*"); // Middle characters ko * se replace karein
      return firstChar + maskedMiddle + lastChars;
    }
  );
};
