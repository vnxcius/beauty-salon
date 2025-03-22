import { randomUUID } from "crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailVerification = async (email: string, url: string) => {
  const entityRefID = randomUUID();
  return await resend.emails.send({
    from: "Não Responda <no-reply@medellin.vncius.dev>",
    to: [email],
    subject: "Autorizar login em Medellin",
    text: `Clique no link para autorizar o login em Medellin: ${url}`,
    headers: {
      "X-Entity-Ref-ID": entityRefID,
    },
  });
};
