import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Mes Boucles et Moi <contact@mesbouclesetmoi.fr>",
      to: "laeptitchat29@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: `
Nom : ${name}
Email : ${email}

Message :
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
