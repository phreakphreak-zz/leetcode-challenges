const convertToListNode = (value) => {
  const arr = value.toString().split("");
  if (arr.length === 1) return new LinkedList(arr[0]).head;
  const { head } = arr
    .map((n) => +n)
    .reverse()
    .reduce((acc, current) => {
      if (!acc?.length) {
        const linked = new LinkedList(acc);
        linked.append(current);
        return linked;
      }
      acc.append(current);
      return acc;
    });
  return head;
};

export default convertToListNode;
