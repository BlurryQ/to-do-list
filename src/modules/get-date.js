export default function formatDate(date) {
  const formatted = () => {
    const date = new Date();
    const day = _format(date.getDate());
    const month = _format(date.getMonth() + 1);
    const year = _format(date.getFullYear());
    return `${day}/${month}/${year}`;
  };
  const _format = (num) => {
    if (num < 10) return "0" + num;
    return num.toString();
  };

  return formatted(date);
}
