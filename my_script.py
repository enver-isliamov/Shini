const TelegramBot = require('node-telegram-bot-api');
const { google } = require('googleapis');

// Конфигурация бота
const bot = new TelegramBot('YOUR_TELEGRAM_BOT_TOKEN', { polling: true });

// Обработка входящих сообщений
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Отправка клавиатуры с кнопкой для номера телефона
  bot.sendMessage(chatId, 'Отправьте свой номер телефона', {
    reply_markup: {
      keyboard: [[{ text: 'Отправить номер телефона', request_contact: true }]],
    },
  });
});

// Обработка входящих контактов
bot.on('contact', (msg) => {
  const chatId = msg.chat.id;
  const phoneNumber = msg.contact.phone_number;

  // Работа с Google Sheets API
  // ...

  // Пометить заявку как новую
  // ...

  // Отправить подтверждение
  bot.sendMessage(chatId, 'Ваш номер телефона принят как новая заявка');
});
