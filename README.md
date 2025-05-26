# 🔧 useInput – Custom React Hook for Form Handling & Validation

`useInput` is a reusable, scalable, and clean custom React hook built for handling input fields with built-in validation logic. It simplifies controlled form inputs and ensures robust user input validation for login, registration, and general form-based components.

---

## 🚀 Features

- ✅ Reusable across all input fields (`name`, `email`, `phone`, etc.)
- ✅ Built-in validation using regex
- ✅ Error tracking and real-time validation
- ✅ Clean separation of concerns for scalable frontend architecture
- ✅ Production-ready UX messages

---

## 🧠 Hook Signature

```js
const { value, error, onChange, onBlur, reset } = useInput(fieldName);
