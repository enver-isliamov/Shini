 from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext, ConversationHandler, CallbackQueryHandler
from telegram import InlineKeyboardMarkup, InlineKeyboardButton

# Определение стадий разговора
PHONE = range(1)

# Обработчик команды /start
def start(update: Update, context: CallbackContext) -> int:
    user = update.message.from_user
    update.message.reply_text(
        f"Привет, {user.first_name}! Я бот для сбора номеров телефонов. Жми на кнопку ниже, чтобы отправить свой номер телефона.",
        reply_markup=InlineKeyboardMarkup([[InlineKeyboardButton("Отправить номер телефона", callback_data='phone')]])
    )
    return PHONE

# Обработка полученного номера телефона
def phone(update: Update, context: CallbackContext) -> int:
    user = update.message.from_user
    user_phone = update.message.contact.phone_number
    # Здесь добавьте код для отправки номера в Google таблицу
    update.message.reply_text(f"Спасибо, {user.first_name}! Твой номер телефона: {user_phone} сохранен.")
    return ConversationHandler.END

# Функция для обработки нажатий на кнопки
def button_click(update: Update, context: CallbackContext) -> None:
    query = update.callback_query
    if query.data == 'phone':
        user = query.from_user
        query.edit_message_text(
            text=f"{user.first_name}, нажми на кнопку ниже, чтобы отправить свой номер телефона.",
            reply_markup=InlineKeyboardMarkup([[InlineKeyboardButton("Отправить номер телефона", request_contact=True)]])
        )

# Главная функция
def main() -> None:
    # Токен вашего бота
    updater = Updater("6473374979:AAH8OHCxWN2kO0ep9wrbLXolk2ys4__GLqg")
    dispatcher = updater.dispatcher

    # Регистрация обработчиков
    conv_handler = ConversationHandler(
        entry_points=[CommandHandler('start', start)],
        states={
            PHONE: [MessageHandler(Filters.contact, phone)],
        },
        fallbacks=[]
    )
    dispatcher.add_handler(conv_handler)

    dispatcher.add_handler(CallbackQueryHandler(button_click))

    # Запуск бота
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
