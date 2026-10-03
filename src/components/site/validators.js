export const isValidPhone = (value) => value.replace(/[^\d]/g, "").length >= 10
export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
