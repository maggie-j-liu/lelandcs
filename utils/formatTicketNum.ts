const formatTicketNum = (ticketNum: number) => {
  return ("" + ticketNum).padStart(6, "0");
};

export default formatTicketNum;
