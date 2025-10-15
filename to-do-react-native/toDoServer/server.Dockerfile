# --- Build Stage ---
FROM maven:3.8.3-openjdk-17-slim AS build

WORKDIR /app

# Copy pom.xml and download dependencies
COPY ./pom.xml .
RUN mvn dependency:go-offline -B

# Copy the source code
COPY ./src ./src

# Build the application and skip tests
RUN mvn package -Dmaven.test.skip

# --- Run Stage ---
FROM openjdk:17

WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/toDoServer.jar ./app.jar

# Run the Spring Boot application with the prod profile
CMD ["java", "-Dspring.profiles.active=prod", "-jar", "app.jar"]
