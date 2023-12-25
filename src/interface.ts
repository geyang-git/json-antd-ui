type JsonValue = string | number | boolean | null | JsonArray | JsonObject;

interface JsonArray extends Array<JsonValue> {}

export interface JsonObject {
  [key: string]: JsonValue;
}
