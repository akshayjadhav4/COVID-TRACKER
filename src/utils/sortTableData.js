export const sortTableData = (data) => {
  if (data) {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.cases.active > b.cases.active) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  } else {
    return;
  }
};
