import { db } from "./admin";
const getTicket = async (ticket: string, getInfo: boolean = true) => {
  if (!ticket) {
    return {
      invalid: true,
    };
  }
  if (isNaN(+ticket)) {
    return {
      invalid: true,
    };
  }
  const uid = await db
    .ref(`ticketToId/${+ticket}`)
    .once("value")
    .then((snap) => snap.val());
  if (!uid) {
    return {
      invalid: false,
      notFound: true,
    };
  }
  if (getInfo) {
    const thisTicket = await db
      .ref(`tickets/${uid}`)
      .once("value")
      .then((snap) => snap.val());
    return {
      invalid: false,
      notFound: false,
      ticketNum: +ticket,
      displayName: thisTicket.name,
      photoURL: thisTicket.photo,
    };
  } else {
    return {
      invalid: false,
      notFound: false,
    };
  }
};

export default getTicket;
