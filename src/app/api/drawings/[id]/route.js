import { NextResponse } from 'next/server';
import { getDrawings, saveDrawings } from '../../../../lib/db.js';
import { requireAdmin } from '../../../../lib/middleware.js';

// PUT update drawing (admin only)
export async function PUT(request, { params }) {
  const authCheck = await requireAdmin(request);
  if (authCheck instanceof NextResponse) {
    return authCheck;
  }

  try {
    const { id } = await params;
    const { src, alt } = await request.json();

    const drawings = getDrawings();
    const index = drawings.findIndex(d => d.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Drawing non trouvé' },
        { status: 404 }
      );
    }

    drawings[index] = {
      ...drawings[index],
      src: src || drawings[index].src,
      alt: alt !== undefined ? alt : drawings[index].alt,
      updatedAt: new Date().toISOString()
    };

    saveDrawings(drawings);

    return NextResponse.json({ drawing: drawings[index] });
  } catch (error) {
    console.error('Error updating drawing:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du drawing' },
      { status: 500 }
    );
  }
}

// DELETE drawing (admin only)
export async function DELETE(request, { params }) {
  const authCheck = await requireAdmin(request);
  if (authCheck instanceof NextResponse) {
    return authCheck;
  }

  try {
    const { id } = await params;
    const drawings = getDrawings();
    const filteredDrawings = drawings.filter(d => d.id !== id);

    if (filteredDrawings.length === drawings.length) {
      return NextResponse.json(
        { error: 'Drawing non trouvé' },
        { status: 404 }
      );
    }

    saveDrawings(filteredDrawings);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting drawing:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du drawing' },
      { status: 500 }
    );
  }
}
