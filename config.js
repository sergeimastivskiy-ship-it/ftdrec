// Конфигурационный файл - содержит чувствительную информацию
// ВАЖНО: Не коммитьте этот файл в публичный репозиторий!

window.ENV_CONFIG = {
    // Пользователи и пароли
    users: {
        'tim': { password: 'timpass2025' },
        '1': { password: '1' }
    },
    
    // Тимлид
    TEAM_LEADER_NAME: '',
    TEAM_LEADER_BASE_RATE: 900,
    TEAM_LEADER_SALARY_PASSWORD: '77777',
    
    // Дефолтные настройки
    DEFAULT_BASE_RATE: 800,
    
    // Тарифы
    DEFAULT_TARIFFS: [
        { min: 1, max: 4, baseRate: 800, bonusPerFTD: 55 },
        { min: 5, max: 7, baseRate: 800, bonusPerFTD: 60 },
        { min: 8, max: 12, baseRate: 900, bonusPerFTD: 70 },
        { min: 13, max: 19, baseRate: 1200, bonusPerFTD: 90 },
        { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 120 }
    ],
    
    // Доступные годы
    AVAILABLE_YEARS: [2024, 2025, 2026, 2027],
    
    // Менеджеры
    DEFAULT_MANAGERS: ['Александр Литвинов'],
    INITIAL_MANAGERS: [],
    
    // Бонусы и ставки
    INVALID_BONUS_PER_FTD: 20,
    TEAM_LEADER_PER_FTD: 30,
    TEAM_PLAN_BONUS_AMOUNT: 500,
    
    // Опции
    TRAFFIC_OPTIONS: ['Казатомпром', 'Нефтегаз', 'Газпром', 'Каспи', 'Ватсап'],
    COUNTRY_OPTIONS: ['Казахстан', 'Кыргызстан', 'Таджикистан', 'Белорусь', 'Монголия', 'Израиль', 'Литва'],
    
    // База данных
    DB_NAME: 'FTDTrackerDB',
    DB_VERSION: 1,
    STORE_NAME: 'data',
    MIGRATION_KEY: 'migration_completed'
};
