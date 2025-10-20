import { format } from "date-fns";

const formatDate = (date: string): string => format(date, 'dd/MM/yyyy');

export default formatDate


