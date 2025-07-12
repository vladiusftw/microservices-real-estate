# Get Started

## 1. Download dependencies for both projects

```
cd api-gateway && npm i && cd ..
```

```
cd properties-service && npm i && cd ..
```

## 2. Startup RabbitMQ Server (Mac way)

### If not downloaded
```
brew install rabbitmq
```
### Start the server
```
brew services start rabbitmq
```

### Check if it's running (on port 5672)
```
rabbitmqctl status
```

## 3. Add .env variable for properties-service prisma style as shown in .env.example

## 4. Start both projects
```
cd api-gateway && npm run start:dev && cd ..
```
```
cd properties-service && npm run start:dev && cd ..
```

## 5. Load up swagger to test the routes
### http://localhost:3000/api/docs


