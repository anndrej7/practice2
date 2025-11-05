import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('test_6f5a065893354796951364583073437b');

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();
    
    const response = await resend.emails.send({
      from: "upit@timdmedical.rs",
      to: "ordinacija.timdmedical@gmail.com",
      subject: `📋 Nova poruka od ${name} - TIM-D MEDICAL`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; padding: 20px; border-radius: 10px; background: linear-gradient(135deg, #F0FDF4 0%, #F8F9FA 100%);">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #039F87; margin: 0; font-size: 24px;">📋 Nova poruka - TIM-D MEDICAL</h2>
            <p style="color: #6C757D; margin: 5px 0 0 0; font-size: 14px;">Medicinske usluge u Leskovcu</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(3, 159, 135, 0.1);">
            <div style="margin-bottom: 15px;">
              <strong style="color: #2C3E50;">👤 Ime:</strong> 
              <span style="color: #6C757D; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #2C3E50;">📧 Email:</strong> 
              <span style="color: #6C757D; margin-left: 10px;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #2C3E50;">📱 Telefon:</strong> 
              <span style="color: #6C757D; margin-left: 10px;">${phone}</span>
            </div>
            
            ${service ? `<div style="margin-bottom: 15px;">
              <strong style="color: #2C3E50;">🎪 Izabrana usluga:</strong> 
              <span style="color: #6C757D; margin-left: 10px;">${service}</span>
            </div>` : ''}
            
            ${message ? `<div style="margin-bottom: 15px;">
              <strong style="color: #2C3E50;">💭 Poruka:</strong>
            </div>
            <div style="background: #F0FDF4; padding: 15px; border-radius: 8px; border-left: 4px solid #039F87; margin-bottom: 20px;">
              <p style="margin: 0; color: #2C3E50; white-space: pre-wrap;">${message}</p>
            </div>` : ''}
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid #E5E5E5;">
            <p style="font-size: 12px; color: #039F87; margin: 0;">
              ✨ Ova poruka je automatski generisana putem sajta www.timdmedical.rs ✨
            </p>
            <p style="font-size: 11px; color: #6C757D; margin: 5px 0 0 0;">
              Kontakt: 063/800-33-88, 016/644-154 | Instagram: @ordinacije_timd_medical | Prvomajska 71, Leskovac
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