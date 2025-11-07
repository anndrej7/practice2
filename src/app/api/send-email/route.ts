import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('test_6f5a065893354796951364583073437b');

export async function POST(req: Request) {
  try {
    // Podržavamo oba formata: ime/name, poruka/message
    const data = await req.json();
    const name = data.name || data.ime || 'Nepoznato';
    const email = data.email || '';
    const message = data.message || data.poruka || '';
    const phone = data.phone || '';
    const service = data.service || '';
    
    const response = await resend.emails.send({
      from: "upit@timdmedical.rs",
      to: "ordinacija.timdmedical@gmail.com",
      subject: `Nova poruka od ${name} - TIM-D MEDICAL`,
      html: `
        <div style="font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; padding: 30px; border-radius: 12px; background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%);">
          <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #039F87;">
            <h2 style="color: #039F87; margin: 0; font-size: 28px; font-weight: 700;">Nova poruka - TIM-D MEDICAL</h2>
            <p style="color: #666; margin: 8px 0 0 0; font-size: 14px;">Specijalistička ordinacija u Leskovcu</p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 15px rgba(3, 159, 135, 0.1);">
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <strong style="color: #039F87; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Ime:</strong> 
              <span style="color: #333; font-size: 16px; font-weight: 500;">${name}</span>
            </div>
            
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <strong style="color: #039F87; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Email:</strong> 
              <a href="mailto:${email}" style="color: #039F87; font-size: 16px; text-decoration: none; font-weight: 500;">${email}</a>
            </div>
            
            ${phone ? `<div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <strong style="color: #039F87; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Telefon:</strong> 
              <a href="tel:${phone}" style="color: #039F87; font-size: 16px; text-decoration: none; font-weight: 500;">${phone}</a>
            </div>` : ''}
            
            ${service ? `<div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <strong style="color: #039F87; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Izabrana usluga:</strong> 
              <span style="color: #333; font-size: 16px; font-weight: 500;">${service}</span>
            </div>` : ''}
            
            ${message ? `<div style="margin-top: 20px;">
              <strong style="color: #039F87; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 12px;">Poruka:</strong>
              <div style="background: linear-gradient(135deg, rgba(3, 159, 135, 0.05) 0%, rgba(0, 225, 178, 0.05) 100%); padding: 20px; border-radius: 8px; border-left: 4px solid #00E1B2;">
                <p style="margin: 0; color: #333; white-space: pre-wrap; font-size: 15px; line-height: 1.8;">${message}</p>
              </div>
            </div>` : ''}
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <p style="font-size: 12px; color: #00E1B2; margin: 0; font-weight: 500;">
              Ova poruka je automatski generisana putem sajta www.timdmedical.rs
            </p>
            <p style="font-size: 11px; color: #999; margin: 8px 0 0 0; line-height: 1.6;">
              Kontakt: 063/800-33-88, 016/644-154<br>
              Instagram: @ordinacije_timd_medical<br>
              Adresa: Prvomajska 71, Leskovac
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Nepoznata greška' 
    }, { status: 500 });
  }
}