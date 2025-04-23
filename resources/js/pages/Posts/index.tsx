import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { type Post } from '@/types'; // Ensure Post type is defined in '@/types'
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Posts({ posts }: { posts: Post[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="container ms-auto p-4">
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Blog Posts</h1>

                    <Link href="/posts/create" className="rounded bg-gray-500 px-4 py-1 text-white hover:bg-gray-600">
                        Create Post
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                        <thead>
                            <tr className="bg-neutral-50 dark:bg-neutral-700">
                                <th className="px-4 py-2"> ID</th>
                                <th className="px-4 py-2"> Title</th>
                                <th className="px-4 py-2"> Content</th>
                                <th className="px-4 py-2"> Created At</th>
                                <th className="px-4 py-2"> Updated At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post: Post) => (
                                <tr key={post.id} className="border-b dark:border-neutral-100 dark:bg-neutral-800">
                                    <td className='px-4 py-2'>{post.id}</td>
                                    <td className='px-4 py-2'>{post.title}</td>
                                    <td className='px-4 py-2'>{post.content}</td>
                                    <td className='px-4 py-2'>{post.created_at}</td>
                                    <td className='px-4 py-2'>{post.updated_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
