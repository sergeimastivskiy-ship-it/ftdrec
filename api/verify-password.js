// Vercel Serverless Function - Проверка пароля для настроек/зарплаты тим-лидера
// Пароли хранятся в переменных окружения Vercel, НЕ в коде!

export default function handler(req, res) {
    // CORS заголовки
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Обработка preflight запроса
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { password, type } = req.body;

        if (!password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Password is required' 
            });
        }

        // Получаем пароль из переменных окружения в зависимости от типа
        let expectedPassword;
        
        switch (type) {
            case 'settings':
                // Пароль для настроек (тот же что и для зарплаты тим-лидера)
                expectedPassword = process.env.TEAM_LEADER_SALARY_PASSWORD;
                break;
            case 'team_leader_salary':
                expectedPassword = process.env.TEAM_LEADER_SALARY_PASSWORD;
                break;
            default:
                return res.status(400).json({ 
                    success: false, 
                    error: 'Invalid password type' 
                });
        }

        if (!expectedPassword) {
            console.error('Password not configured for type:', type);
            return res.status(500).json({ 
                success: false, 
                error: 'Password not configured' 
            });
        }

        if (password === expectedPassword) {
            // Генерируем токен доступа
            const accessToken = Buffer.from(`${type}:${Date.now()}`).toString('base64');
            
            return res.status(200).json({ 
                success: true, 
                accessToken,
                type,
                message: 'Password verified'
            });
        } else {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid password' 
            });
        }
    } catch (error) {
        console.error('Verify password error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
}
