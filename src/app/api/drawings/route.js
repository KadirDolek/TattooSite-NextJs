import { NextResponse } from 'next/server';
import { getDrawings, saveDrawings } from '../../../lib/db.js';
import { requireAdmin } from '../../../lib/middleware.js';

// GET all drawings (public)
export async function GET() {
  try {
    const drawings = getDrawings();
    return NextResponse.json({ drawings });
  } catch (error) {
    console.error('Error fetching drawings:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des drawings' },
      { status: 500 }
    );
  }
}

// POST new drawing (admin only)
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

    const drawings = getDrawings();
    const newDrawing = {
      id: String(Date.now()),
      src,
      alt: alt || '',
      createdAt: new Date().toISOString()
    };

    drawings.push(newDrawing);
    saveDrawings(drawings);

    return NextResponse.json({ drawing: newDrawing }, { status: 201 });
  } catch (error) {
    console.error('Error creating drawing:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du drawing' },
      { status: 500 }
    );
  }
}
