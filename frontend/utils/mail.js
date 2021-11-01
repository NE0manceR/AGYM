import { postAPI } from './api';



function sendEmail(userName, userEmail) {
  return postAPI(`/email`, {
    to: userEmail,
    from: 'noreply.agym@gmail.com',
    subject: `Зворотній зв'язок від agym.com.ua`,
    text: '',
    html: emailTemplate(userName),
  });
}

function sendToAdminEmail() {
  return postAPI(`http://admin.new.agym.com.ua/email`, {
    to: 'noreply.agym@gmail.com',
    from: 'noreply.agym@gmail.com',
    subject: `Зворотній зв'язок від agym.com.ua`,
    text: '',
    html: emailTemplate('userName'),
  });
}

export { sendEmail, sendToAdminEmail };
let emailTemplate = (name) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body style="font-family: 'Lato', sans-serif;">
    <div style="max-width: 680px; background-color: #DFDFDF; margin: 0 auto;">
      <div style="max-width: 600px; background-color: #212A35; height: 293px; margin: 0 auto; padding-top: 40px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
        <img style="display: block; margin: 0 auto;" src="./Logo 2019-01-01.svg" alt="img">
        <p style="font-size: 24px; font-weight: 700; color: white; text-align: center; margin: 0;">Пробне тренування</p>
      </div>
      <div style="padding: 55px 0 35px 0; max-width: 600px; background-color: white; margin: 0 auto;">
        <div style="max-width: 538px; margin: 0 auto;">
          <span style="font-weight: 700; display: block; margin-bottom: 16px;">Привіт {contactfield=firstname},</span>
          <span style="margin-bottom: 16px; display: block;">AGYM отримав запит на <strong>ПРОБНЕ ТРЕНУВАННЯ</strong>  і зателефонує найближчим часом для підтвердження запису та узгодження деталей</span>
          <span style="margin-bottom: 16px; display: block;">А поки ти очікуєш на дзвінок, можеш зробити наступне:</span>
          <span style="margin-bottom: 16px; display: block;">Підписатись на наші соцмережі та бути з нами на хвилі спорту та здоров’я.</span>
          <a target="_blank" style="display: block; color: #2F80ED; text-decoration: none;" href="https://www.instagram.com/agym.lviv/">Instagram</a>
          <a target="_blank" style="display: block; color: #2F80ED; text-decoration: none; margin-bottom: 16px;" href="https://www.facebook.com/fitness.agym.lviv">Facebook</a>
          <span style="display: block;">А також підписуйся на наш  <a target="_blank" href="https://www.youtube.com/channel/UCnfSqcHUMT5Cyy4KXDXlVsw"style="color: #2F80ED; text-decoration: none;">YouTube</a></span>
        </div>
      </div>
      <div style="max-width: 600px; padding: 24px 0 ; margin: 0 auto; display: flex; justify-content: space-between">
        <div>
          <span style="font-weight: 400; display: block; color: #575563; font-size: 14px;">AGYM, Кониського 9, Львів</span>
          <a style="font-weight: 400; color: #575563; font-size: 14px; text-decoration: none;" href="">Unsubscribe</a>
          <span style="font-weight: 400; color: #575563; font-size: 14px;"> |</span>
          <a style="font-weight: 400; color: #575563; font-size: 14px; text-decoration: none;" href="https://g.page/fitness-isadora-lviv?share">View in browser</a>
        </div>
        <div>
          <a target="_blank" href="https://www.facebook.com/fitness.agym.lviv"><img src="./facebook.png" alt="facebook"></a>
          <a target="_blank" href="https://www.instagram.com/agym.lviv/"><img src="./instagram.png" alt="instagram"></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCnfSqcHUMT5Cyy4KXDXlVsw"><img src="./youtube.png" alt="youtube"></a>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
};
