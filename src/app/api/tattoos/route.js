import { NextResponse } from 'next/server';
import { getTattoos, saveTattoos } from '../../../lib/db.js';
import { requireAdmin } from '../../../lib/middleware.js';

// GET all tattoos (public)
export async function GET() {
  try {
    const tattoos = getTattoos();
    return NextResponse.json({ tattoos });
  } catch (error) {
    console.error('Error fetching tattoos:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des tattoos' },
      { status: 500 }
    );
  }
}

// POST new tattoo (admin only)
export async function POST(request) {
  const authCheck = await requireAdmin(request);
  if (authCheck instanceof NextResponse) {
    return authCheck;
  }

  try {
    const { src, alt } = await request.json();

    if (!src) {
      return NextResponse.json(
        { error: 'L\'URL de l\'image est requise' },
        { status: 400 }
      );
    }

    const tattoos = getTattoos();
    const newTattoo = {
      id: String(Date.now()),
      src,
      alt: alt || '',
      createdAt: new Date().toISOString()
    };

    tattoos.push(newTattoo);
    saveTattoos(tattoos);

    return NextResponse.json({ tattoo: newTattoo }, { status: 201 });
  } catch (error) {
    console.error('Error creating tattoo:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du tattoo' },
      { status: 500 }
    );
  }
}
