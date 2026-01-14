import { NextResponse } from 'next/server';
import { getDessins, saveDessins } from '../../../lib/db.js';
import { requireAdmin } from '../../../lib/middleware.js';

// GET all dessins (public)
export async function GET() {
  try {
    const dessins = getDessins();
    return NextResponse.json({ dessins });
  } catch (error) {
    console.error('Error fetching dessins:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des dessins' },
      { status: 500 }
    );
  }
}

// POST new dessin (admin only)
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

    const dessins = getDessins();
    const newDessin = {
      id: String(Date.now()),
      src,
      alt: alt || '',
      createdAt: new Date().toISOString()
    };

    dessins.push(newDessin);
    saveDessins(dessins);

    return NextResponse.json({ dessin: newDessin }, { status: 201 });
  } catch (error) {
    console.error('Error creating dessin:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du dessin' },
      { status: 500 }
    );
  }
}
