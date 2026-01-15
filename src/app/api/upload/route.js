import { NextResponse } from 'next/server';
import { uploadImage } from '../../../lib/cloudinary.js';
import { requireAdmin } from '../../../lib/middleware.js';

export async function POST(request) {
  const authCheck = await requireAdmin(request);
  if (authCheck instanceof NextResponse) {
    return authCheck;
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const category = formData.get('category') || 'general';

    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier fourni' },
        { status: 400 }
      );
    }

    const result = await uploadImage(file, `baabyalish/${category}`);

    return NextResponse.json({
      success: true,
      path: result.secure_url,
      publicId: result.public_id
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'upload du fichier' },
      { status: 500 }
    );
  }
}
