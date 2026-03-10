import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
        }),
      }
    )

    if (!res.ok) {
      const text = await res.text()
      console.error(`[subscribe] Beehiiv error ${res.status}:`, text)
      return NextResponse.json(
        { success: false, message: `Beehiiv error ${res.status}: ${text}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[subscribe] Unexpected error:', err)
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
