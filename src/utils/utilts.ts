import { format } from "date-fns";

const formatDate = (date: string): string => {
  const parsed = new Date(date);
  if (!date || isNaN(parsed.getTime())) return "Invalid date";
  return format(parsed, "dd/MM/yyyy");
};

export default formatDate;



