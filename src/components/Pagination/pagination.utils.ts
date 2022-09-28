export const getSections = (currentPage: string, total: string) => {
  if (Number(total) <= 5) {
    return {
      start: new Array(total).fill('1').map((_, i) => String(i + 1)),
      hasDelimiter: false,
      end: null
    };
  }
  if (Number(currentPage) > Number(total) - 5) {
    return {
      start: new Array(5)
        .fill(1)
        .map((_, i) => String(Number(total) - i))
        .reverse(),
      hasDelimiter: false,
      end: null
    };
  }
  return {
    start: new Array(3).fill(1).map((_, i) => String(Number(currentPage) + i)),
    hasDelimiter: true,
    end: [total]
  };
};
