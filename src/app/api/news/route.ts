import { NextResponse } from 'next/server'

const CRYPTOPANIC_API_KEY = 'afb6de40dc334fdd5296285f13a421fd8887524d'
const CRYPTOPANIC_API_URL = 'https://cryptopanic.com/api/v1/posts/'

export const runtime = 'edge'

export async function GET() {
    try {
        const response = await fetch(
            `${CRYPTOPANIC_API_URL}?auth_token=${CRYPTOPANIC_API_KEY}&public=true&kind=news`,
            {
                headers: {
                    'Accept': 'application/json',
                },
                next: { revalidate: 300 } // Cache for 5 minutes
            }
        )

        if (!response.ok) {
            throw new Error('Failed to fetch news')
        }

        const data = await response.json()

        // Transform the data to a simpler format
        const news = data.results?.slice(0, 20).map((item: {
            title: string
            url: string
            source: { title: string }
            published_at: string
            currencies?: Array<{ code: string }>
        }) => ({
            title: item.title,
            url: item.url,
            source: item.source?.title || 'Unknown',
            date: new Date(item.published_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }),
            currencies: item.currencies?.map((c) => c.code) || []
        })) || []

        return NextResponse.json({ news })
    } catch (error) {
        console.error('Error fetching news:', error)
        return NextResponse.json({ news: [], error: 'Failed to fetch news' }, { status: 500 })
    }
}
