// Пример конфигурационного файла — настройки приложения
// Скопируйте в config.js и заполните реальными значениями
// Также скопируйте secrets.example.js в secrets.js
// config.js и secrets.js НЕ попадают в git

window.ENV_CONFIG = {
    // ==========================================
    // ТИМЛИД
    // ==========================================
    TEAM_LEADER_NAME: 'Имя Тимлида',
    TEAM_LEADER_BASE_RATE: 900,
    
    // ==========================================
    // СТАВКИ И БОНУСЫ
    // ==========================================
    DEFAULT_BASE_RATE: 800,
    INVALID_BONUS_PER_FTD: 20,
    TEAM_LEADER_PER_FTD: 30,
    TEAM_PLAN_BONUS_AMOUNT: 500,
    
    // ==========================================
    // ОСНОВНЫЕ ТАРИФЫ
    // ==========================================
    DEFAULT_TARIFFS: [
        { min: 1, max: 4, baseRate: 800, bonusPerFTD: 55 },
        { min: 5, max: 7, baseRate: 800, bonusPerFTD: 60 },
        { min: 8, max: 12, baseRate: 900, bonusPerFTD: 70 },
        { min: 13, max: 19, baseRate: 1200, bonusPerFTD: 90 },
        { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 120 }
    ],
    
    // ==========================================
    // ПРЕДУСТАНОВЛЕННЫЕ НАБОРЫ УСЛОВИЙ (пресеты)
    // ==========================================
    MANAGER_TARIFF_PRESETS: {
        preset1: {
            name: 'Вариант 1',
            tariffs: [
                { min: 1, max: 4, baseRate: 1000, bonusPerFTD: 55 },
                { min: 5, max: 9, baseRate: 1100, bonusPerFTD: 60 },
                { min: 10, max: 12, baseRate: 1200, bonusPerFTD: 70 },
                { min: 13, max: 19, baseRate: 1300, bonusPerFTD: 90 },
                { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 120 }
            ]
        },
        preset2: {
            name: 'Вариант 2',
            tariffs: [
                { min: 1, max: 4, baseRate: 800, bonusPerFTD: 55 },
                { min: 5, max: 7, baseRate: 800, bonusPerFTD: 60 },
                { min: 8, max: 12, baseRate: 900, bonusPerFTD: 70 },
                { min: 13, max: 19, baseRate: 1200, bonusPerFTD: 90 },
                { min: 20, max: 999, baseRate: 1500, bonusPerFTD: 120 }
            ]
        },
        preset3: {
            name: 'Вариант 3',
            tariffs: [
                { min: 1, max: 2, baseRate: 500, bonusPerFTD: 25 },
                { min: 3, max: 5, baseRate: 500, bonusPerFTD: 45 },
                { min: 6, max: 7, baseRate: 500, bonusPerFTD: 65 },
                { min: 8, max: 999, baseRate: 700, bonusPerFTD: 65 }
            ]
        }
    },
    
    // ==========================================
    // МЕНЕДЖЕРЫ
    // ==========================================
    DEFAULT_MANAGERS: ['Менеджер 1', 'Менеджер 2'],
    INITIAL_MANAGERS: ['Менеджер 1'],
    
    // ==========================================
    // ГОДЫ
    // ==========================================
    AVAILABLE_YEARS: [2024, 2025, 2026, 2027],
    
    // ==========================================
    // ОПЦИИ ВЫБОРА
    // ==========================================
    TRAFFIC_OPTIONS: ['Трафик 1', 'Трафик 2', 'Трафик 3'],
    COUNTRY_OPTIONS: ['Страна 1', 'Страна 2', 'Страна 3'],
    
    // ==========================================
    // БАЗА ДАННЫХ (IndexedDB)
    // ==========================================
    DB_NAME: 'FTDTrackerDB',
    DB_VERSION: 1,
    STORE_NAME: 'data',
    MIGRATION_KEY: 'migration_completed'
};
