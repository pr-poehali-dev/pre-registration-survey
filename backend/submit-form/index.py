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
        phone = body.get('phone', '')
        service_type = body.get('serviceType', '')
        preferred_time = body.get('preferredTime', '')
        experience = body.get('experience', '')
        goals = body.get('goals', '')
        additional_info = body.get('additionalInfo', '')
        
        service_names = {
            'consultation': 'Консультация',
            'training': 'Тренировка',
            'program': 'Программа на месяц',
            'other': 'Другое'
        }
        
        time_names = {
            'morning': 'Утро (9:00 - 12:00)',
            'day': 'День (12:00 - 17:00)',
            'evening': 'Вечер (17:00 - 20:00)'
        }
        
        service_label = service_names.get(service_type, service_type)
        time_label = time_names.get(preferred_time, preferred_time)
        
        message = f"""🆕 Новая заявка на предзапись!

👤 Имя: {name}
📱 Телефон: {phone}

💼 Услуга: {service_label}
⏰ Удобное время: {time_label}

📝 Опыт:
{experience}

🎯 Цели:
{goals}"""
        
        if additional_info:
            message += f"\n\n💬 Дополнительно:\n{additional_info}"
        
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
