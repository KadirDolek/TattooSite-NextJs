import { NextResponse } from 'next/server';
import { getTokenFromRequest, verifyToken } from './auth.js';

export async function requireAuth(request) {
  const token = getTokenFromRequest(request);

  if (!token) {
    return NextResponse.json(
      { error: 'Non authentifié' },
      { status: 401 }
    );
  }

  const payload = await verifyToken(token);

  if (!payload) {
    return NextResponse.json(
      { error: 'Token invalide' },
      { status: 401 }
    );
  }

  return payload;
}

export async function requireAdmin(request) {
  const payload = await requireAuth(request);

  if (payload instanceof NextResponse) {
    return payload;
  }

  if (payload.role !== 'admin') {
    return NextResponse.json(
      { error: 'Accès réservé aux administrateurs' },
      { status: 403 }
    );
  }

  return payload;
}
