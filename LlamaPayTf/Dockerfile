# Build stage
##FROM eclipse-temurin:17-jdk as builder
#WORKDIR /app
#COPY . .
#RUN chmod +x mvnw
#RUN ./mvnw clean package -DskipTests

###Runtime stage
##FROM eclipse-temurin:17-jre
##WORKDIR /app
##COPY --from=builder /app/target/*.jar app.jar
##EXPOSE 8080
##ENTRYPOINT ["java", "-jar", "app.jar"]

FROM openjdk:24 AS build
WORKDIR /app
COPY . .

FROM openjdk:24 AS build
WORKDIR /app
COPY . .

FROM openjdk:24
WORKDIR /app
COPY --from=build /app/target/LlamaPayTf-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "app.jar"]
