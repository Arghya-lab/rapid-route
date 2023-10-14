import { format } from "date-fns";

const humanReadableDate = (isoDate) => {
  return format(new Date(isoDate), "PP");
};
export default humanReadableDate;
