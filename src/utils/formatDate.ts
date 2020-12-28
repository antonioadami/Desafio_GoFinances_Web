const formatDate = (date: string): string =>
  Intl.DateTimeFormat('pt-BR').format(new Date(date)); // TODO

export default formatDate;
