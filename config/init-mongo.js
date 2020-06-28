debug.createUser({
    user: 'admin',
    pwd: 'password',
    roles: [
        {
            role: 'readWrite',
            db: 'api'
        }
    ]
})