// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

// sends email to me - used by contact form

type Response = {
  success: boolean
}

const transporter = nodemailer.createTransport({
  // @ts-ignore
  host: process.env.MAIL_SERVER as string,
  port: process.env.MAIL_PORT as string,
  secure: true,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method !== "POST") {
    res.status(400).json({ success: false })
    return
  }
  let text = ""

  for (const key in req.body) {
    text += `${key}: ${req.body[key]}
`
  }

  const info = await transporter.sendMail({
    from: `"Limifyze Web" <${process.env.MAIL_ADDRESS}>`,
    to: "info@limifyze.com",
    subject: "Website - Anfrage",
    text,
  })

  if (info.rejected.length > 0) {
    res.status(500).json({ success: false })
    return
  }

  // send email to me
  res.status(200).json({ success: true })
}
