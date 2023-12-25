import { NextResponse } from "next/server"
import { z } from "zod"
import axios from "axios"

export async function POST(request:Request) {
    const WEBHOOK_URL = process.env.WEBHOOK_URL!

    const bodySchema = z.object({
    name: z.string(),
    email: z.string(),
    subject: z.string(),
  });

  try {
    const body = await request.json();
    const { name, email, subject} = bodySchema.parse(body);

    const discordUserdata = {
      embeds: [
        {
          title: 'Mensagem',
          description: '',
          color: 0x2f54c1,
          fields: [
            { name: 'Nome', value: name, inline: true },
            { name: 'Email', value: email, inline: true },
            { name: 'Mensagem', value: subject },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, discordUserdata);
    
    return NextResponse.json({
        message:'Mensagem enviada com sucesso'
    })
    }

    catch (err){
        console.error(err)
        return NextResponse.error()
    }
}