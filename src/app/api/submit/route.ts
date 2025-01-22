import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  if (data.name && data.email) {
    return NextResponse.json({ message: 'Dados recebidos com sucesso!' });
  }

  return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
}
