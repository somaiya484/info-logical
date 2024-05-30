"use client"
// src/app/[id]/page.jsx
import DataVisualization from '../../components/DataVisualization';
import content from '../../alldata/content';

export async function generateStaticParams() {
    return content.map((item) => ({
        id: item.id,
    }));
}

export default function Page({ params }) {
    const pageContent = content.find((item) => item.id === params.id);
    return pageContent ? <DataVisualization content={pageContent} /> : <div>Page not found</div>;
}
