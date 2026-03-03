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

    // ---------------------------------------------------------------
    // TODO: Connect your email marketing platform here.
    //
    // ConvertKit / Kit example:
    //   const res = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email }),
    //   })
    //
    // Mailchimp example:
    //   const res = await fetch(`https://<dc>.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    //   })
    //
    // Beehiiv example:
    //   const res = await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`, {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, reactivate_existing: false, send_welcome_email: true }),
    //   })
    // ---------------------------------------------------------------

    console.log(`[subscribe] New signup: ${email}`)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
