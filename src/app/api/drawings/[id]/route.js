import { NextResponse } from 'next/server';
import { updateDrawing, deleteDrawing } from '../../../../lib/mongodb.js';
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

    const updateData = { updatedAt: new Date() };
    if (src) updateData.src = src;
    if (alt !== undefined) updateData.alt = alt;

    const result = await updateDrawing(id, updateData);

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Drawing non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
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
    const result = await deleteDrawing(id);

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Drawing non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting drawing:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du drawing' },
      { status: 500 }
    );
  }
}
