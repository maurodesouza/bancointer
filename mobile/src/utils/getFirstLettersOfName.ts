const getFirstLetterOfName = (fullName: string): string => {
  const letters = fullName.replace(
    /([a-zà-ú])([a-zà-ú]*\s?)([a-zà-ú]{2,3}\s)?([a-zà-ú])?(.+)?/i,
    '$1$4',
  );

  return letters;
};

export default getFirstLetterOfName;
