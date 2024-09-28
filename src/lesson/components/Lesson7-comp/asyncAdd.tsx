const asyncAdd = (count: number = 0) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      return resolve(count);
    }, Math.random() * 1000);
  });
}

const double = (a: number) => {
  return (a * 2);
}

export { asyncAdd, double };
export default "this is Dynamic Import!";