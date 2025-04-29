#include <ESP8266WiFi.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

WiFiServer server(80);
const int ledPin = D1;

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  server.begin();
}

void loop() {
  WiFiClient client = server.available();
  if (!client) return;

  while (!client.available()) delay(1);
  String request = client.readStringUntil('\r');
  client.flush();

  String response;
  int statusCode = 200;

  if (request.indexOf("/LED=ON") != -1) {
    digitalWrite(ledPin, HIGH);
    response = "LED is ON";
  } else if (request.indexOf("/LED=OFF") != -1) {
    digitalWrite(ledPin, LOW);
    response = "LED is OFF";
  } else {
    statusCode = 404;
    response = "Invalid request";
  }

  // api response
  client.printf("HTTP/1.1 %d OK\r\n", statusCode);
  client.println("Content-Type: text/plain");
  client.println("Connection: close");
  client.println();
  client.println(response);

  client.stop();
}
