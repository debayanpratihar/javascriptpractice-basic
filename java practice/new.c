#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "YourWiFiSSID";
const char* password = "YourWiFiPassword";

// Server details
const char* serverName = "http://yourserver.com/update"; // Change this to your server endpoint

// Pins for sensors
const int soilMoisturePin = A0;
const int temperaturePin = A1;
const int humidityPin = A2;

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting...");
  }
  Serial.println("Connected to WiFi");

}

void loop() {
  // Read sensor data
  int soilMoisture = analogRead(soilMoisturePin);
  float temperature = analogRead(temperaturePin) * 0.48828125; // Convert ADC value to temperature in Celsius
  float humidity = analogRead(humidityPin) * 0.09765625; // Convert ADC value to relative humidity

  // Print sensor data
  Serial.print("Soil Moisture: ");
  Serial.println(soilMoisture);
  Serial.print("Temperature: ");
  Serial.println(temperature);
  Serial.print("Humidity: ");
  Serial.println(humidity);

  // Send data to server
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Construct URL with parameters
    String url = serverName;
    url += "?soil_moisture=";
    url += soilMoisture;
    url += "&temperature=";
    url += temperature;
    url += "&humidity=";
    url += humidity;

    Serial.print("Connecting to server: ");
    Serial.println(url);

    // Send the request
    http.begin(url);
    int httpResponseCode = http.GET();

    if (httpResponseCode > 0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
    } else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  } else {
    Serial.println("WiFi Disconnected");
  }

  // Delay before next reading
  delay(5000); // Adjust delay as per your requirement
}