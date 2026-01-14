import { NextResponse } from 'next/server';
import { getTattoos, saveTattoos } from '../../../../lib/db.js';
import { requireAdmin } from '../../../../lib/middleware.js';

// PUT update tattoo (admin only)
export async function PUT(request, { params }) {
  const authCheck = await requireAdmin(request);
  if (authCheck instanceof NextResponse) {
    return authCheck;
  }

  try {
    const { id } = await params;
    const { src, alt } = await request.json();

    const tattoos = getTattoos();
    const index = tattoos.findIndex(t => t.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Tattoo non trouvé' },
        { status: 404 }
      );
    }

    tattoos[index] = {
      ...tattoos[index],
      src: src || tattoos[index].src,
      alt: alt !== undefined ? alt : tattoos[index].alt,
      updatedAt: new Date().toISOString()
    };

    saveTattoos(tattoos);

    return NextResponse.json({ tattoo: tattoos[index] });
  } catch (error) {
    console.error('Error updating tattoo:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du tattoo' },
      { status: 500 }
    );
  }
}

// DELETE tattoo (admin only)
export async function DELETE(request, { params }) {
  const authCheck = await requireAdmin(request);
  if (authCheck instanceof NextResponse) {
    return authCheck;
  }

  try {
    const { id } = await params;
    const tattoos = getTattoos();
    const filteredTattoos = tattoos.filter(t => t.id !== id);

    if (filteredTattoos.length === tattoos.length) {
      return NextResponse.json(
        { error: 'Tattoo non trouvé' },
        { status: 404 }
      );
    }

    saveTattoos(filteredTattoos);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting tattoo:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du tattoo' },
      { status: 500 }
    );
  }
}
