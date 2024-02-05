from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

# Токен вашего бота
TOKEN = "6473374979:AAH8OHCxWN2kO0ep9wrbLXolk2ys4__GLqg"

# Обработчик команды /start
def start(update: Update, context: CallbackContext) -> None:
    user = update.message.from_user
    update.message.reply_text(
        f"Привет, {user.first_name}! Выбери действие:",
        reply_markup={
            "keyboard": [["Калькулятор", "Оставить заявку"], ["Кнопка 3"]],
            "one_time_keyboard": True,
        },
    )

# Главная функция
def main() -> None:
    updater = Updater(TOKEN)
    dispatcher = updater.dispatcher

    dispatcher.add_handler(CommandHandler("start", start))

    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
