import { NextResponse } from 'next/server';
    import path from 'node:path';
    import posts from './posts.json';

    export async function GET() {
      try {
        return NextResponse.json(posts);
      } catch (error) {
        console.error('Server error in blog API:', error);
        let errorMessage = 'An unknown error occurred';
        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        }
        return NextResponse.json(
          { error: 'Failed to fetch blog posts', details: errorMessage },
          { status: 500 }
        );
      }
    }
