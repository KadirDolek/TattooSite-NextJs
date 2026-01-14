import { NextResponse } from 'next/server';
import { getDessins, saveDessins } from '../../../../lib/db.js';
import { requireAdmin } from '../../../../lib/middleware.js';

// PUT update dessin (admin only)
export async function PUT(request, { params }) {
  const authCheck = await requireAdmin(request);
  if (authCheck instanceof NextResponse) {
    return authCheck;
  }

  try {
    const { id } = await params;
    const { src, alt } = await request.json();

    const dessins = getDessins();
    const index = dessins.findIndex(d => d.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Dessin non trouvé' },
        { status: 404 }
      );
    }

    dessins[index] = {
      ...dessins[index],
      src: src || dessins[index].src,
      alt: alt !== undefined ? alt : dessins[index].alt,
      updatedAt: new Date().toISOString()
    };

    saveDessins(dessins);

    return NextResponse.json({ dessin: dessins[index] });
  } catch (error) {
    console.error('Error updating dessin:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du dessin' },
      { status: 500 }
    );
  }
}

// DELETE dessin (admin only)
export async function DELETE(request, { params }) {
  const authCheck = await requireAdmin(request);
  if (authCheck instanceof NextResponse) {
    return authCheck;
  }

  try {
    const { id } = await params;
    const dessins = getDessins();
    const filteredDessins = dessins.filter(d => d.id !== id);

    if (filteredDessins.length === dessins.length) {
      return NextResponse.json(
        { error: 'Dessin non trouvé' },
        { status: 404 }
      );
    }

    saveDessins(filteredDessins);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting dessin:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du dessin' },
      { status: 500 }
    );
  }
}
