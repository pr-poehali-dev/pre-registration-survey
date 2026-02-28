import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    """Обработка отправки анкеты и отправка уведомления в Telegram"""
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        name = body.get('name', '')
        telegram_username = body.get('telegramUsername', '')
        niche = body.get('niche', '')
        time_in_niche = body.get('timeInNiche', '')
        sales_status = body.get('salesStatus', '')
        product_type = body.get('productType', '')
        channel_link = body.get('channelLink', '')
        sales_difficulties = body.get('salesDifficulties', '')
        tracking_goals = body.get('trackingGoals', [])
        tracking_format = body.get('trackingFormat', '')
        ready_to_start = body.get('readyToStart', '')
        
        time_in_niche_names = {
            'less-than-1-year': 'До 1 года',
            '1-2-years': '1-2 года',
            'more-than-2-years': 'Более 2х лет'
        }
        
        sales_status_names = {
            'no-sales': 'Нет продаж совсем',
            'rare-sales': 'Редкие продажи по сарафану',
            'inconsistent': 'То густо, то пусто',
            'want-to-scale': 'Хочу масштабироваться'
        }
        
        product_type_names = {
            'no-product': 'Нет продукта',
            'consultations': 'Консультации (сессии)',
            'group-programs': 'Групповые программы',
            'individual-work': 'Индивидуальная работа (наставничество, сопровождение)'
        }
        
        tracking_format_names = {
            'test-drive': 'Тест-драйв',
            'group-format': 'Групповой формат',
            'individual': 'Индивидуальная работа'
        }
        
        tracking_goals_text = '\n'.join([f'— {goal}' for goal in tracking_goals]) if tracking_goals else ''
        
        message = f"""🔥 <b>Новая заявка на Трекинг!</b>

<b>Имя:</b>
{name}

<b>Никнейм в Телеграм:</b>
{telegram_username}

<b>Ниша:</b>
{niche}

<b>Ссылка на канал:</b>
{channel_link}"""

        if time_in_niche:
            message += f"\n\n<b>Сколько времени в нише:</b>\n{time_in_niche_names.get(time_in_niche, time_in_niche)}"

        if sales_status:
            message += f"\n\n<b>Ситуация с продажами сейчас:</b>\n{sales_status_names.get(sales_status, sales_status)}"

        if product_type:
            message += f"\n\n<b>Продукт:</b>\n{product_type_names.get(product_type, product_type)}"

        if sales_difficulties:
            message += f"\n\n<b>С какими проблемами сталкиваетесь в продажах / трафике / контенте:</b>\n{sales_difficulties}"

        if tracking_goals_text:
            message += f"\n\n<b>Какие задачи хотите решить на трекинге:</b>\n{tracking_goals_text}"

        if tracking_format:
            message += f"\n\n<b>Какой формат трекинга больше подходит:</b>\n{tracking_format_names.get(tracking_format, tracking_format)}"

        if ready_to_start:
            message += f"\n\n<b>Готов(-а) ли в ближайшие 2 недели зайти в работу:</b>\n{ready_to_start}"
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if bot_token and chat_id:
            telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
            
            params = {
                'chat_id': chat_id,
                'text': message,
                'parse_mode': 'HTML'
            }
            
            data = urllib.parse.urlencode(params).encode('utf-8')
            req = urllib.request.Request(telegram_url, data=data, method='POST')
            
            try:
                with urllib.request.urlopen(req, timeout=10) as response:
                    telegram_response = response.read()
            except Exception as telegram_error:
                print(f"Telegram error: {telegram_error}")
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': False,
                'error': str(e)
            }),
            'isBase64Encoded': False
        }