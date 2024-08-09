npx concurrently "npm --prefix auth-service run start:dev" `
                  "npm --prefix gateway-devv run start:dev" `
                  "npm --prefix notification-service run start:dev" `
                  "npm --prefix user-service run start:dev" `
                  "npm --prefix course-service run start:dev" `
                  "npm --prefix payment-service run start:dev"