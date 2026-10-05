import { inviteCodes } from '../data/site.js'

const STORAGE_KEY = 'soverath.invite'

function resolveCodes() {
  const envCodes = import.meta.env.VITE_INVITE_CODE
  if (envCodes && envCodes.trim()) {
    return envCodes
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean)
  }
  return inviteCodes
}

export function normalize(value) {
  return String(value || '')
    .trim()
    .toUpperCase()
}

export function validateInviteCode(input) {
  const candidate = normalize(input)
  if (!candidate) return false
  return resolveCodes().some((code) => normalize(code) === candidate)
}

export function grantAccess(code) {
  try {
    sessionStorage.setItem(STORAGE_KEY, normalize(code))
  } catch {
    /* almacenamiento no disponible */
  }
}

export function hasAccess() {
  try {
    return Boolean(sessionStorage.getItem(STORAGE_KEY))
  } catch {
    return false
  }
}

export function clearAccess() {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    /* almacenamiento no disponible */
  }
}
