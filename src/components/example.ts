const suma = (n1: number, n2?: number): number => {
  if (!n2) {
    return n1;
  }
  return n1 + n2;
};
suma(1, 2);
