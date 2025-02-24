import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, phone, type, lang = 'en' } = await request.json();

    const isSpanish = lang === 'es';
    const emailConfig = type === 'job_application' 
      ? {
          subject: isSpanish ? 'Bienvenido a 9th Avenue - Aplicación Recibida' : 'Welcome to 9th Avenue - Application Received',
          html: `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #001B5E; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #432C7A; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #F1EEF3; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
    .form-data { background: white; padding: 15px; margin: 15px 0; border-radius: 4px; }
    .form-field { margin: 10px 0; }
    .field-label { font-weight: bold; color: #432C7A; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>9th Avenue</h1>
    </div>
    <div class="content">
      <h2>${isSpanish ? '¡Bienvenido al Equipo!' : 'Welcome to the Team!'}</h2>
      <p>${isSpanish ? 'Estimado' : 'Dear'} ${name},</p>
      <p>${isSpanish 
        ? '¡Gracias por aplicar para unirte a nuestro equipo en 9th Avenue! Hemos recibido tu aplicación y estamos emocionados de tenerte a bordo.' 
        : 'Thank you for applying to join our team at 9th Avenue! We\'ve received your application and we\'re excited to have you on board.'}</p>
      
      <div class="form-data">
        <h3>${isSpanish ? 'Datos de tu aplicación:' : 'Your application details:'}</h3>
        <div class="form-field">
          <div class="field-label">${isSpanish ? 'Nombre:' : 'Name:'}</div>
          <div>${name}</div>
        </div>
        <div class="form-field">
          <div class="field-label">${isSpanish ? 'Correo electrónico:' : 'Email:'}</div>
          <div>${email}</div>
        </div>
        ${phone ? `
        <div class="form-field">
          <div class="field-label">${isSpanish ? 'Teléfono:' : 'Phone:'}</div>
          <div>${phone}</div>
        </div>
        ` : ''}
        <div class="form-field">
          <div class="field-label">${isSpanish ? 'Mensaje:' : 'Message:'}</div>
          <div>${message}</div>
        </div>
      </div>

      <p>${isSpanish
        ? 'Como se mencionó en nuestra publicación de trabajo, no hay necesidad de entrevistas o pasos adicionales. ¡Ya eres oficialmente parte de nuestro equipo!'
        : 'As mentioned in our job posting, there\'s no need for interviews or additional steps. You\'re now officially part of our team!'}</p>
      <p>${isSpanish
        ? 'En los próximos días, recibirás más información sobre cómo comenzar y cómo empezar a trabajar con clientes.'
        : 'In the coming days, you\'ll receive more information about getting started and how to begin working with clients.'}</p>
      <p>${isSpanish ? '¡Bienvenido!' : 'Welcome aboard!'}</p>
      <p>${isSpanish ? 'Saludos cordiales' : 'Best regards'},<br>The 9th Avenue Team</p>
    </div>
    <div class="footer">
      <p>© 2024 9th Avenue. ${isSpanish ? 'Todos los derechos reservados' : 'All rights reserved'}.</p>
    </div>
  </div>
</body>
</html>
          `
        }
      : {
          subject: isSpanish ? 'Gracias por contactar a 9th Avenue' : 'Thank you for contacting 9th Avenue',
          html: `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #001B5E; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #432C7A; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #F1EEF3; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
    .form-data { background: white; padding: 15px; margin: 15px 0; border-radius: 4px; }
    .form-field { margin: 10px 0; }
    .field-label { font-weight: bold; color: #432C7A; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>9th Avenue</h1>
    </div>
    <div class="content">
      <h2>${isSpanish ? '¡Gracias por tu mensaje!' : 'Thank You for Your Message!'}</h2>
      <p>${isSpanish ? 'Estimado' : 'Dear'} ${name},</p>
      <p>${isSpanish
        ? '¡Gracias por contactar a 9th Avenue! Hemos recibido tu mensaje y apreciamos tu interés en nuestros servicios.'
        : 'Thank you for reaching out to 9th Avenue! We\'ve received your message and appreciate your interest in our services.'}</p>

      <div class="form-data">
        <h3>${isSpanish ? 'Detalles de tu mensaje:' : 'Your message details:'}</h3>
        <div class="form-field">
          <div class="field-label">${isSpanish ? 'Nombre:' : 'Name:'}</div>
          <div>${name}</div>
        </div>
        <div class="form-field">
          <div class="field-label">${isSpanish ? 'Correo electrónico:' : 'Email:'}</div>
          <div>${email}</div>
        </div>
        <div class="form-field">
          <div class="field-label">${isSpanish ? 'Mensaje:' : 'Message:'}</div>
          <div>${message}</div>
        </div>
      </div>

      <p>${isSpanish
        ? 'Nuestro equipo revisará tu consulta y te responderá lo antes posible.'
        : 'Our team will review your inquiry and get back to you as soon as possible.'}</p>
      <p>${isSpanish ? 'Saludos cordiales' : 'Best regards'},<br>The 9th Avenue Team</p>
    </div>
    <div class="footer">
      <p>© 2024 9th Avenue. ${isSpanish ? 'Todos los derechos reservados' : 'All rights reserved'}.</p>
    </div>
  </div>
</body>
</html>
          `
        };
    await resend.emails.send({
      from: 'your@email.com',
      to: [email],
      subject: emailConfig.subject,
      html: emailConfig.html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error });
  }
} 