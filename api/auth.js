// Vercel Serverless Function - Авторизация пользователей
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
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Username and password are required' 
            });
        }

        // Пользователи из переменных окружения Vercel
        // Формат: USER_<USERNAME>_PASSWORD
        const users = {
            'tim': process.env.USER_TIM_PASSWORD,
            '1': process.env.USER_1_PASSWORD,
            'admin': process.env.USER_ADMIN_PASSWORD
        };

        const expectedPassword = users[username.toLowerCase()];

        if (!expectedPassword) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid credentials' 
            });
        }

        if (password === expectedPassword) {
            // Генерируем простой токен (в реальном приложении используйте JWT)
            const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
            
            return res.status(200).json({ 
                success: true, 
                token,
                username,
                message: 'Login successful'
            });
        } else {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid credentials' 
            });
        }
    } catch (error) {
        console.error('Auth error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
}
