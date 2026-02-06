// Пример файла с секретными данными
// Скопируйте в secrets.js и заполните реальными паролями
// secrets.js НЕ попадает в git (указан в .gitignore)

window.APP_SECRETS = {
    // Пользователи и пароли для входа
    users: {
        'username1': { password: 'YOUR_PASSWORD_HERE' },
        'username2': { password: 'YOUR_PASSWORD_HERE' }
    },
    
    // Пароль для доступа к настройкам и зарплате тим-лидера
    TEAM_LEADER_SALARY_PASSWORD: 'YOUR_PASSWORD_HERE'
};
