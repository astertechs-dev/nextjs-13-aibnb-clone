import { NextResponse } from "next/server";

// Next.js 13 より App Router を使用したルーティングに変更したため、APIを試験的に作成
// 確認時は、エンドポイントを "/api/hello" としてAPIをコールする。 
export async function GET() {
  return NextResponse.json({ data:"Hello Next.js 13 !!!" });
}
